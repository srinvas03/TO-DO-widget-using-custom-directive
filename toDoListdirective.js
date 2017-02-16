// custom directive with its module //

var toDoListModule = angular.module("toDoListModule", []);

toDoListModule.directive("toDoList",function(){

return {

templateUrl: "toDoListdirective.html", /* template */

scope: {                         /* scope */

	title: "@",

	heading: "@"

},

controller: function($scope){

var array1 = [];

$scope.array1 = array1;

/* adding item in controller */

$scope.add = function(activity){

if(activity == null )
{
	return;
}

$scope.array1.push(activity);

$scope.number = array1.length;

$scope.activity = "";

} 

/* removing item in controller */

$scope.remove = function(item){

var removeItem = $scope.array1.indexOf(item);

$scope.array1.splice(removeItem,1);

$scope.number = array1.length;

}

} /* controller */

} /* return */

});