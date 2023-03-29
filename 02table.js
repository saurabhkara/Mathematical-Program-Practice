//https://practice.geeksforgeeks.org/problems/print-table0303/1

//Create the multiplication table of a given number N and return the table as an array.

//Input:
// N = 9

// Output:
// 9 18 27 36 45 54 63 72 81 90


function table(num){
    const tabArr= [];
    for(let i=1;i<=10;i++){
        tabArr.push(num*i);
    }
    return tabArr;
}
console.log(table(5));