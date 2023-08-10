// Slideshow

const images = $('.slideShow-Slides');
const dots = $('.dots');
const btnNext = $('.btn-right');
const btnPrev = $('.btn-left');

let index = 0;

const showImage = index => {
  for(let i = 0; i < images.length; i++){
    if(i === index){
      images[i].style.display = "block";
    }
    else{
      images[i].style.display = "none";
    }
  }
}

$(() => {
  
  showImage(0);
  
  btnNext.on('click', () => {

    if(index >= images.length - 1)
      index = 0;
    else
      index++;
    showImage(index);

  });

  btnPrev.on('click', () => {
    if(index <= 0)
      index = images.length - 1;
    else
      index--;
    showImage(index);
  });

});

// Scroll to top

const topBtn = $('.btn-top');

topBtn.click(() => {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

// Gallery

const resize = $('.resizing-img');
const clickedImg = $('.portfolio-img');
const exitBtn = $('.exit-btn');

clickedImg.on('click', (e) => {
    $('.resize-img').css({'display': 'block'});
    resize.attr('src', e.target.currentSrc); 
})

exitBtn.on('click', () => {
    $('.resize-img').css({'display': 'none'})
})