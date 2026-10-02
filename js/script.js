const quote = document.getElementById("quote");
const quoteBtn = document.getElementById("quoteBtn");

const quotes = [

"Success is not final, failure is not fatal.",

"Believe in yourself.",

"Dream big and dare to fail.",

"Practice makes perfect.",

"Never stop learning.",

"Stay positive and work hard.",

"Every day is a new beginning.",

"Small steps lead to big success."

];

quoteBtn.addEventListener("click", generateQuote);

function generateQuote(){

    let randomIndex = Math.floor(Math.random() * quotes.length);

    quote.textContent = quotes[randomIndex];

}

