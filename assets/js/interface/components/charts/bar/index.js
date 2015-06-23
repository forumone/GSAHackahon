angular.module('gsa18f').directive(
    'chartsBar',
    function() {
      var BarChart = nv.models.multiBarHorizontalChart();
      
      BarChart.x(function(d) { return d.label });
      BarChart.y(function(d) { return d.value });
      
      BarChart.yAxis
          .tickFormat(d3.format(',.1f'));
      
      BarChart.multibar.stacked(true); // default to stacked
      BarChart.showControls(false); // don't show controls

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

          var colorscale = d3.scale.category10();

          // Legend titles
          var LegendOptions = [ 'Smartphone', 'Tablet' ];

          // Data
          var data = [{
            key: "Drug1",
            color: "#00A6B4",
            values: [
              {
                label: "Effect A",
                value: 3
              },
              {
                label: "Effect B",
                value: 4
              },
              {
                label: "Effect C",
                value: 5
              },
              {
                label: "Effect D",
                value: 6
              }
            ]},
            {
            key: "Drug2",
            color: "#8AC35D",
            values: [
              {
              label: "Effect A",
              value: 1
              },
              {
              label: "Effect B",
              value: 2
              },
              {
              label: "Effect C",
              value: 3
              },
              {
              label: "Effect D",
              value: 4
              }
            ]}
          ];

          scope.$watch('height+width', function() {
            d3.select(element[0]).select("svg").remove();
            d3.select(element[0])
              .append("svg")
                .datum(data)
                .transition().duration(500).call(BarChart);
            // TODO: Ensure that windowResize event is detached when the directive is destroyed
            nv.utils.windowResize(BarChart.update);
          });
        }
      };
    });
