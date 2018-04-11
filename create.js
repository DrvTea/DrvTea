function notify(evt){
    openPopUp(evt.target.id);
}//window.open('tel:(074)');
var objectPolice = [{
    "id" : "police1",
	"name":"Baguio City Police Office Station 1", 
    "x" : "685",
    "y" : "199",
	"details":[{
		"adress": "Quirino Hwy, Baguio, Benguet",
		"phone": "(074) 424 2697"
	}],
    "icon" : "./img/markers/police.png"
}, {
    "id" : "police2",
	"name":"Baguio City Police Office Station 2",
    "x" : "685",
    "y" : "45",
	"details":[{
		"adress": "Camdas, Baguio, Benguet",
		"phone": "(074) 661 1255"
	}],
    "icon" : "./img/markers/police.png"
}, {
    "id" : "police3",
	"name":"Baguio City Police Office Station 3", 
    "x" : "930",
    "y" : "155",
	"details":[{
		"adress": "Pacdal Circle, Baguio, Benguet",
		"phone": "(074) 424 0670"
	}],
    "icon" : "./img/markers/police.png"
}, {
    "id" : "police4",
	"name":"Baguio City Police Office Station 4", 
    "x" : "975",
    "y" : "605",
	"details":[{
		"adress": "PEZA, Loakan, Baguio, Benguet",
		"phone": "(074) 424 0992"
	}],
    "icon" : "./img/markers/police.png"
}, {
    "id" : "police5",
	"name":"Baguio City Police Office Station 5", 
    "x" : "705",
    "y" : "355",
	"details":[{
		"adress": "Legarda, Marcos Highway, Baguio, Benguet",
		"phone": "(074) 442 0629"
	}],
    "icon" : "./img/markers/police.png"
}, {
    "id" : "police6",
	"name":"Baguio City Police Office Station 6", 
    "x" : "780",
    "y" : "115",
	"details":[{
		"adress": "Aurora Hill, Baguio City, Baguio, Benguet",
		"phone": "(074) 424 2174"
	}],
    "icon" : "./img/markers/police.png"
}, {
    "id" : "police7",
	"name":"Baguio City Police Office Station 7", 
    "x" : "750",
    "y" : "195",
	"details":[{
		"adress": "Central Business District, Baguio, Benguet",
		"phone": "(074) 661 1489"
	}],
    "icon" : "./img/markers/police.png"
}, {
    "id" : "police8",
	"name":"Baguio City Police Office Station 8", 
    "x" : "870",
    "y" : "690",
	"details":[{
		"adress": "Camp 7, Kennon Road, Baguio, Benguet",
		"phone": "(074) 424 2681"
	}],
    "icon" : "./img/markers/police.png"
}, {
    "id" : "police9",
	"name":"Baguio City Police Office Station 9", 
    "x" : "545",
    "y" : "225",
	"details":[{
		"adress": "Irisan, Baguio, Benguet",
		"phone": "(074) 424 8834"
	}],
    "icon" : "./img/markers/police.png"
}, {
    "id" : "police10",
	"name":"Baguio City Police Office Station 10", 
    "x" : "500",
    "y" : "515",
	"details":[{
		"adress": "Green Valley, Marcos Highway, Baguio, Benguet",
		"phone": "(074) 422 2662"
	}],
    "icon" : "./img/markers/police.png"
}];
var objectFire = [{
    "id" : "fire1",
	"name":"CRASH FIRE RESCUE UNIT", 
    "x" : "905",
    "y" : "665",
	"details":[{
		"adress": "Demonstration Mines Road, North Central, Baguio, 2600 Benguet",
		"phone": "(074) 424 2681"
	}],
    "icon" : "./img/markers/firestation.png"
}, {
    "id" : "fire2",
	"name":"Aurora Hill FIRE STATION, North Central, Baguio, 2600 Benguet",
    "x" : "815",
    "y" : "40",
	"details":[{
		"adress": "Rimando Rd, Baguio, 2600 Benguet",
		"phone": "(074) 661 7169"
	}],
    "icon" : "./img/markers/firestation.png"
}, {
    "id" : "fire3",
	"name":"Irisan Fire Station, Baguio, Benguet", 
    "x" : "250",
    "y" : "125",
	"details":[{
		"adress": "Naguilian Rd, Baguio, 2600 Benguet",
		"phone": "(074) 424 8834"
	}],
    "icon" : "./img/markers/firestation.png"
}, {
    "id" : "fire4",
	"name":"Baguio City Central Fire Station", 
    "x" : "655",
    "y" : "185",
	"details":[{
		"adress": "1 Corner Abanao and Kayang Streets, Baguio, 2600 Benguet",
		"phone": "(074) 442 2222"
	}],
    "icon" : "./img/markers/firestation.png"
}];
var objectHospital = [{
    "id" : "host1",// ~ slu"
	"name":"Saint Louis University - Hospital of the Sacred Heart", 
    "x" : "735",
    "y" : "155",
	"details":[{
		"adress": "Assumption Rd, Baguio, 2600 Benguet",
		"phone": "(074) 442 5700"
	}],
    "icon" : "./img/markers/hospital.png"
}, {
    "id" : "host2",// ~ notre"
	"name":"NOTRE DAME DE CHARTRES HOSPITAL",
    "x" : "765",
    "y" : "170",
	"details":[{
		"adress": "25, Main Building, Gen Luna Road, Baguio, 2600 Benguet",
		"phone": "(074) 619 8530"
	}],
    "icon" : "./img/markers/hospital.png"
}, {
    "id" : "host3",// ~ bgh"
	"name":"Baguio General Hospital, Baguio General Hospital Driveway", 
    "x" : "735",
    "y" : "355",
	"details":[{
		"adress": "Baguio General Hospital Driveway, Baguio, 2600 Benguet",
		"phone": "(074) 442 4216"
	}],
    "icon" : "./img/markers/hospital.png"
}, {
    "id" : "host4",// ~ BMC"
	"name":"Baguio Medical Center", 
    "x" : "735",
    "y" : "335",
	"details":[{
		"adress": "Kennon Rd, Baguio, Benguet",
		"phone": "(074) 304 3873"
	}],
    "icon" : "./img/markers/hospital.png"
}];

function addPolice() {
    var svgDoc = document.getElementById("mymap");
    var svg = svgDoc.contentDocument;
    var svgns = svgDoc.namespaceURI;
    var layer = svg.getElementById("layer");
    for (var i = 0; i < objectPolice.length; i++) {
        var elemDiv = document.createElement('div');
        elemDiv.className = "modal";
        elemDiv.id = objectPolice[i].id + "modal";
        slideshowContent = '<p>Address: ' + objectPolice[i].details[0].adress + '<br></p>';
        elemDiv.innerHTML = '<div class="modal-content">' +
                            '<h2>' + objectPolice[i].name + '</h2>' +
                            '<div class="slideshow">' +
                                slideshowContent +
                            '</div>'+
                            '<div id="callnow"><a href="tel:'+ objectPolice[i].details[0].phone +'" class="call">Call Now!</a></div>'
                        '</div>';
        document.body.appendChild(elemDiv);
        var cc = document.createElementNS("http://www.w3.org/2000/svg", "image");
        var imagesize = 40;
        cc.setAttribute("x", objectPolice[i].x);
        cc.setAttribute("y", objectPolice[i].y);
        cc.setAttribute("height", imagesize);
        cc.setAttribute("width", imagesize);
        cc.setAttribute("href", objectPolice[i].icon);
        cc.setAttribute("onclick", "top.notify(evt)");
        cc.setAttribute("style", "cursor: pointer;");
        cc.setAttribute("id", objectPolice[i].id);
        layer.appendChild(cc);
    }
}
function addFireStations() {
    var svgDoc = document.getElementById("mymap");
    var svg = svgDoc.contentDocument;
    var svgns = svgDoc.namespaceURI;
    var layer = svg.getElementById("layer");

    for (var i = 0; i < objectFire.length; i++) {
        var elemDiv = document.createElement('div');
        elemDiv.className = "modal";
        elemDiv.id = objectFire[i].id + "modal";
        slideshowContent = '<p>Address: ' + objectFire[i].details[0].adress + '<br></p>';
        elemDiv.innerHTML = '<div class="modal-content">' +
                            '<h2>' + objectFire[i].name + '</h2>' +
                            '<div class="slideshow">' +
                                slideshowContent +
                            '</div>'+
                            '<div id="callnow"><a href="tel:'+ objectPolice[i].details[0].phone +'" class="call">Call Now!</a></div>'
                        '</div>';
        document.body.appendChild(elemDiv);
        var cc = document.createElementNS("http://www.w3.org/2000/svg", "image");
        var imagesize = 40;
        cc.setAttribute("x", objectFire[i].x);
        cc.setAttribute("y", objectFire[i].y);
        cc.setAttribute("height", imagesize);
        cc.setAttribute("width", imagesize);
        cc.setAttribute("href", objectFire[i].icon);
        cc.setAttribute("onclick", "top.notify(evt)");
        cc.setAttribute("style", "cursor: pointer;");
        cc.setAttribute("id", objectFire[i].id);
        layer.appendChild(cc);
    }
}
function addHospitals() {
    var svgDoc = document.getElementById("mymap");
    var svg = svgDoc.contentDocument;
    var svgns = svgDoc.namespaceURI;
    var layer = svg.getElementById("layer");

    for (var i = 0; i < objectHospital.length; i++) {
        var elemDiv = document.createElement('div');
        elemDiv.className = "modal";
        elemDiv.id = objectHospital[i].id + "modal";
        slideshowContent = '<p>Address: ' + objectHospital[i].details[0].adress + '<br></p>';
        elemDiv.innerHTML = '<div class="modal-content">' +
                            '<h2>' + objectHospital[i].name + '</h2>' +
                            '<div class="slideshow">' +
                                slideshowContent +
                            '</div>'+
                            '<div id="callnow"><a href="tel:'+ objectPolice[i].details[0].phone +'" class="call">Call Now!</a></div>'
                        '</div>';
        document.body.appendChild(elemDiv);
        var cc = document.createElementNS("http://www.w3.org/2000/svg", "image");
        var imagesize = 40;
        cc.setAttribute("x", objectHospital[i].x);
        cc.setAttribute("y", objectHospital[i].y);
        cc.setAttribute("height", imagesize);
        cc.setAttribute("width", imagesize);
        cc.setAttribute("href", objectHospital[i].icon);
        cc.setAttribute("onclick", "top.notify(evt)");
        cc.setAttribute("style", "cursor: pointer;");
        cc.setAttribute("id", objectHospital[i].id);
        layer.appendChild(cc);
    }
}

