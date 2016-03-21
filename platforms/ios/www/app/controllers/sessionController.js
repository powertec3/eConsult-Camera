cameraApp.controller('sessionController', ['$scope', 'authService', '$http', '$location', '$rootScope', function ($scope, authService, $http, $location, $rootScope) {

    $scope.customerId = $rootScope.customer;




    authService.httpGet("http://172.0.6.168:1337/clients", { "client_name": $scope.customerId }).then(function (clientJSON) {
        $rootScope.client = clientJSON;
        $scope.clientDetails = clientJSON;

        $scope.sessionCount = $scope.clientDetails[0].sessions.length;

    });




} ]);