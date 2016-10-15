


/*window.onload = function() {
	
	document.getElementById('boundary1').onmouseover=start;
	
	}
	
function start(){
	document.getElementById('boundary1').className="boundary youlose";
	}*/

function allborders(){
	hit= false;
	var walls = document.querySelectorAll(".boundary");
	for (var i=0; i< walls.length; i++)
	{
		walls[i].className= "boundary youlose";
		document.getElementById("status").innerHTML = "Loser! Try again.";
	}
}
function end(){
	if (hit)
	{
		document.getElementById("status").innerHTML = "Loser! Try again.";
	}else{
		document.getElementById("status").innerHTML = "You Win!";
		}
	
	}
function star(){
	var walls = document.querySelectorAll(".boundary");
	for (var i=0;i<walls.length; i++){
		walls.classList.remove("you lose");
	}
	}
	function reset(){
	    window.location.reload();
		}
   