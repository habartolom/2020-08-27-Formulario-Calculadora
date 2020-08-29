const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const divAnswer = document.getElementById("answer")

const sum = document.getElementById("sum");
const substraction = document.getElementById("substraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");

sum.addEventListener("click", ()=>{
    let num1 = parseFloat(inputNum1.value);
    let num2 = parseFloat(inputNum2.value);

    let answer = num1 + num2;
    divAnswer.innerHTML = answer;
});

substraction.addEventListener("click", ()=>{
    let num1 = parseFloat(inputNum1.value);
    let num2 = parseFloat(inputNum2.value);

    let answer = num1 - num2;
    divAnswer.innerHTML = answer;
});

multiplication.addEventListener("click", ()=>{
    let num1 = parseFloat(inputNum1.value);
    let num2 = parseFloat(inputNum2.value);

    let answer = num1 * num2;
    divAnswer.innerHTML = answer;
});

division.addEventListener("click", ()=>{
    let num1 = parseFloat(inputNum1.value);
    let num2 = parseFloat(inputNum2.value);

    let answer = num1 / num2;
    divAnswer.innerHTML = answer;
});