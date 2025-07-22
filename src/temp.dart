import 'dart:io';
import 'package:image/image.dart';

void main() async {
    // Create a 256x256 8-bit (default) rgb (default) image.
    final image = img.Image(width: 256, height: 256);
    // Iterate over its pixels
    for (var pixel in image) {
    // Set the pixels red value to its x position value, creating a gradient.
    pixel..r = pixel.x
    // Set the pixels green value to its y position value.
    ..g = pixel.y;
    }
    // Encode the resulting image to the PNG image format.
    final png = img.encodePng(image);
    // Write the PNG formatted data to a file.
    await File('image.png').writeAsBytes(png);

}