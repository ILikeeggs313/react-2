// import React from "react"
 const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
   ];
  
function unroll(squareArray) {
    let results = [
        // [1, 2, 3, 4],
        // [5, 6, 7, 8],
        // [9, 10, 11, 12],
        // [13, 14, 15, 16]
    ];
    while(squareArray.length > 0){
        //get top row
        results = [...results, squareArray.shift()];
        //get right column
        results = [...results, squareArray.map(row => row.pop())];
        //get bottom row from right to left
        results = [...results, squareArray.pop().reverse()];
        //get left column bottom to top
        results = [...results, squareArray.map(row => row.shift()).reverse()];
    }
    return results.flat();
}
console.log(unroll(square))
module.exports = unroll;
