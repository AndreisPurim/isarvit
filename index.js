var startedDiv = null;
var yamlDiv = null;
var jsonDiv = null;
var svgDiv = null;

function init() {
	startedDiv = document.getElementById("started");
    yamlDiv = document.getElementById("yaml");
    jsonDiv = document.getElementById("json");
    svgDiv = document.getElementById("svg");
    pdfDiv = document.getElementById("toPDF");
    btnPDF = document.getElementById("btnPDF");
    startedDiv.innerHTML = "Loaded";
}

function handleSubmit(event) {
    event.preventDefault();
  
    const data = new FormData(event.target);
  
   const value = Object.fromEntries(data.entries());
  
    var JSONdata = value;
    var YAMLdata = json2yaml(JSONdata);

    jsonDiv.innerHTML = JSON.stringify(JSONdata)
    yamlDiv.innerHTML = YAMLdata
    document.getElementById("qrcode").innerHTML = "";
    new QRCode(document.getElementById("qrcode"), YAMLdata);

    svgDiv.innerHTML = json_alo[value["image"]];
    pdfDiv.style.visibility = "visible";
    btnPDF.style.visibility = "visible";
}

json_alo = {
    "Image1": "<image xlink:href=\"images/2.PNG\"/>",
    "Image2": "<image width=\"300\" height=\"300\" xlink:href=\"images/test1.svg\"/>",
    "Image3": "<image xlink:href=\"images/3.PNG\"/>",
    "Image4": "<rect width=\"300\" height=\"300\" fill=\"blue\"/>",
}

function clicked(evt){
    var e = evt.target;
    var dim = e.getBoundingClientRect();
    var x = evt.clientX - dim.left;
    var y = evt.clientY - dim.top;
    svgDiv.innerHTML += "<circle cx=\""+x+"\" cy=\""+y+"\" r=\"10\" stroke=\"black\" stroke-width=\"3\" fill=\"red\" />"
}  

function generatePDF() {
    var opt = {
        margin:       1,
        filename:     'CR_Isarvit.pdf',
      };
    html2pdf().set(opt).from(pdfDiv).save();
}
  