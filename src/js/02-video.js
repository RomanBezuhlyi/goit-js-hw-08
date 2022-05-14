import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe); 

const KEY = "videoplayer-current-time";

const savedTime = JSON.parse(localStorage.getItem(KEY));

player.on('timeupdate', throttle(onPlay, 1000));   
    
function onPlay(evt) {
    localStorage.setItem(KEY, JSON.stringify(evt.seconds));
};

player.setCurrentTime(savedTime);