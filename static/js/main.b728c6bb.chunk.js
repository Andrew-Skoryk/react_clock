(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),i=n(3),l=n(5),s=n(4),r=n(1),u=(n(12),n(0)),m=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={time:new Date},e.timerId=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({time:new Date})}),1e3)}},{key:"componentDidUpdate",value:function(){console.info(this.state.time.toUTCString().slice(-12,-4))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state.time,t=this.props.name;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:e.toUTCString().slice(-12,-4)})]})}}]),n}(r.Component);function d(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var h=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={hasClock:!0,clockName:"Clock-0"},e.nameId=0,e.handleRightClick=function(t){e.setState({hasClock:!1}),t.preventDefault()},e.handleLeftClick=function(){e.setState({hasClock:!0})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.nameId=window.setInterval((function(){e.setState({clockName:d()})}),3300),document.addEventListener("contextmenu",this.handleRightClick),document.addEventListener("click",this.handleLeftClick)}},{key:"componentDidUpdate",value:function(e,t){var n=this.state,c=n.hasClock,a=n.clockName;c&&a!==t.clockName&&console.debug("Renamed from ".concat(t.clockName," to ").concat(a))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.handleRightClick),document.removeEventListener("click",this.handleLeftClick),window.clearInterval(this.nameId)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),t&&Object(u.jsx)(m,{name:n})]})}}]),n}(r.Component);a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b728c6bb.chunk.js.map