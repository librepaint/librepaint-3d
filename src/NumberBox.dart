import './main.dart' show appScale;
import 'package:drawlite/dl.dart';
import 'package:drawlite/drawlite-touch.dart';

class NumberBox {
    late double x, y, width, height;
    late int value;
    late String units;
    NumberBox(double x, double y, double width, double height, int value, String units) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.value = value;
        this.units = units;
    }
    
    void render () {
        strokeWeight(1);
        stroke(210, 215, 225);
        fill(255);
        rect(this.x, this.y, this.width, this.height);
        
        font("Open Sans", (this.height / 2.3).round());
        fill(0);
        var content = "${this.value}${this.units}";
        var txtWidth = textWidth(content);
        var txtHeight = textAscent() + textDescent() + 6;
        text(content, this.x + this.width - txtWidth - 10, this.y + this.height - txtHeight / 2);
    }
}