'use strict';
angular.module('eightBallApp')
  .controller('AskCtrl', ['$scope', '$http',  function ($scope, $http) {
        $http.get('answers.json')
            .success(function(answers){
                console.log(answers);
                $scope.answers = answers;
            });
    $scope.ask = function () {
      var num = Math.floor((Math.random() * $scope.answers.length)+0);
      if(num > -1 && num <$scope.answers.length)
      alert($scope.answers[num].answer );
    }
  }]);