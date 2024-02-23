const swiper = new Swiper('.swiper', {
  // Optional parameters
	effect: 'fade',
	
	autoplay: {
		delay: 1500,
		disableOnInteraction: false,
	},

  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
});