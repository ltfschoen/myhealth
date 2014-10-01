'use strict';

describe('Controller: MapCtrl', function () {

  var should = chai.should();

  // load the controller's module
  beforeEach(module('Myhealth'));

  var MapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MapCtrl = $controller('MapCtrl', {
      $scope: scope
    });
  }));

  it('should attach mapCreated to the scope', function () {
    scope.mapCreated.should.exist;
  });

});
