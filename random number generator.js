
//this method generates a random number between 0 and 1
// to truncate the decimal portion you have to round it down

let x ;
let y;
let z; 

// This would be as if we're rolling 3 dice 

document.getElementById("rollButton").onclick = function(){
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1; 

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;

}
