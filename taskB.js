function checkYuGiOh(n){
    let YuGiOh = []

    
    for (let x=1; x<=n; x++) {
        let tempV = '';

        if (x % 2 === 0) {
            tempV += "Yu";
        }

        if (x % 3 === 0) {
            if (tempV === "") {
                tempV += "Gi"
            }
            else {
                tempV += "-Gi"
            }
        }

        if (x % 5 === 0) {
            if (tempV === "") {
                tempV += "Oh"
            }
            else {
                tempV += "-Oh"
            }
        }

        if (tempV === "") {
            tempV = x;
        }

        YuGiOh.push(tempV);
    }

    console.log(YuGiOh);

    if (isNaN(n)) {
        return "invalid parameter: " + JSON.stringify (n) ;
    }

    if (n.length === 0) {
        return "invalid parameter: " + JSON.stringify (n);
    }
    
    if (typeof n === "string" || typeof n === "number") {
        let number = parseInt(n)
        return n
    }

    else if (n === null) {
        return ("invalid parameter: " + `${n}`);
    }
        
    else if (Array.isArray(n)) {
        return "invalid parameter: " + JSON.stringify (n);
    }
         
    else if (typeof n === "boolean") {
        return ("invalid parameter: " + `${n}`);
    }
           
    else if (typeof n === 'undefined') {
        return ("invalid parameter: " + `${n}` + " is undefined");
    }

    

    else {
        return ("invalid parameter: " + JSON.stringify (n) );
    }


    
    
    
}
console.log(checkYuGiOh(30));
