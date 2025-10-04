function floweySet(type) {
	var sprite = document.getElementById('flowey');
	switch(type) {
		case 'Windows': 
			sprite.style["background"] = 'transparent url(images/floweywinkBIG.png) no-repeat';
			break;
		case 'Mac': 
			sprite.style["background"] = 'transparent url(images/floweyhappyBIG.png) no-repeat';
			break;
		case 'Twitter': 
			sprite.style["background"] = 'transparent url(images/floweycoolBIG.png) no-repeat';
			break;
		case 'Tumblr': 
			sprite.style["background"] = 'transparent url(images/floweycuteBIG.png) no-repeat';
			break;
		case 'Store': 
			sprite.style["background"] = 'transparent url(images/floweymoneyeyesBIG.png) no-repeat';
			break;
		case 'KS': 
			sprite.style["background"] = 'transparent url(images/floweymoneyeyesBIG2.png) no-repeat';
			break;
		default:
			sprite.style["background"] = 'transparent url(images/floweyBIG.png) no-repeat';
			break;
	}
}
function floweyUrl(newurl,funct) {
	var oldurl = document.querySelector("iframe[href|=https://www.youtube.com/embed/]:first-of-type").href;
	var qSel = document.querySelector("iframe[href|=https://www.youtube.com/embed/]:first-of-type");
	if (newurl == 'undefined') {return;}
	else if (funct == 'iframe') {
		qSel.href = newurl;
	}
	else if (funct == 'iframe:evolve') {
		var staticTime = 1;
		var faceTime = 0;
		var laughTime = 0;
		qSel.href = "/flowey/static";
		setTimeout(function(){qSel.href = newurl;}, staticTime );
	}
	else if (funct == ':iframe') {
		window.open(newurl,"_self");
	}
	else {
		window.open(newurl,"_self");
	}
}
function floweyUrlTime(oldurl,newurl,qSel,st,face,act) {
	
}
