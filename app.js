var app = angular.module('ngRouteExample', ['ngRoute'])
			.controller('MainController', function($scope) {
			})
			.config(function($routeProvider, $locationProvider) {
			$routeProvider
				.when('/users', {
					templateUrl: 'user-list.html',
					controller: 'UserListCtrl'
				})
				.when('/users/:username', {
					templateUrl: 'user.html',
					controller: 'UserCtrl'
				});
		
				// configure html5
				$locationProvider.html5Mode(true);
			});
			
			app.controller('UserListCtrl', function($scope) {});
			
			app.controller('UserCtrl', function($scope, $routeParams) {
				$scope.params = $routeParams;
			});