
function longestFall(array, left=0, right=left+1, currLen=1) {
    if(array.length === 0) return 0;
    if(array.length === 1) return 1;
    let tempLen = 1;

    while(right < array.length){
        if(array[left] > array[right] && array[right] < array[right - 1]){
            //avoid duplicates interferring with count
           if(array[right] !== array[right -1]) tempLen++;
           currLen = tempLen > currLen ? tempLen : currLen
        } else {
          left++
          tempLen=1;
        }
        right++;
    }

    return currLen;
}

module.exports = longestFall;