const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
let twitterBtn = document.getElementById('twitter');
let newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = []; //let vs const

// Show new quote
function newQuote() {
    //pick a random quote from api quote array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //check if author field unknown
    if (!quote.author) {
        authorText.textContent= 'Unknown';
    } else{
        authorText.textContent= quote.author;
    }

    //check quote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent= quote.text;


    //   //picking from local quote.js file as well
    //    const quoteL = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    //  console.log(quote);

}

// Get Quote From API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        //console.log(apiQuotes[12]);
        newQuote();
    } catch (error) {
        //catch error
    }
}

//tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}


//event listeners
    console.log(document.getElementById('new-quote'));

    newQuoteBtn.addEventListener('click', newQuote);
    twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();


