(this.webpackJsonpisarvit=this.webpackJsonpisarvit||[]).push([[0],{236:function(e,t,a){},248:function(e,t){},250:function(e,t){},292:function(e,t){},293:function(e,t){},430:function(e,t,a){"use strict";a.r(t);var n=a(9),l=a(17),i=a.n(l),r=a(144),c=a.n(r),s=(a(236),a(107)),o=a(108),u=a(112),d=a(111),b=a(74),j=a(43),m=a(72),h=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).state={},r.validate=function(){var e={},t=r.props.validators;return console.log(t),t.forEach((function(t){console.log(t);var a=r.state[t.key];console.log("validating ".concat(t.key)),t.validations.forEach((function(n){n.validator(a)||(void 0==e[t.key]&&(e[t.key]=[]),e[t.key].push(n.message))}))})),console.log("ERRORS: ",e),e},r.onSubmit=function(e){e.preventDefault();var t=r.validate();if(0!==Object.entries(t).length)return alert(JSON.stringify(t)),!1;r.props.onSubmit&&r.props.onSubmit(r.state)},r.onChange=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"single";if("single"===a)r.setState(Object(m.a)({},t,e.target.value),(function(){}));else{var n=!!r.state[t]&&r.state[t].find((function(t){return t===e.target.value}));if(n){var l=r.state[t].filter((function(e){return e!==n}));r.setState(Object(m.a)({},t,l))}else{console.log("found",t,r.state[t]);var i=r.state[t]?Object(b.a)(r.state[t]):[];r.setState(Object(m.a)({},t,[e.target.value].concat(Object(b.a)(i))))}}},r.renderForm=function(){var e=r.props.model;r.props.defaultValues;return e.map((function(e){var t=e.key,a=e.type||"text",c=e.props||{},s=e.name,o=e.value,u=t;o=r.state[u]||"";var d=Object(l.createElement)("input",Object(j.a)(Object(j.a)({},c),{},{className:"form-input",type:a,key:t,name:s,value:o,onChange:function(e){r.onChange(e,u)}}));return"radio"==a&&(d=e.options.map((function(e){var t=e.value==o;return Object(n.jsxs)(i.a.Fragment,{children:[Object(l.createElement)("input",Object(j.a)(Object(j.a)({},c),{},{className:"form-input",type:a,key:e.key,name:e.name,checked:t,value:e.value,onChange:function(t){r.onChange(t,e.name)}})),Object(n.jsx)("label",{children:e.label},"ll"+e.key)]},"fr"+e.key)})),d=Object(n.jsx)("div",{className:"form-group-radio",children:d})),"select"==a&&(d=e.options.map((function(e){e.value;return Object(l.createElement)("option",Object(j.a)(Object(j.a)({},c),{},{className:"form-input",key:e.key,value:e.value}),e.value)})),d=Object(n.jsx)("select",{value:o,onChange:function(t){r.onChange(t,e.key)},children:d})),"checkbox"==a&&(d=e.options.map((function(t){var s=!1;return o&&o.length>0&&(s=o.indexOf(t.value)>-1),Object(n.jsxs)(i.a.Fragment,{children:[Object(l.createElement)("input",Object(j.a)(Object(j.a)({},c),{},{className:"form-input",type:a,key:t.key,name:t.name,checked:s,value:t.value,onChange:function(t){r.onChange(t,e.key,"multiple")}})),Object(n.jsx)("label",{children:t.label},"ll"+t.key)]},"cfr"+t.key)})),d=Object(n.jsx)("div",{className:"form-group-checkbox",children:d})),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{className:"form-label",htmlFor:t,children:e.label},"l"+t),d]},"g"+t)}))},r}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.title||"Dynamic Form";return Object(n.jsxs)("div",{className:this.props.className,children:[Object(n.jsx)("h3",{className:"form-title",children:t}),Object(n.jsxs)("form",{className:"dynamic-form",onSubmit:function(t){e.onSubmit(t)},children:[this.renderForm(),Object(n.jsx)("div",{className:"form-actions",children:Object(n.jsx)("button",{type:"submit",children:"submit"})})]})]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return console.log("gds:p:s",e.defaultValues,t),e.defaultValues&&e.defaultValues.id!==t.id?Object(j.a)({},e.defaultValues):(console.log("no state change"),null)}}]),a}(i.a.Component),f={checkName:function(e){return/^[A-Z]/i.test(e)},specialName:function(e){return-1==e.indexOf("superman")},validateRating:function(e){var t=Number(e);return t>0&&t<=5}},v=a(218),p=a.n(v),O=a(28),g=a(427),y=O.d.create({page:{flexDirection:"row",backgroundColor:"#E4E4E4"},section:{margin:10,padding:10,flexGrow:1}}),x=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={data:[],current:{}},e.onSubmit=function(t){var a=[];t.id?a=e.state.data.filter((function(e){return e.id!=t.id})):(t.id=+new Date,a=e.state.data.slice()),e.setState({data:[t].concat(Object(b.a)(a))})},e.onEdit=function(t){var a=e.state.data.find((function(e){return e.id==t}));e.setState({current:a})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(h,{className:"form",title:"Forms (GoUpile Simulation)",defaultValues:this.state.current,validators:[{key:"name",validations:[{validator:f.checkName,message:"Name should start with alphabets"},{validator:f.specialName,message:"Name should not contain the word superman"}]},{key:"rating",validations:[{validator:f.validateRating,message:"Rating should be between 0 and 5"}]}],model:[{key:"name",label:"Name",props:{required:!0}},{key:"age",label:"Age",type:"number"},{key:"rating",label:"Rating",type:"number",props:{min:0,max:5}},{key:"gender",label:"Gender",type:"radio",options:[{key:"male",label:"Male",name:"gender",value:"male"},{key:"female",label:"Female",name:"gender",value:"female"}]},{key:"qualification",label:"Qualification"},{key:"city",label:"City",type:"select",value:"Mumbai",options:[{key:"mumbai",label:"Mumbai",value:"Mumbai"},{key:"bangalore",label:"Bangalore",value:"Bangalore"},{key:"kerala",label:"Kerala",value:"Kerala"}]},{key:"skills",label:"Skills",type:"checkbox",options:[{key:"reactjs",label:"ReactJS",value:"reactjs"},{key:"angular",label:"Angular",value:"angular"},{key:"vuejs",label:"VueJS",value:"vuejs"}]}],onSubmit:function(t){e.onSubmit(t)}},this.state.current.id),Object(n.jsx)("div",{className:"centerText",children:"Resulting YAML:"}),Object(n.jsx)("pre",{style:{paddingLeft:"22rem"},children:g.stringify(this.state.data[0])}),Object(n.jsx)("div",{className:"centerText",children:"Resulting QRCode:"}),Object(n.jsx)("div",{className:"centerText",children:Object(n.jsx)(p.a,{value:g.stringify(this.state.data[0])})}),Object(n.jsx)("div",{className:"centerText",children:"Resulting PDF (simulation):"}),Object(n.jsx)("div",{style:{textAlign:"center"},children:Object(n.jsx)(O.b,{children:Object(n.jsx)(O.a,{children:Object(n.jsx)(O.c,{size:"A4",style:y.page,children:Object(n.jsxs)(O.f,{style:y.section,children:[Object(n.jsx)(O.e,{children:"Mr/Mrs [NAME] [SURNAME]"}),Object(n.jsx)(O.e,{children:"Date of birth: [DATE]"}),Object(n.jsx)(O.e,{children:"..."}),Object(n.jsx)(O.e,{children:"Exam: [EXAM]"}),Object(n.jsx)(O.e,{children:"..."}),Object(n.jsx)(O.e,{children:"Condition:"}),Object(n.jsx)(O.e,{children:"Pain in the [WHERE]"}),Object(n.jsx)(O.e,{children:"..."})]})})})})})]})}}]),a}(l.Component);c.a.render(Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{style:{textAlign:"center"},children:[Object(n.jsx)("h1",{children:"ISARVIT"}),Object(n.jsx)("p",{children:"Version 0.0.2 26/12/2020"}),Object(n.jsxs)("p",{children:["Automatic Medical Diagnosis Generator. Created by the \xc9cole Centralle de Lille. ",Object(n.jsx)("br",{})," Read the ",Object(n.jsx)("a",{href:"url",children:"Documentation"})," or explore the first ",Object(n.jsx)("a",{href:"url",children:"prototype."})]})]}),Object(n.jsx)(x,{})]}),document.getElementById("root"))}},[[430,1,2]]]);
//# sourceMappingURL=main.728d91f3.chunk.js.map