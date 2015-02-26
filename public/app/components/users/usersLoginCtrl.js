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
    user_id: "",
    password: ""
  };

  console.log("DO SOME ");
  $scope.usersLogin = function (){
    console.log('trying to usersLogin');
    $http.post('api/users/login', {
      user_id: $scope.credentials.user_id
    }).
    success(function(data){
      console.log('able to usersLogin')
    }).
    error(function(data){
      console.log('unable to usersLogin')
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
