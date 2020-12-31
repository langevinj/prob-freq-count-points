const isPositive = (currentValue) => currentValue < 0;
const isNegative = (currentValue) => currentValue > 0;

function separatePositive(array, left=0, right=array.length - 1){
    //handle cases of all positive or negative arrays
    if(array.every(isPositive) || array.every(isNegative)) return array;

    while(left < right){
        let mid = Math.floor((left + right) / 2);
        let midVal = array.splice(mid, 1)[0];

        if(midVal < 0){
            array.push(midVal);
            right--;
        } else if (midVal > 0) {
            array.unshift(midVal);
            left++;
        }
    }

    return array;
}

module.exports = separatePositive;