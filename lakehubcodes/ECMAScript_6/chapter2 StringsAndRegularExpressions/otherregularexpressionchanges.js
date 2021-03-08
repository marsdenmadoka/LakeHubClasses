
//THE REGULAR EXPRESSION Y FLAG
let text = "hello1 hello2 hello3",  

    pattern = /hello\d\s?/, // has no flags
    result = pattern.exec(text),

    globalPattern = /hello\d\s?/g,  // uses the g flag
    globalResult = globalPattern.exec(text), 

    stickyPattern = /hello\d\s?/y,   // uses the y flag
    stickyResult = stickyPattern.exec(text);
    
    //calls, all three regular expressions should return "hello1 " with a space at the end.
    console.log(result[0]);         // "hello1 "
    console.log(globalResult[0]);   // "hello1 "
    console.log(stickyResult[0]);   // "hello1"

   // the lastIndex property is changed to 1 on all three patterns, meaning that the regular expression should start matching from the sec-ond character
    pattern.lastIndex = 1;
    globalPattern.lastIndex = 1;
    stickyPattern.lastIndex = 1;

    result = pattern.exec(text);
    globalResult = globalPattern.exec(text);
    stickyResult = stickyPattern.exec(text);
    console.log(result[0]);   // "hello1 "
    console.log(globalResult[0]);   // "hello2 
    //console.log(stickyResult[0]);   // throws an error

///////////////////////////////////////////////////
//making substitutions
 let name = "Nicholas",  
   message = `Hello, ${name}.`;
   console.log(message);

   //example, 2
    let count = 10,   
     price = 0.25,    
     mymessage = `${count} items cost $  ${(count * price).toFixed(3)}.`;
     console.log(mymessage);  

     let hiname = "Nicholas",    
     himessage = `Hello, ${`my name is ${ hiname }`}.`;
     console.log(himessage)

     let mycount = 10,   
      myprice = 0.25,   
      ymessage = passthru`${mycount} items cost $${(mycount * myprice).toFixed(2)}.`;
      console.log(ymessage)

