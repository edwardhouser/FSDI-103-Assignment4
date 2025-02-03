
function convert(){
    let temperature = Number(prompt("Please enter a temperature in Degrees C"))
    let FAHR = temperature*(9/5)+32
    document.getElementById("output").innerHTML=(`${temperature} in Celsius equals ${FAHR} in Fahrenheit`)
}


