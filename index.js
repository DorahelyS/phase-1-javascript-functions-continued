
// I want to creat a function with a default 
function saturdayFun(activity = 'roller-skate'){
return `This Saturday, I want to ${activity}!`
}



function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}
/*
function wrapAdjective(special = '*'){
//need to wrap * around adj *
return function 
}

//"You are *a hard worker*!"



let result = wrapAdjective('*')
let emphatic = result("a hard worker")
*/


// ---------- end of lab ---------------

// ----------- beginning of lesson notes --------------------

/*
//here we have a function with no parameters & arguments
function razzle() {
  return("You've been razzled!");
}
//razzle() no arguments
// razzle() type to console outout will be "You've been razzled!"
*/

/* 
// below we have a function with one parameter and argument
function razzle(occupation) {
    return(`You are a ${occupation}`)
    //console.log(`You are a ${occupation}`)
  }
//this is the argument
//razzle('gymnast')
*/

/*
// here we are giving a function a default argument lawyer is Billie and target is em
function razzle(lawyer = "Billy", target = "'em") {
  //console.log(`${lawyer} razzle-dazzles ${target}!`);
  return (`${lawyer} razzle-dazzles ${target}!`);
}
//razzle(); //=> Billy razzle-dazzles 'em!
//razzle("Methuselah", "T'challah"); //=> Methuselah razzle-dazzles T'challah!
*/

//hoisting is calling a function before they appear in the code.
//function must be defined using a function declaration not an arrow function!
/*
// anon function ex:
const sayHi = function(){
    console.log('Hello World')
}
*/
// ^ note that the function has no name ... so how do we call them??
// 1st way is through a callback function 
// which means we store it away and then call it back later to execute
// 2nd way is by declaring a variable and assigning the function as its value
// we know that a function is a value which is an expression which means we can assign it to a varible
//ex:

/*
const fn = function () {
    console.log("You can do it");
  };
// so if I want to call the function just do:
//fn()
*/

/*
const o = {
    name: "Dorahely",
    invoke(){
        return "You got this"
    }
}
// o.invoke() // will output "You got this"
*/

// 3rd way Another way to invoke an anonymous function 
//is by creating what's known as an immediately-invoked function expression (IIFE).
/*
(function (baseNumber) {
  return baseNumber + 3;
})(2); //=> 5
*/


// what is function level scope?
//This means that if a function is defined inside another function, 
//the inner function has access to all the parameters of, as well as any variables defined in, the outer function.
/*
function outer(greeting, msg = "It's a fine day to learn") {
  const innerFunction = function (name, lang = "Python") {
    return `${greeting}, ${name}! ${msg} ${lang}`; 
  };
  return innerFunction("student", "JavaScript"); 
}

outer("Hello"); // 1
//=> "Hello, student! It's a fine day to learn JavaScript"
*/

// can tighten it up
/*
function outer(greeting, msg = "It's a fine day to learn") {
  return function (name, lang = "Python") {
    return `${greeting}, ${name}! ${msg} ${lang}`;
  };
}

outer("Hello")("student", "JavaScript");
//=> "Hello, student! It's a fine day to learn JavaScript"
*/

/*
function demoChain(name) {
  const part1 = "hi";
  return function () {
    const part2 = "there";
    return function () {
      console.log(`${part1.toUpperCase()} ${part2} ${name}`);
    };
  };
}

demoChain("Dr. Stephen Strange")()(); //=> HI there Dr. Stephen Strange
*/

function wrapAdjective(character = '*'){
    return function(phrase = 'amazing'){
        return `You are ${character}${phrase}${character}!`
    }
}
// wrapAdjective()()
// wrapAdjective("%")("a dedicated programmer") "You are %a dedicated programmer%!"







/*
let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }
  */