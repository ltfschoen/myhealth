(function(){

  'use strict';

  var MyhealthControllers = angular.module('Myhealth.controllers', []);

  MyhealthControllers.controller('MapCtrl', ['$scope', '$ionicLoading', 'GoogleMapsAPI', function($scope, $ionicLoading, GoogleMapsAPI) {

    $scope.googleMapsAPI = GoogleMapsAPI.query();
    console.log($scope.googleMapsAPI);

    $scope.mapCreated = function(map) {
      console.log('Myhealth.controllers - mapCreated method called');
      $scope.map = map;
    };

    // Called from footer 
    $scope.centerOnMe = function () {
      console.log('Myhealth.controllers - centerOnMe method called');
      console.log('Centering');
      if (!$scope.map) {
        return;
      }

      $ionicLoading.show({
        content: 'Getting current location...',
        showBackdrop: false
      });

      navigator.geolocation.getCurrentPosition(function (pos) {
        console.log('Myhealth.controllers - getCurrentPosition method called');
        console.log('Got position: ', pos);
        // Google Maps API v2 - setCenter
        $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        $ionicLoading.hide();
      }, function (error) {
        alert('Unable to get location: ' + error.message);
      });
    };

  }]);

})();
