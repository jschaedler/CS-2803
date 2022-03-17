window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function fetchQuotes(topic, count) {
   // TODO: Modify to use XMLHttpRequest
   let xhr = new XMLHttpRequest()
   xhr.addEventListener("load", responseReceivedHandler)
   xhr.responseType = "json"
   let queryString = "topic=" +encodeURIComponent(topic)+ "&count=" + encodeURIComponent(count)
   xhr.open("GET", "https://wp.zybooks.com/quotes.php?" + queryString)
   xhr.send()
   
}

// TODO: Add responseReceivedHandler() here
function responseReceivedHandler() {
   var html = "";
   if (this.response.error) {
       html = this.response.error;
   }
   else {
       html += "<ol>";

       for (let c = 0; c < this.response.length; c++) {
           html += `<li>${this.response[c].quote} - ${this.response[c].source}</li>`;
       }
       html += "</ol>";
   }
   document.querySelector("#quotes").innerHTML = html;
}