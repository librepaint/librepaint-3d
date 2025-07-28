import 'package:drawlite/drawlite.dart'
    show Color;

import './app-state.dart';

List<String> brushNames = [
    "Marker",
    "Calligraphy pen",
    "Oil brush",
    "Watercolor",
    "Pixel pen",
    "Pencil",
    "Eraser",
    "Crayon",
    "Spray can",
    "Fill bucket"
];

List<Color> brushColors = [];
void initBrushColors() {
    brushColors = [
        dl.color(255),
        dl.color(195),
        dl.color(88),
        dl.color(0),
        dl.color(136, 0, 27),
        dl.color(236, 28, 36),
        dl.color(255, 127, 39),
        dl.color(255, 202, 24),
        dl.color(253, 236, 166),
        dl.color(255, 242, 0),
        dl.color(196, 255, 14),
        dl.color(14, 209, 69),
        dl.color(140, 255, 251),
        dl.color(0, 168, 243),
        dl.color(63, 72, 204),
        dl.color(184, 61, 186),
        dl.color(255, 174, 200),
        dl.color(185, 122, 86)
    ];
}

class BrushStroke {
    late Color color;
    late double weight;
    late int brushId;
    List<double> points = [];
    
    BrushStroke(this.color, this.weight, this.brushId);

    void render() {
        switch (this.brushId) {
            case 0:
                Marker.render(this);
            case 8:
                SprayCan.render(this);
        }
    }
}

class Marker {
    static void render(BrushStroke strokeInfo) {
        final path = strokeInfo.points;

        dl.stroke(strokeInfo.color);
        dl.strokeWeight(strokeInfo.weight);

        if (path.length == 2) {
            dl.point(path[0], path[1]);
        } else {
            for (var i = 0; i < path.length - 2; i += 2) {
                dl.line(path[i], path[i+1], path[i+2], path[i+3]);
            }
        }
    }
}

class SprayCan {
    static void render(BrushStroke strokeInfo) {
        final path = strokeInfo.points;

        dl.stroke(strokeInfo.color);
        dl.strokeWeight(1);

        if (path.length == 2) {
            for (int i = 0; i < 10; i++) {
                dl.point(
                    path[0] + dl.random(-strokeInfo.weight/2, strokeInfo.weight/2),
                    path[1] + dl.random(-strokeInfo.weight/2, strokeInfo.weight/2)
                );
            }
        } else {
            for (var j = 0; j < path.length - 2; j += 2) {
                for (int i = 0; i < 10; i++) {
                    dl.point(
                        path[j] + dl.random(-strokeInfo.weight/2, strokeInfo.weight/2),
                        path[j+1] + dl.random(-strokeInfo.weight/2, strokeInfo.weight/2)
                    );
                }
            }
        }
    }
}
