import 'package:dcanvas/CanvasRenderingContext.dart';
import 'package:drawlite/drawlite.dart'
    show Color;
import 'package:drawlite/dl.dart';
import 'package:drawlite/drawlite-touch.dart';

import 'app-state.dart';
import './sidebar.dart'
    show sidebarCacheImg;

class ColorPicker {
    static final pickerBoxSz = 320;

    static final DRAG_WINDOW = 1;
    static final DRAG_SATURATION_BRIGHTNESS = 2;
    static final DRAG_HUE = 3;

    int x = 0;
    int y = 0;
    int width = 460;
    int height = 492;

    int grabPointX = -1;
    int grabPointY = -1;

    double hue = 0;
    double saturation = 0;
    double brightness = 0;

    int dragAction = 0;

    // where in the customColors array to store the color (-1 = append)
    int colorDestination;

    late ImageData pickerImgData;

    ColorPicker(this.colorDestination) {
        this.x = ((get.width / 2) - (width / 2)).toInt();
        this.y = ((get.height / 2) - (height / 2)).toInt();

        final hsb = currColor.toHSB();
        this.hue = hsb[0];
        this.saturation = hsb[1];
        this.brightness = hsb[2];

        this.pickerImgData = ImageData.withDimensions(pickerBoxSz, pickerBoxSz);
        for (int i = 0; i < pickerImgData.data.length; i += 4) {
            final x = ((i / 4) % pickerBoxSz).toInt();
            final y = ((i / 4) / pickerBoxSz).toInt();
            final clr = Color.HSBtoRGB(this.hue, x / pickerBoxSz * 100, y / pickerBoxSz * 100);
            pickerImgData.data[i] = clr[0];
            pickerImgData.data[i+1] = clr[1];
            pickerImgData.data[i+2] = clr[2];
            pickerImgData.data[i+3] = 255;
        }
    }

    void sampleSquare(int x, int y, int w, int h, Color clr) {
        rectMode(CENTER);
        noStroke();

        fill(0, 128);
        rect(x, y, w, h);
        
        fill(255);
        rect(x, y, w - 4, h - 4);

        fill(clr);
        rect(x, y, w - 8, h - 8);
        rectMode(CORNER);
    }

    bool isMouseOver() {
        return point_rect(get.mouseX, get.mouseY, this.x, this.y, this.width, this.height);
    }

    void onClick() {
        final pickerBoxX = this.x + 20;
        final pickerBoxY = this.y + 30 + 20;
        final hueSliderY = pickerBoxY + pickerBoxSz + 20;

        // grab faux window
        if (get.mouseY < this.y + 40) {
            this.dragAction = DRAG_WINDOW;
            this.grabPointX = get.mouseX - this.x;
            this.grabPointY = get.mouseY - this.y;
            return;
        }

        // mouse over saturation & brightness picker
        if (point_rect(get.mouseX, get.mouseY, pickerBoxX, pickerBoxY, pickerBoxSz, pickerBoxSz)) {
            this.dragAction = DRAG_SATURATION_BRIGHTNESS;
            return;
        }

        // mouse over hue slider
        if (point_rect(get.mouseX, get.mouseY, pickerBoxX, hueSliderY, pickerBoxSz, 32)) {
            this.dragAction = DRAG_HUE;
            return;
        }

        final btnsY = hueSliderY + 32 + 20;
        final okX = pickerBoxX;
        final cancelX = okX + 200 + 20;

        // click OK
        if (point_rect(get.mouseX, get.mouseY, okX, btnsY, 200, 30)) {
            final newClr = Color.fromHSB(hue, saturation, brightness);
            
            currColor = newClr;
            
            if (colorDestination == -1) {
                customColors.add(newClr);    
            } else {
                customColors[colorDestination] = newClr;
            }
            
            // close color picker
            colorPicker = null;

            // rerender sidebar
            sidebarCacheImg = null;
            return;
        }

        // click Cancel
        if (point_rect(get.mouseX, get.mouseY, cancelX, btnsY, 200, 30)) {
            colorPicker = null;
            return;
        }
    }

    void onMouseReleased() {
        this.grabPointX = -1;
        this.dragAction = 0;
    }

