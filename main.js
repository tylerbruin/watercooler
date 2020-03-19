document.addEventListener("DOMContentLoaded", function(){

    console.log("yeet");

    var water = document.querySelector(".water");
    
    setInterval(function(){
        var waterLevel = Math.floor(Math.random() * 100) + 1 + '%'
        water.style.height = waterLevel; 
        console.log("water level", waterLevel);
    }, 400);

});