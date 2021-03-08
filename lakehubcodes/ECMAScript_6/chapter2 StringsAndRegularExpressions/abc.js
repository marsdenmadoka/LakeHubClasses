var values=[8,1,5,1,6,4,9,1,3,2,2,7]

let normalized = values.map(function(number){ //puttin our values in map
    return number
})
//console.log(normalized)
 
var data=normalized.sort(function(first,second){ //sorting our values
    if(first<second){
        return -1
    } else if(first == second){
        return 0;
    }else{
        return 1;
    }
   
})
console.log(data)
console.log(".........................")
////////////////////////////////////////////////
////////////////////////////////////////////////
//counting code points
function codePointLength(text) {
 let result = text.match(/[\s\S]/gu); 
  return result ? result.length : 0;
}
console.log(codePointLength("abc"));    //3
console.log(codePointLength("𠮷bc"));   // 3

/////////////////////////////////////////////////
//methods of identifying substring
let msg = "Hello world!";
console.log(msg.startsWith("Hello")); //returns true if the given text is found at the beginning of the string. It returns false if not      
console.log(msg.endsWith("!")); //returns true if the given text is found at the end of the string. It returns false if not. 
console.log(msg.includes("o")); // returns true if the given text is found anywhere within the string. It returns false if not. 
console.log(msg.startsWith("o")); 
console.log(msg.endsWith("world!"));        // true
console.log(msg.includes("x"));             // false  
console.log(msg.startsWith("o", 4));  //starts the match by looking for "0" at index 4 of the msg string , which is the o in Hello
console.log(msg.endsWith("o", 8));  //The call to msg.endsWith("o", 8)starts the match at index 4 as well, because the 8 argument is subtracted from the string length (12)
console.log(msg.includes("o", 8));  //starts the match from index 8, which is the r in world.

//The startsWith(),endsWith(),and includes() methods will throw an error if you pass a regular expression instead of a string. In contrast, indexOf() and lastIndexOf() convert a regular expression argument into a string and then search for that string.

/////////////////////////////////////////////////////////////////////////////////////////////////
//THE REPEAT METHOD

console.log("x".repeat(3));
console.log("hello".repeat(2));     // "hellohello"
console.log("abc".repeat(4))

// indent using a specified number of spaces
 let indent = "...... ".repeat(4),   
 indentLevel = 1;
 
 // whenever you increase the indent
 let newIndent = indent.repeat(++indentLevel);
 console.log(newIndent)


 