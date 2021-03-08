// function exclude(arr,fn){
    
//     var list=[];
// for(var i=0;i<arr.length;i++){
//     if(fn(arr[i])){
//         list.push(arr[i])
//     }
// }
// return list;
// }
// console.log(exclude([1,2,3,4,5,6],isOdd))

var data1=[1,2,3,4,5,6,7,8,9]

var data2=data1.filter(function(num){
    return num %2 ==1 //odd numbers
})
console.log(data2)
//message = `Hello, ${name}.`;


