function calculateTax (amount) {
   let tax = amount * (10 / 100);
   return tax;
} 
console.log(calculateTax(550))

function convertToUpperCase (text) {
    let upperCase = text.toUpperCase ();
    return upperCase;
}

let myword = convertToUpperCase("i am abby!")
console.log(myword)

function findMaximum (num1, num2) {
    let maximum;
    if (num1 > num2) {
        maximum = num1
    } else {
        maximum = num2
    }
    return maximum;
}

findMaximum(23, 80)
console.log("Maximum is:", findMaximum(23, 80))

function isPalindrome (word) {
    let length = word.length
    for (let i=0; i<length; i++) {
        if (word[i] !== word[length - 1 - i])
            return false
    }
    return true;
}

console.log(isPalindrome("madam"))

function calculateDiscountedPrice (originalPrice, discountedPercentage) {
    if (discountedPercentage < 0 || discountedPercentage > 100) {
        console.error("Invalid discount percentage. Please enter a value between 0 and 100");
        return;
    }
    
    let discountedAmount = originalPrice * (discountedPercentage / 100)

    let discountedPrice = originalPrice - discountedAmount

    return discountedPrice;
}

let productPrice = calculateDiscountedPrice(650, 13);
console.log(productPrice)


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };