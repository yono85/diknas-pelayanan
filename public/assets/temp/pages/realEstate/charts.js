/**
 *
 * Charts Function
 * Author: Mobythemes
 * Email: info@mobythemes.com
 * Website: mobythemes.com
 * Version: 1.0
 * Date: Mon Dec 30 2019
 * Category: Real State
 * Title: JSFunctions script
 *
 */

jQuery(document).ready(function ($) {

  /* 
    Apex Charts
    Chart Options: https://apexcharts.com/docs/options/
  */

  /**
   * Moby-Property-Overview-Chart
   */
  (new ApexCharts(document.querySelector("#MobyPropertyOverviewChart"), {
    chart: {
      type: 'area',
      width: "100%",
      height: 481,
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
      categories: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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
        name: 'Properties',
        data: [1800,1600,1900,2000,1800,2000,2300]
      }
    ],
  })).render();

  /**
   * Moby-Property-Overview-Chart (Prediction Sparkline)
   */
  const predictionCharts = document.querySelectorAll(".prediction-chart");
  var predictionChartCount = 0;
  var predictionChartColors = ["#f0776c", "#51A5E2", "#fccc41", "#50c971"];
  // Graphs Demo: https://apexcharts.com/javascript-chart-demos/sparklines/basic/
  predictionCharts.forEach(function(chart) {
    (new ApexCharts(chart, {
      chart: {
        type: 'line',
        fontFamily: 'Nunito Sans, sans-serif',
        width: 70,
        height: 35,
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      colors: [predictionChartColors[predictionChartCount]],
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
      series: [
        {
          name: "Rates Prediction",
          data: [12, 46, 26, 46, 26]
        }
      ]
    })).render();

    // Randomly set colors for graphs
    predictionChartCount++;
    if (predictionChartCount > 3) predictionChartCount = 0;
  });

  /**
   * Moby-Registered-Property-Chart
   */
  new FusionCharts({
    type: "maps/usadma",
    renderAt: "MobyRegisteredPropertyChart",
    width: "100%",
    height: "200",
    dataFormat: "json",
    dataSource: {
      chart: {
        theme: "fusion",
        showlabels: "0",
        showLegend: "0",
        nullentitycolor: "#51A5E2",
      },
      colorrange: {
        gradient: "0",
        color: [
          {
            minvalue: "0",
            maxvalue: "50000",
            displayvalue: "0 - 50000",
            code: "#51A5E2"
          },
          {
            minvalue: "50000",
            maxvalue: "100000",
            displayvalue: "50000 - 100000",
            code: "#51A5E2"
          },
          {
            minvalue: "100000",
            maxvalue: "500000",
            displayvalue: "100000 - 500000",
            code: "#51A5E2"
          },
          {
            minvalue: "500000",
            maxvalue: "1000000",
            displayvalue: "500000 - 1000000",
            code: "#51A5E2"
          },
          {
            minvalue: "1000000",
            maxvalue: "2000000",
            displayvalue: "1000000 - 2000000",
            code: "#8390C8"
          },
          {
            minvalue: "2000000",
            maxvalue: "9000000",
            displayvalue: "> 2000000",
            code: "#7570B3"
          }
        ]
      },
      data: [
        {
          value: "389530",
          id: "500"
        },
        {
          value: "7384340",
          id: "501"
        },
        {
          value: "133420",
          id: "502"
        },
        {
          value: "241170",
          id: "503"
        },
        {
          value: "2949310",
          id: "504"
        },
        {
          value: "1845920",
          id: "505"
        },
        {
          value: "155190",
          id: "516"
        },
        {
          value: "1136420",
          id: "517"
        },
        {
          value: "695100",
          id: "518"
        },
        {
          value: "316080",
          id: "519"
        },
        {
          value: "257730",
          id: "520"
        },
        {
          value: "606400",
          id: "521"
        },
        {
          value: "216920",
          id: "522"
        },
        {
          value: "316910",
          id: "523"
        },
        {
          value: "2326840",
          id: "524"
        },
        {
          value: "150110",
          id: "525"
        },
        {
          value: "102890",
          id: "526"
        },
        {
          value: "1089700",
          id: "527"
        },
        {
          value: "1621130",
          id: "528"
        },
        {
          value: "670880",
          id: "529"
        },
        {
          value: "273120",
          id: "530"
        },
        {
          value: "319060",
          id: "531"
        },
        {
          value: "540050",
          id: "532"
        },
        {
          value: "996550",
          id: "533"
        },
        {
          value: "1453170",
          id: "534"
        },
        {
          value: "930460",
          id: "535"
        },
        {
          value: "260000",
          id: "536"
        },
        {
          value: "138040",
          id: "537"
        },
        {
          value: "395680",
          id: "538"
        },
        {
          value: "1806560",
          id: "539"
        },
        {
          value: "241800",
          id: "540"
        },
        {
          value: "485630",
          id: "541"
        },
        {
          value: "498270",
          id: "542"
        },
        {
          value: "252950",
          id: "543"
        },
        {
          value: "709730",
          id: "544"
        },
        {
          value: "303280",
          id: "545"
        },
        {
          value: "398510",
          id: "546"
        },
        {
          value: "409550",
          id: "547"
        },
        {
          value: "794310",
          id: "548"
        },
        {
          value: "92590",
          id: "549"
        },
        {
          value: "188420",
          id: "550"
        },
        {
          value: "251140",
          id: "551"
        },
        {
          value: "29250",
          id: "552"
        },
        {
          value: "84640",
          id: "553"
        },
        {
          value: "130110",
          id: "554"
        },
        {
          value: "377550",
          id: "555"
        },
        {
          value: "553390",
          id: "556"
        },
        {
          value: "520890",
          id: "557"
        },
        {
          value: "51240",
          id: "558"
        },
        {
          value: "134410",
          id: "559"
        },
        {
          value: "1150350",
          id: "560"
        },
        {
          value: "659170",
          id: "561"
        },
        {
          value: "720150",
          id: "563"
        },
        {
          value: "455490",
          id: "564"
        },
        {
          value: "95530",
          id: "565"
        },
        {
          value: "716990",
          id: "566"
        },
        {
          value: "846030",
          id: "567"
        },
        {
          value: "90260",
          id: "569"
        },
        {
          value: "285550",
          id: "570"
        },
        {
          value: "502050",
          id: "571"
        },
        {
          value: "445470",
          id: "573"
        },
        {
          value: "288100",
          id: "574"
        },
        {
          value: "353710",
          id: "575"
        },
        {
          value: "157830",
          id: "576"
        },
        {
          value: "581020",
          id: "577"
        },
        {
          value: "139600",
          id: "581"
        },
        {
          value: "66240",
          id: "582"
        },
        {
          value: "16910",
          id: "583"
        },
        {
          value: "74340",
          id: "584"
        },
        {
          value: "319860",
          id: "588"
        },
        {
          value: "123430",
          id: "592"
        },
        {
          value: "32940",
          id: "596"
        },
        {
          value: "62620",
          id: "597"
        },
        {
          value: "106480",
          id: "598"
        },
        {
          value: "203730",
          id: "600"
        },
        {
          value: "3484800",
          id: "602"
        },
        {
          value: "151200",
          id: "603"
        },
        {
          value: "173640",
          id: "604"
        },
        {
          value: "176160",
          id: "605"
        },
        {
          value: "107110",
          id: "606"
        },
        {
          value: "1243490",
          id: "609"
        },
        {
          value: "179240",
          id: "610"
        },
        {
          value: "143330",
          id: "611"
        },
        {
          value: "384410",
          id: "612"
        },
        {
          value: "1728050",
          id: "613"
        },
        {
          value: "931320",
          id: "616"
        },
        {
          value: "902190",
          id: "617"
        },
        {
          value: "2215650",
          id: "618"
        },
        {
          value: "414570",
          id: "619"
        },
        {
          value: "641550",
          id: "622"
        },
        {
          value: "2588020",
          id: "623"
        },
        {
          value: "154830",
          id: "624"
        },
        {
          value: "349540",
          id: "625"
        },
        {
          value: "31560",
          id: "626"
        },
        {
          value: "158500",
          id: "627"
        },
        {
          value: "175960",
          id: "628"
        },
        {
          value: "717530",
          id: "630"
        },
        {
          value: "46730",
          id: "631"
        },
        {
          value: "576820",
          id: "866"
        },
        {
          value: "191500",
          id: "868"
        },
        {
          value: "420640",
          id: "881"
        }
      ]
    }
  }).render();


  /**
   * Moby-Area-Plot-Count-Chart
   */
  (new ApexCharts(document.querySelector("#MobyAreaPlotChart"), {
    chart: {
      height: 305,
      type: 'radar',
      fontFamily: 'Nunito Sans, sans-serif',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
    },
    fill: {
      colors: ['#ffffff'],
      opacity: 0.4
    },
    colors: ['#EA4335', '#4285F4'],
    stroke: {
      colors: ['#EA4335', '#4285F4'],
      width: 2
    },
    legend: {
      show: true,
      position: 'top',
    },
    markers: {
      size: 6,
      opacity: 0.9,
      colors: ["#fff"],
      strokeColors: ['#EA4335', '#4285F4'],
      strokeWidth: 3,
      hover: {
        size: 4,
        strokeWidth: 3,
      }
    },
    xaxis: {
      categories: ['N', 'E', 'S', 'W'],
    },
    yaxis: {
      show: false,
      showAlways: false,
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
      name: 'Purchased',
      data: [80, 50, 40, 40],
    }, {
      name: 'New Property',
      data: [10, 30, 50, 80],
    }]
  })).render();


  /**
   * Moby-Profit-Analysis-Chart
   */
  (new ApexCharts(document.querySelector("#MobyProfitAnalysisChart"), {
    chart: {
      height: 305,
      type: 'bar',
      fontFamily: 'Nunito Sans, sans-serif',
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
        columnWidth: '40%',
      },
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#FBBC05'],
    xaxis: {
      categories: ['House', 'Plot', 'Room', 'Apart', 'Other'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: val => { return val === 0 ? val : `${val}%` }
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
      name: 'Profit Analysis',
      data: [11, 29, 18, 12, 15]
    }],
  })).render();


  /**
   * Moby-Market-Growth-Chart
   */
  (new ApexCharts(document.querySelector("#MobyMarketGrowthChart"), {
    chart: {
      height: 300,
      type: 'scatter',
      fontFamily: 'Nunito Sans, sans-serif',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
    },
    legend: {
      show: false
    },
    colors: ['#4285F4', '#FBBC05'],
    xaxis: {
      tickAmount: 5,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: 5,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        formatter: val => { return val === 0 ? val : `${val}%` }
      }
    },
    series: [{
      name: "Revenue Ratio",
      data: [
        [2013, 5.4],
        [2013, 2],
        [2013, 3],
        [2014, 2],
        [2013, 1],
        [2014, 3.2],
        [2015, 7.4],
        [2016, 0],
        [2017, 8.2],
        [2013, 8],
        [2013, 8],
        [2017, 0],
        [2017, 1.8],
        [2018, 0.3],
        [2018, 0],
        [2018, 0],
        [2014, 2.3],
      ]
    }, {
      name: "Order",
      data: [
        [2013, 13.4],
        [2013, 11],
        [2013, 8],
        [2013, 17],
        [2013, 4],
        [2013, 12.2],
        [2014, 14.4],
        [2014, 9],
        [2014, 13.2],
        [2014, 7],
        [2014, 8.8],
        [2015, 4.3],
        [2016, 10],
        [2017, 2],
        [2017, 15],
        [2018, 0],
        [2018, 13.7],
      ]
    }],
  })).render();


  /**
   * Moby-Profit-Ratio-Chart
   */
  (new ApexCharts(document.querySelector("#MobyProfitRatioChart"), {
    chart: {
      height: 275,
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
    colors: ["#34A853", '#51A5E2'],
    fill: {
      colors: ["#34A853", '#51A5E2'],
      type: ['gradient', 'solid'],
      gradient: {
        type: "vertical",
        shadeIntensity: 0.2,
        opacityFrom: 0.5,
        opacityTo: 0.1,
        stops: [0, 100]
      },
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: [2, 2],
      colors: ['#34A853', '#51A5E2'],
      dashArray: [3, 3],
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    markers: {
      size: 0
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        offsetX: window.innerWidth < 1080 ? 20 : 25
      }
    },
    yaxis: {
      opposite: true,
      labels: {
        formatter: val => { return val === 0 ? val : `${val}%` }
      },
      labels: {
        offsetX: -30
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        }
      }
    },
    series: [{
      name: "Revenue Ratio",
      type: 'area',
      data: [20, 35, 31, 47, 51, 43, 26]
    }, {
      name: 'Order',
      type: 'line',
      data: [40, 50, 48, 50, 22, 49, 35]
    }],
  })).render();


  /**
   * Moby-Investment-Volume-Chart
   */
  (new ApexCharts(document.querySelector("#MobyInvestmentVolumeChart"), {
    chart: {
      type: "scatter",
      height: 290,
      fontFamily: 'Nunito Sans, sans-serif',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false,
      }
    },
    legend: {
      show: false
    },
    colors: ['#4285F4', '#FBBC05'],
    grid: {
      padding: {
        bottom: 0,
        top: 0
      }
    },
    xaxis: {
      type: 'category',
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        offsetX: window.innerWidth < 1080 ? -5 : 20
      }
    },
    yaxis: {
      tickAmount: 5,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    series: [{
      name: "Investment",
      data: [
        [2013, 5.4],
        [2013, 2],
        [2013, 3],
        [2014, 2],
        [2013, 1],
        [2014, 3.2],
        [2015, 7.4],
        [2016, 0],
        [2014, 8.2],
        [2013, 8],
        [2014, 2],
        [2013, 1],
        [2014, 3.2],
        [2015, 7.4],
        [2013, 8],
        [2016, 0],
        [2016, 1.8],
        [2014, 0.3],
        [2014, 0],
        [2013, 0],
        [2014, 2.3],
        [2014, 10],
        [2016, 8],
        [2015, 4],
        [2016, 4.8],
        [2015, 5.3],
        [2014, 6],
        [2014, 2],
        [2014, 9.3],
      ]
    }, {
      name: "Profit",
      data: [
        [2013, 13.4],
        [2013, 11],
        [2013, 8],
        [2013, 17],
        [2013, 4],
        [2013, 12.2],
        [2014, 14.4],
        [2014, 9],
        [2013, 13.3],
        [2014, 14.6],
        [2014, 13.2],
        [2014, 7],
        [2014, 8.8],
        [2015, 4.3],
        [2016, 12],
        [2014, 8.9],
        [2015, 5.3],
        [2016, 2],
        [2016, 15],
        [2014, 0],
        [2014, 13.7],
        [2016, 10],
        [2014, 8.9],
        [2015, 5.3],
        [2016, 5.3],
        [2017, 5.3],
      ]
    }],
  })).render();

  /**
   * Moby-Growth-In-Rental-Prices-Chart
   */
  (new ApexCharts(document.querySelector("#MobyGrowthInRentalPricesChart"), {
    chart: {
      type: 'bar',
      width: "100%",
      height: 290,
      fontFamily: 'Nunito Sans, sans-serif',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [{
            from: -100,
            to: -40,
            color: '#4285f4'
          }, {
            from: -40,
            to: 0,
            color: '#FEB019'
          }]
        },
        columnWidth: '80%',
      }
    },
    colors: ['#4285f4', '#FEB019'],
    legend: {
      position: 'top'
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      tickAmount: 8,
      labels: {
        formatter: function (y) {
          return y.toFixed(0);
        }
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    xaxis: {
      categories: ['2015', '2016', '2017', '2018', '2019', '2020'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    series: [{
      name: 'Rental Yield',
      data: [12.6, 18.1, 18.2, 14.16, 11.1, 6.09]
    }, {
      name: 'Capital Growth',
      data: [-12.6, -18.1, -10.2, -14.16, -11.1, -8.09]
    }],
  })).render();

});
