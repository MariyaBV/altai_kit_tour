$(document).ready(function() {
    let $youtubeDiv = $('#youtube-video');
    let $iframe = $youtubeDiv.find('iframe');
  
    if ($iframe.length) {
      let iframeWidth = $iframe.width();
      let iframeHeight = iframeWidth * 1.71;
      $iframe.css('height', iframeHeight + 'px');
    }
  });
  