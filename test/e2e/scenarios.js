'use strict';

describe('myApp', function() {


  it('should automatically redirect to /index when location hash/fragment is empty', function() {
    browser.get('index.jade');
    expect(browser.getLocationAbsUrl()).toMatch("/index");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('http://localhost:3000/');
    });


    it('should render view1 when user navigates to /index', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch("/index/");
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index/addPost');
    });


    it('should render view2 when user navigates to /addPost', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch("/addPost/0");
    });

  });

    describe('view3', function() {

    beforeEach(function() {
      browser.get('index/addPost');
    });


    it('should render view3 when user navigates to /editPost', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch("/editPost/5nsdtri5334sofjjdf");
    });

  });
});