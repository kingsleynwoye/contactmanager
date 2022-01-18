(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(32),s=a.n(c),o=a(4),i=a(5),u=a(7),l=a(6),j=a(15),b=a(2),d=a(8),p=a.n(d),m=a(13),h=a(35),A=a(17),E=a(14),O=a.n(E),x=a(0),f=r.a.createContext(),v=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(A.a)(Object(A.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});case"ADD_CONTACT":return Object(A.a)(Object(A.a)({},e),{},{contacts:[t.payload].concat(Object(h.a)(e.contacts))});case"UPDATE_CONTACT":return Object(A.a)(Object(A.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}},R=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],dispatch:function(t){return e.setState((function(e){return v(e,t)}))}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(x.jsx)(f.Provider,{value:this.state,children:this.props.children})}}]),a}(n.Component),y=f.Consumer,N=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showContactInfo:!1},e.onDeleteClick=function(){var e=Object(m.a)(p.a.mark((function e(t,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete("https://jsonplaceholder.typicode.com/users/$\n        {id}");case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,r=t.email,c=t.phone,s=this.state.showContactInfo;return Object(x.jsx)(y,{children:function(t){var o=t.dispatch;return Object(x.jsxs)("div",{className:"card card-body mb-3",children:[Object(x.jsxs)("h4",{children:[n," ",Object(x.jsx)("i",{onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:"fas fa-sort-down",style:{cursor:"pointer"}}),Object(x.jsx)("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,a,o)}),Object(x.jsx)(j.b,{to:"contact/edit/".concat(a),children:Object(x.jsx)("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}})})]}),s?Object(x.jsxs)("ul",{className:"list-group",children:[Object(x.jsxs)("li",{className:"list-group-item",children:["Email: ",r]}),Object(x.jsxs)("li",{className:"list-group-item",children:["phone: ",c]})]}):null]})}})}}]),a}(n.Component),S=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(x.jsx)(y,{children:function(e){var t=e.contacts;return Object(x.jsxs)(r.a.Fragment,{children:[Object(x.jsxs)("h1",{className:"display-4 mb-2",children:[Object(x.jsx)("span",{className:"text-danger",children:"Contact"})," List"]}),t.map((function(e){return Object(x.jsx)(N,{contact:e},e.id)}))]})}})}}]),a}(n.Component),g=a(34),C=a.n(g),Q=function(e){var t=e.label,a=e.name,n=e.value,r=e.placeholder,c=e.type,s=e.onChange,o=e.error;return Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:a,children:t}),Object(x.jsx)("input",{type:c,name:a,className:C()("form-control form-control-lg",{"is-invalid":o}),placeholder:r,value:n,onChange:s}),o&&Object(x.jsx)("div",{className:"invalid-feedback",children:o})]})};Q.defaultprop={type:"text"};var w=Q,k=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onSubmit=function(){var t=Object(m.a)(p.a.mark((function t(a,n){var r,c,s,o,i,u;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,s=r.email,o=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==s){t.next=8;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 8:if(""!==o){t.next=11;break}return e.setState({errors:{phone:"Phone is required"}}),t.abrupt("return");case 11:return i={name:c,email:s,phone:o},t.next=14,O.a.post("https://jsonplaceholder.typicode.com/users",i);case 14:u=t.sent,a({type:"ADD_CONTACT",payload:u.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 18:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onNameChange=function(t){return e.setState({name:t.target.value})},e.onEmailChange=function(t){return e.setState({email:t.target.value})},e.onPhoneChange=function(t){return e.setState({phone:t.target.value})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,r=t.phone,c=t.errors;return Object(x.jsx)(y,{children:function(t){var s=t.dispatch;return Object(x.jsxs)("div",{className:"card mb-3",children:[Object(x.jsx)("div",{className:"card-header",children:"Add Contact"}),Object(x.jsx)("div",{className:"card-body",children:Object(x.jsxs)("form",{onSubmit:e.onSubmit.bind(e,s),children:[Object(x.jsx)(w,{label:"Name",name:"name",placeholder:"Enter Name",value:a,onChange:e.onNameChange,error:c.name}),Object(x.jsx)(w,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:n,onChange:e.onEmailChange,error:c.email}),Object(x.jsx)(w,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:r,onChange:e.onPhoneChange,error:c.phone}),Object(x.jsx)("input",{type:"submit",value:"Add Contact",className:"btn btn-light"})]})})]})}})}}]),a}(n.Component),z=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onSubmit=function(){var t=Object(m.a)(p.a.mark((function t(a,n){var r,c,s,o,i,u,l;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,s=r.email,o=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==s){t.next=8;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 8:if(""!==o){t.next=11;break}return e.setState({errors:{phone:"Phone is required"}}),t.abrupt("return");case 11:return i={name:c,email:s,phone:o},u=e.props.match.params.id,t.next=15,O.a.put("https://jsonplaceholder.typicode.com/users/".concat(u),i);case 15:l=t.sent,a({type:"UPDATE_CONTACT",payload:l.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 19:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onNameChange=function(t){return e.setState({name:t.target.value})},e.onEmailChange=function(t){return e.setState({email:t.target.value})},e.onPhoneChange=function(t){return e.setState({phone:t.target.value})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(p.a.mark((function e(){var t,a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,O.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,r=t.phone,c=t.errors;return Object(x.jsx)(y,{children:function(t){var s=t.dispatch;return Object(x.jsxs)("div",{className:"card mb-3",children:[Object(x.jsx)("div",{className:"card-header",children:"Edit Contact"}),Object(x.jsx)("div",{className:"card-body",children:Object(x.jsxs)("form",{onSubmit:e.onSubmit.bind(e,s),children:[Object(x.jsx)(w,{label:"Name",name:"name",placeholder:"Enter Name",value:a,onChange:e.onNameChange,error:c.name}),Object(x.jsx)(w,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:n,onChange:e.onEmailChange,error:c.email}),Object(x.jsx)(w,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:r,onChange:e.onPhoneChange,error:c.phone}),Object(x.jsx)("input",{type:"submit",value:"Update Contact",className:"btn btn-light"})]})})]})}})}}]),a}(n.Component),W=function(e){var t=e.branding;return Object(x.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("a",{href:"/",className:"navbar-brand",children:t}),Object(x.jsx)("div",{children:Object(x.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsxs)(j.b,{to:"/",className:"nav-link",children:[Object(x.jsx)("i",{className:"fas fa-home"}),"Home"]})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsxs)(j.b,{to:"/contact/add",className:"nav-link",children:[Object(x.jsx)("i",{className:"fas fa-plus"}),"Add"]})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsxs)(j.b,{to:"/about",className:"nav-link",children:[Object(x.jsx)("i",{className:"fas fa-question"}),"About"]})})]})})]})})};W.defaultProps={branding:"My App"};var I=W,L=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{className:"display-4",children:"About Contact Manager"}),Object(x.jsx)("p",{className:"lead",children:"Simple app to manage contacts"}),Object(x.jsx)("p",{className:"text-secondary",children:"Version 5.1.2"})]})},B=function(){return Object(x.jsxs)("div",{children:[Object(x.jsxs)("h1",{className:"display-4",children:[Object(x.jsx)("span",{className:"text-danger",children:"404"}),"Page not Found"]}),Object(x.jsx)("p",{className:"lead",children:"Sorry,that page does not exist"}),Object(x.jsx)("img",{src:"data:image/jpeg;base64,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",alt:"..."})]})},D=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",body:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/todos/1").then((function(e){return e.json()})).then((function(t){return e.setState({title:t.title,body:t.body})}))}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:t}),Object(x.jsx)("p",{children:a})]})}}]),a}(n.Component),P=(a(65),a(66),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(x.jsx)(R,{children:Object(x.jsx)(j.a,{children:Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(I,{branding:"Contact Manager"}),Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)(b.c,{children:[Object(x.jsx)(b.a,{exact:!0,path:"/",component:S}),Object(x.jsx)(b.a,{exact:!0,path:"/contact/add",component:k}),Object(x.jsx)(b.a,{exact:!0,path:"/contact/edit/:id",component:z}),Object(x.jsx)(b.a,{exact:!0,path:"/about",component:L}),Object(x.jsx)(b.a,{exact:!0,path:"/Test",component:D}),Object(x.jsx)(b.a,{component:B})]})})]})})})}}]),a}(n.Component)),X=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(x.jsx)(P,{}),document.getElementById("root")),X()}},[[67,1,2]]]);
//# sourceMappingURL=main.60364fe8.chunk.js.map