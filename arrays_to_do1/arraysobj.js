// const cars = [
//     {
//         brand : "Audi",
//         model : "Q7",
//         year : 2024,
//         capacity : 7,
//         color : "white" 
//     },
//     {
//         brand : "KIA",
//         model : "sportage",
//         year : 2019,
//         capacity : 5,
//         color : "black"
//     }
// ];

// cars.push( {
//     brand: "KIA",
//     model: "Stonic",
//     year: 2020,
//     capacity: 5,
//     color: "grey"
// })
// cars.forEach((element) => console.log(element))

// function buildings() {
//     count = 1;
//     arr = [6,2,8,4,11,13];
//     for(i = 0; i<arr.length; i++ ){
//         if (arr[i] > count) {
//             count ++
//         }
//     }
//     return count;
// }

// var s = ["h","e","l","l","o"];
// s.reverse();
// console.log(s);

// var s = ["h","e","l","l","o"];
// function reverseArray(arr) {
//     var newArr = [];
//     for (i = arr.length -1; i>=0; i-- ){
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }
// console.log(reverseArray(s));

// class Node {
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }
//     addFront(val) {
//         // creating a new node objrct with the value provided
//         let new_node = new Node(val);
//         // checking to see if the current list doesnt have a head node(if the list is emplty)
//         // If the list is empty, place the new node as the head
//         if(!this.head) {
//             this.head = new_node;
//             return this;
//         }
//         // If the list is not empty, assign the head to be the next node to the new node (Blue Arrow in picture above)
//         new_node.next = this.head;
//         // Then finally assign the new_node to be the new head of the list
//         this.head = new_node;
//         return this;
//     }
// }

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
    }
    findsum() {
        //We first have to tell our train attendant that we want them to start at the front of the train
        let runner = this.head;
        let sum = 0;
            //Since a Linked List does not know how many nodes is within it, we will not be able to use a for loop to             iterate, instead we'll use a while
            //Also we need to tell them when to stop otherwise they will just run off the end of the train
        while(runner !== null) {
                      //Since the runner is set to the current node, its value will be equal to the value of the node they are currently on
                      sum += runner.data
                      //Tell our attendant to move to the next car
                      runner = runner.next;
        }
        return sum
    }
}

