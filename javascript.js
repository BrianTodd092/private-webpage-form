document.getElementById('smit').addEventListener('click', myFunction, false);
document.getElementById('s').addEventListener('mouseover', function1, false);
document.getElementById('s').addEventListener('mouseout', function2, false);
document.getElementById('f').style.display='none';
/* document.getElementById('c').style.background = "#e6e6fa"; */
document.getElementById('c').style.backgroundImage= "url('star.jpg')";
document.getElementById('c').style.backgroundRepeat= "no-repeat";
document.getElementById('c').style.backgroundPosition="center";




function function1(){


 var formc=document.getElementById('c').style.background = "#7ccd7c";

}


function function2(){


/* var formc=document.getElementById('c').style.background = "#e6e6fa";*/

var formc=document.getElementById('c').style.backgroundImage= "url('star.jpg')";
var formca=document.getElementById('c').style.backgroundRepeat= "no-repeat";
var formcb=document.getElementById('c').style.backgroundPosition="center";




}



function myFunction() {
  var x = document.getElementById('f');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}




