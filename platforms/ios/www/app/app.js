
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
         .when('/Main', {
             templateUrl: 'app/views/main.html',
             //controller: 'HomeCtrl'
             controller: 'mainController'
         })
          .when('/Browse', {
              templateUrl: 'app/views/browseImages.html',
              //controller: 'HomeCtrl'
              controller: 'browseImagesController'
          })
            .when('/Session', {
                templateUrl: 'app/views/session.html',
                //controller: 'HomeCtrl'
                controller: 'sessionController'
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
    $rootScope.serverip = 'http://172.0.6.168:8080/save_camera_image';
    $rootScope.client = '';
});

//var serviceBase = 'http://testsvr.eurogrp.com:8006/';
var serviceBase = 'http://192.168.1.99:8006/';
var uploadUrl = 'http://172.0.6.168:8080/save_camera_image'; 
//http://172.0.2.85:8080/save_camera_image'

cameraApp.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    uploadServiceUri:uploadUrl
});


