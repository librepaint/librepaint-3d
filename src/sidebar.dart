import 'package:drawlite/drawlite.dart'
    show Color, Drawlite, Event, KeyboardEvent, MouseEvent, QuitEvent, DLImage;
import 'package:drawlite/dl.dart';
import 'package:drawlite/drawlite-touch.dart';

import './icons.dart';
import './brushes.dart';
import './Slider.dart';
import './NumberBox.dart';

import './app-state.dart';

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

int sidebarPage = 0;

final sidebarX = lWidth - SIDEBAR_WIDTH;
final sidebarY = 48;

void setSidebarPage(int pageIdx) {
    sidebarPage = pageIdx;
    
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

    switch (sidebarPage) {
        case 0:
            if (!BrushesPage.initialized) BrushesPage.init();
    }

    // gray background box
    noStroke();
    rectMode(CORNER);
    fill(240, 242, 243);
    rect(sidebarX, sidebarY, SIDEBAR_WIDTH, lHeight - 48);

    // sidebar page label
    font("Open Sans", 16);
    fill(0, 100, 180);
    textAlign(BASELINE);
    text(sidebarTopLabel, sidebarX + 25, sidebarY + 35);
    
    switch (sidebarPage) {
        case 0:
            BrushesPage.render(mouseX, mouseY);
    }
}

class BrushesPage {
    static bool initialized = false;

    static bool loadedMarkerGraphics = false;

    static late Slider thicknessSlider;
    static late NumberBox thicknessNumberBox;

    static late Slider opacitySlider;
    static late NumberBox opacityNumberBox;

    static void init() {
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

    static void render(int mouseX, int mouseY) {
        List<void Function(num, num, num)> renderMarkFns = [
            marker, caligraphyPen, oilBrush, watercolor, pixelPen,
            pencil, eraser, crayon, sprayCan, paintCan
        ];

        // check for change of brush
        if (get.mouseIsPressed) {
            for (var xi = 0; xi < 5; xi++) {
                for (var yi = 0; yi < 2; yi++) {
                    final xPos = sidebarX + 25 + xi * (40 + 4);
                    final yPos = sidebarY + 61 + yi * (40 + 14);
                    var idx = (xi + yi * 5);

                    if (point_rect(mouseX, mouseY, xPos, yPos, 40, 40)) {
                        selectedMarker = idx;
                        sidebarTopLabel = brushNames[selectedMarker];
                    }
                }
            }
        }

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
                fill(240, 242, 243);
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
        for (var i = 0; i < brushColors.length; i++) {
            var x = sidebarX + 24 + (i % 6) * 36;
            var y = lHeight - 177 + floor(i / 6) * 36;
            noStroke();
            fill(brushColors[i]);
            rect(x, y, 36, 36);

            var touching3 = point_rect(mouseX / appScale, mouseY / appScale, x, y, 36, 36);
            if (touching3) {
                noFill();
                stroke(0, 125);
                rect(x, y, 36-1, 36-1);
                stroke(255, 125);
                rect(x+1, y+1, 36-3, 36-3);
                if (get.mouseIsPressed) {
                    currColor = brushColors[i];
                }
            }
        }
        stroke(0, 50);
        noFill();
        strokeWeight(1);
        rect(sidebarX + 24, lHeight - 177, 36*6, 36*3);
    }
}

class CanvasPage {
    static bool initialized = false;

    static bool loadedMarkerGraphics = false;

    static late Slider thicknessSlider;
    static late NumberBox thicknessNumberBox;

    static late Slider opacitySlider;
    static late NumberBox opacityNumberBox;

    static void init() {
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

    static void render(int mouseX, int mouseY) {

    }
}


