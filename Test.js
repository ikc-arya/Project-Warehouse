// document.getElementById("testB").onmouseup=function(){
//     alert("Hmm you clicked mm mmmmm!!")
// }

document.getElementById("testB").onclick = function(){
    document.getElementById("tounmarquee").style.backgroundColor= "green";
    document.getElementById("tounmarquee").style.width= "100px";
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }