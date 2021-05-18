
// variable = Array of objects with details of each map location
const locations = [
    {
        name: "Castletown House",
        lat: "53.349016",
        lng: "-6.530198",
        image: "./assets/images/s2-castletown-house.png",
        alt: "Aerial image of Castletown House & Parklands",
        descriptionOne: "Castletown is Ireland's finest eighteenth-century country house, built from 1722 for Speaker William Conolly and his wife Katherine. The house was probably designed by Alessandro Galilei, the Italian architect, and Edward Lovett Pearce. Lady Louisa Conolly (1743-1821), wife of Tom Conolly, grand-nephew of William, came to the house in 1759.",
        descriptionTwo: "She loved Castletown. Under her direction further lodges, a bathing house and a temple were added. She was continually planning improvements to the grounds, planting trees, making the lake and building bridges. Today the great house and some of the demesne lands are in State ownership.",
        descriptionThree: "",
        descriptionFour: ""
    },
    {
        name: "Batty Langley Lodge 1785",
        lat: "53.346920",
        lng: "-6.517088",
        image: "./assets/images/s2-batty-langley.png",
        descriptionOne: "This path was used as a carriage road to Dublin. The design of the lodge was influenced by the published drawings of an English architect Batty Langley (1696-1751). In Lady Louisa Conolly's time it was a garden building, but later it was used more as a gate lodge and a residence for the Castletown groundsmen or gardeners.",
        descriptionTwo: "",
        descriptionThree: "",
        descriptionFour: ""
    },
    {
        name: "St. Wolstan's Abbey 1202",
        lat: "53.347119",
        lng: "-6.518830",
        image: "./assets/images/s2-st-woltans.png",
        descriptionOne: "On the other side of the riverbank there are lovely views of the remains of St. Wolstan’s Abbey and a nineteenth-century tower, designed to be seen from Castletown. The Abbey was founded in 1202 and was closed by Henry VIII in1536.",
        descriptionTwo: "",
        descriptionThree: "",
        descriptionFour: ""
    },
    {
        name: "Ice House 1720's",
        lat: "53.346702",
        lng: "-6.520188",
        image: "./assets/images/s2-ice-house.png",
        descriptionOne: "Ice houses were buildings used to store ice throughout the year. Some were underground chambers, usually man-made, close to natural sources of winter ice such as freshwater lakes, but many were buildings with various types of insulation. During the winter, ice and snow would be taken into the ice house and packed with insulation, often straw or sawdust.",
        descriptionTwo: "",
        descriptionThree: "",
        descriptionFour: ""
    },
    {
        name: "Temple",
        lat: "53.346701",
        lng: "-6.522771",
        image: "./assets/images/s2-temple.png",
        descriptionOne: "The temple was designed by Lady Louisa Conolly to enhance the vista from the house and to the river. It was erected in honour of Sarah Siddons, the British actress.",
        descriptionTwo: "",
        descriptionThree: "",
        descriptionFour: ""
    },
    {
        name: "Castletown Avenue",
        lat: "53.347357",
        lng: "-6.530965",
        image: "./assets/images/s2-castletown-avenue.png",
        descriptionOne: "Continue along the magnificent lime tree avenue, taking in views of Donaghcumper House and demesne on the far bank of the river Liffey, until you arrive at Castletown Gates at the top of Celbridge main street.",
        descriptionTwo: 'Continue up the magnificent lime tree avenue, taking in views the beautiful views as you stroll along until you arrive at Lake at the top of the avenue. Now take right and follow the gravel until you reach the next stop.',  
        descriptionThree: "",
        descriptionFour: ""
    },
    {
        name: "Donaghcumper House and Demesne",
        lat: "53.343238",
        lng: "-6.535208",
        image: "./assets/images/s2-donaghcumper.png",
        descriptionOne: "You will see Donaghcumper House and demesne on the far bank of the river. The present house was remodelled in 1835 in the Tudor revival style. Tom Conolly of Castletown leased Donaghcumper in 1803 to extend the estate’s landscape across the river",
        descriptionTwo: "",
        descriptionThree: "",
        descriptionFour: ""
    },
    {
        name: "Christ Church 1884",
        lat: "53.341426",
        lng: "-6.536944", 
        image: "./assets/images/s2-christ-church.png",
        descriptionOne: "The present Protestant Church was designed by architect Thomas Drew at a cost of 3,000 pounds. It was built on the site of an earlier church constructed between 1812 and 1813, on land donated by Lady Louisa Conolly.",
        descriptionTwo: "",
        descriptionThree: "",
        descriptionFour: ""
    },
    {
        name: "Castletown Gates 1783",
        lat: "53.341309",
        lng: "-6.537101",
        image: "./assets/images/s2-castletown-gate.png",
        descriptionOne: "The gates were built by John Coates in the time of ‘Squire’ Tom and Lady Louisa Conolly. On the top of each magnificent pier rests the statue of a sphinx. The gates are at present in storage.",
        descriptionTwo: "",
        descriptionThree: "",
        descriptionFour: ""
    },
    {
        name: "School of Industry",
        lat: "53.341213",
        lng: "-6.535889",
        image: "./assets/images/s2-school-of-indusrty.png",
        descriptionOne: "Here on the left-hand side is the School of Industry, built by Lady Louisa Conolly in 1814.",
        descriptionTwo: "The school was the first of its kind in the country. Boys were taught trades such as carpentry, shoe-making and tailoring while in another building nearby girls were taught how to knit, sew and plait straw for bonnet making. All were encouraged to read and write and learned how to keep simple accounts.",
        descriptionThree: "",
        descriptionFour: ""
    },
    {
        name: "Gate Lodges at Castletown",
        lat: "53.341300",
        lng: "-6.537330",
        image: "./assets/images/s2-gate-lodge.png",
        descriptionOne: "Two adjoining lodges, the Round House 1730 and Gate House 1783, mark the approach to Castletown. These buildings, sensitively and authentically restored, are available for holiday letting through the Irish Landmark Trust.",
        descriptionTwo: 'If you would like to check availability of the <a href="https://www.irishlandmark.com/property/castletown-round-house/" target="_blank" rel="noreferrer">Round House</a>, which sleeps 6, you can do so via this link',
        descriptionThree: 'If you would like to check availability of the <a href="https://www.irishlandmark.com/property/castletown-gate-house/" target="_blank" rel="noreferrer">Gate House</a>, which sleeps 3, you can do so via this link',
        descriptionFour: ""
    },
    {
        name: "Workhouse",
        lat: "53.343685",
        lng: "-6.540800",
        image: "./assets/images/s2-workhouse.png",
        descriptionOne: "The Celbridge Workhouse, built on land donated by Edward Pakenham Conolly of Castletown, cost 6,800 pounds to build and opened in June 1841 to house 519 people. Conditions in the workhouse were very poor. Disease and fever were rampant and half of the children admitted died within a short period.",
        descriptionTwo: "After the establishment of the Irish Free State in 1922 the Workhouse was closed, and was later used as a barracks for the army.",
        descriptionThree: 'Today the Workhouse is home to <a href="https://colourtrend.ie/pages/about" target="_blank" rel="noreferrer">Colourtrend</a>, an Irish owned paint manufacturer, so unfortunately it is not possible to tour the site but it can be viewed from the front of the building.',
        descriptionFour: ""
    },
    {
        name: "Workhouse Burial Ground",
        lat: "53.344560",
        lng: "-6.542112",
        image: "./assets/images/s2-workhouse-graveyard.png",
        descriptionOne: "When inmates died in the workhouse, their bodies were carted to a pit in the graveyard, where they were buried together in unmarked graves. No record was kept of their names and possibly hundreds were buried there unknown and forgotten. A cross was subsequently erected in memory of all those who died during those tragic years.",
        descriptionTwo: "In 2007 Celbridge Tidy Towns restored the graveyard and erected a beautiful memorial sculpture.",
        descriptionThree: "",
        descriptionFour: ""
    },
    {
        name: "Jassamine House 1750",
        lat: "53.341118",
        lng: "-6.537488",
        image: "./assets/images/s2-jassamine-house.png",
        descriptionOne: "Opposite the Parochial House is Jassamine House, at the junction of Main Street and Big Lane (Maynooth Road). This house replaced the earlier mud cabins. It was built by Charles Davis, successor to George Finey as agent to William Conolly.",
        descriptionTwo: "The iron arch of the entrance gate was constructed with material salvaged from the General Post Office in Dublin after the 1916 Rising.",
        descriptionThree: "",
        descriptionFour: ""
    },
    {
        name: "Royal Irish Constabulary Barracks 1841",
        lat: "53.340835",
        lng: "-6.537745",
        image: "./assets/images/s2-ric.png",
        descriptionOne: "Michelangelo's restaurant at the top of the town was used as a barracks for the Royal Irish Constabulary from 1841 until 1911 when they moved to the Mill Manager’s house beside the mill.",
        descriptionTwo: "",
        descriptionThree: "",
        descriptionFour: ""
    },
    {
        name: "Parochial House 1864",
        lat: "53.340883",
        lng: "-6.537118",
        image: "./assets/images/s2-parochial-house.png",
        descriptionOne: "The last house on this side of the street at the top of the town is the Catholic Parochial House. In 1729 the Neale family lived on the lands where the Parochial House stands. Their ancestors worked as gardeners for the Dongans of Castletown before the arrival of the Conollys.",
        descriptionTwo: "",
        descriptionThree: "",
        descriptionFour: ""
    },
    {
        name: "Court House 1801",
        lat: "53.340482",
        lng: "-6.537790",
        image: "./assets/images/s2-court-house.png",
        descriptionOne: "Adjoining Kildrought House note the former courthouse. In later years the building was used as a cinema and a local amenity hall.",
        descriptionTwo: "",
        descriptionThree: "",
        descriptionFour: ""
    },
    {
        name: "Kildrought House 1719",
        lat: "53.340192",
        lng: "-6.537479",
        image: "./assets/images/s2-kildrought-house.png",
        descriptionOne: "Next on your right is Kildrought House, the oldest in Celbridge, which is set back from the street. The house was built by a Dublin upholsterer and tapestry maker Robert Baillie, who leased the land from William Conolly in 1719.",
        descriptionTwo: "Baillie brought Flemish weavers to Ireland. Two of their tapestries depicting the Siege of Derry and the Battle of the Boyne still hang in the Irish House of Lords in College Green, Dublin, now the Bank of Ireland. From 1782 to 1814 the house was the Celbridge Academy. Later it became a fever hospital, vicarage and dispensary before reverting to a private residence.",
        descriptionThree: "",
        descriptionFour: ""
    },
    {
        name: "Victorian Townhouse",
        lat: "53.339878",
        lng: "-6.538223",
        image: "./assets/images/s2-victorian-house.png",
        descriptionOne: "Walking in the direction of Castletown you see this fine early Victorian town house built by Richard Nelson in 1840.",
        descriptionTwo: "",
        descriptionThree: "",
        descriptionFour: ""
    },
    {
        name: "George Finey's House 1724",
        lat: "53.339662",
        lng: "-6.538476",
        image: "./assets/images/s2-george-finey-house.png",
        descriptionOne: "George Finey's House, opposite the Roman Catholic Church, was home to the Guinness family from 1752 until 1766. Finey was an agent to William Conolly. There are three stone tablets in the street front dating the house between 1724 and 1728. One of the tablets confirms that around this period the old Irish name Kildrought had been changed to Celbridge.",
        descriptionTwo: "",
        descriptionThree: "",
        descriptionFour: ""
    },
    {
        name: "St Patrick's Church 1859",
        lat: "53.339736",
        lng: "-6.539370",
        image: "./assets/images/s2-st-patricks-church.png",
        descriptionOne: "The Catholic Archbishop of Dublin, Paul Cullen, laid the foundation stone of the present church in the presence of the architect J.J. McCarthy.",
        descriptionTwo: "This was the site of the Mass House, so named because mass was the only service which could be celebrated there. Other sacraments and ceremonies were administered in people's homes. The Mass House had a thatched roof, and the priest’s residence was situated where the present bell is positioned.",
        descriptionThree: "The purchase of Castletown demesne and other lands in 1709 by Speaker William Conolly would prove to be the most important factor in the development of Celbridge’s streetscape. By the time Conolly bought Castletown he acquired significant wealth and numerous landholdings, and had been appointed Speaker of the House of Commons.",
        descriptionFour: "The new house which he built at Castletown between 1722 and 1729 demonstrated this prosperity. Conolly granted new leases on lands in Celbridge on condition that substantial stone houses with gable ends and two chimneys were built. Through his vision for Celbridge the existing mud cabins along Main Street were replaced. <em>Keep this in mind at the next few stops</em>"
    },
    {
        name: "Gogarty's Shop 1818",
        lat: "53.338625",
        lng: "-6.539707",
        image: "./assets/images/s2-gogartys.png",
        descriptionOne: "Continuing along the Main Street you notice Gogarty's which has the oldest shop front in the town.",
        descriptionTwo: "",
        descriptionThree: "",
        descriptionFour: ""
    },
    {
        name: "Toll House",
        lat: "53.338164",
        lng: "-6.539617",
        image: "./assets/images/s2-toll-house.png",
        descriptionOne: "Beside the Mill Manager’s House is the Toll House. Here travellers were charged to cross the bridge. In the late nineteenth century the house became the home of the Brennan family who were saddlers and also provided a service to the Hazelhatch train station with horse-drawn cars.",
        descriptionTwo: "",
        descriptionThree: "",
        descriptionFour: ""
    },
    {
        name: "Mill Manager’s House",
        lat: "53.338112",
        lng: "-6.539944",
        image: "./assets/images/s2-mil-manager-house.png",
        descriptionOne: "Looking across the road from the Mucky Duck pub you see a tall three-storey building, the Mill Manager’s house. In 1911 it was occupied by the Royal Irish Constabulary, the Irish police force at that time.",
        descriptionTwo: "",
        descriptionThree: "",
        descriptionFour: ""
    },
    {
        name: "Birthplace of Arthur Guinness",
        lat: "53.338351",
        lng: "-6.539994",
        image: "./assets/images/s2-arthur-guinness.png",
        descriptionOne: "Arthur's father, Richard Guinness, came to work in Celbridge as agent and steward to Dr. Arthur Price, the rector of Celbridge. Shortly afterwards Richard married a local farmer's daughter, Elisabeth Read, who had learned the skill of brewing. In 1722 Dr. Price bought Carberry’s malt house.",
        descriptionTwo: 'This became the home of Richard and Elizabeth and it was here that their son Arthur was born in 1725; he was named after the rector. Arthur Guinness lived on the main street in Celbridge for thirty years. Details of a heritage route that traces his early years can be found at <a href="https://intokildare.ie/arthurs-way/" target="_blank" rel="noreferrer">Arthurs Way</a>!',
        descriptionThree: "",
        descriptionFour: ""
    },
    {
        name: "Tobar Mochua",
        lat: "53.337731",
        lng: "-6.540395",
        image: "./assets/images/s2-tobar-mochua.png",
        descriptionOne: "Embedded in the wall just beside the entrance gate to the Mill is a plaque with the words “Tobar Mochua” the well of St. Mochua, who is said to have brought Christianity to the area. Close by, on Church Road at Tea Lane Graveyard, he established the church of St. Mochua.",
        descriptionTwo: "This Graveyard is the burial ground of the Dongan and Conolly families of Castletown along with Henry Grattan Junior MP.  The cemetery can be visited by contacting the key holder at 087 9630719",
        descriptionThree: "",
        descriptionFour: ""
    },
    {
        name: "The Mill 1850",
        lat: "53.337428",
        lng: "-6.539926",
        image: "./assets/images/s2-the-mill.png",
        descriptionOne: "The first reference to a mill in Celbridge was a corn and tuck mill in 1217. Over the years the Mill has been a source of employment and has changed uses from flour, flax, paper to a textile mill. Peat from local bogs was used for the paper mill. At one time, in the early nineteenth century, it was the largest mill in Ireland.",
        descriptionTwo: "Today it is a community centre housing small businesses and recreational activities.  The Mill also marks the spot where there was a ford across the Liffey. When the river is low one of the last remaining stepping stones of the ford can be seen from the nearby bridge.",
        descriptionThree: "",
        descriptionFour: ""
    },
    {
        name: "English Row",
        lat: "53.337609",
        lng: "-6.541037",
        image: "./assets/images/s2-English-row.png",
        descriptionOne: "On your right is the Mill and on your left a row of colourful dwellings, which were built to provide accommodation for Yorkshire immigrants who came to work at the Mill.",
        descriptionTwo: "",
        descriptionThree: "",
        descriptionFour: ""
    },
    {
        name: 'Celbridge Abbey c.1697',
        lat: "53.336852",
        lng: "-6.541739",
        image: "./assets/images/s2-celbridge-abbey.png",
        descriptionOne: "Celbridge Abbey was built by Bartholomew Van Homrigh, who served as Lord Mayor of Dublin in 1697. His eldest daughter, Esther, was a close friend and correspondent of Dean Jonathan Swift, who called her Vanessa.",
        descriptionTwo: "On the eve of Swift's departure from London to take up the Deanery of St. Patrick’s Cathedral in Dublin, Vanessa confessed her love for Swift but he did not fully return her feelings, and it is said that she died of a broken heart in 1723.",
        descriptionThree: "A quiet romantic spot overlooking the weir in the Abbey grounds was chosen to be their special bower. Their original bower was destroyed during the construction of the wonderful Rockbridge in 1724. The bower you can see today is a modern replacement. ",
        descriptionFour: "The Rockbridge is the oldest remaining bridge spanning the Liffey. The view of the weir from the bridge is particularly beautiful."
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
    zoom: 15
});

// User's live location on mobile devices
map.locate({
     watch: true,
     setView: true
});

// Place markers
locations.forEach(location => {
    let marker = L.marker([location.lat, location.lng]).addTo(map);
    marker.bindPopup(`<div class="location-item"><h5>${location.name}</h5>
    <img class="pinPadding" src="${location.image}" alt="${location.alt}"><br>
    <p>${location.descriptionOne}</p>
    <p>${location.descriptionTwo}</p>
    <p>${location.descriptionThree}</p>
    <p>${location.descriptionFour}</p>
    </div>`);
    locationsDiv.innerHTML += `<div class="location-item"><h5>${location.name}</h5></div>`;
});



