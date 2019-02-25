//------------------DOM Acquisition-----------------------//
const body = document.getElementById("quote_box");
const quoteSource = document.getElementById("source");
const quoteMovie = document.getElementById("movie");
const quotePicture = document.getElementById("picture");
const backgroundColor = document.getElementById('body');
const buttonClick = document.getElementById("button");
//--------------------------------------------------------//

// Auto Chnage Function for extra credit -- after 15 seconds the screen will auto chnage quotes and colors
function autoChangeQuote() {
  window.setInterval(changeQuoteAndColor, 15000);
}
function changeQuoteAndColor() {
  setBackgroundColor();
  printQuote();
}
//----------------------------------------------------------//

// getRandomQuote() -- gets a random number and returns it. The random number will be the index in the Quote Array of the  random quote to use.
const getRandomQuote = () => Math.floor(Math.random() * (quotes.length));

// getRandomColor() -- generates a random number to be used in making a random HSL color.
const getRandomColor = () => Math.floor(Math.random() * 360);

// setBackgroundColor() -- sets the background color of the body element.
const setBackgroundColor = () => {
  let hue = getRandomColor();
  let hue2 = getRandomColor();
  let hsl1 = "hsl(" + hue + ", 45%, 20%, 0.85)";
  let hsl2 = "hsl(" + hue2 + ", 45%, 40%, 0.85)";
  backgroundColor.style.cssText = "background: linear-gradient(155deg , " + hsl1 + ", " + hsl2 + "), url(https://s.aolcdn.com/hss/storage/midas/7d48de207b934a3e3a63e2aab34d2d09/205858706/lord_of_the_rings.jpg)";
}

// printQuote() -- calls the getRandomQuote function and prints the random quote chosen to the screen.
const printQuote = () => {
  let randomQuoteIndex = getRandomQuote();
  quote_box.innerHTML = "<p>" + quotes[randomQuoteIndex].quote + "</p>";
  source.innerHTML = quotes[randomQuoteIndex].source;
  picture.innerHTML = "<img src = " + quotes[randomQuoteIndex].picture + ">";

  // this IF STATEMENT checks to see if the random quote has a movie property of something other than undefined: if it does we add it to the page.
  // note: only three of the quotes have a movie property.

  if (quotes[randomQuoteIndex].movie === undefined) {
    movie.innerHTML = "";
  } else {
    movie.innerHTML = quotes[randomQuoteIndex].movie;
  }

}

// calling the two functions to set the intial quote and color, the user will use the button going forwards.
setBackgroundColor();
printQuote();
autoChangeQuote();

// Button Functionality
buttonClick.onclick = function () {
  setBackgroundColor();
  printQuote();
}