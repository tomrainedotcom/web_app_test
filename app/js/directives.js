'use strict';

/* App Directives */
var webappDirectives = angular.module('webappDirectives', []);

//Header Directive
webappDirectives.directive('apphead', function(){
	return {
		require : 'E',
		templateUrl : 'partials/common/header.html'
	};
});

//Sidebar Nav Directive
webappDirectives.directive('sidebarNav', function(){
    return {
        require : 'E',
        templateUrl : 'partials/common/sidebar-nav.html'
    };
});

webappDirectives.directive('goBack', function($window){	
	return function($scope, $element){
		$element.on('click', function(){
			$window.history.back();
		});		
	}; 
});