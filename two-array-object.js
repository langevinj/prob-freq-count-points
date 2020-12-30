// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    let obj = {};
    let i = 0;

    while(i < keys.length){
        if(values[i]){
            obj[keys[i]] = values[i]
        } else  {
            obj[keys[i]] = null
        }
        i++
    }

    return obj
}

module.exports = twoArrayObject;