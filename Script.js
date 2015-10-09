google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['City', '2010 Population',],
        ['New York City, NY', 8175000],
        ['Los Angeles, CA', 3792000],
        ['Chicago, IL', 2695000],
        ['Houston, TX', 2099000],
        ['Philadelphia, PA', 1526000]
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
