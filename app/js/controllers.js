'use strict';

/* Controllers */

var webappControllers = angular.module('webappControllers', []);

webappControllers.controller('homeDisplayCtrl', ['$scope', function($scope){
	$scope.pageName = 'Home';
	$scope.frontPage = true;
}]);//homeDisplayCtrl

webappControllers.controller('projectListCtrl', ['$scope', 'Project', function($scope, Project){
	$scope.pageName = 'Project Lists';
	$scope.projects = Project.query();
}]);//projectListCtrl

webappControllers.controller('projectDisplayCtrl', ['$scope', '$routeParams', 'Project', function($scope, $routeParams, Project){
	$scope.pageName = 'Project Display';
	$scope.project = Project.get({projectId: $routeParams.projectId}, function(){

	});
}]);//projectListCtrl