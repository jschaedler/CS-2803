function calcItemFrequencies() {
    var items = prompt("Enter List").split(", ")
    var map = {}
    
    for (let i = 0; i < items.length; i++) {
        let temp = items[i]  
    
        if (map[temp] === undefined) {
            map[temp] = 1
            
        } else {
            let num = map[temp]
            map[temp] = num + 1
        }
        
    
    
    }
    for (var x in map) {
        console.log(x + " " + map[x])
    }
}

// function calcItemFrequencies() {
//     var words = prompt().split(" ");

//     var frequencies = {};
//     for (var i = 0; i < words.length; i++) {
//         if (frequencies[words[i]] === undefined)
//             frequencies[words[i]] = 0;
//         frequencies[words[i]]++;
//     }

//     for (var word in frequencies) {
//         console.log(word + " " + frequencies[word]);
//     }
// }
