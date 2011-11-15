function rand(min, max){
    return Math.random() * (max-min) + min;
}

/**
 * Draw an approximated cosine using bezier curves
 */
function cosineLine(ctx, from, to, amp, freq, startphase, decay){
    // Fix input args
    if (typeof decay == 'undefined' ) decay = 1.0;
    freq = Math.ceil(freq);
    // Set variables
    var w = to.x - from.x; // Total width of wave
    var t = (to.x - from.x) / freq; // Compute period
    var x1,x2,x3,x4 
    // Draw the line
    ctx.lineTo(from.x, from.y - amp/2);
    for (var i = 0; i <= freq; i ++){
        var top = from.y - amp*Math.pow(decay,i) / 2;
        var bottom = from.y + amp*Math.pow(decay,i) / 2;
        x1 = from.x + (i+0.25-startphase)*t;
        x2 = from.x + (i+0.5-startphase)*t;
        x3 = from.x + (i+0.75-startphase)*t;
        x4 = from.x + (i+1-startphase)*t;
        ctx.bezierCurveTo(x1, top, x1, bottom, x2, bottom);
        ctx.bezierCurveTo(x3, bottom, x3, top, x4, top);
    }
}

/**
 * One class for the logo
 */
var LogoIJmerika = new Class({
    
    Implements: Options,
    
    options: {
        width: 284,
        height: 75,
        relativeBlockWidth: 0.358,
        waves: [
            {y: 0.5, stroke: 0.1, amp: 0.2, freq: 9, startphase: 0, decay: 1, color: "rgba(30,30,255,1)", overText:false},
        ]
    },
    
    initialize: function(options){
        this.setOptions(options);
        this.canvas = new Element("canvas", {width:this.options.width, height:this.options.height})
        this.ctx = this.canvas.getContext("2d");
    },
    
    /** 
     * The original preset (more or less)
     */
    preset01: function(){
        var waves = []
        
        var h = 0.8 + 0.5*Math.random();
        var colors = ["rgba(10,10,255,1)", "rgba(255,10,10,1)", "rgba(10,255,10,1)"];
        colors.shuffle();
        var heightSkip = [0.5+0.005*Math.random(),0.5+0.05*Math.random(),0.5+0.01*Math.random()];
        for (var i = 0; i < 3; i ++){
            waves.push({'y':heightSkip[i],
                        'stroke':0.6*Math.random(),
                        'amp':0.3,
                        'freq':1 / (0.3 + 0.1*Math.random()),
                        'startphase': Math.random(),
                        'color':colors[i],
                        'decay':0.8,
                        'overText':true
            })
        }
        this.options.waves = waves;
        this.draw();
        return this;
    },
    
    preset02: function(){
        var waves = [];
        var colors = ["rgba(40,40,255,1)", "rgba(255,40,40,1)", "rgba(40,255,40,1)"];
        colors.shuffle();
        
        // Base wave
        waves.push({y: rand(0.4, 0.6), stroke:0, amp: rand(0.3, 0.4), startphase: 0,
                    freq: rand(0,3), color: colors[0], decay: 0.6, overText: true});
        // Middle wave
        var s = (Math.random() > 0.5) ? 0 : rand(0.2,0.4);
        waves.push({y: rand(0.5, 0.7), stroke:s, amp: rand(0.3, 0.4), startphase: rand(0,1),
                    freq: rand(0,2), color: colors[1], decay: 0.6, overText: false});
        // Top wave
        waves.push({y: rand(0.5, 0.6), stroke:rand(0.1,0.2), amp: rand(0.2, 0.4), startphase: rand(0.3,1),
                    freq: rand(3,5), color: colors[2], decay: 0.85, overText: false});

                    
        this.options.waves = waves;
        this.draw()
        return this;
    },
    
    /** 
     * Call this function to draw with all the current options.
     */
    draw: function(options){
        this.setOptions(options);
        this.bg = new Image();
        this.bg.onload = function(){
            this.redraw();
        }.bind(this);
        this.bg.src = "logo_bg_"+this.options.width+"x"+this.options.height+".png";
        return this;
    },
    
    /**
     * Internal, called by draw() after bg is loaded.
     */
    redraw: function(options){
        var waves = this.options.waves;
        var h = this.options.height;
        var w = this.options.width;
        // Black fill
        this.ctx.beginPath();
        this.ctx.fillStyle = this.options.letterColor;
        this.ctx.rect(0,0,w,h);
        this.ctx.fill();
        // Draw the waves from options
        this.ctx.globalCompositeOperation = 'lighter';
        this.ctx.save();
        for ( var i = 0; i < waves.length; i++ ) {
            var top = waves[i].y * h;
            var bottom = (waves[i].y + waves[i].h) * h;
            this.ctx.restore();
            this.ctx.save();
            // Clip if this wave should not cross text
            if ( !waves[i].overText ){
                this.ctx.beginPath();
                this.ctx.rect(0,0,this.options.relativeBlockWidth * w, h)
                this.ctx.clip();
            }
            this.ctx.beginPath();
            // By default, fill to bottom, unless "stroke" is specified.
            var lingrad = this.ctx.createLinearGradient(0,0,0,h*6);
            lingrad.addColorStop(0, waves[i].color);
            lingrad.addColorStop(1, '#fff');
            if (waves[i].stroke > 0){
                this.ctx.strokeStyle = lingrad; //waves[i].color;
                this.ctx.lineWidth = waves[i].stroke*h;
            } else {
                this.ctx.fillStyle = lingrad; //waves[i].color;
            }
            cosineLine(this.ctx, {x:0, y:top}, 
                                 {x:w, y:top}, 
                                 waves[i].amp * h, 
                                 waves[i].freq,
                                 waves[i].startphase,
                                 waves[i].decay);
            if (waves[i].stroke > 0){
                this.ctx.stroke();
            } else {
                this.ctx.lineTo(w, h);
                this.ctx.lineTo(0, h);
                this.ctx.closePath();
                this.ctx.fill();
            }
        }
        this.ctx.restore();
        // Mask off the outsides (FUCK YES "destination-in");
        this.ctx.globalCompositeOperation = 'destination-in';
        this.ctx.drawImage(this.bg, 0,0);
    },
    
    toElement: function(){
        return this.canvas;
    }
});