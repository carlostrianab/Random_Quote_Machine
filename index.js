function init(){
  //variables
  var text = document.getElementById('text');
  var author = document.getElementById('author');
  var newQuote = document.getElementById('new-quote');
  var tweet = document.getElementById('tweet-button');
  
 //Quotes object
  
  let quoteNumber = Math.floor(Math.random()*7 +1);
  
 var quotes = {
   quote1:{author:' Mark Twain', quote:'“ The secret of getting ahead is getting started.”' },
   quote2:{author:'Walt Disney', quote:'“ All our dreams can come true, if we have the courage to pursue them.”' },
   quote3:{author:'Michele Ruiz', quote:'“If people are doubting how far you can go, go so far that you can’t hear them anymore."' },
   quote4:{author:'Pablo Picasso', quote:'“ Everything you can imagine is real.”' },
   quote5:{author:'Eleanor Roosevelt', quote:'“ Do one thing every day that scares you.”' },
   quote6:{author:'Socrates', quote:'“ Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.”' },
   quote7:{author:'Abraham Lincoln', quote:'“ Whatever you are, be a good one.”' }
  };
  
  //events 
  
  newQuote.onclick = function(e){
    quoteNumber = Math.floor(Math.random()*7 +1);
    //change quote
    text.textContent = quotes['quote' + quoteNumber.toString()]['quote'];
    //change author
    author.textContent ='-' + quotes['quote' + quoteNumber.toString()]['author'];

  }
  
  tweet.onclick = function(e){
    document.getElementById('tweet-quote').href = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURI(text.textContent)  + encodeURI(author.textContent);
  }
}
