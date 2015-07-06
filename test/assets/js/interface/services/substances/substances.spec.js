describe('substances service', function () {
    var $httpBackend;
    
    beforeEach(module('gsa18f'));
    
    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get('$httpBackend');
    }));
    
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
    
    describe('getBrands()', function () {
        var substances;
        
        // beforeEach(function () {
        //     $httpBackend
        //         .expectGET(/\/api\/substances\/brands\?like=\w+(?:\&limit=\d+)/)
        //         .respond({});
        // });
        
        beforeEach(inject(function (_substances_) {
            substances = _substances_;
        }));
        
        it('gets brands (with default limit)', function () {
            $httpBackend
                .expectGET('/api/substances/brands?like=foo&limit=10')
                .respond({});
            substances.getBrands('foo');
            $httpBackend.flush();
        });
        
        it('gets brands (with limit)', function () {
            $httpBackend
                .expectGET('/api/substances/brands?like=foo&limit=20')
                .respond({});
            substances.getBrands('foo', 20);
            $httpBackend.flush();
        });
    });
});