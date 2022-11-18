var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() { 
  new YT.Player('player', {
    videoId: 'ee973zMi0Cs',  
    playerVars: { 
      autoplay: true,
      loop: true,
      playlist: 'ee973zMi0Cs'
    },
    events: {
      onReady: function (event) {
        event.target.mute() // 음소거
      }
    }
  });
}