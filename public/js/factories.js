'use strict';

/* Factory */

angular.module('myApp.factories', [])
	.factory('dataFactory',['$http',function($http){

		var dataFactory={};
		dataFactory.getSurveys = function(){
			return $http.get('/api/posts');
		};

		dataFactory.insertSurvey = function(id,p){
			return $http.post('/api/post/'+id, p)
		};

		dataFactory.getSurvey = function(id){
			return $http.get('/api/post/' + id)
		};

		dataFactory.editSurvey = function(id,p){
			return $http.put('/api/post/' + id, p)
		};

		dataFactory.deleteSurvey = function(id){
			return $http.delete('/api/post/' + id)
		};


		return dataFactory;
	}])