window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  // TODO: Complete the function
  button = document.getElementById("convertButton")
  inches = document.getElementById("inchesInput")
  cent = document.getElementById("centimetersInput")
  image = document.getElementById("image")
  error = document.getElementById("errorMessage")
  button.addEventListener("click", convert)
  inches.addEventListener("input", newinches)
  cent.addEventListener("input", newcents)
}

function convert() {
  if (cent.value.length > 0) {
    let x = parseFloat(cent.value)
    if (isNaN(x)) {
      error.innerHTML = cent.value + " is not a number"      
    } else {
      error.innerHTML = ""
    }
    inches.value = convertCentimetersToInches(x)

  } else {
    let x = parseFloat(inches.value)
    if (isNaN(x)) {
      error.innerHTML = inches.value + " is not a number"      
    } else {
      error.innerHTML = ""
    }
    cent.value = convertInchesToCentimeters(x)
  }
}

function newinches() {
  if (inches.value.length > 0 && cent.value.length > 0) {
    cent.value = ""
  }
}

function newcents() {
  if (inches.value.length > 0 && cent.value.length > 0) {
    inches.value = ""
  }

}

function convertInchesToCentimeters(inches) {
  // TODO: Complete the function
  if (inches >= 12) {
    image.src = "footprint.png"
  } else if (inches >= 0) {
    image.src = "ruler.png"
  } else {
    image.src = "thumbsdown.png"
  } 
  return inches * 2.54
  
}

function convertCentimetersToInches(centimeters) {
  // TODO: Complete the function
  converted = centimeters * .349
  

  if (converted >= 12) {
    image.src = "footprint.png"
  } else if (converted >= 0) {
    image.src = "ruler.png"
  } else {
    image.src = "thumbsdown.png"
  } 
  return centimeters*.394
}
