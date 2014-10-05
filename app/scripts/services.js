(function(){

  // RESTful client with $resource service to access data on server
  var MyhealthServices = angular.module('Myhealth.services', ['ngResource']);

  MyhealthServices.factory('GoogleMapsAPI', ['$resource',
    function($resource){
      return $resource('config.json', {}, {
        query: {method:'GET', isArray:true, cache: true}
      });
    }
  ]);

})();