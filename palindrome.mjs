/**
 * A function that checks whether a number is a palindrome
 * @param {number} num 
 * @returns true or false
 */
const palindrome = (num) => {
    const length = Math.floor(num.toString().length / 2);
    const numString = num.toString();

    for (let i = 0; i < length; i++) {
        if(numString[i] !== numString[numString.length - (1 + i)])
        return false;
    }

    return true;
}
