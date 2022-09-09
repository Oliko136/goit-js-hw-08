import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

onReload();

player.on('timeupdate', throttle(onTimeUpdate, 1000));


function onTimeUpdate(evt) {
    localStorage.setItem(STORAGE_KEY, evt.seconds);
}

function onReload() {
    const savedTime = localStorage.getItem(STORAGE_KEY);
    
    if (savedTime === null) {
        return;
    }
    
    player.setCurrentTime(savedTime);
}





