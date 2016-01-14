cameraApp.controller('cameraController', function ($scope, $http, $rootScope) {

    $scope.customerId = $rootScope.customer;

    $scope.capturePhoto = function (taken_for) {

        //        alert("test");
        //        $scope.test = "testing camera...";
        //        alert($scope.test);
        $scope.taken_for = taken_for;
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 100,
            format: 'jpeg',
            destinationType: Camera.DestinationType.DATA_URL
        });
    }

    function onSuccess(imageData) {

        // $scope.$apply(function () {


        //var image = imageData.toDataURL({ format: 'jpeg', quality: 0.9 });

        var image = "data:image/jpeg;base64," + imageData;

        var currentTS = new Date().getTime();
        var timestamp = currentTS.toString();

        alert($scope.taken_for);

        var clientimage = {

            'client_name': 'CNX1',
            'timestamp': timestamp,
            'taken_for': taken_for,
            'source': image,
            'scale': '1',
            'angle': '0',
            'h': '480',
            'w': '640',
            'x': '0',
            'y': '0'
        };

        //alert("sending to server");
        // alert(clientimage.source);

        var transform = function (data) {
            return $.param(data);
        }

        /*
        $http.post('http://192.168.2.103:8080/save_camera_image', JSON.stringify(clientimage), {

        headers: { 'Content-Type': 'application/json; charset=utf-8' }
        }).success(function () {

        //alert(status);
        alert("Image Upload Successfully");
        }).catch(function (response, status, headers, config) {
        alert("Error uploading camera image" + response.data + response.status );
        });
         
        */


        $.ajax({
            url: 'http://172.0.2.85:8080/save_camera_image',
            async: true,
            data: JSON.stringify(clientimage),
            contentType: 'application/json; charset=utf-8',
            type: 'POST',
            success: function (data, status, jqXHR) {

                alert("image upload successfully.");
            },
            error: function (jqXHR, status, err) {
                alert("Error upload image");
            }


        }
            );




    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }


});