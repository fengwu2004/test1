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
		],
		fullname:function() {
			var studentobj;
			studentobj = $scope.student;
			return studentobj.firstname + " " + studentobj.lastname;
		}
	}
})