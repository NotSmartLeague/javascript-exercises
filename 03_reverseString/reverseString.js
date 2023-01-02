const reverseString = function(string) {
    let reversedString;
    let i = 0;
    let lenght = string.lenght;
    splittedString = string.split("");
    reversedString = splittedString.reverse();
    joinedString = reversedString.join("");
    return joinedString;
};

// Do not edit below this line
module.exports = reverseString;
