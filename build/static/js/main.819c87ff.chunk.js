(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(e,t,a){e.exports=a(315)},173:function(e,t,a){},175:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},176:function(e,t,a){},315:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(10),s=a.n(r),o=(a(173),a(34)),i=a(35),c=a(37),u=a(36),m=a(38),d=(a(175),a(176),a(331)),h=a(333),E=a(332),p=a(329),g=a(44),y=a(321),b=a(327),f=a(12),O=a(330),k=a(317),v="LOGIN_USER",S="LOGIN_USER_SERVER_RESPONSE_SUCCESS",x="CREATE_TIMESHEET",T="CREATE_TIMESHEET_WORKINGHOUR",H="CREATE_TIMESHEET_SAVE_WORKINGHOUR",j=function(e,t){return{type:v,username:e,password:t}},w=y.a.Item,C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.props.dispatch(j(a.state.data.email,a.state.data.password)),a.props.form.validateFields(function(t,n){t||console.log("Received values of form: ",n);try{a.props.history.push("/home")}catch(e){alert(e.message)}})},a.state={data:{email:"testbiz@rsrit.com",password:"123456",isBusiness:!0},loading:!1,errors:{}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidMount",value:function(){this.props.dispatch(j(this.state.data.email,this.state.data.password))}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return l.a.createElement("center",null,l.a.createElement(y.a,{onSubmit:this.handleSubmit,className:"login-form"},l.a.createElement("div",null,l.a.createElement("img",{src:"https://rsrit.com/wp-content/uploads/2017/12/logo_dark.png",width:"200px",height:"60px"}),l.a.createElement("br",null)),l.a.createElement(w,null,e("userName",{rules:[{required:!0,message:"Please input your username!"}]})(l.a.createElement(b.a,{prefix:l.a.createElement(f.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),l.a.createElement(w,null,e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(l.a.createElement(b.a,{prefix:l.a.createElement(f.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),l.a.createElement(w,null,e("remember",{valuePropName:"checked",initialValue:!0})(l.a.createElement(O.a,null,"Remember me")),l.a.createElement("a",{className:"login-form-forgot",href:""},"Forgot password"),l.a.createElement(k.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),"Or ",l.a.createElement("a",{href:""},"register now!"))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return console.log(e.result),null}}]),t}(n.Component),W=y.a.create()(C),R=Object(g.b)(function(e){return{result:e.auth.result}})(W),D=a(328),N=a(293),I=a(294),M=a(324),_=a(320),P=D.a.Header,J=(D.a.Sider,D.a.Content),A=D.a.Footer,z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e){console.log("click ",e),a.setState({current:e.key})},a.state={current:"mail"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e;this.props.dispatch({type:S,result:e})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(D.a,null,l.a.createElement(P,null,l.a.createElement(N.a,null,l.a.createElement(I.a,{xs:22,sm:22,md:22,lg:22,xl:22},l.a.createElement(M.a,{onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal"},l.a.createElement(M.a.Item,null,l.a.createElement(_.a,{to:{pathname:"/home"}}," ",l.a.createElement("img",{src:"https://rsrit.com/wp-content/uploads/2017/12/logo_dark.png",width:"200px",height:"60px"}))),l.a.createElement(M.a.Item,{key:"mail"},l.a.createElement(_.a,{to:{pathname:"/home"}},l.a.createElement(f.a,{type:"mail"}),"Home")),l.a.createElement(M.a.Item,{key:"timesheet"},l.a.createElement(_.a,{to:{pathname:"/createNewRequest"}},l.a.createElement(f.a,{type:"clock-circle"}),"TimeSheet")))),l.a.createElement(I.a,{xs:2,sm:2,md:2,lg:2,xl:2},l.a.createElement(_.a,{to:{pathname:"/login"}}," ",l.a.createElement(k.a,{size:"large"},l.a.createElement(f.a,{type:"logout"}),"Logout"))))),l.a.createElement(J,{style:{margin:"24px 16px",padding:24,background:"#fff",minHeight:580}},l.a.createElement(N.a,null,l.a.createElement(I.a,{span:8}," ",l.a.createElement(_.a,{to:{pathname:"/TimeSheetCalander"}},"Monthly Timesheet ")," "))),l.a.createElement(A,null,l.a.createElement("center",null,l.a.createElement(f.a,{type:"copyright"}),"Reliable Software 2018"))))}}]),t}(n.Component);var L=Object(g.b)(function(e){return console.log("ggg"+JSON.stringify(e.auth.result)),{auth:e.auth.result}})(z),U=a(326),V=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(U.a,{onPanelChange:function(e,t){console.log(e,t)}}))}}]),t}(n.Component),F=a(316),G=a(325),B=a(322),q=a(323),K=a(14),Y=a.n(K),$=function(e){return{type:x,timesheet:e}},Q=function(e){return{type:T,submitTimeSheet:e}},X=function(e){return{type:H,submitTimeSheet:e}},Z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handlenum1Change=function(e){var t=Object.assign({},a.state.Workingdetails);t.timeSheetId=Math.floor(100*Math.random()+2);var n=t.daySheet[{monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}[e.target.name]];return n.workHours=Number(e.target.value),t.totalWeekWorkHours=Number(t.totalWeekWorkHours)+Number(e.target.value),t.totalWeekBillableHours=t.totalWeekWorkHours,t.totalWeekHours=Number(t.totalWeekWorkHours)+Number(t.totalWeekTimeoffHours),n.billableHours=Number(e.target.value),n.totalHour=Number(n.timeOffHour)+Number(e.target.value),a.setState({Workingdetails:t})},a.handlenum2Change=function(e){var t=Object.assign({},a.state.Workingdetails),n=t.daySheet[{monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}[e.target.name]];return n.timeOffHour=Number(e.target.value),t.totalWeekTimeoffHours=Number(t.totalWeekTimeoffHours)+Number(e.target.value),n.totalHour=Number(n.workHours)+Number(e.target.value),a.setState({Workingdetails:t})},a.onSubmit=function(){console.log("dad"+a.state.das);var e={};e.workingdetails=a.state.Workingdetails,a.props.dispatch(Q(e)),console.log("Submit click")},a.onSave=function(){console.log("dad"+a.state.das);var e={};e.workingdetails=a.state.Workingdetails,e.workingdetails.status=a.state.Workingdetails.status="true",a.props.dispatch(X(e)),console.log("Save click")},a.onReset=function(){a.setState(a.baseState)},a.state={Workingdetails:{employeeId:a.props.timesheet.timesheet.TimeSheetDetails.employeeId,timeSheetId:"",totalWeekWorkHours:"0",totalWeekBillableHours:"0",totalWeekTimeoffHours:"0",totalWeekHours:"0",comments:"",status:"false",daySheet:[{day:"monday",workHours:"0",timeOffHour:"0",date:"Test",billableHours:"0",totalHour:"0",notes:"Test"},{day:"tuesday",workHours:"0",timeOffHour:"0",date:"0",billableHours:"0",totalHour:"0",notes:"Test"},{day:"wednesday",workHours:"0",timeOffHour:"0",date:"Test",billableHours:"0",totalHour:"0",notes:"Test"},{day:"thursday",workHours:"0",timeOffHour:"0",date:"Test",billableHours:"0",totalHour:"0",notes:"Test"},{day:"friday",workHours:"0",timeOffHour:"0",date:"Test",billableHours:"0",totalHour:"0",notes:"Test"},{day:"saturday",workHours:"0",timeOffHour:"0",date:"Test",billableHours:"0",totalHour:"0",notes:"Test"},{day:"sunday",workHours:"0",timeOffHour:"0",date:"Test",billableHours:"0",totalHour:"0",notes:"Test"}]}},a.baseState=a.state,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=b.a.TextArea,t=this.props.timesheet.timesheet.TimeSheetDetails.employeeId;console.log(""+JSON.stringify(this.props.auth)),console.log("Employee"+t);var a=Y()(this.props.timesheet.timesheet.TimeSheetDetails.selectWeek),n=(a.startOf("week").format("MM/DD/YYYY"),a.format("DD"),a.add(1,"days").format("DD-MMM")),r=a.add(1,"days").format("DD-MMM"),s=a.add(1,"days").format("DD-MMM"),o=a.add(1,"days").format("DD-MMM"),i=a.add(1,"days").format("DD-MMM"),c=a.add(1,"days").format("DD-MMM"),u=["mon","tue","wed","thur","fri","sat","sun"].map(function(e){return{totalHr:"0",billableHr:"0"}});return console.log(u),l.a.createElement(y.a,null,l.a.createElement("table",{className:"table table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Week"),l.a.createElement("th",null,"Mon ",l.a.createElement("input",{type:"text",value:a.startOf("week").format("DD-MMM"),readOnly:!0})," "),l.a.createElement("th",null,"Tue ",l.a.createElement("input",{type:"text",value:n,readOnly:!0})),l.a.createElement("th",null,"Wed ",l.a.createElement("input",{type:"text",value:r,readOnly:!0})),l.a.createElement("th",null,"Thur ",l.a.createElement("input",{type:"text",value:s,readOnly:!0})),l.a.createElement("th",null,"Fri ",l.a.createElement("input",{type:"text",value:o,readOnly:!0})),l.a.createElement("th",null,"Sat ",l.a.createElement("input",{type:"text",value:i,readOnly:!0})),l.a.createElement("th",null,"Sun ",l.a.createElement("input",{type:"text",value:c,readOnly:!0})),l.a.createElement("th",null,"TotalHr"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Hour Claim"),l.a.createElement("td",null,l.a.createElement(b.a,{size:"small",placeholder:"Enter Hr",name:"monday",id:"hMon",onChange:this.handlenum1Change})),l.a.createElement("td",null,l.a.createElement(b.a,{size:"small",placeholder:"Enter Hr",name:"tuesday",id:"hTue",onChange:this.handlenum1Change})),l.a.createElement("td",null,l.a.createElement(b.a,{size:"small",placeholder:"Enter Hr",name:"wednesday",onChange:this.handlenum1Change})),l.a.createElement("td",null,l.a.createElement(b.a,{size:"small",placeholder:"Enter Hr",name:"thursday",onChange:this.handlenum1Change})),l.a.createElement("td",null,l.a.createElement(b.a,{size:"small",placeholder:"Enter Hr",name:"friday",onChange:this.handlenum1Change})),l.a.createElement("td",null,l.a.createElement(b.a,{size:"small",placeholder:"Enter Hr",name:"saturday",onChange:this.handlenum1Change})),l.a.createElement("td",null,l.a.createElement(b.a,{size:"small",placeholder:"Enter Hr",name:"sunday",onChange:this.handlenum1Change})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:this.state.Workingdetails.totalWeekWorkHours,readOnly:!0}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Time Off"),l.a.createElement("td",null,l.a.createElement(b.a,{size:"small",placeholder:"Enter Time Off",name:"monday",onChange:this.handlenum2Change})),l.a.createElement("td",null,l.a.createElement(b.a,{size:"small",placeholder:"Enter Time Off",name:"tuesday",onChange:this.handlenum2Change})),l.a.createElement("td",null,l.a.createElement(b.a,{size:"small",placeholder:"Enter Time Off",name:"wednesday",onChange:this.handlenum2Change})),l.a.createElement("td",null,l.a.createElement(b.a,{size:"small",placeholder:"Enter Time Off",name:"thursday",onChange:this.handlenum2Change})),l.a.createElement("td",null,l.a.createElement(b.a,{size:"small",placeholder:"Enter Time Off",name:"friday",onChange:this.handlenum2Change})),l.a.createElement("td",null,l.a.createElement(b.a,{size:"small",placeholder:"Enter Time Off",name:"saturday",onChange:this.handlenum2Change})),l.a.createElement("td",null,l.a.createElement(b.a,{size:"small",placeholder:"Enter Time Off",name:"sunday",onChange:this.handlenum2Change})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:this.state.Workingdetails.totalWeekTimeoffHours,readOnly:!0}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Total Bill"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:this.state.Workingdetails.daySheet[0].billableHours,readOnly:!0})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:this.state.Workingdetails.daySheet[1].billableHours,readOnly:!0})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:this.state.Workingdetails.daySheet[2].billableHours,readOnly:!0})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:this.state.Workingdetails.daySheet[3].billableHours,readOnly:!0})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:this.state.Workingdetails.daySheet[4].billableHours,readOnly:!0})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:this.state.Workingdetails.daySheet[5].billableHours,readOnly:!0})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:this.state.Workingdetails.daySheet[6].billableHours,readOnly:!0})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:this.state.Workingdetails.totalWeekWorkHours,readOnly:!0}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Total Hours"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:this.state.Workingdetails.daySheet[0].totalHour,readOnly:!0})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:this.state.Workingdetails.daySheet[1].totalHour,readOnly:!0})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:this.state.Workingdetails.daySheet[2].totalHour,readOnly:!0})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:this.state.Workingdetails.daySheet[3].totalHour,readOnly:!0})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:this.state.Workingdetails.daySheet[4].totalHour,readOnly:!0})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:this.state.Workingdetails.daySheet[5].totalHour,readOnly:!0})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:this.state.Workingdetails.daySheet[6].totalHour,readOnly:!0})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:this.state.Workingdetails.totalWeekHours,readOnly:!0}))),l.a.createElement("tr",null,l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"Notes"),l.a.createElement("td",{width:"400",colSpan:"8"},l.a.createElement(e,{rows:4}))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"3"}),l.a.createElement("td",null,l.a.createElement(k.a,{type:"primary",onClick:this.onSave},"Save")),l.a.createElement("td",null,l.a.createElement(k.a,{type:"primary",onClick:this.onSubmit},"Submit")),l.a.createElement("td",null,l.a.createElement(k.a,{type:"primary",onClick:this.onReset},"Reset"))))))}}]),t}(n.Component);var ee=Object(g.b)(function(e){return console.log("ggg"+e),{timesheet:e.timesheet}})(Z),te=(b.a.TextArea,F.a.Option),ae=D.a.Header,ne=(D.a.Sider,D.a.Content),le=(G.a.Panel,y.a.Item),re=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e){console.log("click ",e),a.setState({current:e.key})},a.onDropdownChange=function(e,t){console.log("DDL"+e);var n=Object.assign({},a.state.TimeSheetDetails);return n.jobTitle=e,a.setState({TimeSheetDetails:n})},a.onSubmit=function(){a.setState({viewTimesheet:!a.state.viewTimesheet});var e={};e.TimeSheetDetails=a.state.TimeSheetDetails,e.TimeSheetDetails.employeeId=Math.floor(100*Math.random()+1),console.log("Details for time sheet details",e.TimeSheetDetails),a.props.dispatch($(e)),console.log("Submit click")},a.onSelectWeekChange=function(e,t){console.log("select week change",e),console.log("date"+t);var n=Object.assign({},a.state.TimeSheetDetails);return n.selectWeek=Y()(e).valueOf(),a.setState({TimeSheetDetails:n})},a.state={viewTimesheet:!1,error:"",current:"timesheet",TimeSheetDetails:{selectWeek:"",jobTitle:"Full Stack",endClient:"N/A",client:"Inhouse",approver:"Amar Shah",endDate:"12/31/2018",projectId:"Test",employeeId:""}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=B.a.WeekPicker;return l.a.createElement("div",null,l.a.createElement(D.a,null,l.a.createElement(ae,null,l.a.createElement(N.a,null,l.a.createElement(I.a,{xs:22,sm:22,md:22,lg:22,xl:22},l.a.createElement(M.a,{onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal"},l.a.createElement(M.a.Item,null,l.a.createElement(_.a,{to:{pathname:"/home"}}," ",l.a.createElement("img",{src:"https://rsrit.com/wp-content/uploads/2017/12/logo_dark.png",width:"200px",height:"60px"}))),l.a.createElement(M.a.Item,{key:"mail"},l.a.createElement(_.a,{to:{pathname:"/home"}},l.a.createElement(f.a,{type:"mail"}),"Home")),l.a.createElement(M.a.Item,{key:"timesheet"},l.a.createElement(_.a,{to:{pathname:"/createNewRequest"}},l.a.createElement(f.a,{type:"clock-circle"}),"TimeSheet")))),l.a.createElement(I.a,{xs:2,sm:2,md:2,lg:2,xl:2},l.a.createElement(_.a,{to:{pathname:"/login"}}," ",l.a.createElement(k.a,{size:"large"},l.a.createElement(f.a,{type:"logout"}),"Logout"))))),l.a.createElement(ne,null,l.a.createElement(y.a,{layout:"inline"},l.a.createElement(N.a,null,l.a.createElement(I.a,{xs:4,sm:4,md:4,lg:4,xl:4},l.a.createElement(q.a,null,"CLIENT:",l.a.createElement("div",null," ",this.state.TimeSheetDetails.client))),l.a.createElement(I.a,{xs:4,sm:4,md:4,lg:4,xl:4},l.a.createElement(q.a,null,"APPROVER(S):",l.a.createElement("div",null," ",this.state.TimeSheetDetails.approver))),l.a.createElement(I.a,{xs:4,sm:4,md:4,lg:4,xl:4},l.a.createElement(q.a,null,"JOB END DATE:",l.a.createElement("div",null," ",this.state.TimeSheetDetails.endDate))),l.a.createElement(I.a,{xs:4,sm:4,md:4,lg:4,xl:4},l.a.createElement(q.a,null,"END CLIENT:",l.a.createElement("div",null," ",this.state.TimeSheetDetails.endClient))),l.a.createElement(I.a,{xs:4,sm:4,md:4,lg:4,xl:4},l.a.createElement(q.a,null,"PROJECT:",l.a.createElement("div",null," ",this.state.TimeSheetDetails.projectId))),l.a.createElement(I.a,{xs:4,sm:4,md:4,lg:4,xl:4},l.a.createElement(q.a,null)),l.a.createElement(I.a,{xs:12,sm:12,md:12,lg:12,xl:12},l.a.createElement(q.a,null,l.a.createElement(le,{label:"Job",hasFeedback:!0},l.a.createElement(F.a,{id:"jobTitle",name:"jobTitle",value:this.state.TimeSheetDetails.jobTitle,onChange:this.onDropdownChange},l.a.createElement(te,{value:"Java Developer"},"Java Developer"),l.a.createElement(te,{value:"Full Stack"},"Full Stack"),l.a.createElement(te,{value:"Data Analyst"},"Data Analyst"))))),l.a.createElement(I.a,{xs:12,sm:12,md:12,lg:12,xl:12},l.a.createElement(q.a,null,l.a.createElement(le,{label:"Week Picker",hasFeedback:!0},l.a.createElement(e,{onChange:this.onSelectWeekChange,defaultValue:this.state.TimeSheetDetails.selectWeek,placeholder:"Select week"})))),l.a.createElement(I.a,{s:24,sm:24,md:24,lg:24,xl:24},l.a.createElement(q.a,null,l.a.createElement(k.a,{type:"primary",onClick:this.onSubmit},"Submit"))))),l.a.createElement("div",null,this.state.viewTimesheet&&l.a.createElement(ee,null)))))}}]),t}(n.Component),se=Object(g.b)(function(e){return{}})(re),oe=function(){return l.a.createElement(d.a,null,l.a.createElement(h.a,null,l.a.createElement(E.a,{exact:!0,path:"/login",render:function(e){return l.a.createElement(R,e)}}),l.a.createElement(E.a,{exact:!0,path:"/home",render:function(e){return l.a.createElement(L,e)}}),l.a.createElement(E.a,{exact:!0,path:"/createNewRequest",render:function(e){return l.a.createElement(se,e)}}),l.a.createElement(E.a,{exact:!0,path:"/TimeSheetCalander",render:function(e){return l.a.createElement(V,e)}}),l.a.createElement(p.a,{to:"/login"})))},ie=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(oe,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=a(52),ue=(a(312),a(165)),me=a(43),de=a.n(me),he=a(23);function Ee(e,t,a){var n=new Headers;if(n.append("Content-Type","application/json"),!t&&"POST"!==t)return fetch(e,{method:"GET",headers:n});if(a){var l={method:"POST",body:JSON.stringify(a),headers:n};return fetch(e,l)}}var pe=de.a.mark(ke),ge=de.a.mark(ve),ye=de.a.mark(Se),be=de.a.mark(xe),fe=de.a.mark(Te),Oe="https://sleepy-basin-37644.herokuapp.com";function ke(e){var t,a,n,l;return de.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,console.log("Action->"+JSON.stringify(e)),(t={}).firstname="asdfg",t.lastname="zxcvbb",t.age="34","GET",a=Oe+"/veiw",r.next=10,Object(he.a)(Ee,a,"","");case 10:return n=r.sent,r.next=13,n.json();case 13:if(l=r.sent,console.log("ADS"+l.workingdetails),console.log("Result ->"+JSON.stringify(l)),console.log("Result Json"+l),!l.error){r.next=22;break}return r.next=20,Object(he.b)({type:"LOGIN_USER_SERVER_REPONSE_ERROR",error:l.error});case 20:r.next=24;break;case 22:return r.next=24,Object(he.b)({type:S,result:l});case 24:r.next=29;break;case 26:r.prev=26,r.t0=r.catch(0),console.log(r.t0);case 29:case"end":return r.stop()}},pe,this,[[0,26]])}function ve(e){var t,a,n,l;return de.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("TimeSheet Action->"+JSON.stringify(e)),r.prev=1,console.log("Action->"+JSON.stringify(e)),(t={}).selectWeek=e.selectWeek,t.jobTitle=e.jobTitle,t.approver=e.approver,t.client=e.client,t.endDate=e.endDate,t.projectId=e.projectId,"POST",a=Oe+"/timesheet/create",r.next=14,Object(he.a)(Ee,a,"POST",t);case 14:return n=r.sent,r.next=17,n.json();case 17:if(l=r.sent,console.log("Result Json"+l),!l.error){r.next=24;break}return r.next=22,Object(he.b)({type:"LOGIN_USER_SERVER_REPONSE_ERROR",error:l.error});case 22:r.next=26;break;case 24:return r.next=26,Object(he.b)({type:S,result:l});case 26:r.next=31;break;case 28:r.prev=28,r.t0=r.catch(1),console.log(r.t0);case 31:case"end":return r.stop()}},ge,this,[[1,28]])}function Se(e){var t,a,n,l;return de.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("Submit Action->"+JSON.stringify(e)),r.prev=1,(t={}).workingdetails=e.submitTimeSheet.workingdetails,"POST",a=Oe+"/timesheet/submit",r.next=8,Object(he.a)(Ee,a,"POST",t);case 8:return n=r.sent,r.next=11,n.json();case 11:if(l=r.sent,console.log("Result Json"+l),!l.error){r.next=18;break}return r.next=16,Object(he.b)({type:"LOGIN_USER_SERVER_REPONSE_ERROR",error:l.error});case 16:r.next=20;break;case 18:return r.next=20,Object(he.b)({type:S,result:l});case 20:r.next=25;break;case 22:r.prev=22,r.t0=r.catch(1),console.log(r.t0);case 25:case"end":return r.stop()}},ye,this,[[1,22]])}function xe(e){var t,a,n,l;return de.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("Save Time Sheet Action->"+JSON.stringify(e)),r.prev=1,(t={}).workingdetails=e.submitTimeSheet.workingdetails,"POST",a=Oe+"/timesheet/save",r.next=8,Object(he.a)(Ee,a,"POST",t);case 8:return n=r.sent,r.next=11,n.json();case 11:if(l=r.sent,console.log("Result Json"+l),!l.error){r.next=18;break}return r.next=16,Object(he.b)({type:"LOGIN_USER_SERVER_REPONSE_ERROR",error:l.error});case 16:r.next=20;break;case 18:return r.next=20,Object(he.b)({type:S,result:l});case 20:r.next=25;break;case 22:r.prev=22,r.t0=r.catch(1),console.log(r.t0);case 25:case"end":return r.stop()}},be,this,[[1,22]])}function Te(e){return de.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.c)(v,ke);case 2:return e.next=4,Object(he.c)(x,ve);case 4:return e.next=6,Object(he.c)(T,Se);case 6:return e.next=8,Object(he.c)(H,xe);case 8:case"end":return e.stop()}},fe,this)}var He=a(45),je={signUpUsersList:[],pending:!1,loggedIn:!1,isValidToken:!1,isBusiness:!1,empDetails:{},result:{},user:{email:"",displayName:"",registered:!1,refreshToken:"",expiresIn:"",emailVerified:!1,validSince:"",disabled:!1,lastLoginAt:"",createdAt:""}},we=Object(ce.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object.assign({},e,{loggedIn:!1,isValidToken:!1,pending:!0});case"LOGIN_USER_SERVER_RESPONSE_ERROR":return function(e,t){var a=Object(He.a)({},e);return Object(He.a)({},a)}(e);case S:return function(e,t){console.log("REdux"+JSON.stringify(t));var a=Object(He.a)({},e);return void 0!==t.result&&(a=Object.assign({},e,{result:Object.assign({},t.result)})),console.log("STATE->"+JSON.stringify(a)),Object(He.a)({},a)}(e,t);default:return e}},timesheet:function(e,t){switch(t.type){case x:return Object(He.a)({},e,{timesheet:t.timesheet});case T:case H:default:return Object(He.a)({},e)}}}),Ce=Object(ue.a)(),We=[Ce];var Re=Object(ce.d)(we,ce.a.apply(void 0,We));Ce.run(Te);var De=Re;s.a.render(l.a.createElement(d.a,null,l.a.createElement(g.a,{store:De},l.a.createElement(ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[168,2,1]]]);
//# sourceMappingURL=main.819c87ff.chunk.js.map