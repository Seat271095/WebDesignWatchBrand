var prev = document.getElementById("prev");
var next = document.getElementById("next");
var hero = document.getElementById("container");

var backgroundImg = new Array(
"IMG/1.jpg",
"IMG/2.jpg",
"IMG/3.jpg",
);

let i = 0;
next.onclick = function(){

    if(i < 2){
    container.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
    i++;
    }
}

prev.onclick = function(){

    if(i > 0){
    container.style.backgroundImage = 'url("'+backgroundImg[i-1]+'")';
    i--;
    }
}


function menuToggle(){
    const toggleMenu = document.querySelector('.toggleMenu');
    toggleMenu.classList.toggle('active');

    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
}