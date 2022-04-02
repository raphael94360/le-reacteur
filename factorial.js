const factorial = (num) => {
  let total = 1; // et non zéro car multiplier un nombre par 0 donne toujours zéro !
  if (num >= 1 && num <= 18) {
    for (let i = 1; i <= num; i++) {
      total = total * i;
    }
    return total;
  } else {
    return "num n'est pas compris entre 1 et 18";
  }
};

console.log(factorial(18));
