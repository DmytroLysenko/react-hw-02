(this["webpackJsonpreact-hw-02"]=this["webpackJsonpreact-hw-02"]||[]).push([[0],[,function(e,t,a){e.exports={message:"Statistics_message__3Kh2P",list:"Statistics_list__31gYu",listItem:"Statistics_listItem__2mzq7","listItem--accent":"Statistics_listItem--accent__1zCFD Statistics_listItem__2mzq7"}},function(e,t,a){e.exports={container:"FeedbackOptions_container__WWZv3",btn:"FeedbackOptions_btn__3Olst"}},,,,,,function(e,t,a){e.exports={container:"FeedbackApp_container__SojR4"}},function(e,t,a){e.exports={title:"Section_title__2WY5H"}},,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(4),r=a.n(i),s=a(5),o=a(6),l=a(7),u=a(11),m=a(10),b=a(8),d=a.n(b),p=a(9),_=a.n(p),f=function(e){var t=e.title,a=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:_.a.title},t),c.a.createElement("section",null,a))},v=a(2),k=a.n(v),h=function(e){var t=e.options,a=e.onLeaveFeedback;return c.a.createElement("div",{className:k.a.container},t.map((function(e){return c.a.createElement("button",{className:k.a.btn,key:e,onClick:function(){return a(e)}},e.charAt(0).toUpperCase()+e.slice(1))})))},E=a(1),g=a.n(E),F=function(e){var t=e.options,a=e.total,n=e.positivePercentage;return 0===a?c.a.createElement("p",{className:g.a.message},"No feedback given"):c.a.createElement("ul",{className:g.a.list},Object.entries(t).map((function(e){return c.a.createElement("li",{key:e[0],className:g.a.listItem},e[0].charAt(0).toUpperCase()+e[0].slice(1),": ",e[1])})),c.a.createElement("li",{className:g.a["listItem--accent"]},"Total: ",a),c.a.createElement("li",{className:g.a["listItem--accent"]},"Positive feedback: ",n))},O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleLeaveFeedback=function(t){e.setState((function(e){return Object(s.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){var t=e.state.good;if(0===t)return"0%";var a=Math.round(100*t/e.countTotalFeedback());return"".concat(a,"%")},e}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:d.a.container},c.a.createElement(f,{title:"Please leave feedback"},c.a.createElement(h,{options:Object.keys(this.state),onLeaveFeedback:this.handleLeaveFeedback})),c.a.createElement(f,{title:"Statistics"},c.a.createElement(F,{options:this.state,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})))}}]),a}(c.a.Component),N=function(){return c.a.createElement(O,null)};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.22681694.chunk.js.map