import angular from 'angular'

let helloAngularCtrl = ($scope) => {
  console.log('greeting')
  $scope.greeting = 'Hello Angular'
}

angular.module('app.helloAngularComponent', [])
  .component('helloAngular', {
    template: require('./index.html'),
    controller: helloAngularCtrl
  })
  .controller('helloAngularCtrl', ['$scope', helloAngularCtrl])