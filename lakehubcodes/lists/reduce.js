//what happens behind the scenes
//  function add(x,y){
// return x*y
// }

// function compose(arr,fn,initial){
// var total = initial
// for(var i=0;i<arr.length;i++){
//     total=fn(total,arr[i])
// }
// return total
// }
// console.log(compose([1,2,3,4,,5],add,0))


var data1=[1,2,3,4,5]
var data2=data1.reduce(function(sum,accumulator){
    return sum + accumulator
},0)
console.log(data2)

