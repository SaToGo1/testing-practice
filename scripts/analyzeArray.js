
const analyzeArray = (array) => {
    let len = array.length;
    let max = array[0]; //max = Math.max(array);
    let min = array[0]; //min = Math.min(array);
    let average = 0;

    for(let i = 0; i < array.length; i++){
        if( array[i] < min ) min = array[i];
        if( array[i] > max ) max = array[i];
        average = average + array[i];
    }

    average = average / array.length;

    return {
        length: len,
        max: max,
        min: min,
        average: average
    }
}

module.exports = analyzeArray