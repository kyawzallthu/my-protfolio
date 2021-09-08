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
        if (window.pageYOffset >= this.animationOffset[this.index] - window.innerHeight) {
          this.showElement();
          this.index++;
        } else
          return;
      }
    };

    Animation.prototype.showElement = function () {
      var element = document.getElementsByClassName(this.percentage)[this.index];
      element.className += ' show';
      this.animateBar(element, this.percentageArray[this.index]);
    }

    Animation.prototype.animateBar = function (element, width) {

      var $element = $(element),
        className = ' p' + width;

      $element.find(this.animationBar).addClass(className);
    }

    new Animation('.animation-bar', 'percentage');

//   });

//portfolio modalbox

$("#showproject1").click(function () {
  $("#project1").modal("show");
});
$("#show").click(function () {
  $("#aa").modal("show");
});


