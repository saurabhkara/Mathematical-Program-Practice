// https://practice.geeksforgeeks.org/problems/print-the-pattern-set-1/1
// You are given a number N. You need to print the pattern for the given value of N.

// For N = 2 the pattern will be 
// 2 2 1 1
// 2 1

// For N = 3 the pattern will be 
// 3 3 3 2 2 2 1 1 1
// 3 3 2 2 1 1
// 3 2 1


function pattern(n){
    let output="";
    for(let i=n;i>0;i--){
        for(let j=n;j>0;j--){
            for(let k=i;k>0;k--){
                output+= j+" "
            }
        }
        output+='$'
    }
    console.log(output);
}
pattern(3);