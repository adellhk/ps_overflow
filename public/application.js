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

// Questions#Index controller
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

});

// Functions
function getQuestion($scope, $http, $routeParams) {
  console.log("GETTING QUESTION");
  $http.get('/api/questions/'+$routeParams.id).
  success(function(data){
    console.log('got Question! data:' +data);
    $scope.question = data
  }).
  error(function(data){
    console.log('failed to getQuestion. Data:' +data);
  })
};

function getAnswers($scope, $http, $routeParams) {
  $http.get('/api/questions/'+$routeParams.id+'/answers').
  success(function(data){
    console.log('able to getAnswers. Data: '+data);
    $scope.answers = data;
  }).
  error(function(data){
    console.log('unable to getAnswers. Data: '+data);
  })
};

// Questions#Show action controller
app.controller("QuestionsShowCtrl", function($scope, $http, $routeParams) {
  console.log("Inside QuestionsShowCtrl");
  getQuestion($scope, $http, $routeParams);
  getAnswers($scope, $http, $routeParams);
  // $scope.getAnswers = function(id) {
  //   console.log("GETTING THE ANSWER FROM Q: " + id);
  //   console.log("new id: " + $questionId)
  //   $http.get("/api/questions/" + $questionId + "/answers").
  //   success(function(data){
  //     console.log('sucess! data:' +data)
  //     $scope.answers = data
  //   }).
  //   error(function(data) {
  //     console.log(data);
  //     console.log("getAnswers failed");
  //   })
  // }

});

// Test controllers
app.controller("testCtrl1", function($scope, $routeParams) {
  console.log("HITTING THE TEST CONTROLLER 1");
  $scope.message = "and now a message from the anchor tag: "
  + $routeParams["message"];
});

app.controller("testCtrl2", function($scope, $routeParams) {
  console.log("HITTING THE TEST CONTROLLER 2");
  $scope.message = "YOU ARE A GOD 2";
});
