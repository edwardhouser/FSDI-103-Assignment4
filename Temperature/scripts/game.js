let position = 175;
let character = document.getElementById("character");

function moveLeft{
    if(position>0){
        position -=25;
        character.style.left = position + "25px";
    }
    console.log(position);
    
}

function moveRight{

}