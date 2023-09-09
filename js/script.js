/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
// array of object quotes
const quotes = [
  {
    quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel",
    source: "Maya Angelou",
    category: "Inpirational"
  },
  {
    quote: "You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it.",
    source: "Maya Angelou",
    category: "Inpirational"
  },
  {
    quote: "Success is liking yourself, liking what you do, and liking how you do it.",
    source: "Maya Angelou",
  },
  {
    quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
    source: "Martin Luther King Jr.",
    citation: "Strength to Love",
    year: 1963
  },
  {
    quote: "The future I had imagined, the one just about to be realized, the culmination of decades of striving, evaporated.",
    source: "Dr. Paul Kalanithi",
    citation: "When Breath Becomes Air",
    year: 2016
  },
];


/***
 * `getRandomQuote` function
***/
// console.log(quotes.length)
function getRandomQuote(){
  // get random number between 0-5
  const randNum = Math.floor(Math.random() * quotes.length);
  
  // index into quotes array with random number and return object at that index
  const randQuote = quotes[randNum]
  return randQuote
};
getRandomQuote()
/***
 * `printQuote` function
***/

function printQuote(){
  const getquote = getRandomQuote();
  
  // grab object values 
  let html = 
  `<p class="quote">${getquote.quote}</p>
  <p class="source">${getquote.source}`;
  
  if(getquote.citation){
      html += `<span class="citation">${getquote.citation}</span>`
  }

  if(getquote.year){
    html += `<span class="year">${getquote.year}</span>`
  }

  if(getquote.category){
    html += `<span class="category">, ${getquote.category}</span>`
  }

  html += `</p>`

  document.getElementById('quote-box').innerHTML = html; 

}

function refreshQuote(){
  printQuote();
  setTimeout(refreshQuote, 5000)
}

refreshQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);