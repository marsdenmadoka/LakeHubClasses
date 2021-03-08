//Default Parameter Expressions--You can, for example, execute a function to retrieve the default parameter value

function getValue() {   
 return 5;
 }

function add(first, second = getValue()) {   
    return first + second;
}
console.log(add(1, 1)); // getValue() is called only when add() is called without a second parameter  
console.log(add(1)); //Here, if the last argument isn’t provided, the function getValue() is called to retrieve the
console.log(`..............................\n..............................`);
///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

let value = 6;

function getValuea() {   
    return value++;
}

function adda(first, second = getValuea()) {
return first + second;
}
console.log(adda(1, 1));     // 2
console.log(adda(1));        // 6
console.log(adda(1));       //7, value begins as 5 and increments each time getValue()is called.
console.log(`..............................\n..............................`);


///////////////////////////////////////////////////////////////////////////////////////////////////////
//You can use a previ-ous parameter as the default for a later parameter.
function add(first, second = first) {   //the parameter second is given a default value of first 
     return first + second;
    }
    console.log(add(1, 1));  // 2
    console.log(add(1));      //2
    console.log(`..............................\n..............................`);

    ////////////////////////////////////////////////////////////////////

    function getValueb(value) {    
        return value + 5;
    }

    function addb(first, second = getValueb(first)) { //second = 1+5 //sets second equal to the value returned by getValue(first),
            return first + second;
        }

    console.log(addb(1, 1));  // 2
    console.log(addb(1));   // 7
///////////////////////////////////////////////////
//////////////////////////////////////////////
console.log(`...........using the spread operator.............\n..............................`);
    
//using the spread operator

    let values = [25, 50, 75, 100]// equivalent to//
     //console.log(Math.max(25, 50, 75, 100));
     console.log(Math.max(...values));      //getting themax value

//48Chapter 3You can mix and match the spread operator with other arguments as well. Suppose you want the smallest number returned from Math.max() to be 0 
     let valuese = [-25, -50, -75, -100]
     console.log(Math.max(...valuese, 0));
     console.log(`.......................\n..............................`);
     
     //////////////////////////////
     ///////////////////////////////////
     //BLOCK LEVEL FUNCTIONs
    if (true) {  

    console.log(typeof doSomething);  // "function"

        function doSomething() {      

        }   

    doSomething();
}

 console.log(typeof doSomething);//

///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
 console.log(`.........Arrow Functions..........\n..............................`);
 //ARROW FUNCTIONS
 let reflect = value => value;//arrow function// effectively equivalent to:
 //also same as
 let reflect = function(value) { //normal function
         return value;
        };




let sum = (num1, num2) => num1 + num2;//arrow function // effectively equivalent to:
let sum = function(num1, num2) {  //normal function
      return num1 + num2;
    };


    let getName = () => "Nicholas";//arrow function with no arguments// effectively equivalent to:
    let getName = function() {
            return "Nicholas";
        };


//an arrow function that wants to return an object literal outside a function body must wrap the literal in parentheses.
        //example
   let getTempItem = id => ({ id: id, name: "Temp" });//arrow function// effectively equivalent to:

    let getTempItem = function(id) { //noraml function
    return {   
        id: id,        
        name: "Temp"   
        };
    };

    /////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////
    //CREATING IMMEDIATE INVOKED FUNCTIONS
    let person = function(name) {  //the method uses the name argument as the return value, effectively making namea private member of the returned object.
        return {        
            getName: function() {  
                return name;       
             }    
         };
    }("Nicholas");
    console.log(person.getName());      // "Nicholas"

    //you can also use arrow function
    let person = ((name) => {   
         return {       
            getName: function() {          
                return name; 
              }
           };         
     })("Nicholas");
    console.log(person.getName());      // "Nicholas"

    ////////////////////////////////////////
   // Arrow functions with  Arrays
   var values=[1,6,4,9,8,2,5,3,7]
   var result = values.sort(function(a, b) {  // sort an array using a custom comparator
     return a - b;
    })

   var result = values.sort((a, b) => a - b);//sort using arrow function
      console.log(result)

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
//NO ARGUMENT BINDING
//Even though arrow functions don’t have their own arguments object, it’s pos-sible for them to access the arguments object from a containing function. That arguments object is then available no matter where the arrow function is executed later on
function createArrowFunctionReturningFirstArg() {   
     return () => arguments[0];
  }
    
    var arrowFunction = createArrowFunctionReturningFirstArg(5);
    console.log(arrowFunction());   // 5

    /////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
       //REST PARAMETERS
       function pick(object, ...keys) { //keys Array is a rest parameter that contains all parameters passed after object (unlike arguments, which contains all param-eters including the first one). 

        let result = Object.create(null);
        for (let i = 0, len = keys.length; i < len; i++) { //means you can iterate over keys from beginning to end without worry.
            result[keys[i]] = object[keys[i]];   
            }    

            return result;
    }



