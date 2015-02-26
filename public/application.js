var app = angular.module('ParOverflow', ['ngRoute']);

app.config(['$routeProvider',
  function ($routeProvider) {
    console.log("hitting the route provider")
    $routeProvider.
      when('/testRoute1/:message', {
        templateUrl: "test1.html",
        controller: "testCtrl1"
      }).
      when("/testRoute2", {
        templateUrl: "test2.html",
        controller: "testCtrl2"
      }).
      when("/questions", {
        templateUrl: "questionsIndex.html",
        controller: "QuestionsIndexCtrl"
      }).
      when("/questions/:id", {
        templateUrl: "questionsShow.html",
        controller: "QuestionsShowCtrl"
      }).
      otherwise({
        redirectTo: "/index.html"
      });
  }
]);

app.controller('QuestionsIndexCtrl', function($scope, $http){
  $scope.getQuestions = function() {
    $http.get('/api/questions').
    success(function(data) {
      $scope.questions = data
    }).
    error(function(data) {
      console.log('getQuestions failed')
    })
  }
  $scope.getQuestions();

  $scope.editorShown = false
  $scope.showEditor = function () {
    $scope.editorShown = !$scope.editorShown;
  }

  $scope.getAnswers = function(id) {
    console.log("GETTING THE ANSWER FROM Q: " + id);
    id = $scope.questions[id].id
    console.log("new id: " + id)
    $http.get("/api/questions/" + id + "/answers").
      success(function(data){
        console.log('sucess! data:' +data)
        $scope.answers = data
      }).
      error(function(data) {
        console.log(data);
        console.log("getAnswers failed");
      })
  }

});


app.controller("testCtrl1", function($scope, $routeParams) {
  console.log("HITTING THE TEST CONTROLLER 1");
  $scope.message = "and now a message from the anchor tag: "
    + $routeParams["message"];
});

app.controller("testCtrl2", function($scope, $routeParams) {
  console.log("HITTING THE TEST CONTROLLER 2");
  $scope.message = "YOU ARE A GOD 2";
});
