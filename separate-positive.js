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

// function separatePositive(nums) {
//     let start = 0;
//     let end = nums.length - 1;

//     while (start < end){
//         if (nums[start] < 0 && nums[end] > 0) {
//             [nums[start], nums[end]] = [nums[end], nums[start]];
//             start += 1;
//             end -= 1;
//         } else {
//             if (nums[start] > 0) start += 1;
//             else end -= 1;
//         }
//     }
//     return nums
// }

module.exports = separatePositive;