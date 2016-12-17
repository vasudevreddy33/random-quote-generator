$(document).ready(function(){
  
  var randQuote;
  var randAuthor;
  
  function getQuote(){
    
    var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url, function(data){
      console.log(data);
      $(".la-quote").html(data.quoteText);
      $(".la-author").html(" - " + data.quoteAuthor);
      randQuote = data.quoteText;
      randAuthor = data.quoteAuthor;
    });
    
  }
  getQuote();
  $("#tweet").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text=" + randQuote + "    - " + randAuthor);
  });
  $("#change").on("click", function(){
    getQuote();
  });
});