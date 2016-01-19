
var cameraApp = angular.module('cameraApp', ['ngRoute']);

cameraApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/Home', {
            templateUrl: 'app/views/scan.html',
            //controller: 'HomeCtrl'
            controller: 'scanController'
        })

         .when('/Camera', {
             templateUrl: 'app/views/camera.html',
             //controller: 'HomeCtrl'
             controller: 'cameraController'
         })
         .when('/Scan', {
             templateUrl: 'app/views/scan.html',
             //controller: 'HomeCtrl'
             controller: 'scanController'
         })
        
    .otherwise({
        templateUrl: 'app/views/scan.html',
        //controller: 'HomeCtrl'
        controller: 'scanController'
    });

   
   

});



cameraApp.run(function ($rootScope) {
    $rootScope.consultant = '';
    $rootScope.customer = '';
    $rootScope.serverip = '';
});

//var serviceBase = 'http://testsvr.eurogrp.com:8006/';
var serviceBase = 'http: //192.168.1.99:8006/';
var uploadUrl = 'http://192.168.0.15:8080/save_camera_image';

cameraApp.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    uploadServiceUri:uploadUrl
});


