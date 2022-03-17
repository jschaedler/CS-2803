// Your solution goes here
var plant =  {
    leaves: 5,
    fruit: 0,
    get value() {
        return this.fruit*2
    }, 
    leafFalls: function () {
        if (this.leaves > 0) {
            this.leaves--
        }
    },
    plantDies: function () {
        if (this.leaves > 0) {
            this.leaves--
        }
    },
    newPlant: function () {
        this.leaves = 5
        this.fruit = 0
    }
}

// console.log("leaves = " + plant.leaves);    // should be 5
// console.log("fruit = " + plant.fruit);    // should be 0
// console.log("value = " + plant.value);  // should be 0
// plant.fruit = 4;
// console.log("value = " + plant.value);  // should be 8
// plant.leafFalls();
// console.log("leaves = " + plant.leaves);    // should be 4
// plant.leafFalls();
// plant.leafFalls();
// plant.leafFalls();
// plant.leafFalls();
// plant.leafFalls();
// console.log("leaves = " + plant.leaves);    // should be 0
// plant.newPlant();
// console.log("leaves = " + plant.leaves);    // should be 5
// console.log("fruit = " + plant.fruit);    // should be 0