var app = angular.module('AngularRails', ['ngRoute'])

app.controller('HomeCtrl', function($scope, $http){

  $http.get('/api/questions').then(function(res, data){
    console.log(res);
    console.log(data);
    $scope.questions = res.data;
  })
 $scope.showdiv = false
  $scope.myfunc = function(){
    alert('hey')
  }
});


