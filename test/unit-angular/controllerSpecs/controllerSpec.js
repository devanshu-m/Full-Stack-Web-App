describe('IndexCtrl', function() {
  beforeEach(module('myApp'));

  var $controller;

  beforeEach(inject(function(_$controller_,_$scope_,_surveyHelper_,_dataFactory_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $scope = _$scope_;
    surveyHelper = _surveyHelper_;
    dataFactory = _dataFactory_;
  }));

  describe('getSurveys', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('IndexCtrl', { $scope: $scope });
    });

    it('gets all the surveys', function() {
      $scope.data = [];
      expect($scope.surveys).toEqual($scope.data);
    });

  });
 });

describe('AddPostCtrl', function() {
  beforeEach(module('myApp'));
  var $controller;

  beforeEach(inject(function(_$controller_,_$scope_,_surveyHelper_,_dataFactory_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $scope = _$scope_;
    surveyHelper = _surveyHelper_;
    dataFactory = _dataFactory_;
  }));

  describe('$scope.addques', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      $scope.form = {'id':'1','name':'Survey1','questions':[],'options':[]};
      controller = $controller('AddPostCtrl', { $scope: $scope });
    });

    it('adds the question to the survey', function() {

    	var newQuestion = {
        "questions_id" : '1',
        "questions_value" :"Which is your favorite?",
        "questions_required" : true,
        "questions_disabled" : false 
      };
      $scope.form.questions.push(newQuestion);
      expect($scope.form.questions.length).toEqual(1);
    });

    it('adds the option to the question in the survey', function() {

     var newOption = {
      "options_id":1,
      "options_value":"Pizza",
      "options_required" : true,
      "options_disabled" : false 
    };
      $scope.form.questions.push(newQuestion);
      expect($scope.form.questions.length).toEqual(1);
    });
  });
});

describe('EditPostCtrl', function() {
  beforeEach(module('myApp'));
  describe('$scope.editPost', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('EditPostCtrl', { $scope: $scope });
    });

    it('edits an existing survey', function() {
      $scope.form = {'id':'1','name':'Survey1','questions':['1':'Which is your favorite color','2':'Which is good?'],'options':[]};
      expect($scope.form.questions.length).toEqual(2);
    });

  });
});

describe('DeletePostCtrl', function() {
  beforeEach(module('myApp'));
  describe('$scope.deletePost', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('EditPostCtrl', { $scope: $scope });
    });

    it('deletes an existing survey', function() {
      $scope.form = {'id':'1','name':'Survey1','questions':['1':'Which is your favorite color','2':'Which is good?'],'options':[]};
      $scope.deletePost('1');
      expect($scope.form.questions.length).toEqual(0);
    });

  });
});