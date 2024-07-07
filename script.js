google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['', '', ''],
    ['Sun', 35000, 19000],
    ['Mon', 38000, 33000],
    ['Tue', 48000, 46000],
    ['Wed', 32000, 50000],
     ['Thu', 37000, 46000],
    ['Fri', 29000, 11200],
    ['Sat', 42000, 46000],
  ]);

  var options = {
    chart: {
    //  title: 'Regular Sell',
    //   subtitle: 'Sales, Expenses, and Profit: 2014-2017',
    },
    bars: 'vertical',
    vAxes: {
      // Adds titles to each axis.
    //   0: {title: 'parsecs', format: 'short'},
    //   1: {title: 'apparent magnitude'}
    },
    height: 250,
    colors: ['#daccf6', '#b6f5b6']
  };

  var chart = new google.charts.Bar(document.getElementById('chart_div'));

  chart.draw(data, google.charts.Bar.convertOptions(options));

  var btns = document.getElementById('btn-group');

  btns = function (e) {

    if (e.target.tagName === 'BUTTON') {
      options.vAxis.format = e.target.id === 'none' ? '' : e.target.id;
      chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  }
}


