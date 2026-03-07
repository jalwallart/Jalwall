const menuToggle = document.querySelector('.menu-toggle')
const nav = document.querySelector('.site-nav')

menuToggle.addEventListener('click', () => {

menuToggle.classList.toggle('active')
nav.classList.toggle('active')

});


document.querySelectorAll('.cta').forEach(button => {

  button.addEventListener('pointerdown', function(e){

    const existingRipple = button.querySelector('.cta-ripple');
    if (existingRipple) existingRipple.remove();

    const ripple = document.createElement('span');
    ripple.className = 'cta-ripple';

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    ripple.style.width = size + 'px';
    ripple.style.height = size + 'px';

    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top  = (e.clientY - rect.top  - size / 2) + 'px';

    button.appendChild(ripple);

    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });

  });

  button.addEventListener('click', function(e){

    const url = button.getAttribute('href');

    e.preventDefault();

    setTimeout(() => {
      window.open(url, "_blank");
    }, 220);

  });

});

let youtubePreconnected = false;

function warmYoutubeConnections(){

  if(youtubePreconnected) return;

  youtubePreconnected = true;

  const domains = [
    "https://www.youtube-nocookie.com",
    "https://i.ytimg.com"
  ];

  domains.forEach(domain => {

    const link = document.createElement("link");

    link.rel = "preconnect";
    link.href = domain;
    link.crossOrigin = "";

    document.head.appendChild(link);

  });

}

document.querySelectorAll('.video').forEach(video => {

  const playButton = video.querySelector('.video-play');

  playButton.addEventListener('pointerdown', (event) => {

    event.stopPropagation();

    if (video.dataset.loaded) return;

    warmYoutubeConnections();   // NEW

    video.dataset.loaded = "true";

    const videoId = video.dataset.video;

    const iframe = document.createElement('iframe');

    iframe.src =
      "https://www.youtube-nocookie.com/embed/" +
      videoId +
      "?autoplay=1&loop=1&playlist=" +
      videoId +
      "&playsinline=1&enablejsapi=1";

    iframe.title = "YouTube video player";

    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

    iframe.allowFullscreen = true;

    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "0";

    video.innerHTML = "";

    video.appendChild(iframe);

  });

});
