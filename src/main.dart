import 'dart:ffi';
import 'dart:math' as Math;
import 'dart:async';

import 'package:dcanvas/dcanvas.dart';
import 'package:dcanvas/backend/Window.dart';

import 'package:drawlite/drawlite.dart'
    show Color, Drawlite, Event, KeyboardEvent, MouseEvent, QuitEvent, DLImage;
import 'package:drawlite/dl.dart';
import 'package:drawlite/drawlite-touch.dart';

import './icons.dart';
import './Slider.dart';
import './NumberBox.dart';  

import './welcome-menu.dart';

late Drawlite dl;

late SDLWindow window;

double appScale = 1.0;
late int width;
late int height;
late double lWidth;
late double lHeight;

late Slider thicknessSlider;
late Slider opacitySlider;
late NumberBox thicknessNumberBox;
late NumberBox opacityNumberBox;

enum Scene {
    Welcome,
    Draw
}

Scene scene = Scene.Draw;

const SIDEBAR_WIDTH = 264;

bool loadedMarkerGraphics = false;

int selectedMarker = 0;

List<Color> palette = [
    color(255),
    color(195),
    color(88),
    color(0),
    color(136, 0, 27),
    color(236, 28, 36),
    color(255, 127, 39),
    color(255, 202, 24),
    color(253, 236, 166),
    color(255, 242, 0),
    color(196, 255, 14),
    color(14, 209, 69),
    color(140, 255, 251),
    color(0, 168, 243),
    color(63, 72, 204),
    color(184, 61, 186),
    color(255, 174, 200),
    color(185, 122, 86)
];
Color currColor = palette[14];

late DLImage paintCanvas;

class Stroke {
    late Color color;
    late double weight;
    List<double> points = [];
    Stroke(this.color, this.weight);
}

Stroke? currDrawStroke = null;
void renderBrushPath() {
    final drawStroke = currDrawStroke!;
    stroke(drawStroke.color);
    strokeWeight(drawStroke.weight);
    final path = drawStroke.points;
    if (path.length == 2) {
        point(path[0], path[1]);
    } else {
        for (var i = 0; i < path.length - 2; i += 2) {
            // if (i+3 < path.length && (
            //     path[i] > 5-path[1]/2 && path[i] < 5+canvasW+path[1]/2 && path[i+1] > 148-path[1]/2 && path[i+1] < 148+canvasH+path[1]/2 || 
            //     path[i+2] > 5-path[1]/2 && path[i+2] < 5+canvasW+path[1]/2 && path[i+3] > 148-path[1]/2 && path[i+3] < 148+canvasH+path[1]/2
            // )){
                line(path[i], path[i+1], path[i+2], path[i+3]);
            // }
        }
    }
    
}

