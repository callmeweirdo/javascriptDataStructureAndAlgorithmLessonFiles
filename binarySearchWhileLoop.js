const array = [2, 3, 5, 6, 8, 9];
const target = 6;
let low = 0;
let high = array.length - 1;

const binarySearch = (array, low, high, target) => {
    while (low <= high) {
        const midNum = Math.floor((low + high) / 2);

        if (target == array[midNum]) {
            console.log(`Found at index ${midNum}`);
            return midNum;
        }

        if (array[midNum] < target) {
            low = midNum + 1;
        } else {
            high = midNum - 1;
        }
    }
    if (low > high) {
        console.log(`Not Found! there for ${-1}`);
    }
}

console.log(binarySearch(array, low, high, target));