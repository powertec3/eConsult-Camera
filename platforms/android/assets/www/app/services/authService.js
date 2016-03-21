'use strict';
cameraApp.factory('authService', ['$http', '$q', 'ngAuthSettings', function ($http, $q, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;
   
    var authServiceFactory = {};

   
    var _loginOLD = function (loginData) {

        //alert("http.post");
        var deferred = $q.defer();
      
        //$http.post(serviceBase + 'api/Login', loginData).then(function (response) {
        $http.post(serviceBase + 'api/NYSS/Customer/fnGetCustomerDetails', loginData).then(function (response) {
            //alert(response);
            deferred.resolve(response);

        }),(function (err, status) {
         
            deferred.reject(err);
        });

        return deferred.promise;

    };

    var _login = function (loginData) {

        //alert("http.post");
        var deferred = $q.defer();

        

        $http.post(serviceBase + 'api/NYSS/Customer/fnGetCustomerDetails', loginData).success(function (response) {
            if (response) {
                deferred.resolve(response);
            } else {
                deferred.reject(response);
            }
        }).catch(function (data, status) {
           

            deferred.reject(error);
        });

        return deferred.promise;


    };


     var _httpGet = function (serviceURL, parameters) {
        var deferred = $q.defer();

      

        $http({
            url: serviceURL,
            method: "GET",
            params: parameters
        }).success(function (response) {
            deferred.resolve(response);
        }).error(function (err, status) {
            deferred.reject(err);
            //console.log(err);
            //alert(err);
        });
        return deferred.promise;
    }


    authServiceFactory.login = _login;
    authServiceFactory.httpGet = _httpGet;


    return authServiceFactory;
}]);