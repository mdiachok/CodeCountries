var myApp = angular.module('myApp', []);
myApp.controller("myCtr", function ($scope) {
	$scope.data = countries;
	$scope.delete = function (i) {
		countries.splice(countries.indexOf(i), 1);
	};
	$scope.change = function (i) {
		i.name = prompt("Put a name", i.name);
		i.code = prompt("Put a code", i.code);
	};
	$scope.addCountry = function () {
		var newObject = {
			name: prompt("Enter a name")
			, code: prompt("Enter a code")
		}
		$scope.data.push(newObject);
	}
});