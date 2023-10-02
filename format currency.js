//toLocaleString() = returns a string with a language 
//                   sensitive representation of this

// number.toLocaleString(locale, {options});

// 'locale' = specify that language (undefined = default set in browser)
// 'options' = object with formatting options 

let myNum = 100;

//myNum.toLocaleString("en-US"); // US English
//myNum.toLocaleString("hi-IN"); // Hindi

//myNum.toLocaleString("de-DE"); // Standard German

//myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
//myNum.toLocaleString("hi-IN", {style:"currency", currency:"INR"});

//myNum.toLocaleString("de-DE", {style:"currency", currency:"EUR"});

//myNum.toLocaleString(undefined, {style:"percent"});

myNum = myNum.toLocaleString(undefined, {style:"unit", unit:"celsius"});
console.log(myNum);