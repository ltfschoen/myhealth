(function(){

  'use strict';

  var MyhealthDirectives = angular.module('Myhealth.directives', []);

  MyhealthDirectives.directive('map', function() {
    return {
      restrict: 'E',
      scope: {
        onCreate: '&'
      },
      link: function ($scope, $element, $attr) {
        function initialize() {
          console.log('Myhealth.directives - initialize method called');
          var mapOptions = {
            center: new google.maps.LatLng(43.07493, -89.381388),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          var map = new google.maps.Map($element[0], mapOptions);
    
          $scope.onCreate({map: map});

          // Create a marker and instantly add it to a map 
          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(43.07493, -89.381388),
            icon: '../images/star_health_high.png',
            shadow: '../images/star_health_high_shadow.png',
            title: 'Star'
          });

          // Create new InfoWindow object
          var infoWindow = new google.maps.InfoWindow({
            content: 'Health level impacted by current environment'
          });

          google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
            console.log('Myhealth.directives - mousedown method called');
            // Stop the side bar from dragging when mousedown/tapdown on the map
            e.preventDefault();

            // Add marker to map
            marker.setMap(map);

            return false;
          });

          // Listen for marker click event
          google.maps.event.addDomListener(marker, 'click', function () {
            console.log('Myhealth.directives - click marker method called');

            // Add InfoWindow to map
            infoWindow.open(map, marker);

            return false;
          });
        }

        google.maps.event.addDomListener(window, 'load', initialize);
      }
    };
  });

})();