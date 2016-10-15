
function change(pro){
	gamel=true;
	for (var i=0; i<=pro.length;i++){
	pro[i].setAttribute("class","boundary");
	}
}
function endgame(){
 if(gamel){
	 alert("You win!");
	 }else{
	 alert("You Lose! Try Again....");
	 }

}



/*function allborders(){
	
	var borders=document.querySelectorAll(".boundary");
	
	for (i=0;i< borders.length;i++){
		borders[i].className= "boundary youlose";
		}
	}

function end(){
	var ending = document.getElementById("end") 
	ending.addEventListener("mouseover",hitEnd);
	
	boundary.className="boundary youlose";
	{
		var hitE = true;
	}
}

function hitEnd(){
	if (hitE = true)
	{
		alert("You Lose! Try Again....");
	}else{
		alert("You win!");
	}
}*/
