angular.module('gsaHackathon').directive('chartsLine', function() {
  function buildChart(element, attrs, data, chart) {
    var svg = null;

    if (!chart) {
      chart = nv.models.lineChart();
      chart.options({
        transitionDuration : 300,
        useInteractiveGuideline : true
      })
      .x(function(d) {
        return new Date(d.x)
      }).y(function(d) {
        return d.y
      }).margin({
        left : 125
      });
      
      chart.xAxis.tickFormat(function(d) {
        return d3.time.format('%b %y')(new Date(d));
      });
      
      
      chart.yAxis.tickFormat(function(d) {
        return d3.format(',d')(d);
      });

      d3.select(element[0]).select("svg").remove();
      svg = d3.select(element.find("div")[0]).append("svg");
    } else {
      svg = d3.select(element.find("svg")[0]);
    }

    if (attrs.xaxisLabel) {
      chart.xAxis.axisLabel(attrs.xaxisLabel);
      chart.xAxis.axisLabelDistance(66);
    }
    
    if (attrs.yaxisLabel) {
      chart.yAxis.axisLabel(attrs.yaxisLabel);
    }
    
    svg.datum(data).transition().duration(500).call(chart);

    return chart;
  }

  return {
    restrict : 'E',
    scope : {
      data : '=?',
      height : '@',
      width : '@',
      xaxisLabel : '@',
      yaxisLabel : '@',
      title : '@',
    },
    templateUrl : 'components/charts/line/index.html',
    link : function(scope, element, attrs) {
      if (!angular.isDefined(attrs.height)) {
        scope.height = 500;
      }

      if (!angular.isDefined(attrs.width)) {
        scope.width = 500;
      }

      scope.$watch('height+width+data+xaxisLabel+yaxisLabel+title', function() {
        scope.styles = {
          height : scope.height
        };

        if (angular.isDefined(scope.data)) {
          scope.chart = buildChart(element.find('div'), attrs, scope.data, scope.chart);
        }
      });

      scope.$watchCollection('data', function() {
        if (angular.isDefined(scope.data)) {
          scope.chart = buildChart(element.find('div'), attrs, scope.data, scope.chart);
        }
      });
      
      nv.utils.windowResize(function() {
        if (angular.isDefined(scope.data)) {
          scope.chart = buildChart(element.find('div'), attrs, scope.data, scope.chart);
        }
      });
    }
  };
});
