/**
 *
 * Charts Function
 * Author: Mobythemes
 * Email: info@mobythemes.com
 * Website: mobythemes.com
 * Version: 1.0
 * Date: Mon Dec 30 2019
 * Category: Classic
 * Title: JSFunctions script
 *
 */

jQuery(document).ready(function ($) {

  /* 
    Apex Charts
    Chart Options: https://apexcharts.com/docs/options/
  */

  /**
   * Static-Table-Chart 
   */
  (new ApexCharts(document.querySelector("#MobyStaticTableChart"), {
    chart: {
      height: 505,
      type: 'area',
      fontFamily: 'Nunito Sans, sans-serif',
      toolbar: {
        show: false
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 250,
        left: 0,
        blur: 10,
        color: '#fff',
        opacity: 0.7
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    xaxis: {
      categories: ["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    legend: {
      show: false
    },
    grid: {
      show: true,
      position: 'back',
      xaxis: {
        lines: {
            show: true
        }
      },
      padding: {
        top: 0,
        right: 10,
        bottom: 0,
        left: 10
      }, 
      yaxis: {
        lines: {
            show: false
        }
      },            
    },
    markers: {
      size: 4,
      discrete: [{
        seriesIndex: 0,
        dataPointIndex: 5,
        fillColor: "#FFF",
        strokeColor: "#fbbc05",
        size: 6
      }]
    },
    yaxis: {
      show: false,
      min: 0
    },
    colors: ['#FBBC05'],
    fill: {
      colors: ['#FBBC05']
    },
    tooltip: {
      enabled: true,
      shared: true,
      followCursor: true,
    },
    series: [
      {
        name: 'Visits',
        data: [900,1100,1000,1300,1500,1800,1600,1900,2000,1800,2000,2300]
      }
    ],
  })).render();


  /**
   * Moby-Session-By-Channel-Chart
   */
  (new ApexCharts(document.querySelector("#MobySessionByChannelChart"), {
    chart: {
      height: 350,
      type: 'radar',
      fontFamily: 'Nunito Sans, sans-serif',
      toolbar: {
        show: false
      },
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1
      }
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    markers: {
      size: 6,
    },
    tooltip: {
      show: false
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: ['Organic', 'Email', 'Referral', 'Social']
    },
    yaxis: {
      show: false
    },
    series: [{
      name: 'Sessions',
      data: [80, 80, 75, 80],
    }],
  })).render();

  /**
   * Sales-Analysis-View-Chart 
   */
  (new ApexCharts(document.querySelector("#MobySalesAnalysisViewChart"), {
    chart: {
      type: 'line',
      height: 280,
      fontFamily: 'Nunito Sans, sans-serif',
      toolbar: {
        show: false
      },
    },
    stroke: {
      width: 5,
      curve: 'smooth',
      colors: ['#EA4335']
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: "vertical",
        gradientToColors: ['#EA4335'],
        shadeIntensity: 1,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100]
      },
    },
    grid: {
      show: false
    },
    markers: {
      size: 8,
      opacity: 0.9,
      colors: ["#fff"],
      strokeColor: "#EA4335",
      strokeWidth: 3,
      hover: {
        size: 6,
        strokeWidth: 5,
      }
    },
    xaxis: {
      type: 'category',
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      type: 'category',
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    series: [{
      name: 'Sales',
      data: [2, 4, 3, 3.5, 2]
    }],
  })).render();


  /**
   * Page-View-Chart
   */
  let count = 0;
  (new ApexCharts(document.querySelector("#MobyPageViewChart"), {
    chart: {
      type: 'bar',
      height: 398,
      fontFamily: 'Nunito Sans, sans-serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '40%',
      },
    },
    colors: [function({ value, seriesIndex, w }) {
      const colors = ['rgb(251, 188, 5)', 'rgb(104, 157, 246)', 'rgb(52, 168, 83)', 'rgb(234, 67, 53)'];
      const color = colors[count];
      count++;
      if (count > colors.length - 1) count = 0;
      return color;
    }],
    dataLabels: {
      enabled: false
    },
    xaxis: {
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: 600,
        },
      },
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
        'United States', 'China', 'Germany'],
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    series: [{
      name: 'Stats',
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380, 540, 580, 690, 1100, 1200, 1380]
    }],
  })).render();


  /**
   * Regional-Stats-Chart
   */
  // new FusionCharts({
  //   type: "maps/world",
  //   renderAt: "MobyRegionalStatsChart",
  //   width: "100%",
  //   height: "392",
  //   dataFormat: "json",
  //   dataSource: {
  //     "chart": {
  //         "theme": "fusion",
  //         "formatNumberScale": "0",
  //         "showLegend": "0",
  //         "numberSuffix": "K"
  //     },
  //     "colorrange": {
  //         "color": [{
  //             "minvalue": "0",
  //             "maxvalue": "100",
  //             "code": "#D9E7FD",
  //         }, {
  //             "minvalue": "100",
  //             "maxvalue": "200",
  //             "code": "#4285F4",
  //         }, {
  //             "minvalue": "200",
  //             "maxvalue": "300",
  //             "code": "#EA4335",
  //         }, {
  //             "minvalue": "300",
  //             "maxvalue": "400",
  //             "code": "#FBBC05",
  //         }, {
  //           "minvalue": "400",
  //           "maxvalue": "500",
  //           "code": "#34A853",
  //         }]
  //     },
  //     "data": [{
  //         "id": "NA",
  //         "value": "199"
  //     }, {
  //         "id": "SA",
  //         "value": "10"
  //     }, {
  //         "id": "AS",
  //         "value": "499"
  //     }, {
  //         "id": "EU",
  //         "value": "299"
  //     }, {
  //         "id": "AF",
  //         "value": "85"
  //     }, {
  //         "id": "AU",
  //         "value": "399"
  //     }]
  //   }
  // }).render();

    /**
   * Moby-Statistics-Chart
   */
  (new ApexCharts(document.querySelector("#MobyStatisticsChart"), {
    chart: {
      type: 'bar',
      width: 125,
      height: 50,
      fontFamily: 'Nunito Sans, sans-serif',
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '50%'
      }
    },
    colors: ['#EA4335'],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 5, 6, 7, 8, 9, 10, 20],
    xaxis: {
      crosshairs: {
        width: 1
      },
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return ''
          }
        }
      },
      marker: {
        show: false
      }
    },
    series: [{
      data: [55, 66, 41, 89, 63, 25, 44, 32, 36, 99, 54, 84, 44, 94, 66, 41, 89, 63, 25, 44, 99]
    }]
  })).render();

});