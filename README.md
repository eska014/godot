This branch sets up Godot's default HTML5 export as a WASM benchmark.

Simple changes can be made just modifying the `.html` file, so it might not be
necessary to build the engine.

A global JS variable `Benchmark` is available. Its properties contain various
`window.performance.now()` timestamps. These are distinguished from other
properties by using dashes `-` in their names.

Timestamp property name        | Meaning
-------------------------------|------------------------------------------------
`[godot.wasm]-download-Start`  | WASM binary download started
`[godot.wasm]-download-Finish` | WASM binary download finished
`engine-loaded`                | Downloaded all files other than game assets
`wasm-instantiate-Start`       | WASM instantiation started (primary overload)
`wasm-instantiate-Finish`      | WASM instantiated (primary overload)
`game-loaded`                  | Downloaded all files including game assets
`main-loop-ready`              | Called `requestAnimationFrame` to start the main loop
`first-frame`                  | Rendered first frame
`game-interactive`             | Finished main loop iteration faster than 55 FPS

Other properties are:

 - `timeWaitingForAssets`, the amount of time the download of the game files
   stalls progress. Often 0 due to its small size. Subtracted from relevant
   printed Benchmark results.

 - `emscriptenRuntimeInstantiation`, the amount of time spent instantiating the
   Emscripten JavaScript runtime. Excludes WASM instantiation.

 - `loops`, an array of frame timings. Each frame is an object containing a
   `frameTime` property including idle time (`requestAnimationFrame`) and
   `cpuTime` without such idle time.

 - `print`, the function that prints the benchmark results to the page. Defined
   in the HTML file.

To build the engine for the HTML5 platform:

 1. Install SCons and a recent Emscripten version
 2. Define `EMSCRIPTEN_ROOT` environment variable
 3. Call `scons platform=javascript wasm=yes target=release` in the repo's root directory

The skeleton for the HTML file used in builds is located at `/misc/dist/html/default.html`.
Other HTML5 platform-related files are in `/platform/javascript/`.

The `.pck` file of the exported game needs to be exported from a Godot Editor
build based on the same commit as the HTML5 build.

Detailed build instructions here: https://godot.readthedocs.io/en/latest/development/compiling/index.html

asm.js export will not work on this branch as-is.

The game project used for the benchmark is available here: https://github.com/eska014/godot-wasm-benchmark-project

Following is the upstream README file.

---

[![Godot Engine logo](/logo.png)](https://godotengine.org)

## Godot Engine

Homepage: https://godotengine.org

#### 2D and 3D cross-platform game engine

Godot Engine is a feature-packed, cross-platform game engine to create 2D and
3D games from a unified interface. It provides a comprehensive set of common
tools, so that users can focus on making games without having to reinvent the
wheel. Games can be exported in one click to a number of platforms, including
the major desktop platforms (Linux, Mac OSX, Windows) as well as mobile
(Android, iOS) and web-based (HTML5) platforms.

#### Free, open source and community-driven

Godot is completely free and open source under the very permissive MIT license.
No strings attached, no royalties, nothing. The users' games are theirs, down
to the last line of engine code. Godot's development is fully independent and
community-driven, empowering users to help shape their engine to match their
expectations. It is supported by the Software Freedom Conservancy
not-for-profit.

Before being open sourced in February 2014, Godot had been developed by Juan
Linietsky and Ariel Manzur (both still maintaining the project) for several
years as an in-house engine, used to publish several work-for-hire titles.

### Getting the engine

#### Binary downloads

Official binaries for the Godot editor and the export templates can be found
[on the homepage](https://godotengine.org/download).

#### Compiling from source

[See the official docs](http://docs.godotengine.org/en/latest/development/compiling/)
for compilation instructions for every supported platform.

### Community

Godot is not only an engine but an ever-growing community of users and engine
developers. The main community channels are listed [on the homepage](https://godotengine.org/community).

To get in touch with the developers, the best way is to join the
[#godotengine IRC channel](https://webchat.freenode.net/?channels=godotengine)
on Freenode.

### Documentation and demos

The official documentation is hosted on [ReadTheDocs](http://docs.godotengine.org).
It is maintained by the Godot community in its own [GitHub repository](https://github.com/godotengine/godot-docs).

The [class reference](http://docs.godotengine.org/en/latest/classes/)
is also accessible from within the engine.

The official demos are maintained in their own [GitHub repository](https://github.com/godotengine/godot-demo-projects)
as well.

There are also a number of other learning resources provided by the community,
such as text and video tutorials, demos, etc. Consult the [community channels](https://godotengine.org/community)
for more info.

[![Travis Build Status](https://travis-ci.org/godotengine/godot.svg?branch=master)](https://travis-ci.org/godotengine/godot)
[![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/bfiihqq6byxsjxxh/branch/master?svg=true)](https://ci.appveyor.com/project/akien-mga/godot)
[![Code Triagers Badge](https://www.codetriage.com/godotengine/godot/badges/users.svg)](https://www.codetriage.com/godotengine/godot)
