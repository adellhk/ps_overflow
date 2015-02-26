// app.controller("UsersLoginCtrl", [$scope, $rootScope, AUTH_EVENTS, AuthService, function () {
//   $scope.credentials = {
//     username: "",
//     password: "",
//   };

//   $scope.login = function (credentials) {
//     AuthService.login(credentials).then(function (user) {
//       $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
//       $scope.setCurrentUser(user);
//     }, function () {
//       $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
//     });
//   };

// }]);
app.controller("UsersLoginCtrl", function ($scope, $http, $routeParams) {
  $scope.credentials = {
    // can be username or email
    identifier: "",
    password: ""
  };

  console.log("DO SOME ");
  $scope.usersLogin = function (){
    console.log('trying to usersLogin');
    // Janky place to store user info & auth
    $scope.session = {}

    // Submit credentials to database
    $http.post('api/users/login', {
      identifier: $scope.credentials.identifier,
      password: $scope.credentials.password
    }).
    success(function(data){
      console.log('able to usersLogin')
      $scope.session.user = data
      $scope.session.display = ("Hi, " + data.name)
      console.log($scope.session.user)
    }).
    error(function(data){
      console.log('unable to usersLogin')
      $scope.session.display = "something went wrong :("
    });
  };
  // $scope.message = "hilo"
  // $scope.login = function (credentials) {
  //   AuthService.login(credentials).then(function (user) {
  //     // $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
  //     $scope.setCurrentUser(user);
  //   }, function () {
  //     // $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
  //   });
  // };

});
