// Create an arrow functionto perform the same task as the function created in question 8
const countvowelArrow = (str) => {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}