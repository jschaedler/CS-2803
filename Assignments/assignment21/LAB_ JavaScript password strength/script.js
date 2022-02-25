// Your solution goes here 
function isStrongPassword(password) {
    let x = new Boolean(false);
    let j = ""
    for (let i = 0; i < password.length; i++) {
        if (password.charAt(i) < 91 && password.charAt(i) > 64) {
            hasUpper = true;
        }
        j += password.charAt(i).toLowerCase();
        
    }

    console.log(j)
    console.log(password.indexOf("password"))
    if (password.length >= 8 && x && j.indexOf("password") < 0) {
        return true;
    }
    else {
        return false;
    }




}