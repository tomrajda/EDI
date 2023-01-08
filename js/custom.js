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
        Airport_Year_Visits = data.map(function(elem){
            return elem.Airport_Year_Visits;
        })        
        //console.log(Airport_Year_Visits)

        const ctx = document.getElementById('canvas').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Airport_Name.slice(0, 30),
                datasets: [{
                    label: 'Total passegner traffic',
                    data: Airport_Year_Visits.slice(0, 30),
                    backgroundColor: ["#ff335e", "#ff338e", "#ff332e", "#ff337e"]
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
                        text: 'Total passenger traffic at selected airports worldwide in 2022',
                        font: {
                            size: 24,
                        }
                    }
                }
            }
        });
    }
}