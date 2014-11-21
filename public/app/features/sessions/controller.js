'use strict';

angular.module('eightBallApp')
  .controller('LoginCtrl', ['$scope', 'SessionService',
    function ($scope, SessionService) {
      $scope.login = function () {
        SessionService.authenticate($scope.model.email, $scope.model.password)
          .success(function (session, status) {
            console.log(session);
          })
          .error(function (data, status) {
            console.log(data);
          });
      }
    }]);