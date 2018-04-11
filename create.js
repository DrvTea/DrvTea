function notify(evt){
    if (evt.target.id == "police1") {
        window.open('tel:(074) 424 2697');
    } else if (evt.target.id == "police2") {
        window.open('tel:(074) 661 1255');
    } else if (evt.target.id == "police3") {
        window.open('tel:(074) 424 0670');
    } else if (evt.target.id == "police4") {
        window.open('tel:(074) 424 0992');
    } else if (evt.target.id == "police5") {
        window.open('tel:(074) 442 0629');
    } else if (evt.target.id == "police6") {
        window.open('tel:(074) 424 2174');
    } else if (evt.target.id == "police7") {
        window.open('tel:(074) 661 1489');
    } else if (evt.target.id == "police8") {
        window.open('tel:(074) 424 2681');
    } else if (evt.target.id == "police9") {
        window.open('tel:(074) 424 8834');
    } else if (evt.target.id == "police10") {
        window.open('tel:(074) 422 2662');
    } else if (evt.target.id == "fire1") {
        window.open('tel:(074) 424 2681');
    } else if (evt.target.id == "fire2") {
        window.open('tel:(074) 661 7169');
    } else if (evt.target.id == "fire3") {
        window.open('tel:(074) 424 8834');
    } else if (evt.target.id == "fire4") {
        window.open('tel:(074) 442 2222');
    } else if (evt.target.id == "host1") {
        window.open('tel:(074) 442 5700');
    } else if (evt.target.id == "host2") {
        window.open('tel:(074) 619 8530');
    } else if (evt.target.id == "host3") {
        window.open('tel:(074) 442 4216');
    } else if (evt.target.id == "host4") {
        window.open('tel:(074) 304 3873');
    }
}//window.open('tel:(074)');
var objectPolice = [{
    "id" : "police1",
    "x" : "685",
    "y" : "199",
    "icon" : "police.png"
}, {
    "id" : "police2",
    "x" : "685",
    "y" : "45",
    "icon" : "police.png"
}, {
    "id" : "police3",
    "x" : "930",
    "y" : "155",
    "icon" : "police.png"
}, {
    "id" : "police4",
    "x" : "975",
    "y" : "605",
    "icon" : "police.png"
}, {
    "id" : "police5",
    "x" : "705",
    "y" : "355",
    "icon" : "police.png"
}, {
    "id" : "police6",
    "x" : "780",
    "y" : "115",
    "icon" : "police.png"
}, {
    "id" : "police7",
    "x" : "750",
    "y" : "195",
    "icon" : "police.png"
}, {
    "id" : "police8",
    "x" : "870",
    "y" : "690",
    "icon" : "police.png"
}, {
    "id" : "police9",
    "x" : "545",
    "y" : "225",
    "icon" : "police.png"
}, {
    "id" : "police10",
    "x" : "500",
    "y" : "515",
    "icon" : "police2.png"
}];
var objectFire = [{
    "id" : "fire1",
    "x" : "905",
    "y" : "665",
    "icon" : "fire.png"
}, {
    "id" : "fire2",
    "x" : "815",
    "y" : "40",
    "icon" : "fire.png"
}, {
    "id" : "fire3",
    "x" : "250",
    "y" : "125",
    "icon" : "fire.png"
}, {
    "id" : "fire4",
    "x" : "655",
    "y" : "185",
    "icon" : "fire.png"
}];
var arrayOfElements = [{
    "id" : "host1",// ~ slu"
    "x" : "735",
    "y" : "155",
    "icon" : "host.png"
}, {
    "id" : "host2",// ~ notre"
    "x" : "765",
    "y" : "170",
    "icon" : "host.png"
}, {
    "id" : "host3",// ~ bgh"
    "x" : "735",
    "y" : "355",
    "icon" : "host.png"
}, {
    "id" : "host4",// ~ BMC"
    "x" : "735",
    "y" : "335",
    "icon" : "host.png"
}];
function addPolice() {
    var svgDoc = document.getElementById("mymap");
    var svg = svgDoc.contentDocument;
    var svgns = svgDoc.namespaceURI;

    var layer = svg.getElementById("layer");

    for (var i = 0; i < objectPolice.length; i++) {
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
		cc.setAttribute("style", "display: block;");
		cc.setAttribute("class","police");
        layer.appendChild(cc);
    }
}
function addFire() {
    var svgDoc = document.getElementById("mymap");
    var svg = svgDoc.contentDocument;
    var svgns = svgDoc.namespaceURI;

    var layer = svg.getElementById("layer");

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
		cc.setAttribute("style", "display: block;");
		cc.setAttribute("class","firestation");
        cc.setAttribute("id", objectFire[i].id);
        layer.appendChild(cc);
    }
}
function addHost() {
    var svgDoc = document.getElementById("mymap");
    var svg = svgDoc.contentDocument;
    var svgns = svgDoc.namespaceURI;

    var layer = svg.getElementById("layer");

    for (var i = 0; i < arrayOfElements.length; i++) {
        var cc = document.createElementNS("http://www.w3.org/2000/svg", "image");
        var imagesize = 40;
        cc.setAttribute("x", arrayOfElements[i].x);
        cc.setAttribute("y", arrayOfElements[i].y);
        cc.setAttribute("height", imagesize);
        cc.setAttribute("width", imagesize);
        cc.setAttribute("href", arrayOfElements[i].icon);
        cc.setAttribute("onclick", "top.notify(evt)");
        cc.setAttribute("style", "cursor: pointer;");
		cc.setAttribute("style", "display: block;");
		cc.setAttribute("class","hospital");
        cc.setAttribute("id", arrayOfElements[i].id);
        layer.appendChild(cc);
    }
}

function filter(toggle) {
    var svgDoc = document.getElementById("mymap");
    var svg = svgDoc.contentDocument;
    var svgns = svgDoc.namespaceURI;
    var fire = svg.getElementsByClassName("firestation");
	var hosp = svg.getElementsByClassName("hospital");
	var pol = svg.getElementsByClassName("police");
	switch(toggle) {
		case "firestation" : 
			showElement(fire);
			hideElement(hosp);
			hideElement(pol);
		break;
		case "police" : 
			showElement(pol);
			hideElement(hosp);
			hideElement(fire);
		break;
		case "hospital" : 
			showElement(hosp);
			hideElement(fire);
			hideElement(pol);
		break;
	}
	console.log(toggle);
}

function showElement(thisisarray) {
	for(var c = 0; c < thisisarray.length; c++) {
		thisisarray[c].style.display = "block";
	}
}

function hideElement(thisisarray) {
	for(var c = 0; c < thisisarray.length; c++) {
		thisisarray[c].style.display = "none";
	}
}
