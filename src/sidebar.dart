import 'package:drawlite/drawlite.dart'
    show Color, Drawlite, Event, KeyboardEvent, MouseEvent, QuitEvent, DLImage;
import 'package:drawlite/dl.dart';
import 'package:drawlite/drawlite-touch.dart';

import './icons.dart';
import './brushes.dart';
import './Slider.dart';
import './NumberBox.dart';

import './app-state.dart';
import 'ColorPicker.dart';

List<String> sidebarPageLabels = [
    "Brushes",
    "2D shapes",
    "3D shapes",
    "Stickers",
    "Text",
    "Effects",
    "Canvas",
    "3D library"
];

DLImage? sidebarCacheImg = null;

String sidebarTopLabel = "Marker";

BrushesPage brushesPage = new BrushesPage();

List<SidebarPage> sidebarPages = [
    brushesPage
];

SidebarPage sidebarPage = sidebarPages[0];

final sidebarX = lWidth - SIDEBAR_WIDTH;
final sidebarY = 48;

void setSidebarPage(int pageIdx) {
    sidebarPage = sidebarPages[pageIdx];
    
    if (pageIdx == 0){
        sidebarTopLabel = brushNames[selectedMarker];
    } else {
        sidebarTopLabel = sidebarPageLabels[pageIdx];
    }

    sidebarCacheImg = null;
}

void renderSideBar() {
    final mouseX = get.mouseX;
    final mouseY = get.mouseY;

    if (!sidebarPage.initialized) {
        sidebarPage.init();
    }

    // gray background box
    noStroke();
    rectMode(CORNER);
    fill(240);
    rect(sidebarX, sidebarY, SIDEBAR_WIDTH, lHeight - 48);

    // sidebar page label
    font("Open Sans", 16);
    fill(0, 100, 180);
    textAlign(BASELINE);
    text(sidebarTopLabel, sidebarX + 25, sidebarY + 35);
    
    sidebarPage.render(mouseX, mouseY);
}

class SidebarPage {
    bool initialized = false;

    void init() {
        throw "SidebarPage.init must be implemented by child";   
    }

    void onClick() {

    }

    void render(int mouseX, int mouseY) {
        throw "SidebarPage.render must be implemented by child";
    }
}

class BrushesPage extends SidebarPage {
    bool loadedMarkerGraphics = false;

    late Slider thicknessSlider;
    late NumberBox thicknessNumberBox;

    late Slider opacitySlider;
    late NumberBox opacityNumberBox;

    void init() {
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

        thicknessSlider = new Slider(lWidth - SIDEBAR_WIDTH + 24, 328, 1, 100, 5);
        thicknessNumberBox = new NumberBox(
            lWidth - SIDEBAR_WIDTH + 154, 277, 85, 32,
            5, "px"
        );

        opacitySlider = new Slider(lHeight - SIDEBAR_WIDTH + 24, 328+80, 1, 100, 50);
        opacityNumberBox = new NumberBox(
            lWidth - SIDEBAR_WIDTH + 154, 277+80, 85, 32,
            100, "%"
        );

        initialized = true;
    }

    void onClick() {
        final mouseX = get.mouseX;
        final mouseY = get.mouseY;

        // change of brush
        for (var xi = 0; xi < 5; xi++) {
            for (var yi = 0; yi < 2; yi++) {
                final xPos = sidebarX + 25 + xi * (40 + 4);
                final yPos = sidebarY + 61 + yi * (40 + 14);
                var idx = (xi + yi * 5);

                if (point_rect(mouseX, mouseY, xPos, yPos, 40, 40)) {
                    selectedMarker = idx;
                    sidebarTopLabel = brushNames[selectedMarker];
                    return;
                }
            }
        }

        // change of color from main palette
        for (var i = 0; i < brushColors.length; i++) {
            final x = sidebarX + 24 + (i % 6) * 36;
            final y = lHeight - 177 + floor(i / 6) * 36;

            if (point_rect(mouseX / appScale, mouseY / appScale, x, y, 36, 36)) {
                currColor = brushColors[i];
            }
        }

        final addClrBtnX = sidebarX + 24;
        final addClrBtnY = lHeight - 59;
        final addClrBtnWidth = SIDEBAR_WIDTH - 24*2;

        // change of color from custom palette
        for (int i = 0; i < customColors.length; i++) {
            if (point_rect(get.mouseX, get.mouseY, addClrBtnX + i*36, addClrBtnY, 36, 36)) {
                // select color
                if (get.mouseButton == LEFT) {
                    currColor = customColors[i];
                }
                // edit color
                else if (get.mouseButton == RIGHT) {
                    colorPicker = new ColorPicker(i);
                }
            }
        }

        if (colorPicker == null) {
            // create custom color when none exist
            if (customColors.isEmpty && point_rect(get.mouseX, get.mouseY, addClrBtnX, addClrBtnY, addClrBtnWidth, 36)) {
                colorPicker = new ColorPicker(-1);
            } 
            // create custom color when some exist
            else if (customColors.length < 6 && point_rect(get.mouseX, get.mouseY, addClrBtnX + customColors.length*36, addClrBtnY, 36, 36)) {
                colorPicker = new ColorPicker(-1);
            }
        }
    }

