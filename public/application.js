
var app = angular.module('ParOverflow', [])

app.controller('HomeCtrl', function($scope, $http){


  $scope.getQuestions = function() {
    return $http.get('/api/questions').
    success(function(data) {
      $scope.questions = data
    }).
    error(function(data) {
      console.log('getQuestions failed')
    })
  }
  $scope.getQuestions();

});

//   $scope.getQuestions().then(function(res){
//     console.log(res.data);
//   }, function(){
//     console.log("it failed")
//   })

// })
