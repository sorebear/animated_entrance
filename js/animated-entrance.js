function AnimateEntrance() {
  this.elements = document.querySelectorAll('main p, main h1, main h2, main h3, main h4, main h5, main h6, main img, main a, main button');
  this.hiddenElements = [];

  this.init = function() {
    this.handleScroll = this.handleScroll.bind(this);
    this.addScrollListeners();
    window.addEventListener('scroll', this.handleScroll);
  }

  this.addScrollListeners = function() {
    var that = this;
    this.elements.forEach(function(element) {
      
      var elementTop = element.getBoundingClientRect().top;

      if (elementTop > window.innerHeight) {
        element.classList.add('animated-entrance');
        element.classList.add('animated-entrance-hidden');

        that.hiddenElements.push(element);
      }
    });
  }

  this.handleScroll = function(e) {
    if (this.hiddenElements.length === 0) {
      window.removeEventListener('scroll', this.handleScroll);
    }

    var newHiddenElements = [];

    this.hiddenElements.forEach(function(hiddenElement) {
      if (hiddenElement.getBoundingClientRect().top < window.innerHeight) {
        hiddenElement.classList.remove('animated-entrance-hidden');
      } else {
        newHiddenElements.push(hiddenElement);
      }
    });

    this.hiddenElements = newHiddenElements;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var animatedEntranceHandler = new AnimateEntrance();
  animatedEntranceHandler.init();
});