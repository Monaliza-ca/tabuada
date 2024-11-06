// elements
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTable = document.querySelector("#multiplication-operations")

// functions
const creatTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";
};


// events
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();
   
    const multiplicationNumber = +numberInput.value;
   
    const multiplicatorNumber = multiplicationInput.value;
   
    if (!multiplicationNumber || !multiplicatorNumber) return;

    console.log(multiplicationNumber, multiplicatorNumber);
});