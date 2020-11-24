var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= .9;
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= .9;
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		this.innerHTML = "Mute";
		video.muted = false;
	}
	else {
		this.innerHTML = "Unmute";
		video.muted = true;
	}
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration - 5) {
		video.currentTime += 5;
	}
	else {
		video.currentTime = 0;
	}
	video.play()
});

document.querySelector("#old").addEventListener("click", function() {
	video.classlist.add("oldTime")
});

document.querySelector("#original").addEventListener("click", function() {
	video.classlist.remove("oldTime")
});
