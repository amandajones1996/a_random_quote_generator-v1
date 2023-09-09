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
const quotes = [
  {
    quote: "",
    source: "",
    citation: "",
    year: ""
  },
  {
    quote: "",
    source: "",
    citation: "",
    year: ""
  },
  {
    quote: "",
    source: "",
    citation: "",
    year: ""
  },
  {
    quote: "",
    source: "",
    citation: "",
    year: ""
  },
  {
    quote: "",
    source: "",
    citation: "",
    year: ""
  },
];


/***
 * `getRandomQuote` function
***/
// console.log(quotes.length)
function getRandomQuote(){
  const randNum = Math.floor(Math.random() * quotes.length);
  console.log(randNum)
  const randQuote = quotes[randNum]
  console.log(randQuote)
  return randQuote
};
getRandomQuote()
/***
 * `printQuote` function
***/

function printQuote(){
  const getquote = getRandomQuote();

  const html = 
  `<p class="quote">${getquote.quote}</p>
  <p class="source">${getquote.source}`;
  
  if(getquote.citation){
      html += `<span class="citation">${getquote.citation}</span>`
  }

  if(getquote.year){
    html += `<span class="year">${getquote.year}</span>`
  }

  html += `</p>`
  
  document.getElementById('quote-box').innerHTML = html; 
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);