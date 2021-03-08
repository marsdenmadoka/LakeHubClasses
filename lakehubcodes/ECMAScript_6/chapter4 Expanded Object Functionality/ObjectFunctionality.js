// Object.is() Method
//This method accepts two arguments and returns true if the values are equivalent. Two values are considered equivalent when they’re the same type and have the same value
//in many cases the object.is() methid works the same as ===
console.log(Object.is(5, 5));       // true
console.log(Object.is(5, "5"));     // false

////////////////////////////////////////////////////////
//The Object.assign() Method
//Expanded Object Functionality73The mixin() function iterates over the own properties of supplier and copies them onto receiver (a shallow copy, where object references are shared when property values are objects). This allows the receiver to gain new properties without inheritance,
function mixin(receiver, supplier) {  
      Object.keys(supplier).forEach(function(key) {   
               receiver[key] = supplier[key];    
            });    
            return receiver;
        }







///////////////// /////////////////////////////////////////////////////

//Easy Prototype Access with Super References

let person = {   
     getGreeting() {
    return "Hello"; 
    }};// prototype is person
    
let friend = {   
     getGreeting() {   
     return super.getGreeting() + ", hi!";
       }
    };

    Object.setPrototypeOf(friend,person);

    //prototype is friend
    let relative = Object.create(friend)

    console.log(person.getGreeting());  // "Hello"
    console.log(friend.getGreeting());    // "Hello, hi!"
    console.log(relative.getGreeting());   // "Hello, hi!"