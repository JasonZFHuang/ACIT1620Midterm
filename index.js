var bg1 = document.getElementById("bg1");
var bg2 = document.getElementById("bg2");
var bg3 = document.getElementById("bg3");
var bg4 = document.getElementById("bg4");
var main = document.getElementById("main");
var gear1 = document.getElementById("gear1");
var gear2 = document.getElementById("gear2");
var gear3 = document.getElementById("gear3");
var mcontents = document.getElementById("mcontents")

bg1.addEventListener("click", function(){
    document.getElementById("title").innerHTML="Head Gear"
    main.style.display="block";
    gear1.src = "imgs/gears/h1.png";
    gear2.src = "imgs/gears/h2.png";
    gear3.src = "imgs/gears/h3.png";

});

bg2.addEventListener("click", function(){
    document.getElementById("title").innerHTML="Body Gear"
    gear1.src = "imgs/gears/b1.png";
    gear2.src = "imgs/gears/b2.png";
    gear3.src = "imgs/gears/b3.png";
    main.style.display="block";
});

bg3.addEventListener("click", function(){
    document.getElementById("title").innerHTML="Leg Gear"
    gear1.src = "imgs/gears/l1.png";
    gear2.src = "imgs/gears/l2.png";
    gear3.src = "imgs/gears/l3.png";
    main.style.display="block";
});

bg4.addEventListener("click", function(){
    document.getElementById("title").innerHTML="Feet Gear"
    gear1.src = "imgs/gears/f1.png";
    gear2.src = "imgs/gears/f2.png";
    gear3.src = "imgs/gears/f3.png";
    main.style.display="block";
});


main.addEventListener("click", function(){
    main.style.display="None";

});