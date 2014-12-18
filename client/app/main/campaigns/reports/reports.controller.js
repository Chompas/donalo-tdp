'use strict';

angular.module('donaloTdpApp')
  .controller('ReportsCtrl', function ($scope) {
    $scope.chartConfig = {
      options: {
        chart: {
          type: 'line'
        },
        plotOptions: {
          series: {
            stacking: ''
          }
        }
      },
      series:[{"name": "Cantidad de donaciones", "data": [4013, 27056, 13044, 1010]}],
      title: {
        text: ''
      },
      xAxis: {
        categories: ['Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
      },
      yAxis: {
        title: {
          text: ''
        },
        labels: {
          formatter: function () {
            return this.value;
          }
        },
        min: 0
      },
      credits: {
        enabled: false
      },
      loading: false,
      size: {}
    }

    $scope.chartConfig2 = {
      options: {
        chart: {
          type: 'line'
        },
        plotOptions: {
          series: {
            stacking: ''
          }
        }
      },
      series:[{"name": "Cantidad recaudada", "data": [10895, 63632, 25682, 3982]}],
      title: {
        text: ''
      },
      xAxis: {
        categories: ['Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
      },
      yAxis: {
        title: {
          text: ''
        },
        labels: {
          formatter: function () {
            return "$" + this.value;
          }
        },
        min: 0
      },
      credits: {
        enabled: false
      },
      loading: false,
      size: {}
    };

    
    $scope.reflow = function () {
      $scope.$broadcast('highchartsng.reflow');
    };
  });
