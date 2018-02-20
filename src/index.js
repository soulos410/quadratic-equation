module.exports = function solveEquation(equation) {
  let inputArray = equation.split(" "),a = 1, b = 1, c = 1, discriminant = 1, firstRoot = 1 , secondRoot = 1;

  a = parseInt(inputArray[0]);

  if(inputArray[3] === '-') {
  	b = -(inputArray[4]);
  }
  else { 
  	b = inputArray[4];
  }
  if(inputArray[7] === '-'){
  	c = -(inputArray[8]);
  }
  else {
  	c = inputArray[8];
  }
  discriminant = (Math.pow(b,2)) - (4 * a * c);
  firstRoot = Math.round((-b + Math.sqrt(discriminant)) / (2 * a));
  secondRoot = Math.round((-b - Math.sqrt(discriminant)) / (2 * a));

  return secondRoot < firstRoot ? [secondRoot,firstRoot] : [firstRoot, secondRoot];
}