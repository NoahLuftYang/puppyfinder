import 'angular';

// result module
angular
  .module('puppyfinder.result', []);

// result controller
angular
  .module('puppyfinder.result')
  .controller('ResultController', ['$sce', '$timeout', 'Result', 'RelatedContents', function($sce, $timeout, Result, RelatedContents) {
    /* Put results from survey.js in window scope into this scope's results variable */
    this.results = Result.results;
    this.tab = 0;

    /* Initialize method when ResultController is loaded in the DOM */
    this.init = () => {
      angular.forEach(this.results, (dog) => {
        /* Remove whitespaces in dog.breed string */
        let q = dog.breed.replace(/ /gi, '');
        /* Request related videos to Youtube */
        RelatedContents.getYoutube(q)
          .then((videos) => {
            dog.relatedVideos = videos.data.items;
            dog.currentVideo = dog.relatedVideos[0];
          });
        /* Request related photos to Daum Image Search */
        RelatedContents.getDaum(q)
          .then((photos) => {
            dog.relatedPhotos = photos.data.channel.item;
          });
      });

      this.roar = [];
      this.roarBGM;
      for (var i = 1; i < 5; i++ ) {
        this.roar.push('roar' + i + '.mp3');
      }
     };

    let loadingBGM = new Audio('../../assets/result-loading.mp3');

    if (window.bgm) {
      window.bgm.pause();
    }
    window.bgm = new Audio('../../assets/result-loaded.mp3');

    loadingBGM.play();

    this.isLoading = true;
    $timeout(() => {
      this.isLoading = false;
      loadingBGM.pause();
      window.bgm.play();
    }, 5000);

    /* Set the tabIndex to see the RelatedContents related breed selected */
    this.setTab = (tabIndex) => {
      this.tab = tabIndex;
      if (this.roarBGM) this.roarBGM.pause();
      this.roarBGM = new Audio('./assets/' + this.roar[Math.floor(this.roar.length * Math.random())]);
      this.roarBGM.play();
    };
    /* Confirm that video source can be trusted */
    this.getSrc = (video) => {
      return $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + video.id.videoId);
    };
    /* Change the video in iframe(player) */
    this.play = (dog, video) => {
      dog.currentVideo = video;
    };
}]);
