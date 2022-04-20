$(".slider-one")
.not(".slick-initialized")
.slick({

	prevArrow:".site-slider.prev",
	nextArrow: ".site-slider.next",
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplaySpeed: 3000
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('https://mayur845.github.io/PWA/serviceworker.js')
  .then((registration) => {
  console.log("service worker registered")
  })
  .catch((err) => {
  console.log("sw registraration "+ err)
  });
  } 
