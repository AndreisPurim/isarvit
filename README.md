# ISARVIT

**Basics:** I made this basic HTML + js so everybody can work without needing to rely heavily on React, Node, etc...

To run this website, you can pretty much do it in many ways: placing the files on your `www`  folder if you're using WAMP, or run `python3 -m http.server`, etc...

Everything you change in the main will appear at [https://andreispurim.github.io/isarvit/](https://andreispurim.github.io/isarvit/) after a few minutes.

**Current Status:** We need to finish the basic prototype with these basic functionalities:
- **GoUpile Pôle:** While we wait for Goupile, make a basic forms directly in the HTML (as in the example) with all these [questions](https://github.com/arthurldp/medical_imaging_report/blob/master/ICIPEMIR_urolithiasis.goupile.js), using their names, types and ids. For examples, check the parts already made with `<label>` and `<input>` - in the end, it should be like the SCHEMA [here](https://github.com/arthurldp/medical_imaging_report/blob/master/ICIPEMIR_urolithiasis.schema.json). In the meantime, contact goUpile to see how the hell we are going to use their system. 
-  **Image Pôle:** The JSON and YAML should already work and already generate the QRCode. What needs to be done is an `<svg>` model based on pages 40-43 of the [thesis](https://drive.google.com/file/d/1I8Mg3GRDQOg-nG973263mFj2iZOjiaCP/view?usp=sharing)
- **CR Pôle:** Based on these [answers](https://github.com/arthurldp/medical_imaging_report/blob/master/ICIPEMIR_urolithiasis.instance.yaml) of an Exam, try to create an automatic CR based on page 61 of the [thesis](https://drive.google.com/file/d/1I8Mg3GRDQOg-nG973263mFj2iZOjiaCP/view?usp=sharing). To format the data in the PDF, you need to create html tags inside the `<div  id="toPDF">` and use CSS to style them. Everything there will be printed as-is.

Talk to Andreis if needed to.
