'use strict';

/* Controllers */
angular.module('myApp.controllers',[])
.controller('IndexCtrl',function IndexCtrl($scope,surveyHelper,dataFactory) {

$scope.surveys;
  getSurveys();
  var data;
  function getSurveys(){
      dataFactory.getSurveys().then(function(response){
      data = response.data;
      $scope.surveys=data;
      var l = surveyHelper.stat(data);
      var l1=[0,1];
      l1 = surveyHelper.stats(data);
      $scope.number=l;
      $scope.number1=l1[0];
      $scope.name=l1[2];

    }, function (error){
      $scope.status = "Error";
    });
  }
      
})

.controller('AddPostCtrl',function AddPostCtrl($scope, $http, $location,$routeParams,dataFactory) {
  var id = $routeParams.id;
  var data;
  if (id == 0){
    $scope.form = {};
    $scope.form.questions = [];
    $scope.form.questions.lastAddedId = 0;
}

  else {
      dataFactory.getSurvey(id).then(function(response){
      data = response.data;
      $scope.form = data;
      $scope.form.questions.lastAddedId = $scope.form.questions.length;
    });
  }

    

    $scope.addques = function(){

      $scope.form.questions.lastAddedId++;
      var newQuestion = {
        "questions_id" : $scope.form.questions.lastAddedId,
        "questions_value" :"",
        "questions_required" : true,
        "questions_disabled" : false 
      };
      $scope.form.questions.push(newQuestion);
      newQuestion.options = [];

    }


    $scope.addoption = function(question){

    if(!question.options){
      question.options = [];
    }
    var newOption = {
      "options_id":question.options.lastAdded,
      "options_value":"",
      "options_required" : true,
      "options_disabled" : false 
    };
    question.options.push(newOption);

  }

  $scope.remove = function(questions_id){
    for(var i = 0; i < $scope.form.questions.length; i++){
      if ($scope.form.questions[i].questions_id == questions_id){
        $scope.form.questions.splice(i,1);
        break;
      }

    }

  }

  $scope.removeop = function(questions_id,options_id){
    for(var i = 0; i < $scope.form.questions.length; i++){
      if ($scope.form.questions[i].questions_id == questions_id){
        for(var j = 0; j < $scope.form.questions[i].options.length; j++){
          if ($scope.form.questions[i].options[j].options_id == options_id){
            $scope.form.questions[i].options.splice(j,1);
            break;
          }
        }
      break;
      }
    }
}

  $scope.save = function(){

    for(var i = 0; i < $scope.form.questions.length; i++){
      $scope.form.questions[i].questions_id = i+1;
      for(var j = 0; j < $scope.form.questions[i].options.length; j++){
        $scope.form.questions[i].options[j].options_id = j+1;
      }

    }


 if (id == 0){
     dataFactory.insertSurvey(id,$scope.form).then(function(response){
      console.log(response);
        $location.path('/');
      });
    alert("Saved!");

}

else{

  dataFactory.editSurvey(id,$scope.form).then(function(response){
    $location.url('/readPost/' + $routeParams.id);
  });

}

}
})

.controller('ReadPostCtrl',function ReadPostCtrl($scope, $http, $routeParams,$location,dataFactory) {
 var id = $routeParams.id;
  $scope.survey;
  var data;
  dataFactory.getSurvey(id).then(function(response){
    data = response.data;
    $scope.survey = data;
});


    $scope.home = function () {
    $location.url('/');
  };
})

.controller('EditPostCtrl',function EditPostCtrl($scope, $http, $location, $routeParams,dataFactory) {
 var id = $routeParams.id;
    $scope.form={};
  var data;
  dataFactory.getSurvey(id).then(function(response){
    data = response.data;
    $scope.form = data;
});

  $scope.editPost = function () {

    dataFactory.editSurvey(id,$scope.form).then(function(response){
  $location.url('/readPost/' + $routeParams.id);
});

  };
})

.controller('DeletePostCtrl',function DeletePostCtrl($scope, $http, $location, $routeParams,dataFactory) {

    $scope.survey;
  var data;
  var id = $routeParams.id;
  dataFactory.getSurvey(id).then(function(response){
    data = response.data;
    $scope.survey = data;
});


  $scope.deletePost = function (id) {

    dataFactory.deleteSurvey(id).then(function(response){
      $location.url('/');
    });

};
  $scope.home = function () {
    $location.url('/');
  }

})
