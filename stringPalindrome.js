function reverseString(str){
    let characters = str.split("")
    let reversed = "";
    for (let i = characters.length - 1; i>=0; i--){
        reversed = reversed + characters[i]
    }
    return reversed
}
console.log(reverseString("welcome"));
console.log(reverseString("testleaf"));


function isPalindrome(str){
    let reversed = "";
    let characters = str.split("");
    for (let i = characters.length - 1; i>=0; i--){
        reversed = reversed + characters[i];
    }
    if (str === reversed){
        return true;
    }else{
        return false;
    }
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("level"));


function reverseString(str){
    let reversed = "";
    for (let i = str.length - 1; i>=0; i--){
        reversed = reversed + str[i] 
    }
    return reversed;
}
function isPalindrome(str){
    let reversed = reverseString(str)
    return str == reversed
}
let words = ["madam", "hello", "level"]
for (let i = 0; i < words.length; i++) {
    console.log("Original string:", words[i]);
    console.log("Reversed string:", reverseString(words[i]));
    console.log("is Palindrome:", isPalindrome(words[i]));
    console.log("-----------");  
}
