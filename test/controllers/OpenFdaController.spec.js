var _ = require('lodash'),
  sinon = require('sinon'), 
  assert = require('assert'), 
  Sails = require('sails'),
  Promise = require('bluebird');

require('sinon-as-promised')(Promise)

var app;

describe('The OpenFda controller', function() {
  //Gets run before each test
  before(function beforeControllerTest(done) {
    this.timeout(15000);
    
    // Lift Sails and start the server
    Sails.lift({
      log : {
        level : 'error'
      },
    }, function(err, sails) {

      // Instantiates new sails application
      app = sails;

      OpenFdaController = app.controllers.openfda;
      
      // Lets testing framework know async call is done
      done(err, sails);
    });
  });

  // Gets run after each test
  after(function afterControllerTest(done) {
    // Destroys application
    app.lower(done);
  });
  
  describe('when we call the apiProxy', function() {
    var fdaResponse = {
        "meta": {
          "disclaimer": "openFDA is a beta research project and not for clinical use. While we make every effort to ensure that data is accurate, you should assume all results are unvalidated.",
          "license": "http://open.fda.gov/license",
          "last_updated": "2015-01-21"
        },
        "results": [
          {
            "term": "UNITED STATES",
            "count": 22038
          }
        ]
      };
    
    before(function() {
      // Mocking our service
      sinon.stub(app.services.cachedrequest, 'query', function(url, limiter) {
        var stub = sinon.stub();
        stub.resolves({ body : JSON.stringify(fdaResponse) } );
        return stub();
      });
    });
    
    after(function() {
      // Restores our mock to the original service
      app.services.cachedrequest.query.restore();
    });
    
    it('should return the response from the openFDA API', function() {
      var req = {
        params : {
          endpoint : 'event.json'
        },
        query : {
          limit : 1,
          search : 'medicinalproduct:"XANAX"',
          count : 'primarysource.reportercountry.exact'
        }
      };

      app.controllers.openfda.apiProxy(req, { json : function(output) {
        assert.deepEqual(output, fdaResponse);
      } });
    });
  });
  
  describe('when we get a failure from openFDA API', function() {
    before(function() {
      // Mocking our service
      sinon.stub(app.services.cachedrequest, 'query', function(url, limiter) {
        var stub = sinon.stub();
        stub.rejects('error');
        return stub();
      });
    });
    
    after(function() {
      // Restores our mock to the original service
      app.services.cachedrequest.query.restore();
    });
    
    it('should return an error', function() {
      var req = {
        params : {
          endpoint : 'event.json'
        },
        query : {
          limit : 1,
          search : 'medicinalproduct:"XANAX"',
          count : 'primarysource.reportercountry.exact'
        }
      };

      app.controllers.openfda.apiProxy(req, { serverError : function(err) {
        assert.equal(err, 'An error occurred');
      } });
      
    });
  });
});