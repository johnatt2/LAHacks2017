angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {

	$scope.tagline = 'To the moon and back!';

	$http.get('http://localhost:8080/api/plans').then(function(success) {
		console.log(success);
		$scope.plans = success;
	})
});