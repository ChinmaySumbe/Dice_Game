function randomNum(){
    return Math.floor(Math.random() * 6) + 1;
}

var number = randomNum();

var rand = "dice" + number + ".png";

var imgsrc = "images/" + rand;

var a = document.querySelectorAll("img")[0];

a.setAttribute("src", imgsrc);

var b = document.querySelectorAll("img")[1];

b.setAttribute("src", imgsrc);


var number2 = randomNum();

var rand2 = "dice" + number2 + ".png";

var imgsrc2 = "images/" + rand2;

var a2 = document.querySelectorAll("img")[0];

a2.setAttribute("src", imgsrc2);

if(number < number2){
    document.querySelector("h1").innerHTML = "🥳 Player 2 Wins The Game";
}else if(number > number2){
    document.querySelector("h1").innerHTML = "🥳 Player 1 Wins The Game";
}else {
    document.querySelector("h1").innerHTML = "Draw";
}