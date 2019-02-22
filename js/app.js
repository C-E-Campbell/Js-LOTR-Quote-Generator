// getRandomQuote() -- gets a random number and returns it. The random number will be the index in the Quote Array of the  random quote to use.
function getRandomQuote() {
  var quoteIndex = Math.floor(Math.random() * (quotes.length));
  return quoteIndex;
}

// getRandomColor() -- generates a random number to be used in making a random HSL color.
function getRandomColor() {
  var randomNumber = Math.floor(Math.random() * 360);
  return randomNumber;
}

// setBackgroundColor() -- sets the background color of the body element.
// side note -- hsl was used so I could make sure the colors wouldnt be too bright against the white font text. lightness is set to 20% always.
function setBackgroundColor() {
  let hue = getRandomColor();
  let hue2 = getRandomColor();
  let hsl1 = "hsl(" + hue + ", 45%, 20%, 0.85)";
  let hsl2 = "hsl(" + hue2 + ", 45%, 40%, 0.85)";
  let backgroundColor = document.getElementById('body');
  backgroundColor.style.cssText = "background: linear-gradient(155deg , " + hsl1 + ", " + hsl2 + "), url(https://s.aolcdn.com/hss/storage/midas/7d48de207b934a3e3a63e2aab34d2d09/205858706/lord_of_the_rings.jpg)";
}


// printQuote() -- calls the getRandomQuote function and prints the random quote chosen to the screen.
function printQuote() {
  var body = document.getElementById("quote_box");
  var quoteSource = document.getElementById("source");
  let randomNum = getRandomQuote();
  quote_box.innerHTML = "<p>"+quotes[randomNum].quote+"</p>";
  source.innerHTML = quotes[randomNum].source;
}

let buttonClick = document.getElementById("button");
buttonClick.onclick = function () {
  setBackgroundColor();
  printQuote();
}

setBackgroundColor();
printQuote();