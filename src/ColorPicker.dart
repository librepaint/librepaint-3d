import 'package:dcanvas/CanvasRenderingContext.dart';
import 'package:drawlite/drawlite.dart'
    show Color;
import 'package:drawlite/dl.dart';
import 'package:drawlite/drawlite-touch.dart';

import 'app-state.dart';

class ColorPicker {
    static final pickerBoxSz = 320;

    int x = 0;
    int y = 0;
    int width = 460;
    int height = 480;

    int grabPointX = -1;
    int grabPointY = -1;

    double hue = 0;
    double saturation = 0;
    double brightness = 0;

    late ImageData pickerImgData;

    ColorPicker() {
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

    void sampleSquare(int x, int y, int sz, Color clr) {
        noStroke();

        fill(0, 128);
        rect(x, y, sz, sz);
        
        fill(255);
        rect(x + 2, y + 2, sz - 4, sz - 4);

        fill(clr);
        rect(x + 4, y + 4, sz - 8, sz - 8);
    }

    bool isMouseOver() {
        return point_rect(get.mouseX, get.mouseY, this.x, this.y, this.width, this.height);
    }

    void onClick() {
        if (get.mouseY < this.y + 40) {
            this.grabPointX = get.mouseX - this.x;
            this.grabPointY = get.mouseY - this.y;
        }
    }

    void onMouseReleased() {
        this.grabPointX = -1;
    }

    void render() {
        strokeWeight(2);
        stroke(5, 100, 180);
        fill(245);
        rect(this.x, this.y, this.width, this.height);

        final pickerBoxX = this.x + 20;
        final pickerBoxY = this.y + 30 + 20;
        final hueSliderY = pickerBoxY + pickerBoxSz + 20;

        final mouseOverHueSlider = point_rect(get.mouseX, get.mouseY, pickerBoxX, hueSliderY, pickerBoxSz, 32);

        if (get.mouseIsPressed) {
            if (point_rect(get.mouseX, get.mouseY, pickerBoxX, pickerBoxY, pickerBoxSz, pickerBoxSz)) {
                this.saturation = (get.mouseX - pickerBoxX) / pickerBoxSz * 100;
                this.brightness = (get.mouseY - pickerBoxY) / pickerBoxSz * 100;    
            }
            if (mouseOverHueSlider) {
                this.hue = (get.mouseX - pickerBoxX) / pickerBoxSz * 360;
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
        }

        fill(0);
        font("Open Sans", 16);
        textAlign(BASELINE);
        text("Choose a new color", this.x + 20, this.y + 35);

        // draw picker box
        dl.ctx.putImageData(pickerImgData, pickerBoxX + 1, pickerBoxY + 1);

        // picker box output
        noFill();
        stroke(0, 128);
        rect(pickerBoxX, pickerBoxY, pickerBoxSz + 1, pickerBoxSz + 1);

        // picker box selector square
        final mappedSat = (this.saturation / 100 * pickerBoxSz).toInt();
        final mappedBright = (this.brightness / 100 * pickerBoxSz).toInt();
        sampleSquare(pickerBoxX + mappedSat - 15, pickerBoxY + mappedBright - 15, 30, Color.fromHSB(this.hue, this.saturation, this.brightness));
        
        
        // color preview
        rect(pickerBoxX + pickerBoxSz + 20, pickerBoxY, 80, 80);

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
        if (mouseOverHueSlider && get.mouseIsPressed) {
            sampleSquare(this.x + 20 + mappedHue - 12, hueSliderY + 1 + 2, 24, Color.fromHSB(this.hue, 100, 100));
        } else {
            sampleSquare(this.x + 20 + mappedHue - 15, hueSliderY + 1, 30, Color.fromHSB(this.hue, 100, 100));
        }

        // move window when being dragged
        if (this.grabPointX != -1) {
            this.x = constrain(get.mouseX - this.grabPointX, 0, lWidth - this.width - 0).toInt();
            this.y = constrain(get.mouseY - this.grabPointY, 0, lHeight - this.height - 0).toInt();
        }
    }
}
