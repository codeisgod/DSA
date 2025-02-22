'use strict'

function checkMagicSquare(n, matrix) {
    var primary_digonal_sum=0, secondary_diagonal_sum=0;
    for (var i=0; i<n; i++)
    {
        primary_digonal_sum = primary_digonal_sum + matrix[i][i];
        secondary_diagonal_sum = secondary_diagonal_sum + matrix[i][n-1-i];
    }
    if(primary_digonal_sum != secondary_diagonal_sum)
        return false;

    for (var i=0; i<n; i++)
    {
        var col = 0;
        var row = 0;
        for (var j=0; j<n; j++)
        {
            row += matrix[i][j];
            col += matrix[j][i];
        }
        if ( row != col || col != primary_digonal_sum)
            return false;
    }
    return true;

    // Time Complexity = O(n^2)
    // Space Complexity = O(1)
}

let matrix = [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6]
    ]

let n = 3

console.log(checkMagicSquare(n, matrix))