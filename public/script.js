var app = angular.module('appMod', []);

app.controller ('apiCtrl', function($scope, apifactory){
  console.log('api controller check');

  apifactory.setStuff().then(function() {
    $scope.stuffOnPage=apifactory.getStuff();
  });

  });

  app.factory('apifactory', function($http){
    console.log('factory has loaded');
    var stuff=[];

    function setStuff() {
      var promise=$http({
        method: "GET",
        url: '/stuff',
      }) .then(function callSuccess(response) {
        stuff = response.data;
      },function(error) {
        console.log(error);
      })
      return promise;
      };

    function getStuff() {
      return stuff;
    };

    return {
      setStuff: setStuff,
      getStuff: getStuff
    };
  });
