/*function sumNum(a,b,c,d)
{
    var total =(a+b+c+d);
    
    document.write("<h2>This is my ans: "+total+"</h2>");
}
sumNum(3,4,6,7) */
   

//solutio

function getArraySum (arr) {
    let sum = 0; //initialize 
    for (let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;  
}
let arr1 = [1,2,3,4];

console.log(getArraySum(arr1));