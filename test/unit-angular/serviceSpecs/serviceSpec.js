"use strict";

describe("business logic service", function () {
  var surveyHelper, httpBackend;

  beforeEach(module("myApp"));

  beforeEach(inject(function (_surveyHelper_, $httpBackend) {
    surveyHelper = _surveyHelper_;
  }));

  it("should return length", function () {

    surveys=['Survey1','Survey2','Survey3'];
    surveyHelper.stat(surveys).then(function(length) {
      expect(length).toEqual(3);
    });
  });

    it("should return length", function () {

    surveys=['Survey1':{questions:[1,2,3]},'Survey2':{questions:[1,2]},'Survey3':{questions:[1]}];
    surveyHelper.stats(surveys).then(function(length) {
      expect(surveys.name).toEqual(Survey1);
    });
  });

});