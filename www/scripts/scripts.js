"use strict";angular.module("config",[]).constant("ENV",{name:"production",apiEndpoint:"http://api.yoursite.com/"}),angular.module("Myhealth",["ionic","config","Myhealth.controllers","Myhealth.directives"]).run(["$ionicPlatform",function(a){a.ready(function(){window.cordova&&window.cordova.plugins.Keyboard&&cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),window.StatusBar&&StatusBar.styleDefault()})}]),angular.module("Myhealth.controllers",[]).controller("MapCtrl",["$scope","$ionicLoading",function(a,b){a.mapCreated=function(b){a.map=b},a.centerOnMe=function(){console.log("Centering"),a.map&&(b.show({content:"Getting current location...",showBackdrop:!1}),navigator.geolocation.getCurrentPosition(function(c){console.log("Got pos",c),a.map.setCenter(new google.maps.LatLng(c.coords.latitude,c.coords.longitude)),b.hide()},function(a){alert("Unable to get location: "+a.message)}))}}]),angular.module("Myhealth.directives",[]).directive("map",function(){return{restrict:"E",scope:{onCreate:"&"},link:function(a,b){function c(){var c={center:new google.maps.LatLng(43.07493,-89.381388),zoom:16,mapTypeId:google.maps.MapTypeId.ROADMAP},d=new google.maps.Map(b[0],c);a.onCreate({map:d}),google.maps.event.addDomListener(b[0],"mousedown",function(a){return a.preventDefault(),!1})}google.maps.event.addDomListener(window,"load",c)}}});