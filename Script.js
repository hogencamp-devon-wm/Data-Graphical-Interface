google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Country', 'Country Internet Speed',],
        ['Lithuania', 33.1],
        ['South Korea', 28.8],
        ['Sweden', 25.5],
        ['Latvia', 25.4],
        ['Romania', 24.3],
	   ['Netherlands', 23.7],
	   ['Macua', 23.3],
	   ['Bulgaria', 20.8],
	   ['Switzerland', 19.8],
	   ['Andorra', 19.8]
    ]);

    var options = {
        title: 'Comparison of Average Internet Speed',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Speed Mb/s',
            minValue: 0
        },
        vAxis: {
            title: 'Country'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}
