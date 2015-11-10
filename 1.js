// angular.module("MyApp", [])	
// .controller("MainCtrl",function ($scope) {
//  	$scope.timeOfDay = 'morning';
//  	$scope.name = 'Nikki';
// });

function studentController($scope) {
	$scope.student={firstname:'李',lastname:'zz',rollno:101};
	$scope.marks=[82,91,78,77,64];
	$scope.quantity=1;
	$scope.cost=30;
}