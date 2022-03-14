/* 1. Maps */
// Define the object map
let courses = {
    170: {
       title: "Introduction to Programming",
       description: "Develop algortithms for computers",
       creditHours: 5},
    250: {
       title: "Web Development",
       description: "Build web applications",
       creditHours: 3
    },
    310: {
       title: "Operating Systems",
       description: "Process managements and memory management",
       creditHours: 3
    },
    430:{
       title: "Artificial Intelligence",
       description: "Simulate human thinking",
       creditHours: 2
    }
 }
 // Display course number and title for 3 credit hour courses
 
 for (course in courses){
    if (courses[course].creditHours === 3){
       console.log(course + " " + courses[course].title)
    }
 }

 console.log(Object.keys(courses))

 console.log(431 in courses)

 delete(courses[430])
 console.log(Object.keys(courses))


 /* 2. Map Object */

let stateCapitals = new Map();
stateCapitals.set("AR", "Little Rock");
stateCapitals.set("CO", "Denver");
stateCapitals.set("NM", "Santa Fe");

console.log("Size of map is " + stateCapitals.size);

if (stateCapitals.has("CO")) {
   console.log("CO capital is " + stateCapitals.get("CO"));
}

console.log("All capitals:");
for (let [state, capital] of stateCapitals) {
   console.log(state + " is " + capital); 
}

console.log(stateCapitals)

/* 3. Try it yourself */
/* Output the sentence "Number of actors: " followed by the number of actors. 
Then use a loop to output "Actor: {name}, Role: {role}" for each actor.*/
/* Ex: Given the following actors map, output should be:
Number of actors: 2
Actor: Christopher Lee, Role: Saruman
Actor: Geoffrey Rush, Role: Hector Barbossa */

let actors = new Map(); // Code will be tested with different actors

actors.set("Christopher Lee", { movie: "The Lord of the Rings", role: "Saruman" });
actors.set("Geoffrey Rush", { movie: "Pirates of the Caribbean", role: "Hector Barbossa" });

// solution goes here
for (let [actor, info] of actors) {
   console.log(actors.size)
   console.log("Actor: " + actor + ", Role: " + info.role)

}

// // /* 4. String Objects */

// /* 5. Template Literals */
// /* Can be used in place of string concatenation */
console.log(`sum is ${2+3}`)

// /* 6. Date Objects */

// if you do not pass anything to constructor, then time is set to current tim
let currDateTime = new Date();
console.log(currDateTime);

// time begins on January 1, 1970.  
// The following is 1 second after that
let oneSecPastEpoch = new Date(1000);
console.log(oneSecPastEpoch);

// Feb 22, 1732
let georgeBirthday = new Date(1732, 1, 22);
console.log(georgeBirthday);

// Oct 21, 2035 at 7:28:00
let theFuture = new Date(2035, 9, 21, 7, 28, 0);
console.log(theFuture);

/*Display the date when Google was founded in M/DD/YYYY format. 
Hint: getMonth() gets the month (0-11). 
getDate() gets the day relative to the current set month. 
getFullYear() gets the 4 digit year. 
Ex: The 31st of January 1970 should be displayed as: "1/31/1970".*/

let interestingEvents = {
   "Long distance telegraph": new Date(1844, 4, 24),
   "First telephone call": new Date(1876, 2, 10),
   "Microsoft founded": new Date(1975, 3, 4),
   "World Wide Web born": new Date(1989, 2, 1),
   "Google founded": new Date(1998, 8, 4),
   "Facebook website launch": new Date(2004, 1, 4)
};
let interestingDate = interestingEvents["Google founded"]; 

/*solution goes here */




// /* Math Object */
// //Write a function that generates a random integer number between two integers
// function getRandomInt(min, max){
//     return (Math.floor(Math.random()*(max-min + 1)+min))
// }
// for (i = 0; i < 5; i++) { 
//     console.log(getRandomInt(1, 10)); 
//  }

//  /* Exception and try-catch */
//  function findSum(numbers, startIndex, endIndex) {
//     if (startIndex < 0) {
//        throw "startIndex is less than 0.";
//     } 
//     else if (endIndex >= numbers.length) {
//        throw "endIndex is too large.";  
//     }
 
//     let sum = 0;
//     for (let i = startIndex; i <= endIndex; i++) {
//        sum += numbers[i];
//     }
//     return sum;
//  }
  
// let nums = [1, 2, 3, 4];
// try {
//    console.log(findSum(nums, 3, 4));
// }
// catch (exception) {
//    console.log(exception);
// }

// console.log("Done!");

//  /* Error Objects */
//  // Returns the average of the scores array 
// function findAverage(scores) {
//     if (!Array.isArray(scores)) {
//        throw new TypeError("Must supply an array.");
//     }
 
//     if (scores.length === 0) {
//        throw new Error("Must supply at least one score.");  
//     }
       
//     let sum = 0;
//     scores.forEach(function(score) {      
//        if (!Number.isInteger(score)) {
//           throw new TypeError("Score '" + score + "' is not an integer.");  
//        }
//        if (score < 0) {
//           throw new RangeError("Negative score encountered.");
//        }
//        sum += score;
//     });
//     return sum / scores.length;
//  }
 
//  try {
//     let ave = findAverage([50, -6]);
//  } 
//  catch (ex) { 
//     console.log(ex.name + ": " + ex.message); 
//  }

console.log('4'*'5')