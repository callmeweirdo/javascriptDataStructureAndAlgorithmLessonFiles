// ? linear search


const linearSearch = (array, target) => {
    for (let i = 0; i < array.lenght; i++){
        if (array[i] == target) {
            return i;
        }
        return -1
    }
}
const arr = [9, 2, 6, 1, 6, 7];
const tar = 6;
console.log(linearSearch(arr, tar));