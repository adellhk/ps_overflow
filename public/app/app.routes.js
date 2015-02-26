app.config(['$routeProvider',
  function ($routeProvider) {
    console.log("hitting the route provider")
    $routeProvider.
    when("/questions", {
      templateUrl: "/app/components/questions/questionsIndex.html",
      controller: "QuestionsIndexCtrl"
    }).
    when("/questions/:id", {
      templateUrl: "/app/components/questions/questionsShow.html",
      controller: "QuestionsShowCtrl"
    }).
    otherwise({
      redirectTo: "/index.html"
    });
  }
  ]);
