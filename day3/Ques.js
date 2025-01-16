// //-->1. Write a function calculateDiscount that takes two parameters: price 
// and discount (with a default value of 10). 
// The function should return the final price after applying the discount.

function calculateDiscount(price,discount=10){
    let fPrice=price -(price *discount/100);
    return fPrice;
}
console.log(calculateDiscount(100));
console.log(calculateDiscount(80,20));

// // output:
// 90
// 64

// //-->2. Create a function mergeArrays that takes two arrays as parameters and
// returns a new array that combines both arrays using the spread operator.

function mergeArrays(a,b) {
    return [...a,...b];
}

const a=[1, 2, 3];
const b=[4, 5, 6];
console.log(mergeArrays(a, b));

// // output:
// [1, 2, 3, 4, 5, 6]




// //-->3. Write a function logArguments that takes any number of arguments and
// logs them to the console. Use rest parameters to collect the arguments.

function logArguments(...args){
    console.log(args)


}

logArguments(1, 2, 3);          
logArguments(a, 'b', 'c');    
logArguments(true, 42, 'hello');

// Output: [1, 2, 3]
// [ [ 1, 2, 3 ], 'b', 'c' ]
// [ true, 42, 'hello' ]




// //-->4. Create a function createMessage that takes a default message and 
// an indefinite number of names. The function should return an array of personalized messages 
// for each name.

function createMessage(defaultMessage, ...names) {
    return names.map(name =>`${defaultMessage} ${name}.`);
}

let messages = createMessage('Hello','Vineet','Gaurav','Devansh');
console.log(messages); 

// //output:
[ 'Hello Vineet.', 'Hello Gaurav.', 'Hello Devansh.' ]




// //-->5. Define a function sum that takes three numbers as parameters and 
// returns their sum. Use the spread operator to call this function with 
// an array of numbers.


function sum(x,y,z){
    return x+y+z;
}
const num=[5,6,7];
console.log(sum(...num))

// output:
// 18




// //-->6. Write a function createUserProfile that takes three parameters: 
// username, age (defaulting to 25), and country (defaulting to "Unknown"). 
// Return an object with these properties.


function createUserProfile(username, age=25, country="unknown"){
    return {username,age,country};

}
let userProfile = createUserProfile('Vineet',undefined,"India");
console.log(userProfile);

// output: { username: 'Vineet', age: 25, country: 'India' }
