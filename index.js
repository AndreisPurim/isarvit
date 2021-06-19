var yamlDiv = null;
var jsonDiv = null;
var svgDiv = null;
var systemDiv = null;
var qrcodeDiv = null;
var currentsystem = null;

function init() {
    yamlDiv = document.getElementById("yaml");
    jsonDiv = document.getElementById("json");
    svgDiv = document.getElementById("svgDiv");
    pdfDiv = document.getElementById("toPDF");
    btnPDF = document.getElementById("btnPDF");
    systemDiv = document.getElementById("systemDiv");
    qrcodeDiv = document.getElementById("qrcode");
}

function handleSubmit(){
    const data = new FormData(document.forms.form);
    const value = Object.fromEntries(data.entries());
    var JSONdata = value;
    var YAMLdata = json2yaml(JSONdata);
    jsonDiv.innerHTML = JSON.stringify(JSONdata)
    yamlDiv.innerHTML = YAMLdata
    qrcodeDiv.innerHTML = "";
    new QRCode(qrcodeDiv, {text: YAMLdata, correctLevel : QRCode.CorrectLevel.L});
    if((value.system !== "no_system")||(value.system !== currentsystem)){
        systemDiv.innerHTML = ""
        var currentsystem = value.system;
        var system = getSystem(value.system);
        if(system){
            var systemName = document.createElement("p");
            systemName.innerHTML = system.name;
            systemDiv.appendChild(systemName)
            for(var i=0; i<system.organs.length; i++){
                var newOrgan = document.createElement("label");
                newOrgan.innerHTML = system.organs[i].label + ":"
                systemDiv.appendChild(newOrgan)
                var newSelect = document.createElement("select");
                newSelect.setAttribute("name", system.organs[i].id);
                newSelect.setAttribute("id", system.organs[i].id);
                for(var j=0; j<system.organs[i].states.length; j++){
                    var opt = document.createElement("option");
                    opt.setAttribute("value", system.organs[i].states[j].stateid);
                    if(JSONdata[system.organs[i].id] === system.organs[i].states[j].stateid){
                        opt.selected = true;
                    }
                    opt.text = system.organs[i].states[j].state;
                    newSelect.appendChild(opt);
                }
                systemDiv.appendChild(newSelect);
                systemDiv.appendChild(document.createElement("br"));
            }
        }
    }
    if(value.system !== "no_system"){
        svgDiv.innerHTML = ""
        for(var i=0; i<system.organs.length; i++){
            for(var j=0; j<system.organs[i].states.length; j++){
                if(JSONdata[system.organs[i].id] === system.organs[i].states[j].stateid)
                svgDiv.innerHTML+= system.organs[i].states[j].svg;
            }
        }
    }
}

function generatePDF() {
    var opt = {margin: 1, filename: 'CR_Isarvit.pdf'};
    html2pdf().set(opt).from(pdfDiv).save();
}
  