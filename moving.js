(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("ArjRCImo1eISYs8IR/NhInTVPg");
	this.shape.setTransform(116.4,111.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,232.8,222.5), null);


(lib.button3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AlIFJQiIiIAAjBQAAjACIiIQCIiIDAAAQDBAACICIQCICIAADAQAADBiICIQiICIjBAAQjAAAiIiIg");
	this.shape.setTransform(46.5,46.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93,93);


// stage content:
(lib.moving = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(1);
		}
		
		
		this.stop();
	}
	this.frame_1 = function() {
		playSound("HumveeStephan_Schutze1064024548wav");
	}
	this.frame_2 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(23));

	// Layer_4
	this.button_1 = new lib.button3();
	this.button_1.name = "button_1";
	this.button_1.parent = this;
	this.button_1.setTransform(404.5,303.5,1,1,0,0,0,46.5,46.5);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.button_1).to({_off:true},24).wait(1));

	// Layer_3
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(134.6,148,1,1,0,0,0,116.4,111.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:147},0).wait(1).to({x:159.5},0).wait(1).to({x:171.9},0).wait(1).to({x:184.3},0).wait(1).to({x:196.8},0).wait(1).to({x:209.2},0).wait(1).to({x:221.6},0).wait(1).to({x:234.1},0).wait(1).to({x:246.5},0).wait(1).to({x:258.9},0).wait(1).to({x:271.4},0).wait(1).to({x:283.8},0).wait(1).to({x:296.3},0).wait(1).to({x:308.7},0).wait(1).to({x:321.1},0).wait(1).to({x:333.6},0).wait(1).to({x:346},0).wait(1).to({x:358.4},0).wait(1).to({x:370.9},0).wait(1).to({x:383.3},0).wait(1).to({x:395.7},0).wait(1).to({x:408.2},0).wait(1).to({x:420.6},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(293.2,236.7,432.8,313.4);
// library properties:
lib.properties = {
	id: 'E9A3136A5408234284A11F6CF69F551E',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/HumveeStephan_Schutze1064024548wav.mp3?1541636278573", id:"HumveeStephan_Schutze1064024548wav"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E9A3136A5408234284A11F6CF69F551E'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;