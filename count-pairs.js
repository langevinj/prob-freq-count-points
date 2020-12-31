function countPairs(array, target) {
    let numPairs = 0;

    while(array.length > 0){
        let currVal = array.pop();
        if(array.includes(target - currVal)) numPairs++
    }

    return numPairs;
}

module.exports = countPairs;