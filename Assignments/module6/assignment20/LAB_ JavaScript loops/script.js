function drawSquare(size) {

   // Your solution goes here
   let i = size 
   let row = ""
   while (i > 0) {
      row += "*"
      i--
   } 
   while (size > 0) {
      console.log(row)
      size--
   }
   
   
}