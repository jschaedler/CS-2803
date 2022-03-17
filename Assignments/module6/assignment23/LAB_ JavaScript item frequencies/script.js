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

