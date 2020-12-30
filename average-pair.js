// add whatever parameters you deem necessary
function averagePair(array, target, left=0, right=array.length - 1) {

    while(left < right){
        let avg = (array[left] + array[right]) / 2.0

        if(avg === target){
            console.log(true)
            return true;
        } else if(avg < target) {
            left++;
        } else {
            right--;
        }
    }

    return false
}

module.exports = averagePair;