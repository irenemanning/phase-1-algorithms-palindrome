// function isPalindrome(string) {
//   string = string.toLowerCase()
//   for (let i =0; i<string.length; i+=1) {
//     if (string[i] !== string[string.length - 1 - i]) {
//       return false
//     }

//   }
//   return true

// }

function isPalindrome(string) {
  string.toLowerCase()
  let i = 0  //first index or first character
  let j = string.length - 1 //last character
  while (i<j) {  //n iterations as long i is less than j
    if (string[i] != string[j]) return false 
    i++
    j--
  }
  return true // returns true if we make it through entire string since it's a palindrome
}


/* 
  Add your pseudocode here
  initialize isPalindrome function that takes in a string

  iterate over each index of the string

  if the string is a palindrome, return true 

  otherwise, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
