const array = [9, -3, 5, 3, -5, 2,7,12,18,5,3];

const bubblesort = (array) => {
    let swaped;
    do {
        swaped = false
        for (let i = 0; i < array.length - 1; i++){
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1]
                array[i + 1] = temp;
                swaped = true;
            }
        }
    }while(swaped)
}
bubblesort(array)
console.log(array);