const countValue = document.querySelector("#counter")
const decrese=document.querySelector("[data-decrese]")
const increment = () => {
    //get the value from UI
    let value = parseInt(countValue.innerText);
    //Update the value
    value = value + 1;
    //set the value onto UI
    countValue.innerText = value;
};

decrese.addEventListener('click',() => {
    //get the value from UI
    let value = parseInt(countValue.innerText);
    //Update the value
    value = value - 1;
    //set the value onto UI
    countValue.innerText = value;
    });



