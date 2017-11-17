Vue.component('line-chart', {
  extends: VueChartJs.Line,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: [ AB, BC,
MB,
NB,
NL,
NS,
NT,
ON,
PE,
QC,
SK,
YT,
NONE  ]


      datasets: [
        {
          label: 'GitHub Commits',
          borderColor: 'red',
          backgroundColor: 'red',
          data: {
  "Province":["AB","BC","MB","NB","NL","NS","NT","ON","PE","QC","SK","YT","NONE Specified"],
  "Number of victims":[92,60,18,10,6,11,0,348,2,189,25,0,6],
  "$ Loss":[123329.58,44331.04,16918.27,8765.05,1550,4120,0,223692.22,0,116520.37,17046.26,0,11181]
}

        }
      ]
    };

    var options = this.options || {
      legend: {
        display: false
      },
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 10
            }
          }
        ]
      }
    };

    this.renderChart(data, options);
  }
})
