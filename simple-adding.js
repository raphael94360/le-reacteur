const simpleAdding = (num) => {
  let total = 0;
  if (num >= 1 && num <= 1000) {
    for (let i = 1; i <= num; i++) {
      total = total + i;
    }
  } else {
    return "num n'est pas compris entre 1 et 1000";
  }
  return total;
};

console.log(simpleAdding(1000));
