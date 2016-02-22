cameraApp.controller('scanController', ['$scope', 'authService', '$http', '$location', '$rootScope', function ($scope, authService, $http, $location, $rootScope) {



//    $scope.loginData = {
//        UserId: "",
//        Password: "",
//        
    //    };

  $scope.loginData = {
       CompanyID: "SG01",
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
//                      var code = barcode.split(";");
//                      var consultant = code[0];
//                      var customer = code[1];
//                      var server = code[2];

                      //alert(consultant + " " + customer + " " + server);
                      //$rootScope.consultant = consultant;
                      $rootScope.customer = barcode;
                      //$rootScope.serverip = server;

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

       
    authService.login($scope.loginData).then(function (response) {
       
    if (response.isExist == false) {
           alert("User Not  Exists");
              
      }
    else {
                
          $rootScope.customer =$scope.loginData.CustomerID;
          $location.path("/Camera");
         }

     },function (err) {
             $scope.message = err.error_description;
             alert($scope.message);
         });

    };

} ]);