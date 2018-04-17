function notify(evt){
    openPopUp(evt.target.id);
}
function loadJSON(callback, fileloc) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', fileloc, true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == 200) {
            callback(xobj.responseText);
        }
    }
    xobj.send(null);
}
//window.open('tel:(074)');.

function addPolice() {
    loadJSON(function(response) {
        police(response);
    }, 'objectPolice.json');
    function police(jsoncall) {
        var objectPolice = JSON.parse(jsoncall);
        var svgDoc = document.getElementById("mymap");
        var svg = svgDoc.contentDocument;
        var svgns = svgDoc.namespaceURI;
        var layer = svg.getElementById("layer");
        for (var i = 0; i < objectPolice.length; i++) {
            var elemDiv = document.createElement('div');
            elemDiv.className = "modal";
            elemDiv.id = objectPolice[i].id + "modal";
            slideshowContent = '<p>Address: ' + objectPolice[i].details[0].adress + '<br>Tel No: ' + objectPolice[i].details[0].phone + '</p>';
            elemDiv.innerHTML = '<div class="modal-content">' +
                                '<h2>' + objectPolice[i].name + '</h2>' +
                                //'<img class ="view" src="' + objectPolice[i].image + '">' +
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
}
function addFireStations() {
    loadJSON(function(response) {
        firestation(response);
    }, 'objectFireStation.json');
    function firestation(jsoncall) {
        var objectFire = JSON.parse(jsoncall);
        var svgDoc = document.getElementById("mymap");
        var svg = svgDoc.contentDocument;
        var svgns = svgDoc.namespaceURI;
        var layer = svg.getElementById("layer");

        for (var i = 0; i < objectFire.length; i++) {
            var elemDiv = document.createElement('div');
            elemDiv.className = "modal";
            elemDiv.id = objectFire[i].id + "modal";
            slideshowContent = '<p>Address: ' + objectFire[i].details[0].adress + '<br>Tel No: ' + objectFire[i].details[0].phone + '</p>';
            elemDiv.innerHTML = '<div class="modal-content">' +
                                '<h2>' + objectFire[i].name + '</h2>' + 
                                //'<img class ="view" src="' + objectFire[i].image + '">' +
                                '<div class="slideshow">' +
                                    slideshowContent +
                                '</div>'+
                                '<div id="callnow"><a href="tel:'+ objectFire[i].details[0].phone +'" class="call">Call Now!</a></div>'
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
}
function addHospitals() {
    loadJSON(function(response) {
        createHospital(response);
    }, 'objectHospital.json');
    function createHospital(jsoncall) {
        var objectHospital = JSON.parse(jsoncall);
        var svgDoc = document.getElementById("mymap");
        var svg = svgDoc.contentDocument;
        var svgns = svgDoc.namespaceURI;
        var layer = svg.getElementById("layer");

        for (var i = 0; i < objectHospital.length; i++) {
            var elemDiv = document.createElement('div');
            elemDiv.className = "modal";
            elemDiv.id = objectHospital[i].id + "modal";
            slideshowContent = '<p>Address: ' + objectHospital[i].details[0].adress + '<br>Tel No: ' + objectHospital[i].details[0].phone + '</p>';
            elemDiv.innerHTML = '<div class="modal-content">' +
                                '<h2>' + objectHospital[i].name + '</h2>' +
                                //'<img class ="view" src="' + objectHospital[i].image + '">' +
                                '<div class="slideshow">' +
                                    slideshowContent +
                                '</div>'+
                                '<div id="callnow"><a href="tel:'+ objectHospital[i].details[0].phone +'" class="call">Call Now!</a></div>'
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
}

function showPolice() {
    loadJSON(function(response) {
        police(response);
    }, 'objectPolice.json');
    function police(jsoncall) {
        var objectPolice = JSON.parse(jsoncall);
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
}
function showFireStation() {
    loadJSON(function(response) {
        firestation(response);
    }, 'objectFireStation.json');
    function firestation(jsoncall) {
        var objectFire = JSON.parse(jsoncall);
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
}

function showHospitals() {
    loadJSON(function(response) {
        createHospital(response);
    }, 'objectHospital.json');
    function createHospital(jsoncall) {
        var objectHospital = JSON.parse(jsoncall);
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
