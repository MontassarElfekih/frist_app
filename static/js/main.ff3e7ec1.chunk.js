(this.webpackJsonpfrist_app=this.webpackJsonpfrist_app||[]).push([[0],{21:function(e,t,s){},32:function(e,t){},35:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(1),l=s.n(n),i=s(10),a=s.n(i),r=(s(21),s(7)),o=s(8),j=s(12),u=s(11),h=(s(23),function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("h1",{children:"Hello React"}),"Cras facilisis urna ornare ex volutpat, et convallis erat elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est, eget rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis a turpis sed lacus dapibus elementum sed eu lectus."]})}}]),s}(n.Component)),b=s(16),m=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).state={name:"",prenom:"",adresse:"",majeur:!1,situation:""},c.handleSubmit=c.handleSubmit.bind(Object(b.a)(c)),c.handleInputChange=c.handleInputChange.bind(Object(b.a)(c)),c}return Object(o.a)(s,[{key:"handleSubmit",value:function(e){console.log(this.state.value);var t=!0===this.state.majeur?" Majeur":" Mineur";alert("Le nom a \xe9t\xe9 soumis : "+this.state.name+" "+this.state.prenom+" "+t+" "+this.state.situation),e.preventDefault()}},{key:"handleInputChange",value:function(e){var t=e.target,s="checkbox"===t.type?t.checked:t.value,c={};c[t.name]=s,this.setState(c),console.log(this.state)}},{key:"render",value:function(){return Object(c.jsx)("div",{className:"content",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Register"}),Object(c.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(c.jsxs)("label",{children:["Nom :",Object(c.jsx)("input",{type:"text",name:"name",onChange:this.handleInputChange})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("label",{children:["Prenom :",Object(c.jsx)("input",{type:"text",name:"prenom",onChange:this.handleInputChange})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("label",{children:["Adresse :",Object(c.jsx)("input",{type:"text",name:"adresse",onChange:this.handleInputChange})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("label",{children:["Majeur +18 :",Object(c.jsx)("input",{name:"majeur",type:"checkbox",onChange:this.handleInputChange})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("label",{children:["Vous etes :",Object(c.jsxs)("select",{name:"situation",onChange:this.handleInputChange,children:[Object(c.jsx)("option",{value:""}),Object(c.jsx)("option",{value:"Celebataire",children:"Celebataire"}),Object(c.jsx)("option",{value:"en couple",children:"En couple"}),Object(c.jsx)("option",{value:"Divorc\xe9",children:"Divorc\xe9"})]})]}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{type:"submit",class:"btn-primary",style:{marginLeft:"20 em"},children:"Envoyer "})]}),Object(c.jsxs)("h3",{children:["Vous etes ",this.state.name," ",this.state.prenom]}),Object(c.jsxs)("h4",{children:["Vous etes",!0===this.state.majeur?" Majeur":" Mineur"," et ",this.state.situation]})]})})}}]),s}(l.a.Component),d=(s(32),s(26)),x=function(e){var t=e.text;return Object(c.jsx)("div",{children:t})},O=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(c.jsx)("div",{style:{height:"100vh",width:"100%"},children:Object(c.jsx)(d.a,{bootstrapURLKeys:{key:"AIzaSyDGArUEBa5ns09IA7nt7jP-xfNIUkToFts"},defaultCenter:this.props.center,defaultZoom:this.props.zoom,children:Object(c.jsx)(x,{lat:36.8475636463751,lng:10.15267809954804,text:"My Marker"})})})}}]),s}(n.Component);O.defaultProps={center:{lat:59.95,lng:30.33},zoom:11};var p=O,g=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(c.jsxs)("div",{class:"container",children:[Object(c.jsx)("h1",{class:"font-weight-light text-center text-lg-left mt-4 mb-0",children:"Gallerie"}),Object(c.jsx)("hr",{class:"mt-2 mb-5"}),Object(c.jsxs)("div",{class:"row text-center text-lg-left",children:[Object(c.jsx)("div",{class:"col-lg-3 col-md-4 col-6",children:Object(c.jsx)("img",{class:"img-fluid img-thumbnail",src:"https://source.unsplash.com/pWkk7iiCoDM/400x300",alt:""})}),Object(c.jsx)("div",{class:"col-lg-3 col-md-4 col-6",children:Object(c.jsx)("img",{class:"img-fluid img-thumbnail",src:"https://source.unsplash.com/aob0ukAYfuI/400x300",alt:""})}),Object(c.jsx)("div",{class:"col-lg-3 col-md-4 col-6",children:Object(c.jsx)("img",{class:"img-fluid img-thumbnail",src:"https://source.unsplash.com/EUfxH-pze7s/400x300",alt:""})}),Object(c.jsx)("div",{class:"col-lg-3 col-md-4 col-6",children:Object(c.jsx)("img",{class:"img-fluid img-thumbnail",src:"https://source.unsplash.com/M185_qYH8vg/400x300",alt:""})}),Object(c.jsx)("div",{class:"col-lg-3 col-md-4 col-6",children:Object(c.jsx)("img",{class:"img-fluid img-thumbnail",src:"https://source.unsplash.com/sesveuG_rNo/400x300",alt:""})}),Object(c.jsx)("div",{class:"col-lg-3 col-md-4 col-6",children:Object(c.jsx)("img",{class:"img-fluid img-thumbnail",src:"https://source.unsplash.com/AvhMzHwiE_0/400x300",alt:""})}),Object(c.jsx)("div",{class:"col-lg-3 col-md-4 col-6",children:Object(c.jsx)("img",{class:"img-fluid img-thumbnail",src:"https://source.unsplash.com/2gYsZUmockw/400x300",alt:""})}),Object(c.jsx)("div",{class:"col-lg-3 col-md-4 col-6",children:Object(c.jsx)("img",{class:"img-fluid img-thumbnail",src:"https://source.unsplash.com/EMSDtjVHdQ8/400x300",alt:""})}),Object(c.jsx)("div",{class:"col-lg-3 col-md-4 col-6",children:Object(c.jsx)("img",{class:"img-fluid img-thumbnail",src:"https://source.unsplash.com/8mUEy0ABdNE/400x300",alt:""})}),Object(c.jsx)("div",{class:"col-lg-3 col-md-4 col-6",children:Object(c.jsx)("img",{class:"img-fluid img-thumbnail",src:"https://source.unsplash.com/G9Rfc1qccH4/400x300",alt:""})}),Object(c.jsx)("div",{class:"col-lg-3 col-md-4 col-6",children:Object(c.jsx)("img",{class:"img-fluid img-thumbnail",src:"https://source.unsplash.com/aJeH0KcFkuc/400x300",alt:""})}),Object(c.jsx)("div",{class:"col-lg-3 col-md-4 col-6",children:Object(c.jsx)("img",{class:"img-fluid img-thumbnail",src:"https://source.unsplash.com/p2TQ-3Bh3Oo/400x300",alt:""})})]})]})}}]),s}(n.Component),v=(s(35),s(36),s(15)),f=s(3),C=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(c.jsxs)(v.a,{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Simple SPA"}),Object(c.jsxs)("ul",{className:"header",children:[Object(c.jsx)("li",{children:Object(c.jsx)(v.b,{exact:!0,to:"/",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(v.b,{to:"/Formulaire",children:"Formulaire"})}),Object(c.jsx)("li",{children:Object(c.jsx)(v.b,{to:"/contact",children:"Contact"})}),Object(c.jsx)("li",{children:Object(c.jsx)(v.b,{to:"/gallerie",children:"Gallerie"})})]})]}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)(f.a,{exact:!0,path:"/",component:h}),Object(c.jsx)(f.a,{path:"/contact",component:p}),Object(c.jsx)(f.a,{path:"/Formulaire",component:m}),Object(c.jsx)(f.a,{path:"/gallerie",component:g})]})]})}}]),s}(l.a.Component),y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,42)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,l=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),l(e),i(e)}))};a.a.render(Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root")),y()}},[[40,1,2]]]);
//# sourceMappingURL=main.ff3e7ec1.chunk.js.map