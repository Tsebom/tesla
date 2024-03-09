const imgVideo = document.querySelector('.video__img')
const imgIframe = document.querySelector('.video__iframe')


const swiper = new Swiper('.swiper', {
  // Optional parameters
	effect: 'fade',
	
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});