
/**While ECMAScript 6 was in development, there was widespread belief you should use
 let by default instead of var for variable declarations **/

var funcs = [];
//characteristics of var have long made creating functions inside loops problematic, because the loop variables are accessible from outside the scope of the loop.
for (var i = 0; i < 10; i++) {    
funcs.push(function() {        
     console.log(i);     
    });
}

funcs.forEach(function(func) {
        func();// outputs 10, change the var to let and see what hapens Fortunately, block-level binding with let and const in ECMAScript 6 can simplify this loop for you.
    });


////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

    var funcs = [];
    //developers use immediately invoked function expres-sions (IIFEs) inside loops to force a new copy of the variable they want to iterate over to be created,
    for (var i = 0; i < 10; i++) { 
        funcs.push((function(value) {       
             return function() {           
                  console.log(value);       
                 }}(i)));
                }
                
                console.log(".......................");
        funcs.forEach(function(func) { 
            func();     // outputs 0, then 1, then 2, up to 9
    })


/////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////


 var funcs = [],   
  object = {        
    a: true,       
    b: true,       
    c: true    
    };
   
    for (let key in object) { //hehehe replace the let with var and see what happens
        funcs.push(function() {   
            console.log(key);  
         });
    }
    console.log(".......................");
    funcs.forEach(function(func) {
        func();     // outputs "a", then "b", then "c"
    });

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
   //const Declarations in Loops
    var funcs = [], 
    object = { 
         a: true,
         b: true,
          c: true    
        };// doesn't cause an error

    for (const key in object) {

        funcs.push(function() { 
         console.log(key);    
        });
        }

    console.log(".......................");
     funcs.forEach(function(func) {
            func(); // outputs "a", then "b", then "c"
        });

        // var funcs = [];
        // throws an error after one iteration  when i++executes because it’s attempting to modify a constantsince(i) we cannot modify constant i
        // for (const i = 0; i < 10; i++) { 
        //     funcs.push(function() { 
        //         console.log(i); 
        //     });
        // }


///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////



