        // Add active class to the current button (highlight it)
        var header = document.getElementById("slider");
        var btns = header.getElementsByClassName("slide");
        for (var i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
          });
        }

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
