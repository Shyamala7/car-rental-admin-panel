'use strict';

/* App Module */

var carRentalApp = angular.module('carRentalApp', [
  'ngRoute', 'userControllers', 'researchServices', 'Constants', 'iResearchApp.directives', 'carControllers', 'customerControllers']);

 
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
		}).when('/home', {
			templateUrl: 'partials/common/home.html',
			controller: 'homeCtrl'
		}).when('/logout', {
			templateUrl: 'partials/common/login_registration.html',
			controller: 'logoutCtrl'
		}).when('/book-car', {
			templateUrl: 'partials/car/book_car.html',
			controller: 'bookCarCtrl'
		}).when('/booked-cars', {
			templateUrl: 'partials/car/booked_cars.html',
			controller: 'bookedCarCtrl'
		}).when('/edit-cars/:id', {
			templateUrl: 'partials/car/create_car.html',
			controller: 'editCarCtrl'
		}).when('/add-customer', {
			templateUrl: 'partials/customer/create_customer.html',
			controller: 'createCustomerCtrl'
		}).when('/customer-master', {
			templateUrl: 'partials/customer/view_customer.html',
			controller: 'viewCustomerCtrl'
		}).when('/edit-customer/:id', {
			templateUrl: 'partials/customer/create_customer.html',
			controller: 'editCustomerCtrl'
		}).when('/view-rented', {
			templateUrl: 'partials/car/rented_car.html',
		controller: 'rentedCarCtrl'});
	}
]);
