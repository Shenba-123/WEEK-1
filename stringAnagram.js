function lengthOfLastWord(s){
    let words = s.split(" ")
    let lastword = words[words.length - 1]
    return lastword.length
    }
console.log(lengthOfLastWord("Hello World"));


function lengthOfLastWord(s){
    let trimmedString = s.trim()
    let words = trimmedString.split(" ")
    let lastword = words[words.length - 1]
    return lastword.length
}
console.log(lengthOfLastWord("fly me to the moon"));


function lengthOfLastWord(s){
    let words = s.trim().split(/\s+/)
    let lastword = words[words.length - 1]
    return lastword.length
}
console.log(lengthOfLastWord("fly me to the moon"));


function isAnagram(str1, str2){
    let string1 = str1.replace(/\s/g, "").toLowerCase()
    let string2 = str2.replace(/\s/g,"").toLowerCase()
    let sortedString1 = string1.split("").sort().join("")
    let sortedString2 = string2.split("").sort().join("")
    return sortedString1 == sortedString2;
}
    console.log(isAnagram("listen", "silent"));
    console.log(isAnagram("hello", "world"));

