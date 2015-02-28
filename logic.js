var images;
var objectives = [0, 805, 1610, 2415, 3220];
var currentObjective;
var prevObjective;

function init(){
	console.log("initialized");
	//images = document.getElementById('images');
	images = $("#images").get(0);
	images.style.left = '0px';
	currentObjective = 0;
}

var imgObj = null;
var animate ;

function loop(){
	setInterval("next()", 5000);
}

function next(){
	prevObjective = currentObjective;
	if(currentObjective == objectives.length - 1){
		//reset
		currentObjective = 0;
	}else{
	currentObjective++;
	}
	move();
}

function prev(){
	prevObjective = currentObjective;
	if(currentObjective == 0){
		//reset
		currentObjective = objectives.length - 1;
	}else{
	currentObjective--;
	}
	move();
}

function move(){
	console.log("moveRight");

	var delta = objectives[prevObjective] - objectives[currentObjective];

	$("#images").animate({
	left: "+=" + delta,
	}, 1000, function() {
	// Animation complete.
	});

/*

	images.style.left = parseInt(images.style.left) + (-10) + 'px';
	animate = setTimeout(moveRight,20); // call moveRight in 20msec
	console.log("hey " + parseInt(images.style.left) + "io" + objectives[currentObjective]*-1);
	if(parseInt(images.style.left) == objectives[currentObjective]*-1){
		stop(parseInt(images.style.left));
	}
	*/


}

function stop(current){
   clearTimeout(animate);
   images.style.left = current + 'px'; 
}


loop();
init();