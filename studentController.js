mainApp.controller("studentController", function($scope) {
	
	$scope.student = { 
		firstname:"Mahesh",
		lastname:"parashar",
		fees:500,
		subjects:[
			{name:'physics', marks:70},
			{name:'chemistry', marks:80},
			{name:'math', marks:65},
			{name:'English', marks:75},
			{name:'Hindi', marks:67},
		]}
		
	$scope.reset = function() {
			$scope.student.firstname = "Bill";
			$scope.student.lastname = "Gate";
			$scope.student.email = "microsoftt@microsoft.com"; 
	}
})