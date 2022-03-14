function parseScores(scoresString) {
   // TODO: Compete the function
   return scoresString.split(" ")
}

function buildDistributionArray(scoresArray) {
   // TODO: Compete the function
   arr = [0, 0, 0, 0]
   for (let i of scoresArray ){
      if (i < 630) {
         arr[0]++
      } else if (i < 690) {
         arr[1]++
      } else if (i < 720) {
         arr[2]++
      } else {
         arr[3]++
      }
   }
   return arr

}

function setTableContent(userInput) {
   // TODO: Compete the function
   let distribution = buildDistributionArray(parseScores(userInput))
   var firstRow = document.getElementById("firstRow")
   var thirdRow = document.getElementById("thirdRow")
   var graphValueArray = []
   var occuranceArray = []
   for (index = 0; index < 4; index++) {
      occuranceArray[index] = thirdRow.insertCell(index)
      occuranceArray[index].innerHTML = distribution[index]
      graphValueArray[index] = firstRow.insertCell(index)
      var styleClass = "bar" + index
      var heightValue = (distribution[index] * 10) + "px"
      graphValueArray[index].innerHTML = "<div style='height:" + heightValue + "' class='" + styleClass + "'></div>" }
}

setTableContent("450 780 850 830 680 320 600 590");