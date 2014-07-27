var nw = require('nw.gui').Window.get();
var gui = require('nw.gui');

var w;var h; var x; var  y; var max = false;
window.onfocus = function() {
	console.log("focus");
}

window.onblur = function() {
	console.log("blur");
}

function calc_metrics(){
	w = nw.width;
	h = nw.height;
	x = nw.x;
	y = nw.y;
	console.log(w,h,x,y);
	document.getElementById('main').innerHTML=w+" "+h+" "+x+" "+y;
}

window.onload = function() {
	var max = false;
	document.getElementById('close').onclick = function() {
		window.close();
	}
	document.getElementById('min').onclick = function() {
		window.open('settings.html', '_blank', 'screenX=0,screenY=0,width=480,height=640');
	}
	document.getElementById('maximise').onclick = function() {
		if(!max){
			max = true;
			calc_metrics();
			nw.resizeTo(screen.availWidth, screen.availHeight);
			nw.moveTo(0, 0);
		} else {
			max = false;
			nw.width = w;
			nw.height = h;
			nw.x = x;
			nw.y = y;
		}
	}
	nw.show();
}
