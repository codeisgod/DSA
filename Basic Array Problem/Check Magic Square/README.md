### Problem Description
- Given a matrix of dimensions `n x n` having elements `1 to n*n` distinct elements, check whether the matrix is magic square or not.

- Magic square is a square that has the same sum along all rows, columns and diagonals.

### Input format
- There are n + 1 lines of input.
- First line contains integer n.
- The next n lines contain n space separated elements.

### Output format
- Print "Yes" if it is a magic square , "No" otherwise.

### Sample Input 1
```
3
4 9 2
3 5 7
8 1 6
```

### Sample Output 1
Yes

### Explanation 1
All rows, columns and diagonals have sum 15.

### Constraints
- 1 <= n <= 100
- 1 <= element of matrix <= n x n

### Methodology - Problem Approach
- [Check Masic Square](https://www.youtube.com/watch?v=FM7XwkAWFDs)
- [Solution](./checkMagicSquare.js)

### Logic
- for square Matrix
    - number of row = number of matrix 
    - lets say n*n matrix
    - here lets take `n=3`

- for primary diagonal
    ```
    (0,0)    ()      ()
    ()       (1,1)   ()
    ()       ()      (2,2)
    ```
    - here `i = j`
    - so we can say `(i,i)`

- for secondary diagonal
    ```
    ()      ()      (0,2)
    ()      (1,1)   ()
    (2,0)   ()      ()
    ```
    - here `i` is increased by 1 every time  -> `i+1`
    - `j` is decreased by 1 every time       -> `j-1`
    - But 
        - `i+j = n-1`  -> n = number of row or column
        - `j = n-1-i`
    - so we can say `(i, n-1-i)`

- for each row or column 
    ```
    (0,0)   (0,1)   (0,2)   
    (1,0)   ()      ()
    (1,2)   ()      ()
    ``` 
    - for row
        - (i,j)
    - for column
        - (j,i)
