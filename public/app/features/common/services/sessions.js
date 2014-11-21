'use strict';

angular.module('eightBallApp')
  .factory('SessionService', ['$http', function ($http) {

    var internals = {};
    internals.authenticate = function (email, password) {
      return $http.post('/v1/sessions', { email: email, password: password });
    };

    return {
      authenticate: internals.authenticate
    }
  }]);