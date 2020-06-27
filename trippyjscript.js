        // Add active class to the current button (highlight it)
  

function myFunction() {
    if(document.getElementById("flip").checked === true){
  document.getElementById("panel").style.display = "block";   
  document.getElementById("icon").style.backgroundColor = "rgb(12, 12, 78)";
}
  if(document.getElementById("flip").checked === false){  
  document.getElementById("panel").style.display = "none"   ; 
  document.getElementById("icon").style.backgroundColor = "rgb(7, 7, 105)";   
}
}
