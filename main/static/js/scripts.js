$(document).ready(function() {function getQuote() {var quotes=[{quote: "It’s easier to fool people...than to convince them they have been fooled.",name: "Mark Twain"}, {quote: "There are two ways to be fooled. One is to believe what isn’t true; the other is to refuse to believe what is true.",name: "Soren Kierkegaard"}, {quote: "It is dangerous to let the public behind the scenes. They are easily disillusioned and then they are angry with you, for it was the illusion they loved.",name: "W. Somerset Maugham"}, {quote: "I believe that if life gives you lemons, you should make lemonade...And try to find somebody whose life has given them vodka, and have a party.",name: "Ron White"}, {quote: "If you wish for you and your family to have a happy, healthy, long life, then ignore conventional wisdom.",name: "Anonymous"}, {quote: "I have nightmares that I'm going to wake up, and everyone's driving a Prius and living in a condo, and we're all getting health insurance.",name: "Kid Rock"}, {quote: "Straight men just can't imagine the bliss of being in a relationship with someone who finds farting as funny as they do.",name: "Graham Norton"}, {quote: "Don't have a cow, man.",name: "Bart Simpson"}, {quote: "He or she who gets hired is not necessarily the one who can do that job best; but, the one who knows the most about how to get hired.",name: "Richard Lathrop"}, {quote: "Did you know babies are nauseated by the smell of a clean shirt?",name: "Jeff Foxworthy"}, {quote: "If your working television sits on top of your non-working television, you might be a redneck.",name: "Jeff Foxworthy"}, {quote: "The past is a great place and I don't want to erase it or to regret it, but I don't want to be its prisoner either.",name: "Mick Jagger"}, {quote: "What we achieve inwardly will change outer reality.",name: "Plutarch"}, {quote: "Logic will get you from A to B. Imagination will take you everywhere.",name: "Albert Einstein"}, {quote: "You teach, you teach, you teach.",name: "Weston A. Price"}, {quote: "No one wants to quit when he's losing and no one wants to quit when he's winning.",name: "Richard Petty"}, {quote: "Get your facts first, then you can distort them as you please.",name: "Mark Twain"}, {quote: "Governing a great nation is like cooking a small fish - too much handling will spoil it.",name: "Lao Tzu"}, {quote: "Don't sweat the petty things and don't pet the sweaty things.",name: "George Carlin"}, ];var quote = $('#quoteContainer').text();var quoteName = $('#quoteName').text();var sourceLength = quotes.length;var randomNumber = Math.floor(Math.random() * sourceLength);for (i = 0; i <= sourceLength; i += 1) {var newQuoteText = quotes[randomNumber].quote;var newQuoteName = quotes[randomNumber].name;}var timeAnimation = 6000;var quoteContainer = $('#quoteContainer');quoteContainer.fadeOut(timeAnimation, function() {quoteContainer.html('');quoteContainer.append('<p>' + newQuoteText + '</p>');quoteContainer.fadeIn(timeAnimation);});var quoteAuthor = $('#quoteAuthor');quoteAuthor.fadeOut(7000, function() {quoteAuthor.html('');quoteAuthor.append('<p id="quoteName">' + '-' + newQuoteName + '</p>');quoteAuthor.fadeIn(7000);});}getQuote();});
var name = "Welcome. I'm Ben";var Welcome = $("#Welcome-loading");Welcome.fadeOut(3000, function(){Welcome.html('');Welcome.append('<h1 id="right">'+ name+ '</h1>');Welcome.fadeIn(3000);Welcome.fadeOut(4000,function(){Welcome.html('');Welcome.append('<h1 id="right">'+ 'loading...'+ '</h1>');Welcome.fadeIn(5000);Welcome.fadeOut(3000);});});var loader = $(".bar");loader.hide(35000);$("#loader").hide(0);$("#loader").fadeIn(35000);$(document).ready(function() {setTimeout(function() {$('body').addClass('loaded');},17500);});
Barba.Pjax.start();
var HideShowTransition = Barba.BaseTransition.extend({
  start: function() {
    this.newContainerLoading.then(this.finish.bind(this));
  },

  finish: function() {
    document.body.scrollTop = 0;
    this.done();
  }
});
Barba.Pjax.getTransition = function() {
  return HideShowTransition;
};



'use strict';

function hasClass(el, className) {
  if (el.classList)
      return el.classList.contains(className);
   else
      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass(el, classNames) {
   classNames = classNames.split(' ')
   if (el.classList)
      classNames.forEach((classname) => el.classList.add(classname))
   else if (!hasClass(el, className))
      classNames.forEach((classname) => el.className += " " + classname)
}

function removeClass(el, className) {
   if (el.classList)
      el.classList.remove(className);
   else if (hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      el.className = el.className.replace(reg, ' ');
   }
}

;(function() {
   let lastAnimation = 0,
      sections = Array.prototype.slice.call(document.querySelectorAll('.box')),
      currentSection = 0,
      len = sections.length

   const handleScroll = (e) => {
      e.preventDefault()

      let timeNow = Date.now(),
         delta = e.deltaY,
         newSection

      if (timeNow - lastAnimation < 2000) {
         return;
      }

      if (e.deltaY < 0) {
         // Up
         newSection = (currentSection > 0) ? currentSection - 1 : currentSection
      } else {
         // Down
         newSection = (currentSection < len - 1) ? currentSection + 1 : currentSection
      }

      if (currentSection !== newSection) {
         // newSection is currentSection now
         // And `old` currentSection is previousSection
         if (currentSection < newSection) {
            // Moving Down
            removeClass(sections[newSection], 'under')
            addClass(sections[newSection], 'current')
            removeClass(sections[currentSection], 'current')
            addClass(sections[currentSection], 'above')
         } else {
            // Moving Up
            removeClass(sections[newSection], 'above')
            addClass(sections[newSection], 'current')
            removeClass(sections[currentSection], 'current')
            addClass(sections[currentSection], 'under')
         }

         // Update currentSection
         currentSection = newSection

         sections.forEach((item, index) => {
            // item.style.top = `${(index - currentSection) * 100}vh`
            item.style.transform = `translateY(${(index - currentSection) * 100}vh)`
         })
      }

      lastAnimation = timeNow
   }

   // first-load
   addClass(sections[currentSection], 'current')
   document.addEventListener('keydown', (ev) => {
    if (ev.keyCode === 38 || ev.keyCode === 40) {
      ev.preventDefault()
      return false
    }
  }, false)
   document.addEventListener('wheel', handleScroll)
})()

