var rad1 = document.getElementById("rh");
var rad2 = document.getElementById("rb");
var rad3 = document.getElementById("rl");
var rad4 = document.getElementById("rf");

var next = document.getElementById("next");
var prev = document.getElementById("prev");

var head = 1;
var body = 1;
var leg = 1;
var feet = 1;

var image1 = document.getElementById("imageH");
var image2 = document.getElementById("imageB");
var image3 = document.getElementById("imageL");
var image4 = document.getElementById("imageF");

var text = document.getElementById("textBox")

next.addEventListener("click", function(){
    if (rad1.checked) {
        if (head == 1) {
            head += 1;
            image1.src = "imgs/gears/h"+head+".png";
        } else if (head == 2){
            head += 1;
            image1.src = "imgs/gears/h"+head+".png";
        } else if (head == 3){
            head = 1;
            image1.src = "imgs/gears/h"+head+".png";
        }
    } else if (rad2.checked){
        if (body == 1) {
            body += 1;
            image2.src = "imgs/gears/b"+body+".png";
        } else if (body == 2){
            body += 1;
            image2.src = "imgs/gears/b"+body+".png";
        } else if (body == 3){
            body = 1;
            image2.src = "imgs/gears/b"+body+".png";
        }
    } else if (rad3.checked){
        if (leg == 1) {
            leg += 1;
            image3.src = "imgs/gears/l"+leg+".png";
        } else if (leg == 2){
            leg += 1;
            image3.src = "imgs/gears/l"+leg+".png";
        } else if (leg == 3){
            leg = 1;
            image3.src = "imgs/gears/l"+leg+".png";
        }
    } else if (rad4.checked){
        if (feet == 1) {
            feet += 1;
            image4.src = "imgs/gears/f"+feet+".png";
        } else if (feet == 2){
            feet += 1;
            image4.src = "imgs/gears/f"+feet+".png";
        } else if (feet == 3){
            feet = 1;
            image4.src = "imgs/gears/f"+feet+".png";
        } else{}
    } else {
        alert("Choose an option")
    }
});

prev.addEventListener("click", function(){
    if (rad1.checked) {
        if (head == 1) {
            head = 3;
            image1.src = "imgs/gears/h"+head+".png";
        } else if (head == 2){
            head -= 1;
            image1.src = "imgs/gears/h"+head+".png";
        } else if (head == 3){
            head -= 1;
            image1.src = "imgs/gears/h"+head+".png";
        }
    } else if (rad2.checked){
        if (body == 1) {
            body = 3;
            image2.src = "imgs/gears/b"+body+".png";
        } else if (body == 2){
            body -= 1;
            image2.src = "imgs/gears/b"+body+".png";
        } else if (body == 3){
            body -= 1;
            image2.src = "imgs/gears/b"+body+".png";
        }
    } else if (rad3.checked){
        if (leg == 1) {
            leg = 3;
            image3.src = "imgs/gears/l"+leg+".png";
        } else if (leg == 2){
            leg -= 1;
            image3.src = "imgs/gears/l"+leg+".png";
        } else if (leg == 3){
            leg -= 1;
            image3.src = "imgs/gears/l"+leg+".png";
        }
    } else if (rad4.checked){
        if (feet == 1) {
            feet = 3;
            image4.src = "imgs/gears/f"+feet+".png";
        } else if (feet == 2){
            feet -= 1;
            image4.src = "imgs/gears/f"+feet+".png";
        } else if (feet == 3){
            feet -= 1;
            image4.src = "imgs/gears/f"+feet+".png";
        } else{}
    } else {
        alert("Choose an option")
    }
});

text.addEventListener("keyup", function(ev){
    if (ev.keyCode == 13){
        if (text.value == "combo1"){
            head = 1;
            body = 1;
            leg = 1;
            feet = 1;
            image1.src = "imgs/gears/h1.png";
            image2.src = "imgs/gears/b1.png";
            image3.src = "imgs/gears/l1.png";
            image4.src = "imgs/gears/f1.png";
        } else if (text.value == "combo2"){
            head = 2;
            body = 2;
            leg = 2;
            feet = 2;
            image1.src = "imgs/gears/h2.png";
            image2.src = "imgs/gears/b2.png";
            image3.src = "imgs/gears/l2.png";
            image4.src = "imgs/gears/f2.png";
        } else if (text.value == "combo3") {
            head = 3;
            body = 3;
            leg = 3;
            feet = 3;
            image1.src = "imgs/gears/h3.png";
            image2.src = "imgs/gears/b3.png";
            image3.src = "imgs/gears/l3.png";
            image4.src = "imgs/gears/f3.png";
        } else if (text.value == "random") {
            head = Math.floor((Math.random() * 3) + 1);
            body = head;
            leg = head;
            feet = head;
            image1.src = "imgs/gears/h"+head+".png";
            image2.src = "imgs/gears/b"+body+".png";
            image3.src = "imgs/gears/l"+leg+".png";
            image4.src = "imgs/gears/f"+feet+".png";
        }
    }
});