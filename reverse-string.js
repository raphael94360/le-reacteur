const reverseString = (string) => {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    // console.log(string[i]);
    reversed = reversed + string.charAt(i);
  }
  return reversed;
};

console.log(reverseString("Le Reacteur")); // ruetcaeR eL
console.log(reverseString("I Love Code")); // edoC evoL I
