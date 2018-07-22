import angular from 'angular'
import './styles.scss'

let helloAngularCtrl = ($scope) => {
  console.log('greeting')
  $scope.greeting = 'Hello Angular'
}

angular.module('app.template.name')
  .component('helloAngular', {
    template: require('./index.html'),
    controller: helloAngularCtrl
  })
  .controller('helloAngularCtrl', ['$scope', helloAngularCtrl])