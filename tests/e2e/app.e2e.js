'use strict';
/**
 * This module runs e2e test by setting up a module to make our
 * backend assertions e.g. mock the responses from our api before
 * lauching our actual application.
 * @main   sn.ellipsis.e2e
 * @module sn.ellipsis.e2e
 * @author SOON_
 */
angular.module('sn.ellipsis.e2e', ['sn.ellipsis', 'ngMockE2E'])
.run([
  '$httpBackend',
  function ($httpBackend) {

  }
]);
