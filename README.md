# LibrePaint 3D
The free and open source replacement for MS Paint 3D

## About
Microsoft is killing off Paint 3D. 
> Paint 3D is deprecated and will be removed from the Microsoft Store on November 4, 2024. After that date, Paint 3D will no longer be available for download.

[https://learn.microsoft.com/en-us/windows/whats-new/deprecated-features-resources#paint-3d](https://learn.microsoft.com/en-us/windows/whats-new/deprecated-features-resources#paint-3d)

This is unfortunate as Paint 3D is one of the best image editing softwares. Although it isn't as powerful as Photoshop or GIMP, it is far easier to use which makes it perfect for quickly cropping images, scribbling out sensitive information, and making memes. Paint 3D's magic select feature is one of the most useful features of Paint 3D that other image editors don't have.

Because Microsoft is killing off Paint 3D and because I will be abandoning Windows on October 14, 2025 which is the end of life date for Windows 10 after which it will no longer receive security updates, I have resorted to programming my own open source Paint 3D.

## Legal
This project is a clean implementation of Microsoft's Paint 3D. No code from Microsoft
Paint 3D was used in the creation of LibrePaint 3D. Although LibrePaint 3D was designed to have
a similiar design and layout to Microsoft Paint 3D, none of LibrePaint 3D's assets are taken
from Microsoft Paint 3D. LibrePaint 3D is not affiliated with Microsoft. 

## Quality Disclaimer
MS Paint 3D was presumably created by an entire team of professional developers. LibrePaint 3D was created by a singular teenager in his limited free time. Set your expectations accordingly. That is LibrePaint 3D, as open source software tends to be, is a bit crappier, but it will improve over time.

## Development
#### Dependencies
- [Dart](https://dart.dev/get-dart) - the programming language
- [jvbuild](https://github.com/vExcess/jvbuild) - custom dependency manager, build system, and packaging tool

Note: jvbuild currently doesn't install the dcanvas and drawlite dependencies locally. I'll fix that soon.

Quick run:
```
jvbuild run dev
```

Build:
```
jvbuild build
```

Package:
```
jvbuild package
```


## Platform Support
| Platform  | Support |
| ------------- | ------------- |
| Debian-based Linux (Debian, Ubuntu, Mint, etc.) | Supported |
| Fedora-based Linux | Support Planned |
| Arch-based Linux   | Support Planned  |
| Other Linux        | No Official Support, but the Flatpak will probably work |
| Windows | Support Planned |
| macOS   | No Support Planned  |
| iOS     | No Support Planned  |

# Todo
- Implement Brushes (help plz)
- Pretty much literally everything else

## Contributors
- [vExcess](https://github.com/vExcess) - Primary Developer
- [Virtuosa](https://www.khanacademy.org/profile/kaid_1077077685654678878412920/projects) - Graphics Designer

## LibrePaint 3D running on Linux Mint:
![screenshot](https://github.com/librepaint/librepaint-3d/blob/main/screenshot.png?raw=true)