    void render(int mouseX, int mouseY) {
        List<void Function(num, num, num)> renderMarkFns = [
            marker, caligraphyPen, oilBrush, watercolor, pixelPen,
            pencil, eraser, crayon, sprayCan, paintCan
        ];

        // render brush icons
        for (var xi = 0; xi < 5; xi++) {
            for (var yi = 0; yi < 2; yi++) {
                final xPos = sidebarX + 25 + xi * (40 + 4);
                final yPos = sidebarY + 61 + yi * (40 + 14);
                var idx = (xi + yi * 5);

                // background box
                if (selectedMarker == idx) {
                    fill(5, 100, 185);
                    rectMode(CORNER);
                    noStroke();
                    rect(xPos, yPos, 40, 40);
                }
                
                idx = constrain(idx, 0, renderMarkFns.length-1).toInt();
                renderMarkFns[idx](xPos + 20, yPos + 20, 0.72);

                // hide bleeding from brush icon
                rectMode(CORNER);
                noStroke();
                fill(240);
                rect(xPos, yPos + 40, 40, 2);

                // hover box
                if (point_rect(mouseX, mouseY, xPos, yPos, 40, 40)) {
                    strokeWeight(1);
                    stroke(5, 100, 185);
                    line(xPos, yPos, xPos, yPos + 40);
                    line(xPos + 40, yPos, xPos + 40, yPos + 40);
                    line(xPos, yPos, xPos + 40, yPos);
                    line(xPos, yPos + 40, xPos + 40, yPos + 40);
                }
            }
        }
        rectMode(CORNER);

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
        final colorBoxesY = lHeight - 239;
        final colorPreviewX = sidebarX + 24;
        final colorPickerX = colorPreviewX + 140 + 5;
        stroke(220);
        strokeWeight(1);
        fill(currColor);
        rect(colorPreviewX, colorBoxesY, 140, 44);
        fill(245);
        rect(colorPickerX, colorBoxesY, 72, 44);
        var touchingColor = point_rect(mouseX / appScale, mouseY / appScale, colorPreviewX, colorBoxesY, 140, 44);
        if (touchingColor) {
            noFill();
            stroke(60, 100, 200);
            rect(colorPreviewX-1, colorBoxesY-1, 140+2, 44+2);
        }
        var touchingPicker = point_rect(mouseX / appScale, mouseY / appScale, colorPickerX, colorBoxesY, 72, 44);
        if (touchingPicker) {
            fill(255);
            rect(colorPickerX, colorBoxesY, 72, 44);
        }

        // palette
        for (var i = 0; i < brushColors.length; i++) {
            final x = sidebarX + 24 + (i % 6) * 36;
            final y = lHeight - 177 + floor(i / 6) * 36;
            noStroke();
            fill(brushColors[i]);
            rect(x, y, 36, 36);

            final touchingPaletteSquare = point_rect(mouseX / appScale, mouseY / appScale, x, y, 36, 36);
            if (touchingPaletteSquare) {
                noFill();
                stroke(0, 125);
                rect(x, y, 36-1, 36-1);
                stroke(255, 125);
                rect(x+1, y+1, 36-3, 36-3);
            }
        }
        stroke(0, 50);
        noFill();
        strokeWeight(1);
        rect(sidebarX + 24, lHeight - 177, 36*6, 36*3);

        // custom colors
        final addClrBtnX = sidebarX + 24;
        final addClrBtnY = lHeight - 60;
        final addClrBtnWidth = SIDEBAR_WIDTH - 24*2;

        // user hasn't created any custom colors
        if (customColors.isEmpty) {
            if (point_rect(get.mouseX, get.mouseY, addClrBtnX, addClrBtnY, addClrBtnWidth, 36)) {
                fill(0, 100, 180);
            } else {
                fill(0);
            }
            textAlign(LEFT, CENTER);
            textSize(30);
            text("+", addClrBtnX + 62, addClrBtnY + 36/2);
            textSize(14);
            text("Add color", addClrBtnX + 90, addClrBtnY + 36/2);
        } else {
            // custom color squares
            for (int i = 0; i < customColors.length; i++) {
                final clr = customColors[i];
                noStroke();
                fill(clr);
                rect(addClrBtnX + i*36, addClrBtnY, 36, 36);
                
                if (point_rect(get.mouseX, get.mouseY, addClrBtnX + i*36, addClrBtnY, 36, 36)) {
                    noFill();
                    stroke(0, 125);
                    rect(addClrBtnX + i*36 + 1, addClrBtnY + 1, 36 - 2, 36 - 2);
                    stroke(255, 125);
                    rect(addClrBtnX + i*36 + 2, addClrBtnY + 2, 36 - 4, 36 - 4);
                }
            }

            // new color button
            // six is the max # of custom colors
            if (customColors.length < 6) {
                if (point_rect(get.mouseX, get.mouseY, addClrBtnX + customColors.length*36, addClrBtnY, 36, 36)) {
                    fill(0, 100, 180);
                } else {
                    fill(0);
                }
                textAlign(CENTER, CENTER);
                textSize(30);
                text("+", addClrBtnX + customColors.length*36 + 36/2, addClrBtnY + 36/2);
            }
        }

        // custom colors box stroke
        stroke(215);
        noFill();
        rect(addClrBtnX, addClrBtnY, SIDEBAR_WIDTH - 24*2, 36);

    }
}

class CanvasPage extends SidebarPage {
    bool loadedMarkerGraphics = false;

    late Slider thicknessSlider;
    late NumberBox thicknessNumberBox;

    late Slider opacitySlider;
    late NumberBox opacityNumberBox;

    void init() {
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

        thicknessSlider = new Slider(lWidth - SIDEBAR_WIDTH + 24, 328, 1, 100, 5);
        thicknessNumberBox = new NumberBox(
            lWidth - SIDEBAR_WIDTH + 154, 277, 85, 32,
            5, "px"
        );

        opacitySlider = new Slider(lHeight - SIDEBAR_WIDTH + 24, 328+80, 1, 100, 50);
        opacityNumberBox = new NumberBox(
            lWidth - SIDEBAR_WIDTH + 154, 277+80, 85, 32,
            100, "%"
        );

        initialized = true;
    }

    void onClick() {

    }

    void render(int mouseX, int mouseY) {

    }
}


