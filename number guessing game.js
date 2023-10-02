const answer = Math.floor(Math.random() * 10 + 1); 
// The line above will give us a random number between 1 and 10

let guesses = 0;

document.getElementById("submitButton").onclick = function(){
    // we need to get a value from this textbox
    let guess = document.getElementById("guessField").value;
    guesses +=1;
    
    if(guess == answer){
    alert(`${answer} is the number. It took you ${guesses} guesses`);
    }
    else if(guess < answer){
        alert("Too small!");
     }
     else{
        alert("Too large!");
     }
    }