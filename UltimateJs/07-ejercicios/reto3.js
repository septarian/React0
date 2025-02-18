function numeroMasGrande(array){
    let max = null

    for(let i in array){
        if (i < array[i]){
            max = array[i]
        }
    }
    return max

}

console.log(numeroMasGrande([1,2,3,4,5,6,-7]))
console.log(numeroMasGrande([4,-2,8,1,9,4,3,10]))
console.log(numeroMasGrande([1]))
console.log(numeroMasGrande([]))


