console.log("1-----");
console.log(teddy);
// console.log(tmp);
// console.log(tmp2);
console.log(sing());

var teddy = 100;
let tmp = "here";
const tmp2 = "haha";
function sing() {
    console.log("i am a function");
}

// In creation phase, when it allocate memory for the current context,

// it would be like
// var teddy = undefined;
// function sing () {
// .....}

// variables are partially hoisted (let and const hoist but you cannot access them before the actual declaration is evaluated at runtime)
// but functions are fully hoisted
