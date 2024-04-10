function isElementPresent(arr,ele){

    for(let i=0; i<arr.length; i++){
        if (arr[i] === ele){
            return true;
        }
    }
    return false;
}

const array = [1,2,3,4,14,13,19]

const str = ["arnab", "raja", "shuvam"]

console.log(isElementPresent(array,20)) //expected output false
console.log(isElementPresent(array,13)) //expexted output true

console.log(isElementPresent(str,"riya")) //expected output false
console.log(isElementPresent(str,"arnab")) //expexted output true