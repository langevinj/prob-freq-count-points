
function pivotIndex(array, mid=1) {

    //sum a range between two indexes of an array
    function sumRange(start, end){
        let sum = 0;
        for(let i=start; i < end; i++){
            sum += array[i]
        }
        return sum
    }   

    //set beginning sums
    let leftSum = array[0];

    while(mid < array.length - 2){
        let rightSum = sumRange(mid + 1, array.length)
        if(leftSum === rightSum){
            return mid;
        }
        //recalculate sum based on new range
        mid++
        leftSum = sumRange(0, mid);
    }
    
    return -1;
}

//instead of calculating sum with a function each time, could just add the value at the additional index

module.exports = pivotIndex;