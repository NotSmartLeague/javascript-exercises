const repeatString = function(string, num) {
    let i;
    let newString='';
    if(num < 0){
        return "ERROR";
    }
    for(i = 0; i < num; i++){
        newString = newString+string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
