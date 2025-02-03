

function convertTemperature(){
    var dropdown = document.getElementById("conversion").value
    let temperature = Number(prompt("Please enter a temperature"))
    let FAHR = temperature*(9/5)+32
    let CELS = (temperature-32)*(5/9)
    if(dropdown == "c2f"){
        document.getElementById("output").innerHTML=(`${temperature} in Celsius equals ${FAHR} in Fahrenheit`)
    } else {
        document.getElementById("output").innerHTML=(`${temperature} in Fahrenheit equals ${CELS} in Celsius`)
    }
    console.log(dropdown);
    }
    




