"use strict";angular.module("config",[]).constant("ENV",{name:"production",apiEndpoint:"http://api.yoursite.com/"}),function(){var a=angular.module("Myhealth",["ionic","config","ngRoute","ngResource","Myhealth.services","Myhealth.controllers","Myhealth.directives"]);a.run(["$ionicPlatform",function(a){a.ready(function(){window.cordova&&window.cordova.plugins.Keyboard&&cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),window.StatusBar&&StatusBar.styleDefault()})}])}(),function(){var a=angular.module("Myhealth.controllers",[]);a.controller("MapCtrl",["$scope","$ionicLoading","GoogleMapsAPI",function(a,b,c){a.googleMapsAPI=c.query(),console.log(a.googleMapsAPI),a.mapCreated=function(b){console.log("Myhealth.controllers - mapCreated method called"),a.map=b},a.centerOnMe=function(){console.log("Myhealth.controllers - centerOnMe method called"),console.log("Centering"),a.map&&(b.show({content:"Getting current location...",showBackdrop:!1}),navigator.geolocation.getCurrentPosition(function(c){console.log("Myhealth.controllers - getCurrentPosition method called"),console.log("Got position: ",c),a.map.setCenter(new google.maps.LatLng(c.coords.latitude,c.coords.longitude)),b.hide()},function(a){alert("Unable to get location: "+a.message)}))}}])}(),function(){var a=angular.module("Myhealth.directives",[]);a.directive("map",function(){return{restrict:"E",scope:{onCreate:"&"},link:function(a,b){function c(){console.log("Myhealth.directives - initialize method called");var c=b[0],d=new google.maps.LatLng(43.07493,-89.381388,!0),e={center:d,zoom:16,mapTypeId:google.maps.MapTypeId.ROADMAP},f=new google.maps.Map(c,e);a.onCreate({map:f});{var g=(google.maps.event.addListenerOnce(f,"bounds_changed",function(){f.getBounds();console.log("Myhealth.directives - map bounds initialized")}),new google.maps.Marker({position:new google.maps.LatLng(43.07493,-89.381388),icon:"../images/star_health_high.png",shadow:"../images/star_health_high_shadow.png",title:"Star"})),h=new google.maps.InfoWindow({content:"Health level impacted by current environment"}),i=[new google.maps.LatLng(44.07493,-82.381388),new google.maps.LatLng(43.57493,-90.381388),new google.maps.LatLng(42.07493,-89.381388)],j=new google.maps.Polygon({path:i,strokeColor:"#ff44dd",strokeWeight:10,strokeOpacity:.5,fillColor:"#ff9999",fillOpacity:.3,map:f});google.maps.event.addDomListener(b[0],"mousedown",function(a){return console.log("Myhealth.directives - mousedown method called"),a.preventDefault(),g.setMap(f),!1}),google.maps.event.addDomListener(g,"click",function(){console.log("Myhealth.directives - click marker method called"),h.open(f,g);var a=g.getPosition();return console.log("Marker PositionClicked is: "+a),!1}),google.maps.event.addDomListener(j,"click",function(a){console.log("Myhealth.directives - click polygon method called");var b=a.latLng;return console.log("Polygon PositionClicked is: "+b),!1})}}google.maps.event.addDomListener(window,"load",c)}}})}(),function(){var a=angular.module("Myhealth.services",["ngResource"]);a.factory("GoogleMapsAPI",["$resource",function(a){return a("config.json",{},{query:{method:"GET",isArray:!0,cache:!0}})}])}();