//Hey guys remember to comment your code and write your name on functions

'use strict';

//Elements for Camera
var video = document.getElementById('video');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

//Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})



//Functions:


//Request Camera Permission
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
    });
}


//Take Photo
$("#snap").click(function() {
  var videoHeight = $("#video").height();
  var videoWidth = $("#video").width();
  canvas.height = videoHeight;
  canvas.width = videoWidth;

  context.drawImage(video, 0, 0, videoWidth, videoHeight);

  //Change buttons
  $("#video").hide();
  $("#snap").hide();
  $("#canvas").show();
  $("#retake").show();
});

//Retake Photo
$("#retake").click(function() {
  //Change buttons
  $("#video").show();
  $("#snap").show();
  $("#canvas").hide();
  $("#retake").hide();
});

//Placeholder Save Photo Function
$("#savePhoto").click(function() {
  //Change buttons
  $("#video").show();
  $("#snap").show();
  $("#canvas").hide();
  $("#retake").hide();
});

$("#recordButton").click(function() {
  //Change buttons
  $("#recordButton2").show();
  $("#recordButton").hide();
});

$("#recordButton2").click(function() {
  //Change buttons
  $("#recordButton2").hide();
  $("#recordButton").show();
});

$("#muteButton").click(function() {
  //Change buttons
  $("#unmuteButton").show();
  $("#muteButton").hide();
});

$("#unmuteButton").click(function() {
  //Change buttons
  $("#unmuteButton").hide();
  $("#muteButton").show();
});

$("#roundAudio").click(function() {
  //Change buttons
  $("#roundAudio2").show();
  $("#roundAudio").hide();
});

$("#roundAudio2").click(function() {
  //Change buttons
  $("#roundAudio").show();
  $("#roundAudio2").hide();
});

//Google Analytics for Page A- pictures
$("#imageIcon").click(function(e) {
  //Notify Google Analytics that it was clicked.
  e.preventDefault();
  console.log('button clicked');
  ga('create', 'UA-114655521-2', 'auto');
  ga("send", "event", "Pictures_A", "click");

});

//Google Analytics for Page A- bookmarks
$("#bookmarkIcon").click(function(e) {
  //Notify Google Analytics that it was clicked.
  e.preventDefault();
  console.log('button clicked');
  ga('create', 'UA-114655521-2', 'auto');
  ga("send", "event", "Bookmark_A", "click");
  /* Google Analytics code here? */
});

//Sample Function
function initializePage(){
	console.log("Javascript connected!");
  $("#recordButton2").hide();
  $("#roundAudio2").hide();
  $("#unmuteButton").hide();
}

//Button Icon Swappers