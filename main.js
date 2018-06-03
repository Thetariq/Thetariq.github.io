function initMap(){
    var location={
        lat:32.2187169,
        lng:-7.9377964
    };
    var map=new google.maps.Map(document.getElementById("mapContainer"),{
zoom:15,
center:location
    });

    var marker = new google.maps.Marker({position: location, map: map});


  
}