DLImage? sidbarCacheImg = null;
final sidebarX = lWidth - SIDEBAR_WIDTH;
final sidebarY = 48;
final canvasAreaY = 48 * 2 - 1;
void renderSideBar() {
    final mouseX = get.mouseX;
    final mouseY = get.mouseY;

    // brushes
    if (!loadedMarkerGraphics) {
        loadMarkerGradient();
        loadCaligraphyPen();
        loadOilBrush();
        loadPixelPen();
        loadPencil();
        loadCrayon();
        loadSprayCan();
        loadPaintCan();
        loadedMarkerGraphics = true;
    }

    // gray background box
    noStroke();
    rectMode(CORNER);
    fill(240, 242, 243);
    rect(sidebarX, sidebarY, SIDEBAR_WIDTH, lHeight - 48);
    
    List<void Function(num, num, num)> renderMarkFns = [
        marker, caligraphyPen, oilBrush, watercolor, pixelPen,
        pencil, eraser, crayon, sprayCan, paintCan
    ];
    for (var xi = 0; xi < 5; xi++) {
        for (var yi = 0; yi < 2; yi++) {
            final xPos = sidebarX + 25 + xi * (40 + 4);
            final yPos = sidebarY + 61 + yi * (40 + 14);
            var idx = (xi + yi * 5);

            if (point_rect(mouseX, mouseY, xPos, yPos, 40, 40)) {
                fill(250);
                rectMode(CORNER);
                noStroke();
                rect(xPos, yPos, 40, 40);

                strokeWeight(1);
                stroke(5, 100, 185);
                line(xPos, yPos, xPos, yPos + 40);
                line(xPos + 40, yPos, xPos + 40, yPos + 40);
                line(xPos, yPos, xPos + 40, yPos);
                line(xPos, yPos + 40, xPos + 40, yPos + 40);

                if (get.mouseIsPressed) {
                    selectedMarker = idx;
                }
            } 
            if (selectedMarker == idx) {
                fill(5, 100, 185);
                rectMode(CORNER);
                noStroke();
                rect(xPos, yPos, 40, 40);
            }
            
            idx = constrain(idx, 0, renderMarkFns.length-1).toInt();
            renderMarkFns[idx](xPos + 20, yPos + 20, 0.72);
        }
    }
    rectMode(CORNER);

    // marker label
    font("Open Sans", 16);
    fill(0, 100, 180);
    textAlign(BASELINE);
    text("Marker", sidebarX + 25, sidebarY + 35);

    // sliders
    font("Open Sans", 12);
    textAlign(BASELINE);
    fill(0);
    text("Thickness", sidebarX + 26, 300);
    text("Opacity", sidebarX + 26, 380);

    thicknessSlider.x = sidebarX + 24;
    opacitySlider.x = sidebarX + 24;
    thicknessSlider.render();
    opacitySlider.render();

    thicknessNumberBox.x = sidebarX + 154;
    thicknessNumberBox.value = thicknessSlider.value.round();
    opacityNumberBox.x = sidebarX + 154;
    thicknessNumberBox.render();
    opacityNumberBox.render();

    // divider
    noStroke();
    fill(225);
    rect(sidebarX + 26, 455, 211, 2);
    fill(250);
    rect(sidebarX + 26, 457, 211, 1);

    // color
    stroke(220);
    strokeWeight(1);
    fill(currColor);
    rect(sidebarX + 24, lHeight - 239, 140, 44);
    fill(245);
    rect(sidebarX + 24 + 140 + 5, lHeight - 239, 72, 44);
    var touchingColor = point_rect(mouseX / appScale, mouseY / appScale, sidebarX + 24, 534, 140, 44);
    if (touchingColor) {
        noFill();
        stroke(60, 100, 200);
        rect(sidebarX + 24-1, lHeight - 239-1, 140+2, 44+2);
    }
    var touchingPicker = point_rect(mouseX / appScale, mouseY / appScale, sidebarX + 24 + 140 + 5, 534, 72, 44);
    if (touchingPicker) {
        fill(255);
        rect(sidebarX + 24 + 140 + 5, lHeight - 239, 72, 44);
    }

    // palette
    for (var i = 0; i < palette.length; i++) {
        var x = sidebarX + 24 + (i % 6) * 36;
        var y = lHeight - 177 + floor(i / 6) * 36;
        noStroke();
        fill(palette[i]);
        rect(x, y, 36, 36);

        var touching3 = point_rect(mouseX / appScale, mouseY / appScale, x, y, 36, 36);
        if (touching3) {
            noFill();
            stroke(0, 125);
            rect(x, y, 36-1, 36-1);
            stroke(255, 125);
            rect(x+1, y+1, 36-3, 36-3);
            if (get.mouseIsPressed) {
                currColor = palette[i];
            }
        }
    }
    stroke(0, 50);
    noFill();
    strokeWeight(1);
    rect(sidebarX + 24, lHeight - 177, 36*6, 36*3);
}

