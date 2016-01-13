cameraApp.controller('scanController', ['$scope', 'authService', '$http', '$location', '$rootScope', function ($scope, authService, $http, $location, $rootScope) {



//    $scope.loginData = {
//        UserId: "",
//        Password: "",
//        
    //    };

  $scope.loginData = {
       CompnayID: "SG01",
       CustomerID: "",
        
    };

    $scope.message = "";

    $scope.scanQR = function () {
        alert("scan starting...");
        cordova.plugins.barcodeScanner.scan(
          function (result) {


              if (result.cancelled == false) {
                  try {
                      var barcode = result.text;
                      var code = barcode.split(";");
                      var consultant = code[0];
                      var customer = code[1];
                      var server = code[2];

                      //alert(consultant + " " + customer + " " + server);
                      $rootScope.consultant = consultant;
                      $rootScope.customer = customer;
                      $rootScope.serverip = server;

                      $location.path("/Camera");
                  }
                  catch (err) {
                      alert("Error getting barcode");
                  }
              }
          },
          function (error) {
              alert("Scanning failed: " + error);
          }
       );
    }

    $scope.login = function () {

        alert("call web api");
        //alert($scope.loginData.UserId);
        authService.login($scope.loginData).then(function (response) {
        alert("get response");
//            if (response.isExist == true) {
//                $location.path("/Camera");
//            }
//            else {
//                alert("User Not Exists");
//            }

    alert (response);

    if (response.data[0] != null) {
                $rootScope.customer = customer;
                $location.path("/Camera");
            }
            else {
                alert("User Not Exists");
            }

        },
         function (err) {
             $scope.message = err.error_description;
             alert($scope.message);
         });

    };

} ]);