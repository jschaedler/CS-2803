// mySum = displaySum(2,5,3)
// let displaySum = function(x,y,z){
// return x + y + z
// }
// console.log(mySum)

// mySum = displaySum(2,5,3)
// function displaySum(x,y,z){
// return x + y + z
// }
// console.log(mySum)


// myArray = [10, 7]
// myArray.pop()
// console.log(myArray)

// myArray.shift()
// console.log(myArray)

// myArray.unshift(3)
// console.log(myArray)

// myArray.splice(0,0,2)
// console.log(myArray)


let circle = {
radius: 5,
pi: 3.14,
get circumference(){
return this.pi * this.radius * 2
},
    set circumference(value) {
pi = 3.14    
    
this.radius = value / (pi * 2)
}
}

circle.circumference = 22
console.log(circle.circumference)