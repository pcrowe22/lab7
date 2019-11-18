function init(){
  document.getElementById("entrybutton").addEventListener("click", myAlert());
  document.getElementById("entrybutton").addEventListener("click", output());
} 
function myAlert(){
  alert("Patrick Crowe: " + document.getElementById("entryinput"));
}
function output(){
  document.getElementById("textoutput").innerHTML = document.getElementById("entryinput");
}

window.addEventListener('load', init);