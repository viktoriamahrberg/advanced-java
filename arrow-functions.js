/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

        // function addTwoNumbers(a, b) {
        //    return a + b;
        //    }
        //    let sum = addTwoNumbers(1, 3);
        //    console.log(sum);
    
// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
return a + b;
}
let sum = addTwoNumbers(1, 3);
console.log(sum);


// Single Line Arrow Function With Parameters

const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(1, 3);
console.log(sum2);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello there');

const sayHello = () => console.log('hello');
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `
    <p>
    this is a message
    </p> `
)
console.log(returnMultipleLines());
