
function getById(arr, idx) {
    if (idx >= 0 && idx < arr.length) {
        return arr[idx];
    } 

    return 'Este elemento no existe'
    
}

element = getById([1,2], 1);
console.log(element)