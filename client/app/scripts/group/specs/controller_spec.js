'use strict';

describe('Controller: select group', function () {

  beforeEach(module('Group'));

  var controller;
  var scope;

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    controller = $controller('group', { $scope: scope });
  }));
//
  describe('On instance', function () {
    it('should set "controller_loaded" variable in scope', function () {
      expect(scope.controller_loaded).toContain('loaded');
    });
    //Adicion: Lenin Samaniego
    it('should set "controller_loaded" variable in scope', function () {
      expect(scope.controller_loaded).toContain('loaded');
    });
    it('MultiplicationTest',function(){
      var res= scope.Multiplication([2,2]);
      expect(res).toBe(4);

      res= scope.Multiplication([2,3]);
      expect(res).toBe(6);

      res= scope.Multiplication([2,3,2]);
      expect(res).toBe(12);

      res= scope.Multiplication([2,3,2,2]);
      expect(res).toBe(24);
    });
    it('ValidateGroupTest',function(){
      var listPerson=[{id:1009}, {id:2017}];
  
      var res= scope.ValidateGroup(listPerson);
      expect(res).toBe(true);

      res=scope.ValidateGroup([]);
      expect(res).toBe(false);

      res=scope.ValidateGroup([]);
      expect(res).toBe(false);

      res=scope.ValidateGroup([{id:1000}, {id:1001}]);
      expect(res).toBe(false);
    });
    
    it('GetPersonTravelTest',function(){  
      var listGroup=[
        [{id:1009}, {id:2017}],
        [{id:1009}, {id:2018}]
      ];

      var res = scope.GetPersonTravel(listGroup);
      expect(res).toEqual(['1009']);
      listGroup=[
        [{id:1009}, {id:2011}],
        [{id:1017}, {id:2011}]
      ];

      res = scope.GetPersonTravel(listGroup);
      expect(res).toEqual(['2011']);

      listGroup=[
        [{id:1009}, {id:2000}],
        [{id:1009}, {id:2001}],
        [{id:1002}, {id:2002}],
        [{id:1003}, {id:2002}],
      ];

      res = scope.GetPersonTravel(listGroup);
      expect(res).toEqual(['1009','2002']);

      
    });
  });

  describe('when going to /group', function () {

    var route, location, rootScope, httpBackend;

    beforeEach(inject(function ($route, $location, $rootScope, $httpBackend) {
      route = $route;
      location = $location;
      rootScope = $rootScope;
      httpBackend = $httpBackend;

      httpBackend.when('GET', 'scripts/group/views/group.html').respond('<div></div>');
    }));

    afterEach(function () {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it('should use minesweeper.html and controller', function () {
      expect(route.current).toBeUndefined();

      location.path('/group');

      httpBackend.flush();

      expect(route.current.templateUrl).toBe('scripts/group/views/group.html');
      expect(route.current.controller).toBe('group');
    });
  });

});
