'use strict';

/* Services */
var webappServices = angular.module('webappServices', ['ngResource']);

webappServices.factory('Project', ['$resource', function($resource){
	return $resource( 'projects/:projectId.json', {}, {
		query : { method:'GET', params:{projectId:'projects'}, isArray:true }
	});
}]);