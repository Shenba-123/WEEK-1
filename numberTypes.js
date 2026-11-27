function checkNumber (Number){
    let result
    if(Number>0){
        result = "Positive"
    }
    else if(Number<0){
         result = "Negative"
        }
    else{
        result = "Zero"
    }
    return result
}
console.log(checkNumber(10));
console.log(checkNumber(-2));
console.log(checkNumber(0));
