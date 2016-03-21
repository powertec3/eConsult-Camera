cameraApp.controller('sessionController', ['$scope', 'authService', '$http', '$location', '$rootScope', function ($scope, authService, $http, $location, $rootScope) {

    $scope.customerId = $rootScope.customer;
    $scope.sessionCount = 0;


    //http://localhost:1337/clients
    authService.httpGet($rootScope.gigatronserviceip, { "client_name": $scope.customerId }).then(function (clientJSON) {
        $rootScope.client = clientJSON;
        $scope.clientDetails = clientJSON;

        $scope.sessionCount = $scope.clientDetails[0].sessions.length;

    });




} ]);