Highcharts.chart('container1', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Percentage GDP Expenditure on R&D in North/Central America (2015)'
    },
    subtitle: {
        text: 'Source: data.un.org'
    },
    xAxis: {
        categories: [
            'Canada',
            'Costa Rica',
            'El Salvador',
            'Guatemala',
            'Honduras',
            'Mexico',
            'Nicaragua',
            'Panama',
            'United States'
        ],
        crosshair: true
    },
    yAxis: {
        max: 3,
        title: {
            text: 'Expenditure %'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: '% of GDP Spent on R&D',
        data: [1.6972, 0.4499, 0.1435, 0.0299, 0.015, 0.4299, 0.1074, 0.1203, 2.7174]

    }]
});
Highcharts.chart('container2', {

    title: {
        text: 'Energy Supply Per Capita by gigajoules'
    },

    subtitle: {
        text: 'Source: data.un.org'
    },

    yAxis: {
        title: {
            text: 'Energy Supply Per Capita'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2015 to 2017'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2015
        }
    },

    series: [{
        name: 'Canada',
        data: [327, 324, 330]
    }, {
        name: 'Costa Rica',
        data: [43, 44, 43]
    }, {
        name: 'El Salvador',
        data: [28, 28, 27]
    }, {
        name: 'Guatemala',
        data: [28, 32, 31]
    }, {
        name: 'Honduras',
        data: [28, 27, 27]
    }, {
        name: 'Mexico',
        data: [28, 28, 27]
    }, {
        name: 'Nicaragua',
        data: [27, 27, 27]
    }, {
        name: 'Panama',
        data: [43, 42, 48]
    }, {
        name: 'United States',
        data: [286, 281, 278]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
