'use strict';
cameraApp.factory('authService', ['$http', '$q', 'ngAuthSettings', function ($http, $q, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;
   
    var authServiceFactory = {};

   
    var _loginOLD = function (loginData) {

        //alert("http.post");
        var deferred = $q.defer();
      
        $http.post(serviceBase + 'api/Login', loginData).then(function (response) {
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

        

        $http.post(serviceBase + 'api/Login', loginData).success(function (response) {
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
    authServiceFactory.login = _login;

    return authServiceFactory;
}]);