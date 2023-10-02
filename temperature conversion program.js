// Add this html within <body>
/*
 <label>Enter a temperature:</label><br>
    <input type="text" id="textBox"><br>

    <label>Convert to:</label><br>
    <input type="radio" id="cButton" name="unit">
    <label>Celsius</label><br>
    
    <input type="radio" id="fButton" name="unit">
    <label>Fahrenheit</label><br>

    <button type="button" id="submitButton">submit</button><br>
    <label id="tempLabel"></label>
    <script src="temperature conversion program.js"></script>
   
document.getElementById("submitButton").onclick = function(){

    let temp;
    if(document.getElementById("cButton").checked){
     temp = document.getElementById("textBox").value; // this is a string, we need to convert it to a number
     temp = Number(temp); // it's in Fahrenheit, let's invoke the toCelsius function
     temp = toCelsius(temp); // we have converted the temperature
     // Let's change our label
     document.getElementById("tempLabel").innerHTML = temp + "°C";

    }

    else if(document.getElementById("fButton").checked){
        temp = document.getElementById("textBox").value; 
        temp = Number(temp); 
        temp = toFahrenheit(temp); 
    
        document.getElementById("tempLabel").innerHTML = temp + "°F";
    }
    else{
        document.getElementById("tempLabel").innerHTML = "Select a unit";
    }

}

function toCelsius(temp){
  return (temp - 32) * (5/9);
}
function toFahrenheit(temp){
return temp * 9 / 5 + 32;
}
*/

// divide the length value by 1000
// Convert meters to kilometers 

let length = 50;

length = toMeters(length);
console.log(length); 

function toKilometers(length){
     return(length / 1000);
}

function toMeters(length){
    return(length * 1000);

}









