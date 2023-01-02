const removeFromArray = function(array = [], toRemove) {
    for(let i = 0; i < array.length; i++){
        if(array[i] == toRemove)
            array = array.splice(0, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
