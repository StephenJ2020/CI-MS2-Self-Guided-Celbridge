
let tiles = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3RlcGhlbmoyMDIwIiwiYSI6ImNrb205bW5rdTAxZ2sycHAxemxmYXNueXYifQ.1U76DFHWDIDTD-liiMaC-g", {
    attribution: "<a href='https://www.mapbox.com/about/maps/' target='_blank' rel='noopener'>© Mapbox</a>"
});

let map = L.map("map", {
    layers: [tiles],
    center: [53.34, -6.54],
    zoom: 15
});


