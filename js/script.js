// quote array
const quotes = [
    {
        quote:'Love is so short, forgetting is so long.',
        source:'Pablo Neruda',
        citation:'Selected Poems',
        year: '1990',
        tag: 'love'
    },
    {
        quote:'The advantages found in history seem to be of three kinds, as it amuses the fancy, as it improves the understanding, and as it strengthens virtue.',
        source:'David Hume',
        citation:'The philosophical works of David Hume',
        year: '1854',
        tag: 'history'
    },
    {
        quote:'Be a loner. That gives you time to wonder, to search for the truth. Have holy curiosity. Make your life worth living',
        source:'Albert Einstein',
        citation:'Einstein and the Poet',
        year: '1983',
        tag: 'life'
    },
    {
        quote:'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma - which is living with the results of other people\'s thinking. Don\'t let the noise of others\' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition.',
        source:'Steve Jobs',
        citation:'Address at Stanford University',
        year: '2005',
    },
    {
        quote:'I\'m not going to change the way I look or the way I feel to conform to anything. I\'ve always been a freak. So I\'ve been a freak all my life and I have to live with that, you know. I\'m one of those people.',
        source:'John Lennon',
        citation:'Interview',
        tag: 'life'
    }
];

//get random Integer from min and max
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// select an random quote from quoteArray and return the quote object
function getRandomQuote(){
    const randomIndex = getRandomInt(0,  quotes.length);
    return quotes[randomIndex];
}

// return a random background color
function getRandomBackgroundColor(){
    return `rgb(${getRandomInt(0, 256)}, ${getRandomInt(0, 256)}, ${getRandomInt(0, 256)})`;
}

// event listener to respond to "Show another quote" button clicks
function printQuote() {
    // get quote object
    const quoteObj = getRandomQuote();

    // get html ready to print
    let quoteHtml =  `<p class="quote"> ${quoteObj.quote} </p>
                            <p class="source"> ${quoteObj.source}`;
    if(quoteObj.citation) {
        quoteHtml += `<span class="citation"> ${quoteObj.citation} </span>`;
    }
    if(quoteObj.year){
        quoteHtml += `<span class="year"> ${quoteObj.year} </span>`;
    }
    if(quoteObj.tag){
        quoteHtml += `<span class="tag"> ${quoteObj.tag} </span>`;
    }
    quoteHtml += `</p>`;

    //put quoteHTML into the right place
    document.getElementById('quote-box').innerHTML = quoteHtml;
    document.getElementsByTagName('body')[0].style.backgroundColor = getRandomBackgroundColor();
}

window.onload = function() {
    // when user clicks anywhere on the button, the "printQuote" function is called
    document.getElementById('loadQuote').addEventListener("click", printQuote, false);

    // auto fresh the quote every 5 secs
    window.setInterval(function(){
        printQuote();
    }, 5000)

};










