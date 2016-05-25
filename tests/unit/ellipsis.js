'use strict';

describe('sn.ellipsis', function() {
  var element, $scope, $rootScope, $timeout, $window, $document, ellipsis;

  beforeEach(module('sn.ellipsis'));

  describe('should crop text', function(){
    beforeEach(inject(function (_$rootScope_, $compile, $injector) {
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new();

      $timeout = $injector.get('$timeout');
      $document = $injector.get('$document');
      $window = $injector.get('$window');

      ellipsis = $injector.get('ellipsis');

      element =
        '<p style="line-height: 20px; display: inline-block; opacity: 0; width: 300px; height: 20px; font-size: 16px;" sn-ellipsis>'+
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'+
        '</p>';

      element = $compile(element)($scope);
      $scope.$digest();

    }));

    afterEach(function(){
      $timeout.verifyNoPendingTasks();
    });

    it('should replace excess text with ellipsis', function(){
      angular.element($document[0].body).append(element);
      $timeout.flush(100);
      expect( angular.element(element).html() ).not.toEqual('Lorem ipsum dolor sit amet, consectetur adipiscing elit.…');
      expect( angular.element(element).html() ).toContain('…');
    });

    it('should remove event handler', function(){
      angular.element($document[0].body).append(element);
      $timeout.flush(100);
      angular.element(element).html('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
      expect( angular.element(element).html() ).toEqual('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

      $scope.$broadcast('$destroy');
      angular.element($window).triggerHandler('resize');
      expect( angular.element(element).html() ).toEqual('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

    });
  });

  describe('should NOT crop text', function(){
    beforeEach(inject(function (_$rootScope_, $compile, $injector) {
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new();

      $timeout = $injector.get('$timeout');
      $document = $injector.get('$document');

      ellipsis = $injector.get('ellipsis');
      element = '<p style="line-height: 20px; height: 20px; width: 9999px; opacity: 0; font-size: 16px; display: inline-block;" sn-ellipsis>'+
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'+
                '</p>';

      element = $compile(element)($scope);
      $scope.$digest();

    }));

    afterEach(function(){
      $timeout.verifyNoPendingTasks();
    });

    it('should NOT have to replace text with ellipsis', function(){
      angular.element($document[0].body).append(element);
      $timeout.flush(100);
      expect(element.html()).toEqual('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

      angular.element($window).triggerHandler('resize');
      $timeout.flush(100);
      expect(element.html()).toEqual('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    });
  });

  describe('no element height', function(){
    beforeEach(inject(function (_$rootScope_, $compile, $injector) {
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new();

      $timeout = $injector.get('$timeout');
      $document = $injector.get('$document');

      ellipsis = $injector.get('ellipsis');

      element = '<p style="line-height: 20px; opacity: 0; height: 0px; font-size: 16px; display: inline-block;" sn-ellipsis>'+
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'+
                '</p>';

      element = $compile(element)($scope);
      $scope.$digest();

    }));

    afterEach(function(){
      $timeout.verifyNoPendingTasks();
    });

    it('should NOT have to replace text with ellipsis', function(){
      angular.element($document[0].body).append(element);
      $timeout.flush(100);
      expect(element.html()).toEqual('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    });
  });

});
