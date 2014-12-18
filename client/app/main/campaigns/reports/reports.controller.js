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

    var getIntDividedIntoMultiple = function (dividend, divisor, multiple)
    {
      var values = [];
      while (dividend> 0 && divisor > 0)
        {
          var a = Math.round(dividend/ divisor / Math.random());
          dividend -= a;
          divisor--;
          values.push(a);
        }

        return values;
      };

      var septiembre = getIntDividedIntoMultiple(4013, 9,1);
      var octubre = getIntDividedIntoMultiple(27056, 31,1);
      var noviembre = getIntDividedIntoMultiple(13044, 30,1);
      var diciembre = getIntDividedIntoMultiple(1010, 3,1);
      var meses = septiembre.concat(octubre,noviembre,diciembre);
      $scope.chartConfig3 = {
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
        series:[{"name": "Cantidad de donaciones", "data": meses}],
        title: {
          text: ''
        },
        xAxis: {
          categories: ['21-9','22-9','23-9','24-9','25-9','26-9','27-9','28-9','29-9','30-9',
          '1-10','2-10','3-10','4-10','5-10','6-10','7-10','8-10','9-10','10-10','11-10','12-10',
          '13-10','14-10','15-10','16-10','17-10','18-10','19-10','20-10','21-10','22-10','23-10',
          '24-10','25-10','26-10','27-10','28-10','29-10','30-10','31-10',
          '1-11','2-11','3-11','4-11','5-11','6-11','7-11','8-11','9-11','10-11','11-11','12-11',
          '13-11','14-11','15-11','16-11','17-11','18-11','19-11','20-11','21-11','22-11','23-11',
          '24-11','25-11','26-11','27-11','28-11','29-11','30-11',
          '1-12','2-12','3-12'],
          labels: {
            rotation: -55,
            style: {
              fontSize: '9px',
              fontWeight: 'bold'
            }
          }
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
      };

      var septiembre = getIntDividedIntoMultiple(10895, 9,1);
      var octubre = getIntDividedIntoMultiple(63632, 31,1);
      var noviembre = getIntDividedIntoMultiple(25682, 30,1);
      var diciembre = getIntDividedIntoMultiple(3982, 3,1);
      var meses = septiembre.concat(octubre,noviembre,diciembre);
      $scope.chartConfig4 = {
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
        series:[{"name": "Cantidad recaudada", "data": meses}],
        title: {
          text: ''
        },
        xAxis: {
          categories: ['21-9','22-9','23-9','24-9','25-9','26-9','27-9','28-9','29-9','30-9',
          '1-10','2-10','3-10','4-10','5-10','6-10','7-10','8-10','9-10','10-10','11-10','12-10',
          '13-10','14-10','15-10','16-10','17-10','18-10','19-10','20-10','21-10','22-10','23-10',
          '24-10','25-10','26-10','27-10','28-10','29-10','30-10','31-10',
          '1-11','2-11','3-11','4-11','5-11','6-11','7-11','8-11','9-11','10-11','11-11','12-11',
          '13-11','14-11','15-11','16-11','17-11','18-11','19-11','20-11','21-11','22-11','23-11',
          '24-11','25-11','26-11','27-11','28-11','29-11','30-11',
          '1-12','2-12','3-12'],
          labels: {
            rotation: -55,
            style: {
              fontSize: '9px',
              fontWeight: 'bold'
            }
          }
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
