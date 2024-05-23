// var arr = [1,2,3,4,5,6,7,8];
// arr.push("hello")
// arr.pop()
// const temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;
// console.log(arr)

// 1. Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!
// Examples:
// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]
function pushFront(arr, value){
    var newArr = [value];
    for (i = 0; i<arr.length; i++){
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(pushFront([5,7,2,3], 8))