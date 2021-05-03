

// Capture elements from HTML and Assign to variables
const input = document.querySelector('#input');
const buttonsSection = document.querySelector('#buttons');
const buttons = document.querySelectorAll('button');
const evaluate = document.querySelector('#calculate');
const clearButton = document.querySelector('#clear-display');

// log the all the buttons
// console.log(buttons);
// provide an event listener on to each of the buttons
buttons.forEach((btn)=>{
    btn.addEventListener('click',(event)=>{
        input.value = `${input.value}${event.target.innerText}`;
    })
})

// add the Event listener to the Equal sign Button
// When the equal sign button is clicked, then run the calculate Function
evaluate.addEventListener('click',()=>{
    calculate()
})



// calculate
function calculate(){

    let valueArray = input.value.split("");
    // this will repesent the index position of the symbol in the value array
    let index;
    // use a regular expression to identify the symbol in the value Array 
    // these are the symbols we are looking for(*,-,/,+)
    let regex = /[-+*/]/;
    // this operator variable will hold the type of the symbol in the value array
    let operator = null;

    // check whether the input containers the symbol
    // if it contains the symbol then assign that symbol to the operator variable
    if(regex.test(valueArray.join(""))){
        operator = valueArray.join("").match(regex)[0];
    }


    // use the switch function to check for various cases of the symbol
    switch(operator){
            case "+":
                // do this if the symbol is "+" (plus)
                index = valueArray.indexOf("+");
                input.value = (parseFloat(valueArray.slice(0,index).join("")) + parseFloat(valueArray.slice(index+1).join(""))); 
                break;

            case "-":
                // do this when the symbol is "-" (minus)
                index = valueArray.indexOf("-");
                input.value = (parseFloat(valueArray.slice(0,index).join("")) - parseFloat(valueArray.slice(index+1).join("")));
                break;

            case "*":
                // do this when the symbol is "*" (multiply)
                index = valueArray.indexOf("*");
                input.value = (parseFloat(valueArray.slice(0,index).join("")) * parseFloat(valueArray.slice(index+1).join("")));
                break;

            case "/":
                // do this when the symbol is "/" (Divide)
                index = valueArray.indexOf("/");
                input.value = (parseFloat(valueArray.slice(0,index).join("")) / parseFloat(valueArray.slice(index+1).join("")));
                break;

            default:
                // return the number if there is no operator added
                input.value = parseFloat(valueArray.join(''));
        }


}

// clear the Display to receive new input

clearButton.addEventListener('click',()=>{
    input.value = "";
    input.focus();
})


