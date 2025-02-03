console.log("Conditionals")

let number1 = 45;
let number2 = 45;

if(number1==number2){
    console.log("The Values are Equal")

}

else{
    console.log("The Values are not equal")
}

let age=prompt("Please Enter your Age")

if(age < 13){
    console.log("You are a child")
}else if(age < 21){
    console.log("You are a teen")
}else if(age < 64){
    console.log("You are an adult")
}

else{
    console.log("You are a boomer")
}




if(age < 12){
    console.log("Your ticket is $5")
}else if(age < 18){
    console.log("Your ticket is $8")
}else if(age < 64){
    console.log("Your ticket is $10")
}

else{
    console.log("Boomer senior tickets are $7")
}


let currentTemp=prompt("Please enter current temp in degrees C");
let clothing;
let p=document.getElementById("weather");
p.classList.remove("hot, cold, normal")
if(currentTemp < 15){
    p.classList.add("cold")
    clothing="jacket"
}else if(currentTemp <25){
    p.classList.add("normal")
    clothing="sweater"
}
else{
    p.classList.add("hot")
    clothing="t-shirt"
}

console.log(`You should wear a  ${clothing}`)
document.getElementById("clothing").innerHTML="You should wear a " + clothing;