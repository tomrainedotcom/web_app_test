'use strict';

/* App Module */
var testApp = angular.module('testApp', ['ngRoute', 'ngMaterial', 'ngMdIcons', 'webappControllers', 'webappServices', 'webappDirectives']);

testApp.config(['$routeProvider', '$mdThemingProvider', '$mdIconProvider', function($routeProvider, $mdThemingProvider, $mdIconProvider) {
    
    //Theme setup
    $mdThemingProvider.theme('default')
        .primaryPalette('brown')
        .accentPalette('red');    
    
    //routes
	$routeProvider.
		when('/home', {
			'templateUrl' : 'partials/home.html',
			'controller' : 'homeDisplayCtrl'
		}).
		when('/portfolio', {
			'templateUrl' : 'partials/projectList.html',
			'controller' : 'projectListCtrl'
		}).
		when('/portfolio/:projectId', {
			'templateUrl' : 'partials/projectItem.html',
			'controller' : 'projectDisplayCtrl'
		}).
		otherwise('/home', {
			'templateUrl' : 'partials/home.html',
			'controller' : 'homeDisplayCtrl'
		});
}]);
testApp.controller('navigationCtrl', ['$mdSidenav', '$mdBottomSheet', '$log', '$q', '$scope', 'Project', function($mdSidenav, $mdBottomSheet, $log, $q, $scope, Project){
    var self = this;
    
    self.selected = null;
    self.toggleMenu = toggleMenuList;
    self.toggleSubment = toggleSubmenu;
    self.isOpen = isOpen;
    $scope.projects = Project.query();
    $scope.selectedMenu = '';
    
    function toggleMenuList(){
        var pending = $mdBottomSheet.hide() || $q.when(true);
        
        pending.then(function(){
            $mdSidenav('left').toggle();
        });
    }
    
    function toggleSubmenu (submenu_id) {
        if($scope.selectedMenu === submenu_id){
            $scope.selectedMenu = '';
        } else {
            $scope.selectedMenu = submenu_id;   
        }
    }
    
   function isOpen(submenu_id){
        return submenu_id === $scope.selectedMenu;
    }
}]);