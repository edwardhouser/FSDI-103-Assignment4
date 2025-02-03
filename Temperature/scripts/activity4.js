let two = 2
let multiplier = 0
let array

/* loop needs three things, a start value, a stop value, and an interval
the i is used as normal because of summation in math*/

function multTable(){
let mult= Number(prompt("What number would you like the multiplication table for?"));
for(let i=1; i<=10; i++){
    document.write(`<p> ${mult} X  ${i} = ${mult*i} </p>`)
}
}

/* multTable(); */

function challenge(){
    for(let i=1; i<=100; i++){
        if(i==50){
            console.log("I found it!!");
        }else{
            console.log(` ${i} `);
        }
    }
}

//Arrays
//store several things on the same variable

let students = ["Ed", "Joseph", "Gabriel", "Robert"]
let ages = [41, 26, 35, 38]

for(let i=0, i<students.length, i++){
    document.getElementById("studentList").innerHTML+=
    <div class="student">
        <p>${students[i]}</p>
        <p>${ages[i]}</p>
    </div>
}