void draw() {
    // check for events
    window.pollInput();

    final mouseX = get.mouseX;
    final mouseY = get.mouseY;

    pushMatrix();
        scale(appScale);

        // canvas area
        fill(190, 190, 190);
        rect(0, canvasAreaY, lWidth - SIDEBAR_WIDTH, lHeight - canvasAreaY);

        // canvas
        final canvasX = (sidebarX / 2 - paintCanvas.width / 2).round();
        final canvasY = (canvasAreaY + (height - canvasAreaY) / 2 - paintCanvas.height / 2).round();
        image(paintCanvas, canvasX, canvasY);
        if (currDrawStroke != null) {
            renderBrushPath();
        }

        fill(255, 0, 0, 100);
        noStroke();
        // top bar
        fill(45, 50, 55);
        rect(0, 0, lWidth, 48);

        // 2nd row of top bar
        fill(221, 221, 223);
        rect(0, 48, lWidth - SIDEBAR_WIDTH, 48);

        // gradient
        for (var i = 0; i <= 10; i++) {
            var m = map(i, 0, 10, 30, 0);
            fill(0, 0, 0, m);
            rect(0, 48 + 48 + i, sidebarX - i, 1);
            rect(sidebarX - 1 - i, 48 + 48 + i, 1, lHeight - 48*2 - i);
        }

        // top row buttons
        {
            font("Open Sans", 11);
            noStroke();
            var touching = point_rect(mouseX / appScale, mouseY / appScale, 0, 0, 68, 48);
            if (touching) {
                fill(255, 255, 255, 25);
            } else {
                noFill();
            }
            rect(0, 0, 68, 48);
            strokeWeight(2);
            renderIcon(Icon.menu, 29, 16, 0.5, 0, 255);
            fill(255, 255, 255);
            textAlign(CENTER);
            text("Menu", 34, 40);
            
            List<String> labels = [
                "Brushes",
                "2D shapes",
                "3D shapes",
                "Stickers",
                "Text",
                "Effects",
                "Canvas",
                "3D library"
            ];
            List<Icon> labelsIcons = [
                Icon.brushes,
                Icon.shapes2d,
                Icon.shapes3d,
                Icon.stickers,
                Icon.text,
                Icon.effects,
                Icon.canvas,
                Icon.library3d
            ];
            var btnX = (68 + (lWidth - (4*68 + 48 + 8*68))) / 2;
            textAlign(CENTER);
            for (var i = 0; i < labels.length; i++) {
                var touching2 = point_rect(mouseX / appScale, mouseY / appScale, btnX, 0, 68, 48);
                if (touching2) {
                    fill(255, 255, 255, 25);
                } else {
                    noFill();
                }
                noStroke();
                rectMode(CORNER);
                rect(btnX, 0, 68, 48);
                
                fill(255, 255, 255);
                text(labels[i], btnX + 68/2, 40);

                strokeWeight(2);
                renderIcon(labelsIcons[i], btnX + 34, 16, 0.45, 0, 255);
                
                btnX += 68;
            }
            
            List<String> labels2 = [
                "Paste",
                "Undo",
                "History",
                "Redo"
            ];
            List<Icon> labels2Icons = [
                Icon.OPpaste,
                Icon.undo,
                Icon.history,
                Icon.redo
            ];
            for (var i = 0; i < labels2.length; i++) {
                var rx = lWidth - 48 - 68*(i+1);
                noStroke();
                rectMode(CORNER);
                var touching2 = point_rect(mouseX / appScale, mouseY / appScale, rx, 0, 68, 48);
                if (touching2) {
                    fill(255, 255, 255, 25);
                } else {
                    noFill();
                }
                rect(rx, 0, 68, 48);
                
                fill(255, 255, 255);
                text(labels2[3-i], rx + 68/2, 40);

                strokeWeight(2);
                rectMode(CENTER);
                renderIcon(labels2Icons[3-i], rx + 34, 16, 0.5, 0, 255);
                rectMode(CORNER);
            }

            var touching3 = point_rect(mouseX / appScale, mouseY / appScale, lWidth - 48, 0, 48, 48);
            if (touching3) {
                fill(255, 255, 255, 25);
            } else {
                noFill();
            }
            noStroke();
            rect(lWidth - 48, 0, 48, 48);
            stroke(255, 255, 255);
            strokeWeight(2);
            arrow(lWidth - 26, 24, 0.7, 0);
        }

        // 2nd row labels
        {
            font("Open Sans", 12);
            
            List<String> labels = [
                "Select",
                "Crop",
                "Magic Select"
            ];
            List<Icon> labelsIcons = [
                Icon.select,
                Icon.crop,
                Icon.magicSelect
            ];
            var btnX = 0.0;
            textAlign(CENTER);
            for (var i = 0; i < labels.length; i++) {
                var txtWidth = textWidth(labels[i]) + 71;
                
                var touching3 = point_rect(mouseX / appScale, mouseY / appScale, btnX, 48, txtWidth, 48);
                if (touching3) {
                    fill(0, 0, 0, 20);
                } else {
                    noFill();
                }
                noStroke();
                rectMode(CORNER);
                rect(btnX, 48, txtWidth, 48);
                
                fill(0, 0, 0);
                text(labels[i], btnX + txtWidth/2 + 12, 76);

                renderIcon(labelsIcons[i], btnX + 23, 70, 0.65, 0, 0);
                
                btnX += txtWidth;
            }
            rectMode(CORNER);
        }

        if (mouseX >= sidebarX || sidbarCacheImg == null) {
            renderSideBar();
            if (sidbarCacheImg == null || get.mouseIsPressed) {
                sidbarCacheImg = snip(sidebarX, sidebarY, SIDEBAR_WIDTH, lHeight - 48);
            }
        } else {
            image(sidbarCacheImg!, sidebarX, sidebarY);
        }


        // welcome
        if (scene == Scene.Welcome) {
            welcomeMenu();
        }
    popMatrix();

    textAlign(BASELINE);
    fill(0);
    font("monospace", 16);
    text("FPS: ${frameRate().round()}", 3, height - 4);

    window.render();

    if (!running) {
        noLoop();
        window.free();
    }
}

void mousePressed(MouseEvent event) {
    currDrawStroke = Stroke(currColor, thicknessSlider.value);
}

void mouseDragged(MouseEvent event) {
    var points = currDrawStroke!.points;
    points.add(get.mouseX.toDouble());
    points.add(get.mouseY.toDouble());
}

