// Challenges Set A
// Challenge 1
// Create a function createFunction that creates and returns a function.When that created function is called, it should print "hello".

function createFunction() {
  let hello = "hello";
  function holla() {
    console.log(hello);
  }
  return holla;
}
var function1 = createFunction();
// now we'll call the function we just created
function1(); //should console.log('hello');

// When you think you completed createFunction, un - comment out those lines in the code and run it to see if it works.

//   Challenge 2
// Create a function createFunctionPrinter that accepts one input and returns a function.When that created function is called, it should print out the input that was used when the function was created.

function createFunctionPrinter(input) {
  function output() {
    console.log(input);
  }
  return output;
}
var printSample = createFunctionPrinter("sample");

var printHello = createFunctionPrinter("hello");
// now we'll call the functions we just created printSample();
// should console.log('sample'); printHello();
// should console.log('hello');
printHello();
printSample();

// Challenge 3
// Examine the code for the outer function.Notice that we are returning a function and that function is using variables that are outside of its scope.Uncomment those lines of code.Try to deduce the output before executing.

function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// // Uncomment each of these lines one by one.
// // Before your do, guess what will be logged from each function call.

willCounter(); // counter 1
willCounter(); // counter 2
willCounter(); // counter 3

jasCounter(); // counter 1
willCounter(); // counter 4
