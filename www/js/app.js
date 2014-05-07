angular.module('CatalogueApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('search', {
      url: '/search',
      templateUrl: 'search.html'
    })
    .state('settings', {
      url: '/settings',
      templateUrl: 'settings.html'
    })
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.scan', {
      url: "/scan",
      views: {
        'scan-tab': {
          templateUrl: "scan.html",
          controller: 'ScanTabCtrl'
        }
      }
    })
    .state('tabs.shop', {
      url: "/shop",
      views: {
        'shop-tab': {
          templateUrl: "shop.html",
          controller: 'ShopTabCtrl'
        }
      }
    })
    .state('tabs.cart', {
      url: "/cart",
      views: {
        'cart-tab': {
          templateUrl: "cart.html",
          controller: 'CartTabCtrl'
        }
      }
    })
    .state('tabs.profile', {
      url: "/profile",
      views: {
        'profile-tab': {
          templateUrl: "profile.html",
          controller: 'ProfileTabCtrl'
        }
      }
    })
    .state('tabs.search', {
      url: "/search",
      views: {
        'search-tab': {
          templateUrl: "search.html"
        }
      }
    })
    .state('tabs.shoppinglist', {
      url: "/shoppinglist",
      views: {
        'shoppinglist-tab': {
          templateUrl: "shoppinglist.html"
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "about.html"
        }
      }
    })
    .state('tabs.help', {
      url: "/help",
      views: {
        'help-tab': {
          templateUrl: "help.html"
        }
      }
    })
    .state('tabs.navstack', {
      url: "/navstack",
      views: {
        'navstack-tab': {
          templateUrl: "nav-stack.html"
        }
      }
    })
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "contact.html"
        }
      }
    });


   $urlRouterProvider.otherwise("/tab/home");

})
.controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.showRightMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  };
})
.controller('HomeTabCtrl', function($scope) {
})

.controller('ScanTabCtrl', function($scope) {
})

.controller('ShopTabCtrl', function($scope) {
})

.controller('CartTabCtrl', function($scope) {
})

.controller('ProfileTabCtrl', function($scope) {
})