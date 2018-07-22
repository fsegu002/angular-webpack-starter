let appName = 'app.template.name'
let appCtrl = 'AppController'


let mainController = ($scope) => {
  $scope.greeting = "Angular Template"
}

let app = angular.module(appName, []).controller(appCtrl, mainController)

mainController.$inject = ['$scope']