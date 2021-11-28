/**
 *
 * Charts Function
 * Author: Mobythemes
 * Email: info@mobythemes.com
 * Website: mobythemes.com
 * Version: 1.0
 * Date: Mon Dec 30 2019
 * Category: E-commerce
 * Title: JSFunctions script
 *
 */

jQuery(document).ready(function ($) {

  /* 
    Apex Charts
    Chart Options: https://apexcharts.com/docs/options/
  */

  /**
   * Moby-Sale-Chart
   */
  (new ApexCharts(document.querySelector("#MobySaleChart"), {
    chart: {
      height: 170,
      type: 'line',
      fontFamily: 'Nunito Sans, sans-serif',
      stacked: false,
      toolbar: {
        show: false
      },
    },
    stroke: {
      width: [2, 3],
      curve: 'smooth',
      dashArray: [0, 3]
    },
    // colors: ['rgb(104, 157, 246)', 'rgb(104, 157, 246)'],
    colors: ['#689DF6', '#689DF6'],
    fill: {
      type: ['gradient', 'solid'],
      gradient: {
        type: "vertical",
        gradientToColors: ['#D9E7FD', '#E5EDF7'],
        opacityFrom: 0.5,
        opacityTo: 0.5,
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
      },
    },
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    markers: {
      size: 0
    },
    yaxis: {
      labels: {
        show: false
      },
      min: 0
    },
    legend: {
      show: false
    },
    grid: {
      show: false,
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    series: [{
      name: "Sales",
      type: 'area',
      color: '#689DF6',
      data: [14, 35, 21, 47, 22, 43, 21]
    }, {
      name: "Orders",
      type: 'line',
      color: '#689DF6',
      data: [50, 45, 66, 40, 65, 35, 74]
    }],
  })).render();

  /**
   * Moby-Order-Chart
   */
  (new ApexCharts(document.querySelector("#MobyOrderChart"), {
    chart: {
      height: 170,
      type: 'line',
      fontFamily: 'Nunito Sans, sans-serif',
      stacked: false,
      toolbar: {
        show: false
      },
    },
    stroke: {
      width: [2, 3],
      curve: 'smooth',
      dashArray: [0, 3]
    },
    colors: ['#f39e97', '#f39e97'],
    fill: {
      type: ['gradient', 'solid'],
      gradient: {
        type: "vertical",
        gradientToColors: ['#f39e97', '#FCE0DE'],
        opacityFrom: 0.5,
        opacityTo: 0.5,
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
      },
    },
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    markers: {
      size: 0
    },
    yaxis: {
      labels: {
        show: false
      },
      min: 0
    },
    legend: {
      show: false
    },
    grid: {
      show: false,
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    series: [{
      name: "Orders",
      type: 'area',
      color: '#f39e97',
      data: [14, 35, 21, 47, 22, 43, 21]
    }]
  })).render();


  /**
   * Moby-Revenue-Chart
   */
  (new ApexCharts(document.querySelector("#MobyRevenueChart"), {
    chart: {
      height: 170,
      type: 'line',
      fontFamily: 'Nunito Sans, sans-serif',
      stacked: false,
      toolbar: {
        show: false
      },
    },
    stroke: {
      width: [2, 3],
      curve: 'smooth',
      dashArray: [0, 3]
    },
    colors: ['#34A853'],
    plotOptions: {
      bar: {
        columnWidth: '50%',
      },
    },
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    markers: {
      size: 0
    },
    yaxis: {
      labels: {
        show: false
      },
      min: 0
    },
    legend: {
      show: false
    },
    grid: {
      show: false,
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    series: [{
      name: "Revenue",
      type: 'column',
      color: '#34A853',
      data: [14, 35, 21, 47, 22, 43, 21]
    }, {
      name: "Sales",
      type: 'line',
      color: '#34A853',
      data: [50, 45, 66, 40, 65, 35, 74]
    }]
  })).render();


  /**
   * Moby-Budget-Analysis-Chart
   */
  (new ApexCharts(document.querySelector("#MobyBudgetAnalysisChart"), {
    chart: {
      height: 220,
      fontFamily: 'Nunito Sans, sans-serif',
      toolbar: {
        show: false
      },
      type: 'line',
    },
    fill: {
      type: 'solid',
    },
    markers: {
      colors: ['#4285F4'],
      size: [6, 0, 0]
    },
    stroke: {
      width: [0, 3, 3],
      colors: ['#EA4335', '#34A853'],
      curve: 'smooth',
      dashArray: [0, 0, 5],
    },
    tooltip: {
      shared: false,
      intersect: true,
    },
    legend: {
      show: false
    },
    xaxis: {
      type: 'datetime',
      labels: {
        datetimeFormatter: {
          month: 'MMM',
        }
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      }
    },
    yaxis: {
      labels: {
        formatter: (val) => { return val === 0 ? val : `${val}K` }
      }
    },
    series: [{
      name: 'Points',
      type: 'scatter',
      data: [
        /**
         * { x: time stamp, y: value  }
         */
        {
          x: 1328040000000,
          y: 2.5
        }, {
          x: 1329778800000,
          y: 3.14
        }, {
          x: 1330124400000,
          y: 4.19
        }, {
          x: 1330376400000,
          y: 4.43
        }, {
          x: 1330549200000,
          y: 2.8
        }, {
          x: 1330894800000,
          y: 6.14
        }, {
          x: 1331758800000,
          y: 5.14
        }, {
          x: 1331758800000,
          y: 4.14
        }, {
          x: 1331758800000,
          y: 3.14
        }, {
          x: 1331758800000,
          y: 6.14
        }, {
          x: 1333224000000,
          y: 6.14
        }, {
          x: 1335297600000,
          y: 7.14
        }, {
          x: 1335297600000,
          y: 7.5
        }, {
          x: 1335297600000,
          y: 7.8
        }, {
          x: 1335297600000,
          y: 9
        }, {
          x: 1336176000000,
          y: 9
        }, {
          x: 1336176000000,
          y: 8
        }, {
          x: 1336176000000,
          y: 8.6
        }, {
          x: 1336176000000,
          y: 6
        }, {
          x: 1336176000000,
          y: 3
        }, {
          x: 1338850800000,
          y: 3.16
        }, {
          x: 1338850800000,
          y: 7.16
        }, {
          x: 1338850800000,
          y: 4
        }, {
          x: 1338850800000,
          y: 8.16
        }, {
          x: 1340481600000,
          y: 8.18
        }, {
          x: 1340481600000,
          y: 9.18
        }, {
          x: 1340481600000,
          y: 7
        }, {
          x: 1340481600000,
          y: 3
        }, {
          x: 1341345600000,
          y: 8.4
        }, {
          x: 1344024000000,
          y: 6.14
        }, {
          x: 1344024000000,
          y: 9.14
        }, {
          x: 1344024000000,
          y: 6.5
        }, {
          x: 1344024000000,
          y: 4.14
        },
        {
          x: 1328040000000,
          y: 4.5
        }, {
          x: 1329778800000,
          y: 5.14
        }, {
          x: 1330124400000,
          y: 6.19
        }, {
          x: 1330376400000,
          y: 3.43
        }, {
          x: 1330549200000,
          y: 4.8
        }, {
          x: 1330894800000,
          y: 7.14
        }, {
          x: 1331758800000,
          y: 2.14
        }, {
          x: 1331758800000,
          y: 1.14
        }, {
          x: 1331758800000,
          y: 10.14
        }, {
          x: 1331758800000,
          y: 5.14
        }, {
          x: 1333224000000,
          y: 8.14
        }, {
          x: 1335297600000,
          y: 2.14
        }, {
          x: 1335297600000,
          y: 8.5
        }, {
          x: 1335297600000,
          y: 5.8
        }, {
          x: 1335297600000,
          y: 11
        }, {
          x: 1336176000000,
          y: 7
        }]
    }, {
      name: 'Line',
      type: 'line',
      data: [{
        x: 1328040000000,
        y: 4
      }, {
        x: 1329940800000,
        y: 2
      }, {
        x: 1330732800000,
        y: 4.7
      }, {
        x: 1332885600000,
        y: 6
      }, {
        x: 1334433600000,
        y: 2
      }, {
        x: 1342209600000,
        y: 7
      }, {
        x: 1345924800000,
        y: 11
      }]
    }, {
      name: 'Line',
      type: 'line',
      data: [{
        x: 1328040000000,
        y: 5
      }, {
        x: 1329940800000,
        y: 7
      }, {
        x: 1330732800000,
        y: 5
      }, {
        x: 1332885600000,
        y: 3.5
      }, {
        x: 1342209600000,
        y: 1.5
      }, {
        x: 1345924800000,
        y: 9
      },]
    }]
  })).render();


  /**
   * Moby-Balance-Chart
   */
  (new ApexCharts(document.querySelector("#MobyBalanceChart"), {
    chart: {
      height: 290,
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
      },
    },
    labels: ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5', 'Product 6'],
    stroke: {
      width: 0
    },
    fill: {
      colors: ['#FBBC05', '#4285F4'],
      opacity: 0.9,
    },
    legend: {
      show: false,
    },
    markers: {
      size: 0
    },
    yaxis: {
      show: false,
      showAlways: false,
      seriesName: 'Partners',
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
      name: 'Clients',
      data: [80, 50, 30, 40, 30, 20],
    }, {
      name: 'Partners',
      data: [20, 30, 40, 50, 60, 80],
    }]
  })).render();



  /**
   * Moby-Region-Chart
   */
  new FusionCharts({
    type: "maps/world",
    renderAt: "MobyRegionChart",
    width: "100%",
    height: "291",
    dataFormat: "json",
    dataSource: {
      "chart": {
          "theme": "fusion",
          "formatNumberScale": "0",
          "showLegend": "0",
          "numberSuffix": "K"
      },
      "colorrange": {
          "color": [{
              "minvalue": "0",
              "maxvalue": "100",
              "code": "#D9E7FD",
          }, {
              "minvalue": "100",
              "maxvalue": "200",
              "code": "#4285F4",
          }, {
              "minvalue": "200",
              "maxvalue": "300",
              "code": "#EA4335",
          }, {
              "minvalue": "300",
              "maxvalue": "400",
              "code": "#FBBC05",
          }, {
            "minvalue": "400",
            "maxvalue": "500",
            "code": "#34A853",
          }]
      },
      "data": [{
          "id": "NA",
          "value": "199"
      }, {
          "id": "SA",
          "value": "10"
      }, {
          "id": "AS",
          "value": "499"
      }, {
          "id": "EU",
          "value": "299"
      }, {
          "id": "AF",
          "value": "85"
      }, {
          "id": "AU",
          "value": "399"
      }]
    }
  }).render();


  /**
   * Moby-Sales-Region-Chart
   */
  (new ApexCharts(document.querySelector("#MobySalesRegionChart"), {
    chart: {
      height: 200,
      fontFamily: 'Nunito Sans, sans-serif',
      toolbar: {
        show: false
      },
      type: 'bar'
    },
    plotOptions: {
      bar: {
        barHeight: '30%',
        distributed: true,
        horizontal: true,
        endingShape: 'rounded',
        colors: {
          backgroundBarColors: ['#99a8ae'],
          backgroundBarOpacity: 0.2,
        },
      }
    },
    colors: ['#4285F4', '#EA4335', '#FBBC05', '#34A853'],
    dataLabels: {
      enabled: false
    },
    grid: {
      show: true,
      position: 'back',
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      },
    },
    xaxis: {
      type: 'category',
      categories: ['North America', 'Europe', 'Australia', 'Asia'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        formatter: (val) => { return val === 0 ? val : `${val}K` }
      }
    },
    series: [{
      name: "Sales",
      data: [46, 42, 36, 30]
    }],
  })).render();


  /**
   * Moby-Average-Order-Chart
   */
  (new ApexCharts(document.querySelector("#MobyAverageOrderChart"), {
    chart: {
      height: 343,
      type: 'bar',
      fontFamily: 'Nunito Sans, sans-serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
      },
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4285F4', '#d2ddfe'],
    xaxis: {
      categories: ['CH', 'DE', 'UK', 'SE', 'NL', 'PL'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: (val) => { return val === 0 ? val : `${val}%` }
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%"
        }
      }
    },
    series: [{
      name: 'Sales',
      data: [55, 30, 32, 31, 56, 48]
    }, {
      name: 'Industry',
      data: [24, 25, 36, 22, 50, 42]
    }],
  })).render();


  /**
   * Moby-Target-Sale-Chart
   */
  (new ApexCharts(document.querySelector("#MobyTargetSalesChart"), {
    chart: {
      height: 205,
      type: 'bar',
      fontFamily: 'Nunito Sans, sans-serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '15%',
      },
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#689df6', '#3275e5'],
    xaxis: {
      categories: ['CH', 'DE', 'UK', 'SE', 'NL', 'PL'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: (val) => { return val === 0 ? val : `${val}%` }
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%"
        }
      }
    },
    series: [{
      name: 'Product Sell',
      data: [55, 30, 32, 31, 56, 48]
    }, {
      name: 'All Industry',
      data: [24, 25, 36, 22, 50, 42]
    }],
  })).render();


  /**
   * Online Store Conversion
   */
  (new ApexCharts(document.querySelector("#MobyOnlineStoreChart"), {
    chart: {
      height: 232,
      type: 'pie',
      fontFamily: 'Nunito Sans, sans-serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '40%',
          labels: {
            show: false,
          },
        }
      }
    },
    dataLabels: {
      enabled: false
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
    colors: ['#fbbc05', '#ea4335', '#34a853', '#689df6'],
    legend: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    series: [50, 33, 14, 3],
  })).render();


  /**
   * Moby-User-Retention-Chart
   */
   function generateData(count, maxBars, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      if (i > maxBars - 1 ) break;
      var x = 'w' + (i + 1).toString();
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({ x, y });
      i++;
    }
    return series;
  }

  (new ApexCharts(document.querySelector("#MobyUserRetentionChart"), {
    chart: {
      type: 'heatmap',
      height: 240,
      fontFamily: 'Nunito Sans, sans-serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      heatmap: {
        radius: 5,
        inverse: true,
        enableShades: false,
        distributed: true,
        reverseNegativeShade: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#FBBC05"],
    xaxis: {
      position: 'top',
      labels: {
        show: true,
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: false,
      },
    },
    series: [
      {
        name: 'Oct 27 - Nov 02',
        data: generateData(5, 5, {
          min: 0,
          max: 5
        })
      },
      {
        name: 'Oct 20 - Oct 26',
        data: generateData(5, 4, {
          min: 0,
          max: 20
        })
      },
      {
        name: 'Oct 13 - Oct 19',
        data: generateData(5, 3, {
          min: 0,
          max: 30
        })
      },
      {
        name: 'Oct 06 - Oct 12',
        data: generateData(5, 2, {
          min: 0,
          max: 40
        })
      },
      {
        name: 'Sep 29 - Oct 05',
        data: generateData(5, 1, {
          min: 0,
          max: 50
        })
      },
    ],
  })).render();


  /**
   * Moby-User-By-Time-Of-Day-Chart
   */

  const generateTimeOfDayData = (count, yrange) => {
    var i = 0;
    var series = [];
    const xVals = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    while (i < count) {
      var x = xVals[i];
      if (!x) continue;
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }

  (new ApexCharts(document.querySelector("#MobyUserTimeChart"), {
    chart: {
      type: 'heatmap',
      height: 240,
      fontFamily: 'Nunito Sans, sans-serif',
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#34A853"],
    series: [
      {
        name: '12am',
        data: generateTimeOfDayData(7, {
          min: 0,
          max: 90
        })
      },
      {
        name: '3am',
        data: generateTimeOfDayData(7, {
          min: 0,
          max: 90
        })
      },
      {
        name: '6am',
        data: generateTimeOfDayData(7, {
          min: 0,
          max: 90
        })
      },
      {
        name: '9am',
        data: generateTimeOfDayData(7, {
          min: 0,
          max: 90
        })
      },
      {
        name: '12pm',
        data: generateTimeOfDayData(7, {
          min: 0,
          max: 90
        })
      },
      {
        name: '3pm',
        data: generateTimeOfDayData(7, {
          min: 0,
          max: 90
        })
      },
      {
        name: '6pm',
        data: generateTimeOfDayData(7, {
          min: 0,
          max: 90
        })
      }
    ],
  })).render();


  /**
   * Moby-Complaints-Received-Chart
   */
  (new ApexCharts(document.querySelector("#MobyComplaintsReceivedChart"), {
    chart: {
      height: 240,
      type: 'bar',
      fontFamily: 'Nunito Sans, sans-serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '70%',
      },
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    colors: ['#d2ddfe', '#4285F4'],
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    grid: {
      show: true,
      position: 'back',
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      },
    },
    series: [{
      name: 'Completed',
      data: [44, 35, 57, 26, 58, 49, 81]
    }, {
      name: 'Pending',
      data: [24, 55, 40, 18, 62, 21, 61]
    }],
  })).render();


  /**
   * Moby-Performance-By-Product-Chart
   */
  (new ApexCharts(document.querySelector("#MobyPerformanceByProductChart"), {
    chart: {
      height: 450,
      type: 'line',
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
      curve: 'straight',
      width: [3],
      colors: ['#F6F8F9', '#EA4335'],
    },
    plotOptions: {
      bar: {
        columnWidth: '100%'
      }
    },
    markers: {
      size: 6,
      opacity: 0.9,
      colors: ["#fff"],
      strokeColor: "#EA4335",
      strokeWidth: 3,
      hover: {
        size: 4,
        strokeWidth: 3,
      },
    },
    legend: {
      show: false,
    },
    colors: ['#F6F8F9', '#4285F4'],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: 120,
    },
    series: [{
      name: "IPhone XR",
      type: 'column',
      data: [10, 21, 28, 49, 69, 22, 29, 25, 60, 22, 18, 12]
    }, {
      name: "Samsung Note 10",
      type: 'line',
      data: [10, 21, 28, 49, 69, 22, 29, 25, 60, 22, 18, 12]
    }],
  })).render();


  /**
   * Moby-Purchases-And-Wishlist-Chart
   */
  (new ApexCharts(document.querySelector("#MobyPurchasesAndWishlistChart"), {
    chart: {
      height: 255,
      fontFamily: 'Nunito Sans, sans-serif',
      type: 'bar',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
      },
    },
    dataLabels: {
      enabled: false
    },
    colors: [function ({ value, seriesIndex, w }) {
      if (value === 600) {
        return 'rgba(251, 188, 5, 0.5)'
      } else {
        return '#FBBC05'
      }
    }],
    xaxis: {
      categories: ['Purchases', 'Whishlist'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: 6,
      min: 0,
      max: 600
    },
    fill: {
      opacity: 1,
    },
    series: [{
      name: 'Purchases',
      data: [600, 356]
    }],
  })).render();


  /**
   * Moby-Top-Trends-Chart
   */
  (new ApexCharts(document.querySelector("#MobyTopTrendsChart"), {
    chart: {
      height: 305,
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
        dataLabels: {
          enabled: false
        },
        chart: {
          width: 200
        },
        legend: {
          show: false,
        }
      }
    }],
    labels: ['IPhone', 'Samsung', 'Samsung', 'Blackberry'],
    colors: ['#FBBC05', '#EA4335', '#34A853', '#4285F4' ],
    legend: {
      show: false,
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (val) {
          return val + "%"
        }
      }    
    },
    series: [35, 35, 20, 10],
  })).render();

});