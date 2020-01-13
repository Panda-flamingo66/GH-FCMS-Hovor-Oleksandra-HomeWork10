//Add
function add (a, b) {
  return a + b;
}

//Subtract
function sub (a, b) {
  return a - b;
}

//Multiply
function mult (a, b) {
  return a * b;
}

//Divide
function divide (a, b) {
  return a / b;
}

//Exponent
function expon (a, b) {
  let res=1;
  let i=1;
  if (b !== 0) {
    while (i<=b) {
      res = res*a;
      i += 1;
    }
  }
  return result;
}

//Square Root
function square (a) {
  return Math.sqrt (a);
}

//Cubic Root
function cubic (a) {
  return Math.cbrt (a);
}

//Cosinus
function cos (radians, radius) {
  return Math.cos (radians) * radius;
}

//Sinus
function sin (radians, radius) {
  return Math.sin (radians) * radius;
}

//Factorial
function fact (a) {
  let res=1;
  if (a===0) {
    res=0;
  } else {
    for (let i=1; i<=a; i++) {
      res=res*i;
    }
  }
  return result;
}