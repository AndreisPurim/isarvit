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

    svgDiv.innerHTML = "<br><svg width=\"100\" height=\"100\" id=\"img\"><circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"green\" stroke-width=\"4\" fill=\"yellow\"/></svg><br><br>"
    pdfDiv.style.visibility = "visible";
    btnPDF.style.visibility = "visible";
}

function generatePDF() {
    html2pdf().from(pdfDiv).save();
}
  