function showPolice() {
    var svgDoc = document.getElementById("mymap");
    var svg = svgDoc.contentDocument;
    var svgns = svgDoc.namespaceURI;
    var layer = svg.getElementById("layer");
	
	while (layer.lastChild) {
    	layer.removeChild(layer.lastChild);
	}
	
    for (var i = 0; i < objectPolice.length; i++) {
        var cc = document.createElementNS("http://www.w3.org/2000/svg", "image");
        var imagesize = 40;
        cc.setAttribute("x", objectPolice[i].x);
        cc.setAttribute("y", objectPolice[i].y);
        cc.setAttribute("height", imagesize);
        cc.setAttribute("width", imagesize);
        cc.setAttribute("href", objectPolice[i].icon);
        cc.setAttribute("onclick", "displayDetails()");
        cc.setAttribute("style", "cursor: pointer;");
        cc.setAttribute("id", objectPolice[i].id);
        layer.appendChild(cc);
    }
}
function showFireStation() {
    var svgDoc = document.getElementById("mymap");
    var svg = svgDoc.contentDocument;
    var svgns = svgDoc.namespaceURI;
    var layer = svg.getElementById("layer");
	
	while (layer.lastChild) {
    	layer.removeChild(layer.lastChild);
	}

    for (var i = 0; i < objectFire.length; i++) {
        var cc = document.createElementNS("http://www.w3.org/2000/svg", "image");
        var imagesize = 40;
        cc.setAttribute("x", objectFire[i].x);
        cc.setAttribute("y", objectFire[i].y);
        cc.setAttribute("height", imagesize);
        cc.setAttribute("width", imagesize);
        cc.setAttribute("href", objectFire[i].icon);
        cc.setAttribute("onclick", "top.notify(evt)");
        cc.setAttribute("style", "cursor: pointer;");
        cc.setAttribute("id", objectFire[i].id);
        layer.appendChild(cc);
    }
}

function showHospitals() {
    var svgDoc = document.getElementById("mymap");
    var svg = svgDoc.contentDocument;
    var svgns = svgDoc.namespaceURI;
    var layer = svg.getElementById("layer");
	
	while (layer.lastChild) {
    	layer.removeChild(layer.lastChild);
	}

    for (var i = 0; i < objectHospital.length; i++) {
        var cc = document.createElementNS("http://www.w3.org/2000/svg", "image");
        var imagesize = 40;
        cc.setAttribute("x", objectHospital[i].x);
        cc.setAttribute("y", objectHospital[i].y);
        cc.setAttribute("height", imagesize);
        cc.setAttribute("width", imagesize);
        cc.setAttribute("href", objectHospital[i].icon);
        cc.setAttribute("onclick", "top.notify(evt)");
        cc.setAttribute("style", "cursor: pointer;");
        cc.setAttribute("id", objectHospital[i].id);
        layer.appendChild(cc);
    }
}

function openPopUp(myID) {
    var svgDoc = document.getElementById("mymap");
    var svg = svgDoc.contentDocument;
    var svgns = svgDoc.namespaceURI;
    var layer = svg.getElementById("layer");
    var modal = document.getElementById(myID + 'modal');
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}