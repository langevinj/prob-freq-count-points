//calculate the frequency of a character, return a frequency map
function frequencyCounter(str){
    let charFreqs = new Map();

    //iterate through each character and add their frequency to the map
    for(let char of str){
        let charCount = charFreqs.get(char) || 0;
        charFreqs.set(char, charCount + 1);
    }

    return charFreqs
}

// add whatever parameters you deem necessary
function constructNote(message, letters) {
    if (!message && !letters) return true;
    if(!message) return true;
    
    let messageFrequencies = frequencyCounter(message);
    let letterFrequencies = frequencyCounter(letters);

    //iterate through each char of the message and check for correct frequency in the letters
    for(let char of messageFrequencies.keys()){
        if(!letterFrequencies.has(char)) return false

        //false if too few instances of the character
        if(letterFrequencies.get(char) < messageFrequencies.get(char)) return false
    }
    return true
}

module.exports = constructNote;