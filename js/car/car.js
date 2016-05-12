'use strict';

/* Controllers */

var carControllers = angular.module('carControllers', ['ui.bootstrap']);



carControllers.controller('bookCarCtrl', ['$scope', '$location', 'API', 'Auth', 'Researches', '$routeParams', '$window', 'ToastOptions', 'Messages', 
	function($scope, $location, API, Auth, Researches, $routeParams ,$window, ToastOptions, Messages) {
		
		
			
			$scope.url = 'car-master-get-available-cars';
			
			Researches.getAll($scope.url).then(function (response) {
				console.log(response)
				if(response.code == 200) {
					$scope.cars = response.data;
					$scope.customer_id = Auth.user;
					console.log($scope.cars);
					console.log(Auth.user);
				}
				
			});
			$scope.rentCars = function(){
				console.log($scope.rentCar);
				$scope.rentCar.customer_id = Auth.user;
				console.log($scope.rentCar);
				
				$("#submit").prop('disabled', true);
			$scope.url = 'customer-master-rent-car';
			
			Researches.add($scope.url, $scope.rentCar).then(function (response) {
				
				if(response.code == 200) {
					console.log(response);
					
					$location.path("/booked-cars");
					
				}
				else if(response.code == 202) {
					toastr.success(Messages.Authentication.Failed, '', ToastOptions);
				}
				
			});
				
			}
		
		}
		
		
]);

carControllers.controller('bookedCarCtrl', ['$scope', '$location', 'API', 'Auth', 'Researches', '$routeParams', '$window', 'ToastOptions', 'Messages', 
	function($scope, $location, API, Auth, Researches, $routeParams ,$window, ToastOptions, Messages) {
		
		console.log("test");
			
			$scope.booked_car_details = {customer_id: ""};
			$scope.url = 'customer-rented-cars';
			$scope.booked_car_details.customer_id = Auth.user;
			
			Researches.getDetail($scope.url, $scope.booked_car_details).then(function (response) {
				console.log(response)
				if(response.code == 200) {
					$scope.cars = response.data;
					
				}
				
			});
$scope.returnCar = function(id) {
				console.log(id);
				$scope.cars = {id:""};
				$scope.cars.id = id;
				
				$scope.url = 'customer-master-end-lease';
				
				Researches.add($scope.url, $scope.cars).then(function (response) {
					console.log(response)
					if(response.code == 200) {
						//$location.path("/car-master");
						
						//window.location.reload();
					}
					
				});
				
			}			
		
		}
		
		
]);

