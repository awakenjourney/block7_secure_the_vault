/* Pseudocode for this workshop:
1. assign let variables to 3 different numbers,
2. use alert function to show message to user,
3. do arithmetic operation to get the vault combination of 10-40-39,
4. show the result of the combination in new variable,
5. execute the alert function to show the vault combination to the user,
6. also print out the combination in the console.

*/

// assign variables with numbers

let num1 = 5;
let num2 = 4;
let num3 = 11;

// show message to user with alert function
function greeting() {
  alert(
    "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
  );
}

// generate the vault keys with arithmetic operation
const code1 = num3 - num1 + num2;
const code2 = num1 * num2 * 2;
const code3 = num1 * 10 - num3;

// exucute the greeting function to run the message
greeting();

// design variable to get the vault code
let vault_key = code1 + "-" + code2 + "-" + code3;

// use alert funch to show the vault code to the user
function vault_code() {
  alert(vault_key);
}

vault_code();

// also show the vault code in the console
console.log(vault_key);
