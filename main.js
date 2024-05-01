//  TypeScript Coding.
let message = "Hello World";
console.log(message);
//Example: TypeScript and Object Orientation
class Greeting {
    greet() {
        console.log("Hello World!!!");
    }
}
let obj = new Greeting();
obj.greet();
//  Example: Variables in TypeScript
let name = "Sultan";
let score1 = 60;
let score2 = 42.50;
let sum = score1 + score2;
console.log("name" + name);
console.log("first score: " + score1);
console.log("second score: " + score2);
console.log("sum of the scores: " + sum);
//    Type Assertion in TypeScript
let str = '1';
let str2 = str; //str is now of type number 
console.log(typeof (str2));
//     The negation operator (-)
//     Changes the sign of a value. Let’s take an example.
let x = 4;
let y = -x;
console.log("value of x: ", x); //outputs 4 
console.log("value of y: ", y); //outputs -4
//      String Operators: Concatenation operator (+)
let msg = "hello" + "world";
console.log(msg);
//       Conditional Operator (?)
var num = -2;
var result = num > 0 ? "positive" : "non-positive";
console.log(result); //  output    non-positive
//      Type Operators   or    typeof operator
var num = 12;
console.log(typeof num); //output: number
//       Example: while versus do..while
let n = 5;
while (n > 5) {
    console.log("Entered while");
}
do {
    console.log("Entered do…while");
} while (n > 5); //   output     Entered do…while
//         The break Statement  exits the loop
let i = 1;
while (i <= 10) {
    if (i % 5 == 0) {
        console.log("The first multiple of 5  between 1 and 10 is : " + i);
        break; //exit the loop if the first multiple is found 
    }
    i++;
} //outputs 5 and exits the loop
//      The continue Statement
var num = 0;
let count = 0;
for (num = 0; num <= 20; num++) {
    if (num % 2 == 0) {
        continue;
    }
    count++;
}
console.log(" The count of odd values between 0 and 20 is: " + count); //outputs 10 
/*      Example: Infinite loop using for loop
for(;;) {
    console.log(“This is an endless loop”)
 }
*/
/*

Example: Infinite loop using while loop
while(true) {
   console.log(“This is an endless loop”)
}

*/
//      TypeScript - Functions   (Optional Parameters)
function disp_details(id, name, mail_id) {
    console.log("ID:", id);
    console.log("Name", name);
    if (mail_id != undefined)
        console.log("Email Id", mail_id);
}
disp_details(123, "John");
disp_details(111, "mary", "mary@xyz.com");
//       Example: Rest Parameters
function addNumbers(...nums) {
    let i;
    let sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
//       Example: Default parameters
function calculate_discount(price, rate = 0.50) {
    let discount = price * rate;
    console.log("Discount Amount: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);
//     Example ─ A Simple Anonymous function
let mes = function () {
    return "hello world";
};
console.log(mes());
//      Example ─ Anonymous function with parameters
let res = function (a, b) {
    return a * b;
};
console.log(res(12, 2)); //   output   24
//         The Function Constructor
let myFunction = new Function("a", "b", "return a * b");
let z = myFunction(4, 3);
console.log(z);
/*/      Recursion and TypeScript Functions

function factorial(number) {
    if (number <= 0) { // termination case
        return 1;
    }
    else {
        return (number * factorial(number - 1)); // function invokes itself
    }
}
;
console.log(factorial(6)); // outputs 720   */
//        Example: Anonymous Recursive Function
(function () {
    var x = "Hello!!";
    console.log(x);
})(); // the function invokes itself using a pair of parentheses ()
//        Example: Lambda Expression
var name2 = (x) => 10 + x;
console.log(name2(100)); //outputs 110 
//       Example: Lambda statement
var name1 = (x) => {
    x = 10 + x;
    console.log(x);
};
name1(100); // output    110
//          Syntactic Variations
//          Parameter type Inference
var func = (x) => {
    if (typeof x == "number") {
        console.log(x + " is numeric");
    }
    else if (typeof x == "string") {
        console.log(x + " is a string");
    }
};
func(12);
func("Tom");
//     Optional parentheses for a single parameter
var display = (a) => {
    console.log("The function got " + a);
};
display(12);
//    Optional braces for a single statement, Empty parentheses for no parameter
var disp = () => {
    console.log("Function invoked");
};
disp();
export {};
