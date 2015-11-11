// angular.module("MyApp", [])	
// .controller("MainCtrl",function ($scope) {
//  	$scope.timeOfDay = 'morning';
//  	$scope.name = 'Nikki';
// });

function studentController($scope) {
	$scope.student={firstname:'',lastname:'zz',rollno:101};
	$scope.marks=[82,91,78,77,64];
	$scope.quantity=1;
	// $scope.enableDisableButton ='abcdefg';
	$scope.cost=30;
	$scope.fullname=function() {
		var studentObj;
		studentObj = $scope.student;
		return studentObj.firstname + " " + studentObj.lastname;	
	}
	$scope.subjects=[
		{name:'物理',marks:70},
		{name:'化学',marks:85},
		{name:'数学',marks:72},
		{name:'体育',marks:45},
		{name:'地理',marks:66}
	];
}