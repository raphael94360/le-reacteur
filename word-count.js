const wordCount = (str) => {
  str = str.trim();
  if (str.length > 0) {
    let numberOfWords = 0;
    for (let i = 0; i < str.length; i++) {
      // console.log(str[i]);
      if (str[i] === " ") {
        // console.log("Il y a un espace, donc on change de mot !");
        numberOfWords++; // équivaut à numberOfWords = numberOfWords + 1
      }
    }
    return numberOfWords + 1;
  } else {
    return 0;
  }
};

console.log(wordCount("ugug hguhg juhghgvh"));
