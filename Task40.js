const ispalindrome = function (str)
{
    var reversestring =  str.split("").revers().join("");
    if (reversestring === str){
        result = "palindrome";
        return result; 
    }else{
        result = "not palindrome";
        return result;
    }
};
var result;
const samplestring = "malayalam";
const palindromeresult = ispalindrome(samplestring);

console.log(samplstring + " is " + result);
