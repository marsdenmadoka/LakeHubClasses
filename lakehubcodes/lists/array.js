//sort array
var values=[1,6,4,9,8,2,5,3,7]

var result = values.sort(function(a, b) {  // sort an array using a custom comparator
    return a - b;
  })

  var result = values.sort((a, b) => a - b);//sort using arrow function
  console.log(result)