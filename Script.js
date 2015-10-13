google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Country', 'Count', ],
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

    var chart = new google.visualization.BarChart(document.getElementById('InternetChart'));

    chart.draw(data, options);
}


google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Computer', 'Proccesor', 'RAM', 'Graphics'],
        ['Mac Pro', 32.4, 128, 12],
        ['iMac', 13.2, 32, 2],
        ['Macbook Pro', 11.2, 16, 2],
        ['Macbook Air', 8.8, 8, 1.5],
        ['Macbook', 2.6, 8, 1.5]
    ]);

    var options = {
        title: 'Comparing speed of 5 apple computers',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Speed Gb/Ghz',
            minValue: 0
        },
        vAxis: {
            title: 'Computer'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('AppleChart'));

    chart.draw(data, options);
}