const video = document.querySelector('.video')
const imgVideo = document.querySelector('.video__img')
const imgIframe = document.querySelector('.video__iframe')

let visivble = false


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

video.addEventListener('click', () =>{
  if (visivble) {
    imgVideo.style = 'display: block;'
    visivble = false
  }
  else {
    imgVideo.style = 'display: none;'
    visivble = true
  }  
})