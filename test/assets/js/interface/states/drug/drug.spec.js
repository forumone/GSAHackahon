describe('DrugController', function () {
    var $controller,
        $httpBackend,
        $rootScope,
        $stateParams,
        labelEndpoint,
        createController;

    beforeEach(module('gsa18f'));

    beforeEach(inject(function ($injector) {
        $controller = $injector.get('$controller');
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
        $stateParams = {
            id: 'foo'
        };

        labelEndpoint = $httpBackend.expectGET('/api/fda/label.json?search=id:foo');
        createController = function () {
            return $controller('DrugController', {
                $scope: $rootScope,
                $stateParams: $stateParams,
            })
        }
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('unsuccessful initialization', function () {
        it('fails to load a drug label', function () {
            labelEndpoint
                .respond(404, '');

            createController();
            $httpBackend.flush();

            expect($rootScope.title).toEqual('Invalid Drug');
        });
    });
    
    describe('successful initialization', function () {
        var response = {
            results: [
                {
                    openfda: {
                        brand_name: ['brand name']
                    }
                }
            ]
        };
        
        it('loads a drug label', function () {
            labelEndpoint.respond(200, response);
            
            createController();
            $httpBackend.flush();
            
            expect($rootScope.title).toEqual('brand name');
        });
    });
});