function convertTempRange(){
    let dropdown = document.getElementById("conversion").value
    let startValue = Number(prompt("Please enter a starting temperature"))
    let endValue = Number(prompt("Please enter an ending temperature"))
    console.log(dropdown);
    console.log(startValue);
    console.log(endValue);
    for(let i=startValue; i<=endValue;i++){
        if(dropdown="f2c"){
            console.log(`${i} Fahrenheit is ${(i-32)*(5/9)} C`)
        }
        else{
            console.log(`${i} Celsius is ${i*(5/9)+32} F`)
        }
    }
    for(let i=startValue; i<=endValue;i++){
        if(dropdown="f2c"){
            document.getElementById("output").innerHTML+=(`<p> ${i} Fahrenheit is ${(i-32)*(5/9)} C </p>`)
        }
        else{
            document.getElementById("output").innerHTML+=(`<p> ${i} Celsius is ${i*(5/9)+32} F </p>`)
        }
    }

}