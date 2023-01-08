var xmlhttp = new XMLHttpRequest();
var url = "https://my.api.mockaroo.com/Airports.json?key=70c3c7e0";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        //console.log(data)
        Airport_Name = data.map(function(elem){
            return elem.Airport_Name;
        })
        Airport_Elevation = data.map(function(elem){
            return elem.Airport_Elevation
        })        
        //console.log(Airport_Year_Visits)

        const ctx = document.getElementById('canvas2').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: Airport_Name.slice(0, 30),
                datasets: [{
                    label: 'Height above sea level [meters]',
                    data: Airport_Elevation.slice(0, 30),
                    backgroundColor: "#ff335e",
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Height above sea level of the selected airports',
                        font: {
                            size: 24,
                        }
                    }
                }
            }
        });
    }
}