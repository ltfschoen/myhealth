// Encapsulate code in self-executing anonymous function to prevent cluttering global namespace
// and avoid naming collisions, as code inside parentheses is run immediately but invisible to outside code
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

          var mapElement = $element[0];
          // Third arg is noWrap boolean that forces Lat -90 to +90 and Lng -180 to +180
          var latLng = new google.maps.LatLng(43.07493, -89.381388, true);
          
          // Note: Controls added first appear closest to edge of map
          var mapOptions = {
            center: latLng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            keyboardShortcuts: true, // default is true. arrow keys pan. +/- zooms
            disableDoubleClickZoom: false, // default is false.
            draggable: true, // default is true. pan the map by dragging
            scrollwheel: true, // default is true. scroll wheel of mouse zooms
            streetViewControl: true, // default is true. toggles display of pegman
            disableDefaultUI: false, // default is false. property for UI (zoom, map control bar)
            mapTypeControl: true, // default is true. property for UI (map control bar)
            mapTypeControlOptions: { // DEFAULT (auto), HORIZONTAL_BAR, or DROPDOWN_MENU
              style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
              position: google.maps.ControlPosition.TOP_LEFT,
              mapTypeIds: [ // array of map options available
                google.maps.MapTypeId.ROADMAP, // default
                google.maps.MapTypeId.SATELLITE, // default
                google.maps.MapTypeId.TERRAIN // default
              ]
            },
            navigationControl: true, // default is true
            navigationControlOptions: {
              position: google.maps.ControlPosition.TOP_LEFT,
              style: google.maps.NavigationControlStyle.SMALL // default SMALL (DEFAULT, ZOOM_PAN, ANDROID)
            },
            scaleControl: true, // default is false
            scaleControlOptions: {
              position: google.maps.ControlPosition.TOP,
              style: google.maps.ScaleControlStyle.SMALL // unsure of alternatives
            }
          };

          var map = new google.maps.Map(mapElement, mapOptions);
    
          $scope.onCreate({map: map});

          // Check when map initialized only once and remove event listener after its run
          var mapReady = google.maps.event.addListenerOnce(map, 'bounds_changed', function() {
            var bounds = map.getBounds();
            console.log('Myhealth.directives - map bounds initialized');
          });

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

          // Listen for close window click event
          // Reference: https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.StreetViewPanorama.md
          var closeInfoWindow = google.maps.event.addDomListener(infoWindow, 'closeclick', function (e) {
            console.log('Myhealth.directives - close infoWindow clicked');
            // Close InfoWindow
            infoWindow.close(map, infoWindow);
            // Assign the returned MouseEvent object property of e
            var positionClicked = marker.getPosition();
            console.log('InfoWindow Closed is at PositionClicked: ' + positionClicked);

            return false;
          });


          // Create array of points
          var points = [
            new google.maps.LatLng(44.07493, -82.381388),
            new google.maps.LatLng(43.57493, -90.381388),
            new google.maps.LatLng(42.07493, -89.381388)
          ];

          // Create new polygon from polylines
          var polygon = new google.maps.Polygon({
            path: points,
            strokeColor: '#ff44dd',
            strokeWeight: 10,
            strokeOpacity: 0.5,
            fillColor: '#ff9999',
            fillOpacity: 0.3,
            map: map
          });
          // Note: Event listeners assigned to a variable to prevent global variables
          var placeMarker = google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
            console.log('Myhealth.directives - mousedown method called');
            // Stop the side bar from dragging when mousedown/tapdown on the map
            e.preventDefault();
            // Add marker to map
            marker.setMap(map);
            return false;
          });

          // Listen for marker click event
          var handleMarker = google.maps.event.addDomListener(marker, 'click', function (e) {
            console.log('Myhealth.directives - click marker method called');
            // Add InfoWindow to map
            infoWindow.open(map, marker);
            // Assign the returned MouseEvent object property of e
            var positionClicked = marker.getPosition();
            console.log('Marker PositionClicked is: ' + positionClicked);

            return false;
          });

          // Listen for polyline click event
          var handlePolyline = google.maps.event.addDomListener(polygon, 'click', function (e) {
            console.log('Myhealth.directives - click polygon method called');
            // Assign the returned MouseEvent object property of e
            var positionClicked = e.latLng;
            console.log('Polygon PositionClicked is: ' + positionClicked);
            return false;
          });

        }
        // Wait for window object map element to load in browser before run initialize method
        google.maps.event.addDomListener(window, 'load', initialize);
      }
    };
  });

})();