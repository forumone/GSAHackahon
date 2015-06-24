angular.module('gsa18f').directive(
    'chartsBar',
    function() {
      function buildChart(element, data) {
        var BarChart = nv.models.multiBarHorizontalChart();
        
        BarChart
          .x(function(d) { return d.label })
          .y(function(d) { return d.value })
          .showControls(false) // don't show controls
          .margin({
            left : 125
          })
          .yAxis.tickFormat(d3.format(',.1f'));
        
        d3.select(element[0]).select("svg").remove();
        var svg = d3.select(element[0])
          .append("svg")
          .datum(data)
          .transition().duration(500).call(BarChart);

        // TODO: Ensure that windowResize event is detached when the directive is destroyed
        nv.utils.windowResize(BarChart.update);
      }
      
      return {
        restrict : 'E',
        scope : {
          data : '=?',
          height : '@',
          width : '@'
        },
        templateUrl : 'components/charts/bar/index.html',
        link : function(scope, element, attrs) {
          if (!angular.isDefined(attrs.height)) {
            scope.height = 500;
          }
          
          if (!angular.isDefined(attrs.width)) {
            scope.width = 500;
          }

          scope.$watch('height+width+data', function() {
            scope.styles = {
              height : scope.height
            };
            
            if (angular.isDefined(scope.data)) {
              buildChart(element.find('div'), scope.data);
            }
          });
          
          scope.$watchCollection('data', function() {
            if (angular.isDefined(scope.data)) {
              buildChart(element.find('div'), scope.data);
            }
          });
        }
      };
    });
