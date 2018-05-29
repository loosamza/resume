(function () {
  'use strict';

  var app = angular
    .module('myApp', ['ngRoute']);



  app.controller('AppController', ['$scope', '$timeout', function($scope, $timeout) {
    console.log('controller call')
    $scope.birthdate = 778179600000;
    var strArray = ['Communication', 'Self-Motivation', 'Responsibility', 'Flexibility', 'Ability to Work Under Pressure and Time Management'];
    var instance = new TypeIt('.typing', {

      strings: strArray,
      loop: true,
      loopDelay: 2000,
      cursorSpeed: 1500
    });
    instance.init();


  }])
  app.filter('ageFilter', function()  {
    function calculateAge(birthday) { // birthday is a date

      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    function monthDiff(d1, d2) {
      if (d1 < d2) {
        var months = d2.getMonth() - d1.getMonth();
        return 12 - Math.abs(months);
      }
      return 0;
    }

    return function (birthdate) {
      var age = calculateAge(new Date(birthdate));
      return age + ' Years ' + monthDiff(new Date(birthdate), new Date()) + ' Months';
    };
  });

})();
