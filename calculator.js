//enter any of the operators '+', '-', '/', '*'
let opr = prompt("operator: ")

//enter any numerical value
let num1 = prompt("1st Number: ")

//enter any numerical value
let num2 = prompt("2nd Numebr: ")

String.repeat(4)
//Addition
if (opr == "+") {
    console.log (num1 + num2)
}

//Multiplication
else if (opr == "*"){
    console.log (num1 * num2)
}

//Subtraction
else if (opr == "-"){
    console.log (num1 - num2)
}

//Division
else if (opr == "/"){
    console.log (num1 / num2)
}

//Alternative
else{
    console.log ("input a correct value")
}
