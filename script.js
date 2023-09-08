var annoyingDog = $('.annoying-dog');
var annoyingDogAudio = $('body').find('audio')[0];
annoyingDogAudio.addEventListener('canplaythrough', function() {
  // El audio se ha cargado completamente, ahora puedes reproducirlo.
  annoyingDogAudio.play();
});
annoyingDog.click(function() {
  annoyingDogAudio.play();
  $('.pet-me').text('Thank you');
});
  annoyingDogAudio.pause();
  $('.pet-me').show();
  console.log('Estado del audio:', annoyingDogAudio.readyState);
;
var annoyingDog = $('.annoying-dog');
var annoyingDogAudio = $('body').find('audio')[0];
var petMessage = $('.pet-message');
var isAudioPlaying = false;

annoyingDog.click(function () {
  if (!isAudioPlaying) {
    annoyingDogAudio.play();
    petMessage.text('Thank you');
    isAudioPlaying = true;
  } else {
    annoyingDogAudio.pause();
    isAudioPlaying = false;
    petMessage.text('Pet me');
  }
});