describe('Page Controller', function () {
    beforeEach(module('gsa18f'));
    
    var $controller;
    
    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('$scope.uri', function () {
        it('initializes URIs properly', function () {
            var $scope = {},
                $params = { page: 'about' },
                controller = $controller('PageController', {
                    $scope: $scope,
                    $stateParams: $params
                });
                
            expect($scope.uri).toEqual('/api/content/about');
        });
    });
});