console.log("Hello World!");
$(document).ready(function ($) {
  function animateElements() {
    $('.progressbar').each(function () {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var percent = $(this).find('.circle').attr('data-percent');
      var percentage = parseInt(percent, 10) / parseInt(100, 10);
      var animate = $(this).data('animate');

      if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
        $(this).data('animate', true);

        $(this).find('.wordpress').circleProgress({
          startAngle: -Math.PI / 2,
          value: percent / 100,
          thickness: 5,
          size: 150,
          fill: {
            color: '#00749a'

          }
        }).on('circle-animation-progress', function (event, progress, stepValue) {
          $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
        }).stop();

        $(this).find('.gold').circleProgress({
          startAngle: -Math.PI / 2,
          value: percent / 100,
          thickness: 5,
          size: 150,
          fill: {
            color: 'gold'

          }
        }).on('circle-animation-progress', function (event, progress, stepValue) {
          $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
        }).stop();

        $(this).find('.java').circleProgress({
          startAngle: -Math.PI / 2,
          value: percent / 100,
          thickness: 5,
          size: 150,
          fill: {
            color: '#e22c2d'

          }
        }).on('circle-animation-progress', function (event, progress, stepValue) {
          $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
        }).stop();

        $(this).find('.blue').circleProgress({
          startAngle: -Math.PI / 2,
          value: percent / 100,
          thickness: 5,
          size: 150,
          fill: {
            color: 'blue'

          }
        }).on('circle-animation-progress', function (event, progress, stepValue) {
          $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
        }).stop();
      }
    });
  }

  // Show animated elements
  animateElements();
  $(window).scroll(animateElements);
});

// BarChart

// $(document).ready(function () {
var Animation = function (animationBar, percentage) {

  this.animationBar = animationBar;
  this.percentage = percentage;
  this.animationArray = null;
  this.animationOffset = null;
  this.labelArray = null;
  this.percentageArray = null;
  this.index = 0;

  this.initialize();

};

Animation.prototype.initialize = function () {

  this.animationArray = document.getElementsByClassName(this.percentage);

  if (this.animationOffset === null)
    this.animationOffset = [];

  if (this.labelArray === null)
    this.labelArray = [];

  if (this.percentageArray === null)
    this.percentageArray = [];

  this.setUpElements();

};

Animation.prototype.setUpElements = function () {

  for (var i = 0; i < this.animationArray.length; i++) {
    var elem = this.animationArray[i],
      offset = elem.offsetTop + document.getElementsByClassName(this.percentage)[0].clientHeight,
      percentage = $(this.animationArray[i]).data(this.percentage);

    this.animationOffset.push(offset);
    this.percentageArray.push(percentage);


    if (percentage == 85) {
      $(this.animationArray[i]).find('.label').html('HTML&CSS: ' + percentage + '%');
    }
    if (percentage == 70) {
      $(this.animationArray[i]).find('.label').html('JavaScript: ' + percentage + '%');
    }
    if (percentage == 65) {
      $(this.animationArray[i]).find('.label').html('WordPress: ' + percentage + '%');
    }
    if (percentage == 72) {
      $(this.animationArray[i]).find('.label').html('Java: ' + percentage + '%');
    }


  }

  this.attachListeners();
}

Animation.prototype.attachListeners = function () {

  $(window).on('scroll', this.onWindowScroll.bind(this));
};

Animation.prototype.onWindowScroll = function () {

  for (var i = 0; i < this.animationArray.length; i++) {
    if (window.pageYOffset >= (this.animationOffset[this.index] + 300) - window.innerHeight) {
      this.showElement();
      this.index++;
    } else
      return;
  }
};

Animation.prototype.showElement = function () {
  var element = document.getElementsByClassName(this.percentage)[this.index];
  element.className += ' showProgressBar';
  this.animateBar(element, this.percentageArray[this.index]);
}

Animation.prototype.animateBar = function (element, width) {

  var $element = $(element),
    className = ' p' + width;

  $element.find(this.animationBar).addClass(className);
}

new Animation('.animation-bar', 'percentage');

//   });

// portfolio
$('.portfolio-item').isotope(function () {
  itemSelector: '.item'
});

$('.portfolio-menu ul li').click(function () {
  $('.portfolio-menu ul li').removeClass('active');
  $(this).addClass('active');


  var selector = $(this).attr('data-filter');
  $('.portfolio-item').isotope({
    filter: selector
  })
  return false;
});


//venobox
$('.venobox').venobox({
  framewidth: '600px',                            // default: ''
  frameheight: 'auto',                             // default: ''
  border: '2px',                              // default: '0'
  bgcolor: '#ffffff60',                        // default: '#fff'
  titleattr: 'data-title',                       // default: 'title'
  numeratio: true,                               // default: false
  infinigall: true,                               // default: false
  share: ['facebook', 'twitter', 'download'] // default: []
});


setActiveSection('home');
function setActiveSection(current) {
  $(".items").removeClass("current-section");
  $(`.items[href='#${current}']`).addClass("current-section");

  $(".nav-link").removeClass("nav-link-active");
  $(`.nav-link[href='#${current}']`).addClass("nav-link-active");
}

function navScrolling() {
  let currentSection = $("section[id]");
  currentSection.waypoint(function (direction) {
    if (direction == "down") {
      let currentSectionId = $(this.element).attr('id');
      console.log(currentSectionId);
      setActiveSection(currentSectionId);
    }
  }, { offset: '100px' });

  currentSection.waypoint(function (direction) {
    if (direction == 'up') {
      let currentSectionId = $(this.element).attr('id');
      console.log(currentSectionId);
      setActiveSection(currentSectionId);
    }
  }, { offset: '-140px' });
};
navScrolling();



//nav menu icon
$(".navbar-toggler").click(function () {
  let result = $(".navbar-collapse").hasClass("show");
  //console.log(result);

  if (result) {
    $(".menu-icon").removeClass("fa-times").addClass("fa-bars");
  }
  else {
    $(".menu-icon").removeClass("fa-bars").addClass("fa-times");
  }
});

$(".nav-item").click(function () {
  $(".navbar-toggler").click();
});
//nav menu icon

// switch button 
$("#item6").click(function(){
  console.log("click switch buton");
  // $(".switch-icon").toggleClass("fa-moon-o");
  let current = $(".switch-icon").hasClass("fa-sun-o");

  if (current) {
    $(".switch-icon").removeClass("fa-sun-o").addClass("fa-moon-o light");
  }
  else {
    $(".switch-icon").removeClass("fa-moon-o light").addClass("fa-sun-o");
  }
})