    void render() {
        strokeWeight(2);
        stroke(5, 100, 180);
        fill(245);
        rect(this.x, this.y, this.width, this.height);

        final pickerBoxX = this.x + 20;
        final pickerBoxY = this.y + 30 + 20;
        final hueSliderY = pickerBoxY + pickerBoxSz + 20;

        // move window when being dragged
        if (this.grabPointX != -1) {
            this.x = constrain(get.mouseX - this.grabPointX, 0, lWidth - this.width - 0).toInt();
            this.y = constrain(get.mouseY - this.grabPointY, 0, lHeight - this.height - 0).toInt();
        }

        // update saturation & brightness
        if (dragAction == DRAG_SATURATION_BRIGHTNESS) {
            this.saturation = constrain((get.mouseX - pickerBoxX) / pickerBoxSz * 100, 0, 100).toDouble();
            this.brightness = constrain((get.mouseY - pickerBoxY) / pickerBoxSz * 100, 0, 100).toDouble();
        }

        // update hue
        if (dragAction == DRAG_HUE) {
            this.hue = constrain((get.mouseX - pickerBoxX) / pickerBoxSz * 360, 0, 360).toDouble();
            for (int i = 0; i < pickerImgData.data.length; i += 4) {
                final x = ((i / 4) % pickerBoxSz).toInt();
                final y = ((i / 4) / pickerBoxSz).toInt();
                final clr = Color.HSBtoRGB(this.hue, x / pickerBoxSz * 100, y / pickerBoxSz * 100);
                pickerImgData.data[i] = clr[0];
                pickerImgData.data[i+1] = clr[1];
                pickerImgData.data[i+2] = clr[2];
                pickerImgData.data[i+3] = 255;
            }
        }

        // render faux window label
        fill(0);
        font("Open Sans", 16);
        textAlign(BASELINE);
        text("Choose a new color", pickerBoxX, this.y + 35);

        // draw saturation & brightness picker box
        dl.ctx.putImageData(pickerImgData, pickerBoxX + 1, pickerBoxY + 1);
        // outline
        noFill();
        stroke(0, 128);
        rect(pickerBoxX, pickerBoxY, pickerBoxSz + 1, pickerBoxSz + 1);

        //  saturation & brightness selector square
        final mappedSat = (this.saturation / 100 * pickerBoxSz).toInt();
        final mappedBright = (this.brightness / 100 * pickerBoxSz).toInt();
        sampleSquare(pickerBoxX + mappedSat, pickerBoxY + mappedBright, 24, 24, Color.fromHSB(this.hue, this.saturation, this.brightness));
        
        // color preview
        rect(pickerBoxX + pickerBoxSz + 20, pickerBoxY, 80, 80);

        // buttons preamble
        final btnsY = hueSliderY + 32 + 20;
        strokeWeight(2);
        textAlign(CENTER, CENTER);

        // OK button
        final okX = pickerBoxX;
        if (point_rect(get.mouseX, get.mouseY, okX, btnsY, 200, 30)) {
            stroke(150);
        } else {
            noStroke();
        }
        fill(200);
        rect(okX, btnsY, 200, 30);
        fill(0);
        text("OK", okX + 200/2, btnsY + 30/2);

        // Cancel button
        final cancelX = okX + 200 + 20;
        if (point_rect(get.mouseX, get.mouseY, cancelX, btnsY, 200, 30)) {
            stroke(150);
        } else {
            noStroke();
        }
        fill(200);
        rect(cancelX, btnsY, 200, 30);
        fill(0);
        text("Cancel", cancelX + 200/2, btnsY + 30/2);

        // hue slider
        noStroke();
        colorMode(HSB);
        for (int i = 0; i < pickerBoxSz; i++) {
            fill(i / pickerBoxSz * 360, 100, 100);
            rect(pickerBoxX + i, hueSliderY, 1, 32);
        }
        colorMode(RGB);

        // hue sample square
        final mappedHue = (this.hue / 360 * pickerBoxSz).toInt();
        if (dragAction == DRAG_HUE) {
            sampleSquare(pickerBoxX + mappedHue, hueSliderY + 16, 14, 24, Color.fromHSB(this.hue, 100, 100));
        } else {
            sampleSquare(pickerBoxX + mappedHue, hueSliderY + 16, 14, 30, Color.fromHSB(this.hue, 100, 100));
        }
    }
}
