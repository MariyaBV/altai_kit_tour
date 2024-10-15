document.addEventListener('DOMContentLoaded', function () {
    let youtubeDiv = document.getElementById('youtube-video');
    let iframe = youtubeDiv.querySelector('iframe');
    let iframeWidth = iframe.offsetWidth;
    let iframeHeight = iframeWidth * 1.71;
    iframe.style.height = iframeHeight + 'px';
})