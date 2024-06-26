// Lesson: Writing your first tests
export function max(a, b) {
  if (a > b) return a;
  else if (b > a) return b;
  return a;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}

const avg = (number) =>{

  if(number.length === 0) return NaN;
  const sum = number.reduce((sum,current)=> sum+current,0);

  return sum/number.length;
}

function factorial(number){
  if(number < 0) return "invalid";
  else if(number === 0 || number === 1) return 1;
  
  return number * factorial(number-1);
}
export {avg,factorial}