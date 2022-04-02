const palindrome = (str) => {
  let cleanedStr = "";
  let reversed = "";
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    if (str[i] !== " ") {
      // si le caractère n'est pas un espace
      cleanedStr = cleanedStr + str[i].toLowerCase(); // je rajoute la lettre convertie en minuscule
    }
  }
  //   console.log(cleanedStr);

  for (let i = str.length - 1; i >= 0; i--) {
    // console.log(str[i]);
    if (str[i] !== " ") {
      // si le caractère n'est pas un espace
      reversed = reversed + str[i].toLowerCase(); // je rajoute la lettre convertie en minuscule
    }
  }
  //   console.log(reversed);

  if (reversed === cleanedStr) {
    return true;
  } else {
    return false;
  }
};

console.log(palindrome("Un! bon snob nu"));
