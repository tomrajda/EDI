var xmlhttp = new XMLHttpRequest();
var url = "https://my.api.mockaroo.com/Airports.json?key=70c3c7e0";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        
        //console.log(data)
    
        function buildTable(data){
            var table = document.getElementById('myTable')

            for (var i = 0; i < data.length; i++){
                var row = `<tr>
                                <td>${data[i].Airport_Code}</td>
                                <td>${data[i].Airport_Name}</td>
                                <td>${data[i].Airport_Year_Visits}</td>
                                <td>${data[i].Airport_Municipality}</td>
                                <td>${data[i].Airport_Country_Code}</td>
                                <td>${data[i].Airport_GPS_Code}</td>
                                <td>${data[i].Airport_Elevation}</td>
                          </tr>`
                table.innerHTML += row;    
            } 
        }
    
    buildTable(data.slice(0,30))
    
    }
}