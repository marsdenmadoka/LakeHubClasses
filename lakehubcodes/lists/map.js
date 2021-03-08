// function doubleNums(num){
//     return num * 3;
// }

// function transform (arr,fn){
//     var list=[];
//     for(var i=0;i<arr.length;i++){
//         list[i]=fn(arr[i])
//     }
//     return list

// }
// console.log([1,2,3,4,5])


var data=[1,2,3,4,5]

var newNums=data.map(function(number){
    return number * 3
})
console.log(newNums)