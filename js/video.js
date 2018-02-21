var v = document.getElementById('video_play');
v.addEventListener(
    'play', 
    function() { 
        v.play();
    }, 
    false);

v.onclick = function() {
    if (v.paused) {
        v.play();
    } else {
        v.pause();
    }

    return false;
};

v.addEventListener('ended', function() { 
   this.currentTime = 3; 
}, false);
