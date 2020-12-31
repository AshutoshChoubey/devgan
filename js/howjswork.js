console.log(a);// undefied
var a = 1;
console.log(a); // 1
b();// c var in b fun , undefined
// c var in b fun , 1
// e var in d func   in b fun, undefined
    //c  var in d func   in b fun, 1
    // e var in d func in b fun,1
    

    // e var in d func   in b fun, undefined
    //c  var in d func   in b fun, 1
    // e var in d func in b fun,1
function b() {
    console.log("c var in b fun", c);
    var c = 1;
    console.log("c var in b fun", c);
    d(); // e var in d func   in b fun, undefined
    //c  var in d func   in b fun, 1
    // e var in d func in b fun,1
    function d() {
        console.log("e var in d func  in b fun", e);
        var e = 1;
        console.log("c  var in d func   in b fun", c);
        console.log("e var in d func in b fun", e);
    }
    d()

}
b();
// c var in b fun , undefined
// c var in b fun , 1
// e var in d func   in b fun, undefined
    //c  var in d func   in b fun, 1
    // e var in d func in b fun,1
    

    // e var in d func   in b fun, undefined
    //c  var in d func   in b fun, 1
    // e var in d func in b fun,1
console.log(c);// referrence error not defined





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

