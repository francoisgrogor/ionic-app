var catApp = angular.module('CatApp', ['ngRoute']);

//configure our routes
catApp.config(function($routeProvider) {
	$routeProvider
		// route for the home page
		.when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		})
		
		.when('/home', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		})

		// route for the about page
		.when('/shop, {
			templateUrl : 'pages/catalogue.html',
			controller  : 'catalogueController'
		})

		// route for the contact page
		.when('/scan', {
			templateUrl : 'pages/scan.html',
			controller  : 'catalogueController'
		})
	
		// route for the about page
		.when('/cart, {
			templateUrl : 'pages/cart.html',
			controller  : 'cartController'
		})
		
		// route for the about page
		.when('/profile, {
			templateUrl : 'pages/profile.html',
			controller  : 'profileController'
		});
	
	
});

//create the controller and inject Angular's $scope
catApp.controller('mainController', function($scope) {
	// create a message to display in our view
	$scope.message = 'Home Tab.';
});

catApp.controller('catalogueController', function($scope) {
	$scope.message = 'Catalogue Tab.';
});

catApp.controller('scanController', function($scope) {
	$scope.message = 'Scan Tab.';
});

catApp.controller('cartController', function($scope) {
	$scope.message = 'Cart Tab.';
});

catApp.controller('profileController', function($scope) {
	$scope.message = 'Profile Tab.';
});

////This will be dynamic data
//.controller('CatelogueCtrl', function($scope) {
//	  $scope.categories = [
//	    { name: 'Groceries' },
//	    { name: 'Household Cleaning' },
//	    { name: 'Baby' },
//	    { name: 'Health and Beauty' },
//	    { name: 'Home and Garden' },
//	    { name: 'Pet Shop' },
//	    { name: 'Sports and Leisure' },
//	    { name: 'Stationery' },
//	    { name: 'Technology' },
//	    { name: 'Toys' },
//	    { name: 'Wine and liquor' },
//	    { name: 'Mothers Day' },
//	  ];
//	});

