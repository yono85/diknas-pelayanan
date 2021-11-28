/**
 *
 * Charts Function
 * Author: Mobythemes
 * Email: info@mobythemes.com
 * Website: mobythemes.com
 * Version: 1.0
 * Date: Mon Dec 30 2019
 * Category: Event Management
 * Title: JSFunctions script
 *
 */

jQuery(document).ready(function ($) {

  /* 
    Apex Charts
    Chart Options: https://apexcharts.com/docs/options/
  */
 
  /**
   * Moby-Events-Overview-Chart
   */
  (new ApexCharts(document.querySelector("#MobyEventsOverviewChart"), {
    chart: {
      height: 481,
      type: 'area',
      fontFamily: 'Nunito Sans, sans-serif',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: [2, 1],
      colors: ['#4285F4', '#EA4335'],
      dashArray: [0, 4],
    },
    colors: ['#4285F4', '#EA4335'],
    fill: {
      colors: ["#4285F4", '#EA4335'],
      type: ['gradient', 'gradient'],
      gradient: {
        shadeIntensity: 0.2,
        opacityFrom: 0.5,
        opacityTo: 0.1,
        stops: [0, 100]
      },
    },
    xaxis: {
      categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: 200,
      tickAmount: 5,
      labels: {
        formatter: val => { return val === 0 ? val : `${val}K` }
      }
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'center',
    },
    markers: {
      size: [4, 0],
      colors: ['#fff'],
      strokeColors: '#4285F4',
      strokeWidth: 2,
      strokeOpacity: 1,
      shape: "circle",
      radius: 2,
      hover: {
        size: 7,
      }
    },
    grid: {
      show: true,
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
    },
    series: [{
      name: 'Tickets Sold',
      data: [40, 85, 30, 100, 55, 90, 120]
    }, {
      name: 'Tickets Available',
      data: [28, 12, 24, 30, 20, 28, 45]
    }],
  })).render();


  /**
   * Moby-Ticket-Sale-Chart
   */
  (new ApexCharts(document.querySelector("#MobyTicketSaleChart"), {
    chart: {
      height: 382,
      type: 'line',
      fontFamily: 'Nunito Sans, sans-serif',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
    },
    colors: ['#FBBC05', '#34a853'],
    stroke: {
      width: [3, 3],
      curve: ['smooth', 'smooth'],
      colors: ['#FBBC05', '#34a853'],
      dashArray: [0, 4],
    },
    xaxis: {
      type: 'numeric',
      tickAmount: 8,
      min: 0,
      max: 17,
      floating: false,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: 8,
      min: 0,
      max: 20,
    },
    legend: {
      show: false,
    },
    markers: {
      size: [6, 6],
      colors: ['#FBBC05', '#34a853'],
      strokeColors: ['#fff', '#fff'],
      strokeWidth: 2,
      strokeOpacity: 1,
      shape: "circle",
      radius: 2,
      hover: {
        size: 7,
      }
    },
    grid: {
      show: true,
      padding: {
        left: 0,
        right: window.innerWidth < 1024 ? 30 : 20,
        bottom: window.innerWidth < 1024 ? 20 : 0
      },
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        tickAmount: 10,
        min: 0,
        max: 25,
        lines: {
          show: true
        }
      },
    },
    series: [{
      name: 'Tickets Sold',
      data: [[2, 5], [3, 10], [5, 15], [7.5, 8], [8.5, 6], [12, 10], [14, 14], [16, 16]]
    }, {
      name: 'Tickets For Sale',
      data: [[5.5, 5], [6.5, 7], [7.5, 8], [9, 15], [12, 11], [14, 9], [16, 12]]
    }],
  })).render();


  /**
   * Moby-Events-Interest-Comparison-Chart
   */
  (new ApexCharts(document.querySelector("#MobyEventsInterestComparisonChart"), {
    chart: {
      height: 300,
      type: 'donut',
      fontFamily: 'Nunito Sans, sans-serif',
      toolbar: {
        show: false
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: '40%',
          labels: {
            show: true,
            name: {
              show: true,
            }
          },
        }
      }
    },
    dataLabels: {
      enabled: true
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          show: false,
        }
      }
    }],
    labels: ['Going', 'Not Going', 'Maybe', 'Interested'],
    colors: ['#34A853', '#EA4335', '#FBBC05', '#4285F4'],
    legend: {
      show: false,
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (val) => {
          return val + "%"
        }
      }
    },
    series: [26, 17, 33, 24]
  })).render();

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
