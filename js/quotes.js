const quotes =[
  {
    "quote": "Life is what happens when you're busy making other plans.",
    "author": "John Lennon"
  },
  {
    "quote": "The only limit to our realization of tomorrow is our doubts of today.",
    "author": "Franklin D. Roosevelt"
  },
  {
    "quote": "Do what you can, with what you have, where you are.",
    "author": "Theodore Roosevelt"
  },
  {
    "quote": "In the middle of every difficulty lies opportunity.",
    "author": "Albert Einstein"
  },
  {
    "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "author": "Winston Churchill"
  },
  {
    "quote": "Happiness depends upon ourselves.",
    "author": "Aristotle"
  },
  {
    "quote": "It does not matter how slowly you go as long as you do not stop.",
    "author": "Confucius"
  },
  {
    "quote": "Everything you’ve ever wanted is on the other side of fear.",
    "author": "George Addair"
  },
  {
    "quote": "Act as if what you do makes a difference. It does.",
    "author": "William James"
  },
  {
    "quote": "Opportunities don't happen. You create them.",
    "author": "Chris Grosser"
  },
  {
    "quote": "The best way to predict the future is to create it.",
    "author": "Peter Drucker"
  },
  {
    "quote": "Your time is limited, so don’t waste it living someone else’s life.",
    "author": "Steve Jobs"
  },
  {
    "quote": "Dream big and dare to fail.",
    "author": "Norman Vaughan"
  },
  {
    "quote": "Believe you can and you’re halfway there.",
    "author": "Theodore Roosevelt"
  },
  {
    "quote": "Do not wait to strike till the iron is hot, but make it hot by striking.",
    "author": "William Butler Yeats"
  }
];


const  quote = document.querySelector("#quote span:first-child");
const  author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;