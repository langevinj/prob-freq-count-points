function isSubsequence(str1, str2, left=0){
    let str1Queue = str1.split("");
    let currChar = str1Queue.shift();

    while(left < str2.length){
        if(str2[left] === currChar){
            if(str1Queue.length === 0) return true
            currChar = str1Queue.shift();
        }

        left++;
    }

    return false
}

module.exports = isSubsequence;