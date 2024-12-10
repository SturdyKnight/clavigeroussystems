  
           $(document).ready(function() {

            var counters = $(".count");
            var countersQuantity = counters.length;
            var counter = [];
            
            for (i = 0; i < countersQuantity; i++) {
              counter[i] = parseInt(counters[i].innerHTML);
            }
            
            var count = function(start, value, id) {
              var localStart = start;
              setInterval(function() {
                if (localStart < value) {
                  localStart++;
                  counters[id].innerHTML = localStart;
                }
              }, 40);
            }
            
            for (j = 0; j < countersQuantity; j++) {
              count(0, counter[j], j);
            }
            });


            
  $('.count').each(function () {
         $(this).prop('Counter',0).animate({
         Counter: $(this).text()
         }, {
         duration: 3300,
         easing: 'swing',
         step: function (now) {
             $(this).text(Math.ceil(now));
         }
         });
         });
         /*******/

  
// type animation
window.ityped.init(document.querySelector('.our-services-section .ityped'),{
  strings: ['Our Services'],
  typeSpeed:0,
  backSpeed:0,
  loop: false
})

window.ityped.init(document.querySelector('.about-us-section .ityped'),{
  strings: ['about us'],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
})

window.ityped.init(document.querySelector('.partners-section .ityped'),{
  strings: ['Partners'],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
})
window.ityped.init(document.querySelector('.who-we-are-section .ityped'),{
  strings: ['Who we are'],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
})
window.ityped.init(document.querySelector('.section-2 .ityped'),{
  strings: ['What we do'],
  typeSpeed:0,
  backSpeed:0,
  loop: false
})
window.ityped.init(document.querySelector('.pricing-plan-section .ityped'),{
  strings: ['What we offer'],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
})
window.ityped.init(document.querySelector('.our-teams-section .ityped'),{
  strings: ['Our team'],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
})
window.ityped.init(document.querySelector('.carousel-section .ityped'),{
  strings: ['Cyber Security'],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
})
window.ityped.init(document.querySelector('.contact-us-form .ityped'),{
  strings: ['Get Started Now'],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
})
window.ityped.init(document.querySelector('.faq-section .ityped'),{
  strings: ['Popular Questions'],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
})