import 'dart:io';

bool isDir(String path) {
    return FileStat.statSync(path).type == FileSystemEntityType.directory;
}

bool fileItemNotFound(String path) {
    return FileStat.statSync(path).type == FileSystemEntityType.notFound;
}

void installDependenciesIfNotInstalled(List<String> depNames) async {
    for (var i = 0; i < depNames.length; i++) {
        if (Platform.isLinux) {
            var checkPackageInstalled = await Process.run("dpkg", ["-l", depNames[i]]);
            if (checkPackageInstalled.stderr.toString().contains("no packages found")) {
                print("Installing ${depNames[i]}...");
                await Process.run("sudo", ["apt", "install", depNames[i], "-y"]);
            }
        }
    }
}

void main() async {
    // await Process.run("sudo", "apt-get install libsdl2-dev".split(" "));
    // await Process.run("sudo", "apt-get install libcairo2-dev".split(" "));

    // install dependencies
    if (Platform.isLinux) {
        installDependenciesIfNotInstalled(["build-essential", "git"]);
        installDependenciesIfNotInstalled([
            "libasound2-dev","libx11-dev","libxrandr-dev",
            "libxi-dev","libgl1-mesa-dev","libglu1-mesa-dev",
            "libxcursor-dev","libxinerama-dev","libwayland-dev",
            "libxkbcommon-dev"
        ]);
    }

    // if OpenSans not installed
    if (Platform.isLinux) {
        if (fileItemNotFound("/usr/share/fonts/truetype/OpenSans")) {
            print("Installing OpenSans...");
            // install OpenSans
            await Process.run("sudo", "cp ./assets/OpenSans /usr/share/fonts/truetype -r".split(" "));
            // update font cache
            await Process.run("fc-cache", "-f -v".split(" "));
            // check that font is installed
            var fontDetails = await Process.run("fc-match", "OpenSans".split(" "));
            if (!fontDetails.stdout.toString().contains("OpenSans")) {
                print("ERROR: Failed to install OpenSans");
            } else {
                print("OpenSans installed");
            }
        }
    }
}