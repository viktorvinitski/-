let someArr = [1,4,3,5,7,2,6]

function sorting(array){
    return array.sort((a,b) => b-a)
}

console.log(sorting(someArr))