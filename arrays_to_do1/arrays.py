# // 1. Push Front
# // Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!
# // Examples:
# // pushFront([5,7,2,3], 8) => [8,5,7,2,3]
# // pushFront([99], 7) => [7,99]
def pushFront(arr, num):
    newArr = [num]
    for i in arr:
        newArr.append(i)
    return newArr

print(pushFront([5,7,2,3], 8))
print(pushFront([99], 7))

# 2. Pop Front
# Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!
# Examples:
# popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
# popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function
def popFront(arr):
    newArr = arr[0]
    for i in range(0, len(arr)-1):
        arr[i] = arr[i+1]
    arr.pop()
    return newArr
print(popFront([0,5,10,15]))