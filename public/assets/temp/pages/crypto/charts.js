/**
 *
 * Charts Function
 * Author: Mobythemes
 * Email: info@mobythemes.com
 * Website: mobythemes.com
 * Version: 1.0
 * Date: Mon Dec 30 2019
 * Category: Crypto
 * Title: JSFunctions script
 *
 */

jQuery(document).ready(function ($) {

  /* 
    Apex Charts
    Chart Options: https://apexcharts.com/docs/options/
  */

  /**
   * Moby-Candlestick-Chart
   */
  (new ApexCharts(document.querySelector("#MobyCandlestickChart"), {
    chart: {
      height: 380,
      fontFamily: 'Nunito Sans, sans-serif',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      type: 'candlestick',
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#EA4335',
          downward: '#689DF6',
        },
        wick: {
          useFillColor: true
        }
      }
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    },
    grid: {
      padding: {
        right: window.innerWidth < 1024 ? 10 : 30
      }
    },
    series: [{
      data: [{
        x: new Date(1538778600000),
        y: [6629.81, 6650.5, 6623.04, 6633.33]
      },
      {
        x: new Date(1538780400000),
        y: [6632.01, 6643.59, 6620, 6630.11]
      },
      {
        x: new Date(1538782200000),
        y: [6630.71, 6648.95, 6623.34, 6635.65]
      },
      {
        x: new Date(1538784000000),
        y: [6635.65, 6651, 6629.67, 6638.24]
      },
      {
        x: new Date(1538785800000),
        y: [6638.24, 6640, 6620, 6624.47]
      },
      {
        x: new Date(1538787600000),
        y: [6624.53, 6636.03, 6621.68, 6624.31]
      },
      {
        x: new Date(1538789400000),
        y: [6624.61, 6632.2, 6617, 6626.02]
      },
      {
        x: new Date(1538791200000),
        y: [6627, 6627.62, 6584.22, 6603.02]
      },
      {
        x: new Date(1538793000000),
        y: [6605, 6608.03, 6598.95, 6604.01]
      },
      {
        x: new Date(1538794800000),
        y: [6604.5, 6614.4, 6602.26, 6608.02]
      },
      {
        x: new Date(1538796600000),
        y: [6608.02, 6610.68, 6601.99, 6608.91]
      },
      {
        x: new Date(1538798400000),
        y: [6608.91, 6618.99, 6608.01, 6612]
      },
      {
        x: new Date(1538800200000),
        y: [6612, 6615.13, 6605.09, 6612]
      },
      {
        x: new Date(1538802000000),
        y: [6612, 6624.12, 6608.43, 6622.95]
      },
      {
        x: new Date(1538809200000),
        y: [6614.9, 6626.2, 6613.33, 6623.45]
      },
      {
        x: new Date(1538811000000),
        y: [6623.48, 6627, 6618.38, 6620.35]
      },
      {
        x: new Date(1538812800000),
        y: [6619.43, 6620.35, 6610.05, 6615.53]
      },
      {
        x: new Date(1538814600000),
        y: [6615.53, 6617.93, 6610, 6615.19]
      },
      {
        x: new Date(1538816400000),
        y: [6615.19, 6621.6, 6608.2, 6620]
      },
      {
        x: new Date(1538818200000),
        y: [6619.54, 6625.17, 6614.15, 6620]
      },
      {
        x: new Date(1538820000000),
        y: [6620.33, 6634.15, 6617.24, 6624.61]
      },
      {
        x: new Date(1538821800000),
        y: [6625.95, 6626, 6611.66, 6617.58]
      },
      {
        x: new Date(1538823600000),
        y: [6619, 6625.97, 6595.27, 6598.86]
      },
      {
        x: new Date(1538825400000),
        y: [6598.86, 6598.88, 6570, 6587.16]
      },
      {
        x: new Date(1538827200000),
        y: [6588.86, 6600, 6580, 6593.4]
      },
      {
        x: new Date(1538829000000),
        y: [6593.99, 6598.89, 6585, 6587.81]
      },
      {
        x: new Date(1538836200000),
        y: [6575.96, 6589, 6571.77, 6588.92]
      },
      {
        x: new Date(1538838000000),
        y: [6588.92, 6594, 6577.55, 6589.22]
      },
      {
        x: new Date(1538839800000),
        y: [6589.3, 6598.89, 6589.1, 6596.08]
      },
      {
        x: new Date(1538841600000),
        y: [6597.5, 6600, 6588.39, 6596.25]
      },
      {
        x: new Date(1538843400000),
        y: [6598.03, 6600, 6588.73, 6595.97]
      },
      {
        x: new Date(1538845200000),
        y: [6595.97, 6602.01, 6588.17, 6602]
      },
      {
        x: new Date(1538847000000),
        y: [6602, 6607, 6596.51, 6599.95]
      },
      {
        x: new Date(1538848800000),
        y: [6600.63, 6601.21, 6590.39, 6591.02]
      },
      {
        x: new Date(1538850600000),
        y: [6591.02, 6603.08, 6591, 6591]
      },
      {
        x: new Date(1538852400000),
        y: [6591, 6601.32, 6585, 6592]
      },
      {
        x: new Date(1538854200000),
        y: [6593.13, 6596.01, 6590, 6593.34]
      },
      {
        x: new Date(1538856000000),
        y: [6593.34, 6604.76, 6582.63, 6593.86]
      },
      {
        x: new Date(1538857800000),
        y: [6593.86, 6604.28, 6586.57, 6600.01]
      },
      {
        x: new Date(1538859600000),
        y: [6601.81, 6603.21, 6592.78, 6596.25]
      },
      {
        x: new Date(1538861400000),
        y: [6596.25, 6604.2, 6590, 6602.99]
      },
      {
        x: new Date(1538863200000),
        y: [6602.99, 6606, 6584.99, 6587.81]
      },
      {
        x: new Date(1538865000000),
        y: [6587.81, 6595, 6583.27, 6591.96]
      },
      {
        x: new Date(1538866800000),
        y: [6591.97, 6596.07, 6585, 6588.39]
      },
      {
        x: new Date(1538868600000),
        y: [6587.6, 6598.21, 6587.6, 6594.27]
      }]
    }]
  })).render();


  /**
  * Moby-Bitcoin-Chart 
  */
  (new ApexCharts(document.querySelector("#MobyBitcoinChart"), {
    chart: {
      height: 338,
      fontFamily: 'Nunito Sans, sans-serif',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      type: 'area',
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: 'datetime',
      tickAmount: 4,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      x: {
        format: 'dd MM yyyy'
      }
    },
    fill: {
      colors: ["#4285f4"],
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100]
      },
    },
    grid: {
      show: false,
    },
    stroke: {
      show: true,
      curve: 'straight',
      lineCap: 'butt',
      colors: ['#4285f4'],
      width: 2,
    },
    series: [{
      data: [
        [1327359600000, 30.95],
        [1327446000000, 28.34],
        [1327532400000, 26.18],
        [1327618800000, 29.05],
        [1327878000000, 31.00],
        [1327964400000, 35.95],
        [1328050800000, 35.95],
        [1328212800000, 40],
        [1328385600000, 40],
        [1328644800000, 40],
        [1328817600000, 40],
        [1329076800000, 32.33],
        [1329433200000, 32.34],
        [1329595200000, 30],
        [1329951600000, 30],
        [1330038000000, 28.41],
        [1330200000000, 28.41],
        [1330383600000, 30.27],
        [1330470000000, 30.27],
        [1330556400000, 30.27],
      ]
    }],
  })).render();

  /**
  * Moby-Percoin-Chart 
  */
  (new ApexCharts(document.querySelector("#MobyPercoinChart"), {
    chart: {
      height: 155,
      fontFamily: 'Nunito Sans, sans-serif',
      toolbar: {
        show: false
      },
      type: 'line',
      stacked: false,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true
      },
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      show: false,
    },
    stroke: {
      show: true,
      curve: 'straight',
      lineCap: 'butt',
      colors: ['#fbbc05'],
      width: 2,
    },
    markers: {
      size: 0,
      style: 'full',
    },
    colors: ['#fbbc05'],
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      min: 0,
      max: 20
    },
    yaxis: {
      show: false,
      min: 0,
      max: 20
    },
    series: [{
      name: 'Percoins',
      data: [4, 4, 3.5, 2, 5, 4, 3.5, 3, 3, 3.5, 3.5, 2.5, 1, 0, 3, 4, 2.5, 2, 1, 1.5, 2, 2.5, 3, 4, 3.5, 3, 3.5, 3, 3.8, 3.5, 6]
    }],
  })).render();


  /**
  * Moby-Ether-Chart 
  */
  (new ApexCharts(document.querySelector("#MobyEtherChart"), {
    chart: {
      height: 263,
      fontFamily: 'Nunito Sans, sans-serif',
      toolbar: {
        show: false
      },
      type: 'bar',
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '20%',
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['#34a853']
    },
    colors: ['#34a853'],
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: true,
        color: '#34a853',
        offsetX: 0,
        offsetY: 0
      },
      axisTicks: {
        show: false,
      },
    },
    grid: {
      show: true,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      },
    },
    yaxis: {
      labels: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#34a853',
        offsetX: 0,
        offsetY: 0
      },
      axisTicks: {
        show: true,
        borderType: 'solid',
        color: '#34a853',
        width: 6,
        offsetX: 0,
        offsetY: 0
      },
      tickAmount: 5,
      min: 30,
      max: 90
    },
    fill: {
      opacity: 1
    },
    series: [{
      name: 'Ether',
      data: [44, 55, 47, 58, 61, 68, 75, 56, 44, 58, 63, 85, 35, 38, 55, 60, 44, 50, 46, 60, 55, 50]
    }],
  })).render();


  /**
  * Moby-Sales-Customer-Statistics-Chart
  */
  (new ApexCharts(document.querySelector("#MobyCustomerStatisticsChart"), {
    chart: {
      height: 402,
      fontFamily: 'Nunito Sans, sans-serif',
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
    },
    colors: ['#34a853', '#FBBC05'],
    stroke: {
      width: [3, 3],
      curve: ['straight', 'straight'],
      colors: ['#34a853', '#FBBC05'],
    },
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    xaxis: {
      labels: {
        show: true,
      },
      tickAmount: 10,
      min: 0,
      max: 23,
      floating: false,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      tickAmount: 8,
      min: 0,
      max: 23,
    },
    legend: {
      show: true,
      position: 'top'
    },
    markers: {
      size: [5, 5],
      colors: ['#fff'],
      strokeColors: ['#34a853', '#FBBC05'],
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
      name: 'Visits',
      data: [12, 10, 12, 15, 13, 13.5, 19.5]
    }, {
      name: 'Income',
      data: [6, 5.7, 3.5, 2, 5, 7.5, 2.5]
    }],
  })).render();

  /**
   * Moby-Bitcoin-Market-Chart
   */
  (new ApexCharts(document.querySelector("#MobyBitcoinMarketChart"), {
    chart: {
      type: 'bar',
      height: 352,
      fontFamily: 'Nunito Sans, sans-serif',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '30%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['#EA4335']
    },
    colors: ['#EA4335'],
    xaxis: {
      type: 'category',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
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
    grid: {
      show: false,
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    fill: {
      opacity: 1
    },
    series: [{
      name: 'Bitcoin Market',
      data: [44, 24, 35, 50, 44, 38, 47, 51]
    }],
  })).render();

  (new ApexCharts(document.querySelector("#MobyBitcoinMarketChart1"), {
    chart: {
      type: 'bar',
      height: 100,
      fontFamily: 'Nunito Sans, sans-serif',
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '70%'
      }
    },
    colors: ['#fff'],
    fill: {
      colors: ['#fff'],
    },
    labels: [13, 14, 15, 5, 6, 7, 8, 9, 10, 20],
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
          formatter: (seriesName) => {
            return ''
          }
        }
      },
      marker: {
        show: false
      }
    },
    series: [{
      data: [55, 66, 41, 89, 63, 25, 44, 32, 36, 99]
    }],
  })).render();

  (new ApexCharts(document.querySelector("#MobyBitcoinMarketChart2"), {
    chart: {
      type: 'bar',
      height: 100,
      fontFamily: 'Nunito Sans, sans-serif',
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '70%'
      }
    },
    colors: ['#fff'],
    fill: {
      colors: ['#fff'],
    },
    labels: [13, 14, 15, 5, 6, 7, 8, 9, 10, 20],
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
          formatter: (seriesName) => {
            return ''
          }
        }
      },
      marker: {
        show: false
      }
    },
    series: [{
      data: [55, 66, 41, 89, 63, 25, 44, 32, 36, 99]
    }],
  })).render();


  /**
   * Moby-Your-Wallet-Chart
   */
  (new ApexCharts(document.querySelector("#MobyWalletChart"), {
    chart: {
      height: 230,
      type: 'donut',
      fontFamily: 'Nunito Sans, sans-serif',
      toolbar: {
        show: false
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: '50%',
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
    labels: ['Bitcoin', 'Litecoin', 'Etherium', 'Percoin'],
    colors: ['#EA4335', '#FBBC05', '#34A853', '#4285F4'],
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
    series: [60, 25, 13, 44]
  })).render();


  /**
   * Moby-PIE-Stock-Chart 
   */
  (new ApexCharts(document.querySelector("#MobyPIEStockChart"), {
    chart: {
      height: 400,
      type: 'line',
      fontFamily: 'Nunito Sans, sans-serif',
      stacked: false,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
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
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: ['#51A5E2'],
      width: 3,
    },
    markers: {
      size: 0,
      style: 'full',
    },
    colors: ['#51A5E2'],
    xaxis: {
      type: 'datetime',
      labels: {
        show: true,
        format: 'MMM',
        offsetX: 20,
      },
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
      max: 100,
      labels: {
        show: true,
        formatter: (val) => { return val + '%' },
      },
      opposite: true,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    series: [{
      name: 'Stock',
      data: [
        [1546286400000, 50],
        [1546718400000, 52],
        [1547236800000, 50],
        [1547755200000, 54],
        [1548273600000, 30],
        [1548964800000, 35],
        [1549396800000, 40],
        [1550001600000, 36],
        [1550520000000, 38],
        [1551038400000, 32],
        [1551384000000, 38],
        [1551816000000, 36],
        [1552420800000, 40],
        [1552939200000, 30],
        [1553457600000, 34],
        [1554062400000, 30],
        [1554494400000, 25],
        [1555099200000, 20],
        [1555617600000, 18],
        [1556136000000, 16],
        [1556654400000, 18],
        [1557086400000, 16],
        [1557691200000, 18],
        [1558209600000, 20],
        [1558728000000, 16],
        [1559332800000, 25],
        [1559764800000, 30],
        [1560369600000, 25],
        [1560888000000, 35],
        [1561406400000, 32],
        [1561924800000, 50],
        [1562356800000, 20],
        [1562961600000, 40],
        [1563480000000, 36],
        [1563998400000, 38],
        [1564603200000, 40],
        [1565035200000, 48],
        [1565640000000, 50],
        [1566158400000, 59],
        [1566676800000, 58],
        [1567108800000, 69]
      ]
    }],
  })).render();

});