import './main.dart' show appScale;
import 'package:drawlite/dl.dart';
import 'package:drawlite/drawlite-touch.dart';

class Slider {
    late double x, y, width, start, stop, value;
    
    Slider(double x, double y, double start, double stop, double value) {
        this.x = x;
        this.y = y;
        this.width = 220;
        this.start = start;
        this.stop = stop;
        this.value = value;
    }

    void render() {
        final GetObject(
            :mouseX,
            :mouseY,
            :mouseIsPressed
        ) = get;

        var hoveredOver = point_rect(mouseX / appScale, mouseY / appScale, this.x, this.y - 12, this.width, 24);

        if (hoveredOver && mouseIsPressed) {
            this.value = map(mouseX / appScale, this.x, this.x + this.width, this.start, this.stop);
        }

        // slider base
        noStroke();
        if (hoveredOver) {
            if (mouseIsPressed) {
                fill(145);
            } else {
                fill(97);
            }
        } else {
            fill(190);
        }
        rect(this.x, this.y, this.width, 4);
        
        var mapValue = map(this.value, this.start, this.stop, 0.0, 1.0);

        // progress
        fill(0, 100, 180);
        rect(this.x, this.y, mapValue * this.width, 4);
        
        // handle
        if (hoveredOver) {
            if (mouseIsPressed) {
                fill(204);
            } else {
                fill(23);
            }
        }
        rect(this.x + (mapValue * (this.width-9)), this.y - 10, 9, 24, 100);
    }
}