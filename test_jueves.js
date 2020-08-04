// Arrow Functions vs Functions
class Counter {
  constructor() {
    this.count = 1;
  }

  // countUp() {
  //   setInterval(function() {
  //     console.log(this.count++); // <-- Trouble!, this rebinded to the Window in browsers
  //   }, 1000);
  // }

  countUp() {
    setInterval(() => {
      console.log(this.count++); // <-- this is not rebinded
    }, 10000);
  }
}
let myCounter = new Counter();
myCounter.countUp();

// Optional parameters
function inc(number, increment = 1) {
  return number + increment;
}
console.log(inc(2, 2)); // 4
console.log(inc(2)); // 3

//
const func = () => func;
console.log(func("algo"));

//
class LexicallyBound {

    getFunction() {
        // Returns an anonymous function, that returns an instance of the same class
      return () => {
        return new LexicallyBound(); /*changes might go here*/
      };
    }

    getArgumentsFunction() {
      return function() { return this }; /*or here*/
    }
  }

let bound = new LexicallyBound();
let fn = bound.getFunction();
let anotherObj = {};
console.log(fn.call(anotherObj));

//      expect(fn()).toBe(bound);

// console.log(bound);
// console.log(fn());
// console.log("algo");