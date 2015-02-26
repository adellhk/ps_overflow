// Questions#Show action controller
app.controller("QuestionsShowCtrl", function($scope, $http, $routeParams) {
  console.log("Inside QuestionsShowCtrl");

  function getQuestion() {
    console.log("GETTING QUESTION");
    $http.get('/api/questions/'+$routeParams.id).
    success(function(data){
      console.log('got Question!');
      $scope.question = data
    }).
    error(function(data){
      console.log('failed to getQuestion.');
    })
  };


  getQuestion();

  function getAnswers() {
    $http.get('/api/questions/'+$routeParams.id+'/answers').
    success(function(data){
      console.log('able to getAnswers.');
      $scope.answers = data;
    }).
    error(function(data){
      console.log('unable to getAnswers.');
    })
  };

  getAnswers();

  $scope.submitNewAnswer = function() {
    $http.post('/api/questions/'+ $routeParams.id +'/answers',
    {
      title: $scope.newAnswerTitle,
      content: $scope.newAnswerContent
    }).
    success(function(data){
      console.log('able to submitNewAnswer.');
    }).
    error(function(data){
      console.log('unable to submitNewAnswer.');
    });
  };
});
