`use strict`

function arrayFlat(arr) {
    if (arguments.length !== 1) {
      throw new Error(
        "Function accept only 1 argument, too much arguments provided"
      );
    }
    return arr.reduce((acc, item) => {
     return  acc.concat(Array.isArray(item) ? arrayFlat(item) : item)}, []);
  }
  
 
  console.log(arrayFlat([1, 2, 3, 4, 5, 6]));
  console.log(arrayFlat([1, 2, [1, 2], [5, [10]], 11]));
  console.log(arrayFlat([1, 2, [1, 2], [5, [10]], [11, [1, [3]]]]));
  console.log(arrayFlat([[1, 2, 3], [4, 5], [6]]));
  console.log(arrayFlat([1, 2, 3, 4, 5, 6], [1, 2, 3]));





