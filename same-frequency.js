function freqCounter(num){
    let frequencies = new Map();

    for(let el of num.toString()){
        let elCount = frequencies.get(el) || 0;
        frequencies.set(el, elCount + 1);
    }

    return frequencies;
}

function sameFrequency(num1, num2) {
    if(num1.length !== num2.length) return false

    let num1Freq = freqCounter(num1);
    let num2Freq = freqCounter(num2);

    for(let num of num1Freq.keys()){
        if(!num2Freq.has(num)) return false;

        if(num1Freq.get(num) !== num2Freq.get(num)) return false
    }

    return true;
}

module.exports = sameFrequency;