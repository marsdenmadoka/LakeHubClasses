//Object destructuring 
//syntax uses an object literal on the left side of an assignment operation. For example:
let node = {
    type:"Identifier",
    name:"foo"
};

let{type,name}=node;
console.log(type)
console.log(name)

////////////////////////////////////////////////////
//Destructuring Assignment  it’s also possible to use destructuring in assignments. For instance, you might decide to change the values of variables after they’re defined, as follows:
let node = {   
     type: "Identifier",    
     name: "foo"
    },
    type = "Literal",
    name = 5;// assign different values using destructuring
    ({ type, name } = node);
    console.log(type);    // "Identifier"
    console.log(name);      // "foo"


    //////////////////////////////////////////////////////////////////////////
    //Assigning to Different Local Variable Names
    let node = {   
         type: "Identifier",   
          name: "foo"
        };

    let { type: localType, name: localName } = node;
    console.log(localType);     // "Identifier"
    console.log(localName);     // "foo

    ///////////////////////////////////////////////////////////////////////////////////////////
//Default Values When you use a destructuring assignment statement and you specify a local variable with a property name that doesn’t exist on the object,

let node={
    type:"identifier",
    name:"foo"
};
let {type,name,value=true } = node;
console.log(type)
console.log(value)

////////////////////////////////////////////////////////////////////////////
//Assigning to Different Local Variable Names
let node = {   
     type: "Identifier",  
       name: "foo"
    };

    let { type: localType, name: localName } = node;
    console.log(localType);     // "Identifier"
    console.log(localName);     // "foo

    ////////////////////
    ////////////////////
    let node = {    
        type: "Identifier"
    };
    let { type: localType, name: localName = "bar" } = node;
    console.log(localType);     // "Identifier"
    console.log(localName);     // "bar"
    ////////////////


    /////////////////////////////////////////////////////////////////////////////////////
    //Nested Object Destructuring
    //By using syntax similar to that of object literals, you can navigate into a nested object structure to retrieve just the information you want
    let node = {    
        type: "Identifier",    
        name: "foo",   
         loc: {        
             start: {       
             line: 1,            
             column: 1       
             },       
              end: {            
                  line: 1,       
                  column: 4       
            }   
       }
     };
                
        let { loc: { start }} = node;
        console.log(start.line);        // 1
        console.log(start.column);      // 1


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

//Array Destructuring
let colors = [ "red", "green", "blue" ];

let [ firstColor, secondColor ] = colors;

console.log(firstColor);      // "red"
console.log(secondColor);     // "green

//You can also omit items in the destructuring pattern
let colors = [ "red", "green", "blue" ];

let [ , , thirdColor ] = colors;
console.log(thirdColor);   // "blue


//Destructuring Assignment-You can use array destructuring in the context of an assignment, but unlike object destructuring, there is no need to wrap the expression in parenthe-ses

let colors = [ "red", "green", "blue" ],    
firstColor = "black",    
secondColor = "purple";

[ firstColor, secondColor ] = colors;
console.log(firstColor);        // "red"
console.log(secondColor);       // "green"