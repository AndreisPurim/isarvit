  
import React, { Component } from "react";
import DynamicForm from "./DynamicForms.js";
import Validator from './validators.js';
import QRCode from "react-qr-code";

import { PDFViewer, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const YAML = require('json-to-pretty-yaml');


// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});


const Console = prop => (
  console[Object.keys(prop)[0]](...Object.values(prop))
  ,null // ➜ React components must return something 
)

export default class App extends Component {
  state = {
    data: [],
    current: {}
  };

  onSubmit = model => {
    let data = [];
    if (model.id) {
      data = this.state.data.filter(d => {
        return d.id != model.id;
      });
    } else {
      model.id = +new Date();
      data = this.state.data.slice();
    }
    
    this.setState({
      data: [model, ...data],
    });
  };

  onEdit = id => {
    let record = this.state.data.find(d => {
      return d.id == id;
    });
    //alert(JSON.stringify(record));
    this.setState({
      current: record
    });
  };

  render() {
    return (
      <div className="App">
        <DynamicForm
          key={this.state.current.id}
          className="form"
          title="Forms (GoUpile Simulation)"
          defaultValues={this.state.current}
          validators={[
            {
              key: "name", validations: [
                {
                  "validator": Validator.checkName,
                  "message": "Name should start with alphabets"
                },
                {
                  "validator": Validator.specialName,
                  "message": "Name should not contain the word superman"
                },
              ]
            },
            {
              key: "rating", validations: [
                {
                  "validator": Validator.validateRating,
                  "message": "Rating should be between 0 and 5"
                },
              ]
            }
          ]}
          model={[
            { key: "name", label: "Name", props: { required: true } },
            { key: "age", label: "Age", type: "number" },
            {
              key: "rating",
              label: "Rating",
              type: "number",
              props: { min: 0, max: 5 }
            },
            {
              key: "gender",
              label: "Gender",
              type: "radio",
              options: [
                { key: "male", label: "Male", name: "gender", value: "male" },
                {
                  key: "female",
                  label: "Female",
                  name: "gender",
                  value: "female"
                }
              ]
            },
            { key: "qualification", label: "Qualification" },
            {
              key: "city",
              label: "City",
              type: "select",
              value: "Mumbai",
              options: [
                { key: "mumbai", label: "Mumbai", value: "Mumbai" },
                { key: "bangalore", label: "Bangalore", value: "Bangalore" },
                { key: "kerala", label: "Kerala", value: "Kerala" }
              ]
            },
            {
              key: "skills",
              label: "Skills",
              type: "checkbox",
              options: [
                { key: "reactjs", label: "ReactJS", value: "reactjs" },
                { key: "angular", label: "Angular", value: "angular" },
                { key: "vuejs", label: "VueJS", value: "vuejs" }
              ]
            }
          ]}
          onSubmit={model => {
            this.onSubmit(model);
          }}
        />
        <div className="centerText">Resulting YAML:</div>
        <pre style={{paddingLeft: "22rem"}}>{YAML.stringify(this.state.data[0])}</pre>
        <div className="centerText">Resulting QRCode:</div>
        <div className="centerText" >
        <QRCode value={YAML.stringify(this.state.data[0])}/>
        </div>
        <div className="centerText">Resulting PDF (simulation):</div>
        <div style={{ textAlign: "center"}}>
            <PDFViewer>
                <Document>
                    <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text>Mr/Mrs [NAME] [SURNAME]</Text>
                        <Text>Date of birth: [DATE]</Text>
                        <Text>...</Text>
                        <Text>Exam: [EXAM]</Text>
                        <Text>...</Text>
                        <Text>Condition:</Text>
                        <Text>Pain in the [WHERE]</Text>
                        <Text>...</Text>
                    </View>
                    </Page>
                </Document>
            </PDFViewer>
        </div>
      </div>
    );
  }
}