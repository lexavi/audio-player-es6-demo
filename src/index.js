'use strict';

import Player from 'audio-player-es6';

var audio = new Player();
audio.src(['/music/1.mp3','/music/2.mp3','/music/5.mp3','/music/4.mp3'])
.src('hjk.mpg').src('/music/3.mp3').src('/music/4.mp3')
.setCallBack({
	loading: function(state , player){
		console.log(state);
		document.getElementById('current').innerHTML = player.audioList[player.audioCurrentIndex];
	},
	playing:function(state , player){
		console.log(state, player.audioCurrentIndex , player.audioList[player.audioCurrentIndex]);
	},
	end:function(state , player){
		console.log(state);
	},
	abort: function(state , player){
		console.log(state , player.lastPlayIndex , player.audioList[player.lastPlayIndex]);
	}
}).play();

function $(name){
	return document.querySelector(name);
}

$('#play').onclick = function(){
	audio.play();
};
$('#pause').onclick = function(){
	audio.pause();
};
$('#pre').onclick = function(){
	audio.pre();
};
$('#next').onclick = function(){
	audio.next();
};
$('#auto').onclick = function(){
	audio.setAuto(true);
};
$('#volume').onchange = function(){
	audio.setVolume(+$('#volume').value);
};
$('#mode').onchange = function(){
	audio.setMode(+$('#mode').value);
};
window._audio = audio;