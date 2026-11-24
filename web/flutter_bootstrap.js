{{flutter_js}}
{{flutter_build_config}}

// CanvasKit's WebGL shaders intermittently fail on some client GPUs and leave
// the Flutter surface completely white. Keep CanvasKit compatibility while
// using its software renderer so the UI can continue rendering reliably.
_flutter.loader.load({
  config: {
    canvasKitForceCpuOnly: true,
  },
});
