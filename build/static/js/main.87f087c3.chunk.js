(this.webpackJsonpzaliskyipm2=this.webpackJsonpzaliskyipm2||[]).push([[0],{38:function(e,a,t){},70:function(e,a,t){e.exports=t(99)},75:function(e,a,t){},99:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(6),i=t.n(l),r=(t(75),t(21)),s=t(22),o=t(23),m=t(25),u=(t(38),t(131)),p=t(132),d=t(128),v=t(66),E=t(54),h=t.n(E),g=t(4),N=Object(v.a)({palette:{primary:{main:"#31b17d"},secondary:{main:"#31b17d"},grey:{main:"#22BF19"}},overrides:{MuiOutlinedInput:{root:{position:"relative","& $notchedOutline":{borderColor:"#31b17d"},"&:hover:not($disabled):not($focused):not($error) $notchedOutline":{borderColor:"#31b17d","@media (hover: none)":{borderColor:"#31b17d"}},"&$focused $notchedOutline":{borderColor:"#31b17d",borderWidth:1}}},MuiFormLabel:{root:{color:"#31b17d"}}}}),b=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={name:"",email:"",message:""},e.NameChange=function(a){e.setState({name:a.target.value})},e.EmailChange=function(a){e.setState({email:a.target.value})},e.MessageChange=function(a){e.setState({message:a.target.value})},e.resetForm=function(){e.setState({name:"",email:"",message:""})},e.HandleSubmit=function(a){a.preventDefault(),h()({method:"POST",url:"http://localhost:3002/send",data:e.state}).then((function(a){"success"===a.data.status?(alert("Message Sent."),e.resetForm()):"fail"===a.data.status&&alert("Message failed to send.")}))},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return c.a.createElement(d.a,{theme:N},c.a.createElement("form",{className:"Contact-form",onSubmit:this.HandleSubmit,method:"POST"},c.a.createElement(u.a,{label:"Name here",variant:"filled",value:this.state.name,onChange:this.NameChange,InputProps:{className:e.input}}),c.a.createElement("p",null),c.a.createElement(u.a,{className:"Contact-text",label:"Email here",variant:"filled",value:this.state.email,onChange:this.EmailChange,InputProps:{className:e.input}}),c.a.createElement("p",null),c.a.createElement(u.a,{className:"Contact-text",label:"Message here",variant:"filled",value:this.state.message,onChange:this.MessageChange,InputProps:{className:e.multiline,multiline:!0,rows:3,rowsMax:3}}),c.a.createElement(p.a,{type:"submit",style:{width:"150px",margin:"20px"},color:"primary",variant:"contained"},"Send message")))}}]),t}(c.a.Component),f=Object(g.a)({input:{color:"#31b17d"},multiline:{multiline:!0,rows:2,color:"#31b17d"}})(b),w=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Work-container"},c.a.createElement("div",{className:"Work-column"},c.a.createElement("image",{className:"Work-image",src:"#"},"Fin tech, web apps"),c.a.createElement("image",{className:"Work-image"},"CRM, web apps"),c.a.createElement("image",{className:"Work-image"},"Data Analytics, web apps")),c.a.createElement("div",{className:"Work-column"},c.a.createElement("image",{className:"Work-image"},"ERP, mobile apps"),c.a.createElement("image",{className:"Work-image"},"Entertainment, mobile apps"),c.a.createElement("image",{className:"Work-image"},"Health care, mobile apps")))}}]),t}(c.a.Component),k=t(56),y=t.n(k),A=t(57),S=t.n(A),C=t(59),j=t.n(C),O=t(58),M=t.n(O),W=t(60),x=t.n(W),P=t(61),F=t.n(P),$=t(62),D=t.n($),I=t(63),V=t.n(I),T=t(36),H=t.n(T),R=t(64),U=t.n(R),B=t(65),z=t.n(B);function J(){return c.a.createElement("div",null,c.a.createElement("div",{className:"App-details-title"},"about me",c.a.createElement("p",null,"27 years / Kyiv / Fulltime or Freelance")),"Project Manager specialist and Certified PSM I , working 4+ years in IT various innovative markets on Web, Mobile, VR/AR projects with international clients. Using Agile frameworks, more inclined to Management 3.0 style, have experience with version control services and project management tools, such as Atlassian Suite and other. Have experience with Html, CSS, JS, React and C# (Unity3D).",c.a.createElement("hr",null),c.a.createElement("div",{className:"App-details-services"},c.a.createElement("p",null,"principal facts")),c.a.createElement("div",{className:"App-details-facts-row"},c.a.createElement("div",{className:"App-details-fact"},c.a.createElement("p",null,c.a.createElement(H.a,{start:0,end:42,duration:10}),"+"),"projects"),c.a.createElement("div",{className:"App-details-fact"},c.a.createElement("p",null,c.a.createElement(H.a,{start:0,end:23,duration:10})),"applications live"),c.a.createElement("div",{className:"App-details-fact"},c.a.createElement("p",null,c.a.createElement(H.a,{start:0,end:5,duration:10})),"client references")),c.a.createElement("hr",null),c.a.createElement("div",{className:"App-details-services"},c.a.createElement("p",null,"my services")),c.a.createElement("div",{className:"App-details-services-table-row"},c.a.createElement("div",null,c.a.createElement(x.a,{className:"Service-icon"}),c.a.createElement("p",null,"project management")," Manage your projects, releases to fit in scope and time"),c.a.createElement("div",null,c.a.createElement(F.a,{className:"Service-icon"}),c.a.createElement("p",null,"Scrum")," Facilitate your team, growing Agile qualities within")),c.a.createElement("div",{className:"App-details-services-table-row"},c.a.createElement("div",null,c.a.createElement(D.a,{className:"Service-icon"}),c.a.createElement("p",null,"static websites")," Develop your business landing pages and deploy it to web"),c.a.createElement("div",null,c.a.createElement(V.a,{className:"Service-icon"}),c.a.createElement("p",null,"Unity3D ")," Develop Web, Mobile or Desktop Unity application")))}function K(){return c.a.createElement("div",null,c.a.createElement("div",{className:"App-details-title"},"contacts"),c.a.createElement("div",{className:"App-details-contact-column"},c.a.createElement("div",{className:"App-details-contact-text"},c.a.createElement(U.a,{className:"App-details-contact-icon"}),"bogdanzaliskyi@gmail.com"),c.a.createElement("div",{className:"App-details-contact-text"},c.a.createElement(z.a,{className:"App-details-contact-icon"}),"Kyiv, Ukraine")),c.a.createElement("hr",null),c.a.createElement("div",{className:"App-details-title"},"send message"),c.a.createElement("div",null,c.a.createElement(f,null)))}function q(){return c.a.createElement(w,null)}var L=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={account:!0,work:!1,contact:!1,transition:!1,currentpage:"account"},e.accountView=function(){e.state.account||(e.setState({transition:!0,account:!0,work:!1,contact:!1}),setTimeout((function(){e.setState({transition:!1,currentpage:"account"})}),800))},e.contactView=function(){e.state.contact||(e.setState({transition:!0,account:!1,work:!1,contact:!0}),setTimeout((function(){e.setState({transition:!1,currentpage:"contact"})}),800))},e.workView=function(){e.state.work||(e.setState({transition:!0,account:!1,work:!0,contact:!1}),setTimeout((function(){e.setState({transition:!1,currentpage:"work"})}),800))},e}return Object(s.a)(t,[{key:"render",value:function(){var e;return"account"===this.state.currentpage?e=c.a.createElement(J,null):"contact"===this.state.currentpage?e=c.a.createElement(K,null):"work"===this.state.currentpage&&(e=c.a.createElement(q,null)),c.a.createElement("div",{className:"App-main"},c.a.createElement("div",{className:"App-nav"},c.a.createElement("div",{className:"Nav-upload-container"},c.a.createElement("div",null,c.a.createElement(y.a,{className:"Nav-upload"}))),c.a.createElement("div",{className:"Nav-icon-container"},c.a.createElement(S.a,{className:"".concat(this.state.account?"Nav-icon-active":"Nav-icon"),onClick:this.accountView})),c.a.createElement("div",{className:"Nav-icon-container"},c.a.createElement(M.a,{className:"".concat(this.state.work?"Nav-icon-active":"Nav-icon"),onClick:this.workView})),c.a.createElement("div",{className:"Nav-icon-container"},c.a.createElement(j.a,{className:"".concat(this.state.contact?"Nav-icon-active":"Nav-icon"),onClick:this.contactView}))),c.a.createElement("div",{className:"App-photo"},c.a.createElement("div",{className:"App-photo-details"}," Bohdan Zaliskyi ",c.a.createElement("p",null,"Project Manager"))),c.a.createElement("div",{className:"App-details ".concat(this.state.transition?"transition-fadeout":"transition-fadein")},e))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[70,1,2]]]);
//# sourceMappingURL=main.87f087c3.chunk.js.map