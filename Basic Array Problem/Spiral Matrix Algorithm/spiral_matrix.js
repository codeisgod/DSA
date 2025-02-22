/**
dir = 0 --> left to right
dir = 1 --> top to bottom
dir = 2 --> right to left
dir = 3 --> bottom to top
*/

'use strict'

function spiral_matrix(row, col, arr){
    let dir = 0 
    let top = 0           // first row
    let bottom = row-1    // last row
    let left = 0          // first column
    let right = col-1     // last column
    let i=0

    const array = []

    // LOOP will run unless 
    // value of top less than or equal to bottom  <-- and --> value of left less or equal to right
    while(top <= bottom && left <= right ){
        if (dir == 0) {        // left to right
            for(i=left; i<=right; i++){
                array.push(arr[top][i])
            }
            top += 1;
            dir = 1;
        }

        else if (dir == 1){    // top to bottom
            for(i=top; i<=bottom; i++){
                array.push(arr[i][right])
            }
            right -= 1;
            dir = 2;
        }

        else if (dir == 2){    // right to left
            for (i=right; i>=left; i--){
                array.push(arr[bottom][i])
            }
            bottom -= 1;
            dir = 3;
        }

        else if (dir == 3){    // bottom to top
            for(i=bottom; i>=top; i--){
                array.push(arr[i][left])
            }
            left += 1;
            dir = 0;
        }
    }

    return array

    // Time Complexity = O(n*m)
    // Space Complexity = O(n*m)
}

let matrix = [
    [1,2,3,4,17],
    [12,13,14,5,18],
    [11,16,15,6,19],
    [10,9,8,7,20]
    ]
let row = matrix.length
let col = matrix[0].length
console.log(spiral_matrix(row, col, matrix))

// let matrix1 = [
//     [1,2,3,4,5,6],
//     [7,8,9,10,11,12],
//     [13,14,15,16,17,18],
//     [19,20,21,22,23,24],
//     [25,26,27,28,29,30],
//     [31,32,33,34,35,36]
// ]

let matrix1 = [
    [1,2,3,4],
    [12,13,14,5],
    [11,16,15,6],
    [10,9,8,7]
    ]
let row1 = matrix1.length
let col1 = matrix1[0].length
console.log(spiral_matrix(row1,col1,matrix1))