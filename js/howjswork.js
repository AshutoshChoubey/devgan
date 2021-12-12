// console.log(a);//undefied
//  //Assign 5 to x
//  var a =4;
// console.log(a);
// b()
// function b() {
//    var a=6;
//     console.log(" b",a);//c in b , undefied
// }
// b();


var a = 1;
console.log(a); //1
b()
function b() {
    console.log("c in b",c);//c in b , undefied
    var c = 1;
    console.log("c in b",c); //c in b , 1

    console.log("a in b",a); //a in b , 10
   var a=10;
    console.log("a in b",a);// a in b , 10 

    function x() {
        console.log("c in x",c);//undefied
        console.log("c in x",a);
        var c = 1;
        console.log("c in x",c);//1
    }
    x();
}



// The environment in which your code is running is Execution context. It is created when your code is executed.

// Execution Context (Global), created by JS Engine contains 3 important things for you:

// Global object - window
// Special Object this
// Ref to outer environment
// Lets see a simple example to understand Global Execution Context:


// JS Engine performs following two steps to while executing any code:

// CREATION PHASE :

// JS Engine parses - run through your code & identifies variables & functions created by code (which will be used in execution phase)
// Setup memory space for Variables & Functions - "Hoisting"
// Hoisting - before your code is executed, the JS Engine set asides memory space for Var & Func used inside the code. These variables & functions comprise the Execution Context of any function that is be executed. All variables in JS are initially set to undefined.

// Execution PHASE: pretty simple to understand,

// When the code is executed line-by-line (by JS interpreeter) it can access the variables defined inside Execution Context
// variable assignment are done in this phase
// A new Execution Context is created whenever function invocation is there

// function b() {
//     console.log("c in b",c);//c in b , undefied
//     var c = 1;
//     console.log("c in b",c); //c in b , 1

//     console.log("a in b",a);
//    var a=10;
//     console.log("a in b",a);// a in b , 10 

//     function x() {
//         console.log("c in x",c);//undefied
//         console.log("c in x",a);//undefied
//         var c = 1;
//         console.log("c in x",c);//1
//     }
//     x();
// }


