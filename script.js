let rightArrow=document.getElementById("rightArrow");
let slider=document.getElementsByClassName("slider")[0]
let distance= 0;
rightArrow.onclick=function(){
	distance=distance+100;
	console.log(slider);
     if (distance==300) {
     	distance=0;
     }
     slider.style.transform="translateX(-"+distance+"%)";
}
leftArrow.onclick=function(){
	distance=distance-100;
    if (distance==-100) {
    	distance=200
    }
	slider.style.transform="translateX(-"+distance+"%)";
    
}