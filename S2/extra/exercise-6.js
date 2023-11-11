function swap(array, index1, index2) {

    const value1 = array[index1];
    const value2 = array[index2];

    array.splice(index1, 1, value2);
    array.splice(index2, 1, value1);

    return array;
}

const myArray = [1, 2, 3, 4, 5];
const resultArray = swap(myArray, 1, 3);

console.log(resultArray); 
