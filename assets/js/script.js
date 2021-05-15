
// variable = Array of objects with details of each map location
const locations = [
    {
        name: "Castletown House",
        lat: "53.349016",
        lng: "-6.530198",
        image: "assets/images/",
        description: ""
    },
    {
        name: "Batty Langley Lodge 1785",
        lat: "53.346920",
        lng: "-6.517088",
        image: "assets/images/",
        description: ""
    },
    {
        name: "St. Wolstan's Abbey 1202",
        lat: "53.347119",
        lng: "-6.518830",
        image: "assets/images/",
        description: ""
    },
    {
        name: "Ice House 1720's",
        lat: "53.346702",
        lng: "-6.520188",
        image: "assets/images/",
        description: ""
    },
    {
        name: "Temple",
        lat: "53.346701",
        lng: "-6.522771",
        image: "assets/images/",
        description: ""
    },
    {
        name: "Castletown Avenue",
        lat: "53.347357",
        lng: "-6.530965",
        image: "assets/images/",
        description: ""
    },
    {
        name: "Donaghcumper House and Demesne",
        lat: "53.343238",
        lng: "-6.535208",
        image: "assets/images/",
        description: ""
    },
    {
        name: "Christ Church 1884",
        lat: "53.341426",
        lng: "-6.536944", 
        image: "assets/images/",
        description: ""
    },
    {
        name: "Castletown Gates 1783",
        lat: "53.341309",
        lng: "-6.537101",
        image: "assets/images/",
        description: ""
    },
    {
        name: "School of Industry",
        lat: "53.341213",
        lng: "-6.535889",
        image: "assets/images/",
        description: ""
    },
    {
        name: "Gate Lodges at Castletown",
        lat: "53.341300",
        lng: "-6.537330",
        image: "assets/images/",
        description: ""
    },
    {
        name: "Workhouse",
        lat: "53.343685",
        lng: "-6.540800",
        image: "assets/images/",
        description: ""
    },
    {
        name: "Workhouse Burial Ground",
        lat: "53.344560",
        lng: "-6.542112",
        image: "assets/images/",
        description: ""
    },
    {
        name: "Jassamine House 1750",
        lat: "53.341118",
        lng: "-6.537488",
        image: "assets/images/",
        description: ""
    },
    {
        name: "Royal Irish Constabulary Barracks 1841",
        lat: "53.340835",
        lng: "-6.537745",
        image: "assets/images/",
        description: ""
    },
    {
        name: "Parochial House 1864",
        lat: "53.340883",
        lng: "-6.537118",
        image: "assets/images/",
        description: ""
    },
    {
        name: "Court House 1801",
        lat: "53.340482",
        lng: "-6.537790",
        image: "assets/images/",
        description: ""
    },
    {
        name: "Kildrought House 1719",
        lat: "53.340192",
        lng: "-6.537479",
        image: "assets/images/",
        description: ""
    },
    {
        name: "Victorian Townhouse",
        lat: "53.339878",
        lng: "-6.538223",
        image: "assets/images/",
        description: ""
    },
    {
        name: "George Finey's House 1724",
        lat: "53.339662",
        lng: "-6.538476",
        image: "assets/images/",
        description: ""
    },
    {
        name: "St Patrick's Church 1859",
        lat: "53.339736",
        lng: "-6.539370",
        image: "assets/images/",
        description: ""
    },
    {
        name: "Gogarty's Shop 1818",
        lat: "53.338625",
        lng: "-6.539707",
        image: "assets/images/",
        description: ""
    },
    {
        name: "Toll House",
        lat: "53.338164",
        lng: "-6.539617",
        image: "assets/images/",
        description: ""
    },
    {
        name: "Mill Manager’s House",
        lat: "53.338112",
        lng: "-6.539944",
        image: "assets/images/",
        description: ""
    },
    {
        name: "Birthplace of Arthur Guinness",
        lat: "53.338351",
        lng: "-6.539994",
        image: "assets/images/",
        description: ""
    },
    {
        name: "Tobar Mochua",
        lat: "53.337731",
        lng: "-6.540395",
        image: "assets/images/",
        description: ""
    },
    {
        name: "The Mill 1850",
        lat: "53.337428",
        lng: "-6.539926",
        image: "assets/images/",
        description: ""
    },
    {
        name: "English Row",
        lat: "53.337609",
        lng: "-6.541037",
        image: "assets/images/",
        description: ""
    },
    {
        name: "Celbridge Abbey c.1697",
        lat: "53.336852",
        lng: "-6.541739",
        image: "assets/images/",
        description: ""
    },
];

// Leaflet JS Map
const locationsDiv = document.getElementById("locations");    

let tiles = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3RlcGhlbmoyMDIwIiwiYSI6ImNrb205bW5rdTAxZ2sycHAxemxmYXNueXYifQ.1U76DFHWDIDTD-liiMaC-g", {
    attribution: "<a href='https://www.mapbox.com/about/maps/' target='_blank' rel='noopener'>© Mapbox</a>"
});

// Center Map & set zoom level
let map = L.map("map", {
    layers: [tiles],
    center: [53.34, -6.54],
    zoom: 16
});

// User's live location on mobile devices
map.locate({
     watch: true,
     setView: true
});

// Place markers
locations.forEach(location => {
    let marker = L.marker([location.lat, location.lng]).addTo(map);
    locationsDiv.innerHTML += `<div class="location-item"><h4>${location.name}</h4></div>`;
});