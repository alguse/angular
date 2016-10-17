  (function () {
  'use strict';

  angular.module('Assigment1', [])

  .controller('Assigment1Ctrl', function ($scope) {
  $scope.lunchMenu = "";
  $scope.checkFood = function(){
    if($scope.lunchMenu==""){
      $scope.response = "Please enter data first";
      return;
    }
    var items= $scope.lunchMenu.split(",");
    var count=0;
    for(var i=0;i<items.length;i++){
      if(items[i]!="")
        count++;
    }
    if(count <= 3)
    $scope.response = "Enjoy!";
    else {
      $scope.response = "Too much!";
    }

    console.log(items);
  }
  });

  })();
