const array = [2, 3, 5, 6, 8, 9];
const target = 6;
const low = 0;
const high = array.length - 1;

const binaryFunction = (array, low, high, target) => {
    if (low <= high) {
        
    
    const midNum = Math.floor((low + high) / 2);

    if (target == array[midNum]) {
        return midNum;
    }

    if (array[midNum] < target) {
        return binaryFunction(array, midNum + 1, high, target)
    }

    if (array[midNum] > target) {
        return binaryFunction(array, low, midNum - 1, target)
    }
    }
    return "Not Found!"
}

console.log(binaryFunction(array, low, high, target));
