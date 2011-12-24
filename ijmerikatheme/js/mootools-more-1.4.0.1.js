// MooTools: the javascript framework.
// Load this file's selection again by visiting: http://mootools.net/more/f0a7dbca6fb717ef78f4d62f62b6439f 
// Or build this file again with packager using: packager build More/Array.Extras
/*
---
copyrights:
  - [MooTools](http://mootools.net)

licenses:
  - [MIT License](http://mootools.net/license.txt)
...
*/
MooTools.More={version:"1.4.0.1",build:"a4244edf2aa97ac8a196fc96082dd35af1abab87"};(function(a){Array.implement({min:function(){return Math.min.apply(null,this);
},max:function(){return Math.max.apply(null,this);},average:function(){return this.length?this.sum()/this.length:0;},sum:function(){var b=0,c=this.length;
if(c){while(c--){b+=this[c];}}return b;},unique:function(){return[].combine(this);},shuffle:function(){for(var c=this.length;c&&--c;){var b=this[c],d=Math.floor(Math.random()*(c+1));
this[c]=this[d];this[d]=b;}return this;},reduce:function(d,e){for(var c=0,b=this.length;c<b;c++){if(c in this){e=e===a?this[c]:d.call(null,e,this[c],c,this);
}}return e;},reduceRight:function(c,d){var b=this.length;while(b--){if(b in this){d=d===a?this[b]:c.call(null,d,this[b],b,this);}}return d;}});})();