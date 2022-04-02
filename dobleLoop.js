let string = "";
for (let i = 0; i < 6; i++) {
  if (i === 0) {
    string = string + "Z";
  } else {
    string = string + "O";
  }
  for (let j = 0; j < 6; j++) {
    string = string + "X";
  }
}

console.log(string);

// for (let i = 0; i < 7; i++) {
//   console.log("Coucou ! Tour n°" + i);
// }
