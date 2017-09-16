var Benchmark = {};
Benchmark['script-start'] = performance.now();

var Engine = {
	USING_WASM: true,
	RuntimeEnvironment: function(Module) {
