// 1)იპოვეთ ყველაზე დიდი რიცხვი მოცემულ მასივში let arr = [1, 3, 5, 7, 2];

function findMax(numArray) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > max) {
            max = numArray[i];
        }
    }
    return max;
}

let myNumArray = [1, 3, 5, 7, 2];
document.write("<h2>First Challenge</h2>");
document.write("Max number: " + findMax(myNumArray) + "<br><br>");

// Find max function with forEach

function findMaxWithForEach(numArray) {
    let max = Number.MIN_SAFE_INTEGER;
    numArray.forEach(num => {
        if (num > max) {
            max = num;
        }
    })
    return max;
}

let myNumArray1 = [1, 3, 5, 7, 2];
document.write("<h2>First Challenge with forEach</h2>");
document.write("Max number: " + findMax(myNumArray1) + "<br><br>");


// 2) შეაბრუნეთ reverse მასივი let arr = [1, 2, 3, 4, 5]; 

function reverseArray(myArray) {
    return myArray.reverse();
}

let myNumArr = [1, 2, 3, 4, 5];
document.write("<h2>Second Challenge</h2>");
document.write("Reversed Array: " + reverseArray(myNumArr) + "<br><br>");

// With for loop
function reverseArrayWithForLoop(myArray) {
    let reverseArray = [];
    for (let i = myArray.length - 1; i >= 0; i--) {
        reverseArray.push(myArray[i]);
    }
    return reverseArray;
}


let myNumArr1 = [1, 2, 3, 4, 5];
document.write("<h2>Second Challenge with For Loop</h2>");
document.write("Reversed Array: " + reverseArrayWithForLoop(myNumArr1) + "<br><br>");


// 3) მოცემულ ერეიში დააჯამეთ მონაცემები let arr = [1, 2, 3, 4, 5];

function findSum(myArray) {
    let sum = 0;
    myArray.forEach(num => {
        sum += num
    })
    return sum;
}

let myNumArr2 = [1, 2, 3, 4, 5];
document.write("<h2>Third Challenge</h2>");
document.write("Sum of the numbers: " + findSum(myNumArr2) + "<br><br>");

// 3) With Reduce 
let myNumArr3 = [1, 2, 3, 4, 5];
let sum = myNumArr3.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

document.write("<h2>Third Challenge with Reduce</h2>");
document.write("Sum of the numbers: " + sum + "<br><br>");


/*
4) მოცემული ორი ერეიდან იპოვეთ მსგავსი რიცხვები let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
*/

function findCommonNumbers(firstArr, secondArr) {
    let newArray = [];

    firstArr.forEach(item => {
        if (secondArr.includes(item)) {
            newArray.push(item);
        }
    })
    return newArray;
}

let firstArr = [1, 2, 3, 4];
let secondArr = [3, 4, 5, 6];

document.write("<h2>Fourth Challenge</h2>");
document.write("Common Numbers are: " + findCommonNumbers(firstArr, secondArr) + "<br><br>");

/*
5) შექმენით ფუნქცია სადაც ერთ ფუნქციას გამოიყენებთ მოერე ფუნქციის 
პარამეტრად და ifelse მეშვეობით დაბეჭდეთ რამე ინფორმაცია 
*/


function display(price, isExpensive) {
    return isExpensive(price) ? "Too expensive!" : "Good Price!";
}

function isExpensive(itemPrice) {
    return itemPrice >= 50;
}

document.write("<h2>Fifth Challenge</h2>");
document.write("Function as a parameter: " + display(100, isExpensive) + "<br><br>");