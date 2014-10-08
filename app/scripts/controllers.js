(function(){

  'use strict';

  var MyhealthControllers = angular.module('Myhealth.controllers', []);

  MyhealthControllers.controller('MapCtrl', ['$scope', '$ionicLoading', 'GoogleMapsAPI', function($scope, $ionicLoading, GoogleMapsAPI) {

    $scope.googleMapsAPI = GoogleMapsAPI.query();
    console.log($scope.googleMapsAPI);

    // Toggle the Panorama view visibility
    $scope.visiblePano = false;
    $scope.panoValue = 'Show';

    $scope.togglePano = function(data) {
      console.log('togglePano method called');
      console.log('data is: ' + data);
      $scope.visiblePano = !$scope.visiblePano;
      // Enable display of Panorama if user clicks marker
      if (data == true) { 
        $scope.visiblePano = true;
        // Broadcast to child directive that Panorama view has loaded 
        console.log('Broadcasting to child directive that Panorama view has loaded');
        $scope.$broadcast('loadedPano', true);
        $scope.panoValue = 'Hide';
      } else if ($scope.visiblePano == true) {
        $scope.panoValue = 'Hide';
      } else {
        $scope.panoValue = 'Show';
      }
    }

    // Register listener on parent controller
    $scope.$on('togglePanoEvent', function(event, data) {
      console.log('togglePanoEvent data sent to parent MapCtrl is: ' + data);
      $scope.togglePano(data);
    });

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
