function convertFahrToCelsius(F) {
    const C = (F - 32) * 5/9;
    

    if (isNaN(F)) {
        return JSON.stringify (F) + " is not a valid number but a/an " + typeof F ;
    }

    if (F.length === 0) {
        return JSON.stringify (F) + " is not a valid number but an empty string";
    }
    
    if (typeof F === "string" || typeof F === "number") {
        let number = parseInt(F)
        return C.toFixed(4)
    }

    else if (F === null) {
        return (`${F}` + " is not a valid number but a null value");
    }
        
    else if (Array.isArray(F)) {
        return JSON.stringify (F) + " is not a valid number but an array";
    }
         
    else if (typeof F === "boolean") {
        return (`${F}` + " is not a valid number but a boolean");
    }
           
    else if (typeof F === 'undefined') {
        return (`${F}` + " is undefined");
    }

    

    else {
        return (JSON.stringify (F) + " is not a valid number but a/an " + typeof F );
    }
        
}


console.log(convertFahrToCelsius("osheyyy baddest"));
