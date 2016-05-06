describe('dataFactory', function() {
   var $httpBackend, $rootScope, createController, authRequestHandler;

   // Set up the module
   beforeEach(module('myApp'));

   beforeEach(inject(function($injector) {
     // Set up the mock http service responses
     $httpBackend = $injector.get('$httpBackend');

 $httpBackend.whenRoute('GET', '/post/:id')
  .respond(function(method, url, data, headers, params) {
    return [200, surveys[Number(params.id)]];
  });

it('should demonstrate using when (200 status)', inject(function($http) {
  
  var $scope = {};

  /* Code Under Test */
  $http.postt('http://localhost:3000/addPost/0')
    .success(function(data, status, headers, config) {
      $scope.valid = true;
      $scope.response = data;
    })
    .error(function(data, status, headers, config) {
      $scope.valid = false;
  });
  /* End */

  $httpBackend
    .when('POST', 'http://localhost:3000/')
    .respond(200, { 'name': 'Survey1' });

  $httpBackend.flush();

  expect($scope.valid).toBe(true);
  expect($scope.response).toEqual({'name': 'Survey1' });

}));

it('should demonstrate using when (200 status)', inject(function($http) {
  
  var $scope = {};

  /* Code Under Test */
  $http.get('http://localhost:3000/readPost/5ckoidgvsowyr34gs')
    .success(function(data, status, headers, config) {
      $scope.valid = true;
      $scope.response = data;
    })
    .error(function(data, status, headers, config) {
      $scope.valid = false;
  });
  /* End */

  $httpBackend
    .when('GET', 'http://localhost:3000/readPost/5ckoidgvsowyr34gs')
    .respond(200, { 'name': 'Survey1' });

  $httpBackend.flush();

  expect($scope.valid).toBe(true);
  expect($scope.response).toEqual({'name': 'Survey1' });

}));

it('should demonstrate using when (200 status)', inject(function($http) {
  
  var $scope = {};

  /* Code Under Test */
  $http.get('http://localhost:3000/readPost/5ckoidgvsowyr34gs')
    .success(function(data, status, headers, config) {
      $scope.valid = true;
      $scope.response = data;
    })
    .error(function(data, status, headers, config) {
      $scope.valid = false;
  });
  /* End */

  $httpBackend
    .when('GET', 'http://localhost:3000/readPost/5ckoidgvsowyr34gs')
    .respond(200, { 'name': 'Survey1' });

  $httpBackend.flush();

  expect($scope.valid).toBe(true);
  expect($scope.response).toEqual({'name': 'Survey1' });

}));

it('should demonstrate using when (200 status)', inject(function($http) {
  
  var $scope = {};

  /* Code Under Test */
  $http.put('http://localhost:3000/editPost/5ckoidgvsowyr34gs')
    .success(function(data, status, headers, config) {
      $scope.valid = true;
      $scope.response = data;
    })
    .error(function(data, status, headers, config) {
      $scope.valid = false;
  });
  /* End */

  $httpBackend
    .when('PUT', 'http://localhost:3000/editPost/5ckoidgvsowyr34gs')
    .respond(200, { 'name': 'Survey1' });

  $httpBackend.flush();

  expect($scope.valid).toBe(true);
  expect($scope.response).toEqual({'name': 'Survey1' });

}));


}));
  });