void mouseReleased(MouseEvent event) {
    final mouseX = get.mouseX;
    final mouseY = get.mouseY;

    if (scene == Scene.Welcome) {
        for (var i = 0; i < 3; i++) {
            var rx = lWidth / 2 - 101;
            var ry = 165 + i * 169;
            var touching = point_rect(mouseX / appScale, mouseY / appScale, rx, ry, 202, 144);
            if (touching) {
                scene = Scene.Draw;
                if (i == 0) {

                }
            }
        }
    }

    final canvasX = (sidebarX / 2 - paintCanvas.width / 2).round();
    final canvasY = (canvasAreaY + (height - canvasAreaY) / 2 - paintCanvas.height / 2).round();
    paintCanvas = snip(canvasX, canvasY, paintCanvas.width, paintCanvas.height);
    currDrawStroke = null;
}

var running = true;
void myEventHandler(Event event) {
    if (event is MouseEvent) {
        if (event.type == EventType.MouseDown) {
            dl.eventCallbacks.mousedown(event);
        } else if (event.type == EventType.MouseUp) {
            dl.eventCallbacks.mouseup(event);
        } else if (event.type == EventType.MouseMove) {
            dl.eventCallbacks.mousemove(event);
        }
    } else if (event is KeyboardEvent) {
        if (event.type == EventType.KeyDown) {
            dl.eventCallbacks.keydown(event);
        } else if (event.type == EventType.KeyUp) {
            dl.eventCallbacks.keyup(event);
        }
        
        if (event.keyCode == Key.Escape) {
            running = false;
        }
    } else if (event is QuitEvent) {
        running = false;
    }
}

Future<void> main() async {
    width = (1241 * appScale).round();
    height = (804 * appScale).round();
    // width = (1023 * appScale).round();
    // height = (768 * appScale).round();

    var canvas = Canvas(width, height);
    dl = Drawlite(canvas);

    initSDL(SDL_INIT_EVERYTHING);
    window = SDLWindow(
        title: "Untitled - LibrePaint 3D",
        width: canvas.width,
        height: canvas.height,
        flagsList: [SDL_WindowFlags.SDL_WINDOW_SHOWN]
    );
    window.setCanvas(canvas);
    window.eventHandler = myEventHandler;

    fill = dl.fill;
    noFill = dl.noFill;
    stroke = dl.stroke;
    noStroke = dl.noStroke;
    point = dl.point;
    rect = dl.rect;
    rectMode = dl.rectMode;
    map = dl.map;
    pushMatrix = dl.pushMatrix;
    popMatrix = dl.popMatrix;
    scale = dl.scale;
    text = dl.text;
    textAlign = dl.textAlign;
    font = dl.font;
    strokeWeight = dl.strokeWeight;
    textWidth = dl.textWidth;
    color = dl.color;
    floor = dl.floor;
    get = dl.get;
    CENTER = dl.CENTER;
    CORNER = dl.CORNER;
    BASELINE = dl.BASELINE;
    CLOSE = dl.CLOSE;
    translate = dl.translate;
    rotate = dl.rotate;
    radians = dl.radians;
    random = dl.random;
    sin = dl.sin;
    cos = dl.cos;
    constrain = dl.constrain;
    line = dl.line;
    arc = dl.arc;
    beginShape = dl.beginShape;
    vertex = dl.vertex;
    curveVertex = dl.curveVertex;
    bezierVertex = dl.bezierVertex;
    endShape = dl.endShape;
    ellipse = dl.ellipse;
    triangle = dl.triangle;
    quad = dl.quad;
    background = dl.background;
    colorMode = dl.colorMode;
    noLoop = dl.noLoop;
    textAscent = dl.textAscent;
    textDescent = dl.textDescent;
    lerpColor = dl.lerpColor;
    snip = dl.snip;
    image = dl.image;
    frameRate = dl.frameRate;
    imageMode = dl.imageMode;

    background(255);
    paintCanvas = snip(0, 0, 500, 400);

    lWidth = width / appScale;
    lHeight = height / appScale;

    thicknessSlider = new Slider(lWidth - SIDEBAR_WIDTH + 24, 328, 1, 100, 5);
    opacitySlider = new Slider(lHeight - SIDEBAR_WIDTH + 24, 328+80, 1, 100, 50);

    thicknessNumberBox = new NumberBox(
        lWidth - SIDEBAR_WIDTH + 154, 277, 85, 32,
        5, "px"
    );
    opacityNumberBox = new NumberBox(
        lWidth - SIDEBAR_WIDTH + 154, 277+80, 85, 32,
        100, "%"
    );

    loadMenuImage();
    loadOPpasteGradient();
    loadMagicSelectGradient();

    frameRate(120);
    dl.draw = draw;  
    dl.mousePressed = mousePressed;
    dl.mouseDragged = mouseDragged;
    dl.mouseReleased = mouseReleased;
}
