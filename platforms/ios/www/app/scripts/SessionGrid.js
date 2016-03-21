
cameraApp.directive("sessionGrid", ['$compile', '$q', '$location',
function ($compile, $q, $location) {
    return {


        link: function (scope, element, attrs) {

            var generateGrid = function () {
                scope.sessonCount = attrs.sessions;
                scope.cols = attrs.cols;
                scope.rows = scope.sessonCount/ scope.cols;


                var divScroll = angular.element("<div class ='divscroll'>");
                    
                var tableElem = angular.element("<table>");
                tableElem.attr('border', '1');
                   

                for (var row = scope.rows; row >= 0; row--) {
                    var rowElem = angular.element("<tr>");
                    for (var col = scope.cols; col >= 0; col--) {
                      
                        var cell = angular.element("<td>").attr("Id", row + "-" + col);

                        var button = angular.element("<button>").attr("Id", row).text("Session " + col);
                        cell.append(button);
                       rowElem.append(cell);
                    }

                        tableElem.append(rowElem);
                    }
                    
                   

                divScroll.append(tableElem);
                element.append(divScroll);
                
                $compile(element.contents())(scope);

        }

    

            generateGrid();

        },
        restrict: "E",
        replace: true
    }
}])

