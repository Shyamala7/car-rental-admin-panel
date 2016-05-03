'use strict';

/* App Module */

var carRentalApp = angular.module('carRentalApp', ['ngRoute']);

 
/*
*	Routing
*
**/
//template/style_guide
carRentalApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'partials/common/login_registration.html',
			controller: 'signupCtrl'
		}).when('/logout', {
			templateUrl: 'partials/common/login_registration.html',
			controller: 'logoutCtrl'
		}).when('/', {
			templateUrl: 'partials/common/home.html',
			controller: 'homeCtrl'
		}).when('/car-master', {
			templateUrl: 'partials/common/car_master.html',
			controller: 'carMstrCtrl'
		})
		
	}
]);
 