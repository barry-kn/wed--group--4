//function tryPalindrome(c){
  //  if (c==="palindrome"){
//      return result="TRUE."
//    }
 //   else{
 //     return result="FALSE."
  //  }
//    }
//    tryPalindrome()

//solution

function isPalindrome(testString){
  let reversedString = testString.split('').reverse().join('');
  if (testString === reversedString){
      return true;
  }else{
       return false
  }

  
}

console.log(isPalindrome("121"));
console.log(isPalindrome("john"));