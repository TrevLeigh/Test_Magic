'use strict';

var templates = {
  ask: 'app/features/ball/views',
  login: 'app/features/sessions/views'
};

angular.module('eightBallApp', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: templates.ask + '/ask.html',
        controller: 'AskCtrl'
      })
      .when('/users/:id', {
        templateUrl: templates.ask + '/ask.html'
      })
      .when('/errors/404', {
        templateUrl: 'app/features/common/views/404.html'
      })
      .otherwise({ redirectTo: '/errors/404' });
  }]);