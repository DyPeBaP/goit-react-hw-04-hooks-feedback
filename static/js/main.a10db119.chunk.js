(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={list:"Statistics_list__3F9l-",item:"Statistics_item__1MBjG"}},,,function(e,t,n){e.exports={section:"Section_section__1BkWh",title:"Section_title__13KzD"}},,function(e,t,n){e.exports={button:"FeedbackOptions_button__1BZdE"}},function(e,t,n){e.exports={message:"Notification_message__3Kyow"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(6),i=n.n(s),o=(n(13),n(3)),r=n(7),l=n.n(r),u=n(0);function b(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return Object(u.jsx)("button",{type:"button",className:l.a.button,onClick:function(){return n(e)},children:e},e)}))}var j=n(8),d=n.n(j);function m(e){var t=e.message;return Object(u.jsx)("p",{className:d.a.message,children:t})}var f=n(5),h=n.n(f);function O(e){var t=e.title,n=e.children;return Object(u.jsxs)("section",{className:h.a.section,children:[Object(u.jsx)("p",{className:h.a.title,children:t}),n]})}var x=n(2),p=n.n(x);function _(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,s=e.positivePercentage;return Object(u.jsxs)("ul",{className:p.a.list,children:[Object(u.jsxs)("li",{className:p.a.item,children:["Good: ",t]}),Object(u.jsxs)("li",{className:p.a.item,children:["Neutral: ",n]}),Object(u.jsxs)("li",{className:p.a.item,children:["Bad: ",c]}),Object(u.jsxs)("li",{className:p.a.item,children:["Total: ",a]}),Object(u.jsxs)("li",{className:p.a.item,children:["Positive feedback: ",s,"%"]})]})}function k(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(0),i=Object(o.a)(s,2),r=i[0],l=i[1],j=Object(c.useState)(0),d=Object(o.a)(j,2),f=d[0],h=d[1],x=function(){return n+r+f};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{title:"Please leave feedback",children:Object(u.jsx)(b,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e){case"good":a((function(e){return e+1}));break;case"neutral":l((function(e){return e+1}));break;case"bad":h((function(e){return e+1}));break;default:return}}})}),Object(u.jsx)(O,{title:"Statistics",children:x()?Object(u.jsx)(_,{good:n,neutral:r,bad:f,total:x(),positivePercentage:Math.round(n/x()*100)||0}):Object(u.jsx)(m,{message:"No feedback given"})})]})}i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.a10db119.chunk.js.map