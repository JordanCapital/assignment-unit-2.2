// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// The string "Dane" is assigned to a variable called name.
// Using the if-else statement, we check if the value "Dane" is equal to "Mary"
// Dane is not equal to Mary,  the 'else' console log will be executed
// Console.log will print 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We define a varible 'secret' and variable 'code', and assign an integer '123'
// The 'if' conditional statement checks if 'code' is equal to 123, which is equal, the variable
// 'secret' is assigned to 'super'. 
// And the value 'code' multipies by 2
// Since 'code' is not greater than 250, console. log will print 'super' 

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We define 3 variables 'isStudent', 'age', and 'zip', which we assign 'true', 34, and 55407 respectively.
// A compound conditional if-else statement checks if 'isStudent' is 'true' and 'zip' is greater than 80000.
// The condition 'isStudent === false' or 'age < 30' is a logical OR statement, still nothing met here
// console.log output will be output 'Welcome to Prime' since 'isStudent' is equal to 'true'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//FIX - colorOne and colorTwo are interchanged, they should be colorOne = 'blue', and colorTwo = 'red'
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
// FIX - we set both colorOne = 'purple' and colorTwo = 'purple'
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
// FIX - time should not be set to a constant, because it cannot be reassigned again. Instead it should be 'let'

if (temp > 39 || time >= 4) {
// FIX - Logical OR '||'has been used instead of Logical AND '$$'
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
// Fix - You should use 'let' instead of 'const' incase you want to re-assign the variable.
const minAge = 21;
//  To check if age is equal or equal to minAge, it should be age >= minAge 
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

