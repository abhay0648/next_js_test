(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4034:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var i=n(5893);function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=n(7294),c=n(6425);function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return u(this,n)}}var d=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}(f,t);var e,n,a,u=s(f);function f(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(e=u.call(this,t)).state={loading:!0},e}return e=f,(n=[{key:"componentDidMount",value:function(){this.setState({loading:!1})}},{key:"render",value:function(){return(0,i.jsx)(i.Fragment,{children:this.state.loading?(0,i.jsx)("div",{style:{width:"100%",height:"100vh",objectPosition:"center",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"},children:"Loading..."}):(0,i.jsx)(c.default,{text:"Welcome To Jio",imageTag:"/jio.jpeg",imageTagHeader:"/jio.jpeg"})})}}])&&o(e.prototype,n),a&&o(e,a),f}(l.Component)},6425:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return x}});var i=n(5893),o=n(5675),r={DRAWER_TEXT_SIZE:"1.2333333vw",HEADER_WEB:"2vw",HEADER_MOBILE:"4vw",FONT_SIZE_WEB:"1.1vw",FONT_SIZE_MOBILE:"2vw",COLOR_BLACK_500:"#070707",COLOR_BLACK_400:"#707070",COLOR_BLACK_300:"#9A9A9A",COLOR_BLUE_100:"#1876D2"},a=r;r.displayName="Constant";var u=n(9378),f=n(7294),l=n(5505);function c(t){var e=(0,f.useState)("2.0vw"),n=e[0],o=e[1],r=(0,f.useState)("#070707"),a=r[0],u=r[1],c=(0,f.useState)("left"),s=c[0],d=c[1],g=(0,f.useState)("normal"),m=g[0],p=g[1],h=(0,f.useState)("text"),x=h[0],v=h[1],b=(0,f.useState)("0px"),S=b[0],E=b[1],w=(0,f.useState)(""),y=w[0],j=w[1],_=(0,f.useState)("0px"),R=_[0],T=_[1],B=(0,f.useState)("0%"),L=B[0],O=B[1],C=(0,f.useState)("0%"),k=C[0],I=C[1],F=(0,f.useState)("0%"),W=F[0],z=F[1],N=(0,f.useState)("0%"),Z=N[0],D=N[1],M=(0,l.Z)((function(t){return{text:{marginRight:L,marginLeft:k,marginTop:W,marginBottom:Z,fontFamily:"Libre Franklin",fontSize:n,fontWeight:m,fontStretch:"normal",fontStyle:"normal",letterSpacing:"normal",textAlign:s,color:a,cursor:x,border:y,padding:S,borderRadius:R}}}))();return(0,f.useEffect)((function(){void 0!==t.marginRight&&O(t.marginRight)}),[t.marginRight]),(0,f.useEffect)((function(){void 0!==t.marginLeft&&I(t.marginLeft)}),[t.marginLeft]),(0,f.useEffect)((function(){void 0!==t.marginTop&&z(t.marginTop)}),[t.marginTop]),(0,f.useEffect)((function(){void 0!==t.marginBottom&&D(t.marginBottom)}),[t.marginBottom]),(0,f.useEffect)((function(){void 0!==t.fontSize&&o(t.fontSize)}),[t.fontSize]),(0,f.useEffect)((function(){void 0!==t.color&&u(t.color)}),[t.color]),(0,f.useEffect)((function(){void 0!==t.alignment&&d(t.alignment)}),[t.alignment]),(0,f.useEffect)((function(){void 0!==t.fontWeight&&p(t.fontWeight)}),[t.fontWeight]),(0,f.useEffect)((function(){void 0!==t.cursor&&v(t.cursor)}),[t.cursor]),(0,f.useEffect)((function(){void 0!==t.borderRadius&&T(t.borderRadius)}),[t.borderRadius]),(0,f.useEffect)((function(){void 0!==t.border&&j(t.border)}),[t.border]),(0,f.useEffect)((function(){void 0!==t.padding&&E(t.padding)}),[t.padding]),(0,i.jsx)("div",{className:M.text,onClick:function(){void 0!=t.onClickCallback&&t.onClickCallback()},children:t.text})}c.displayName="Text";var s=n(8418);function d(t){var e,n=(0,f.useState)(""),o=(n[0],n[1],(0,f.useState)("")),r=(o[0],o[1]),a=(0,f.useState)("100%"),u=a[0],c=a[1],d=(0,f.useState)("0.9375vw"),g=d[0],m=d[1],p=(0,f.useState)("10px"),h=p[0],x=p[1],v=(0,f.useState)("0%"),b=v[0],S=v[1],E=(0,f.useState)("0%"),w=E[0],y=E[1],j=(0,f.useState)("0%"),_=j[0],R=j[1],T=(0,f.useState)("0%"),B=T[0],L=T[1],O=(0,f.useState)("text"),C=O[0],k=O[1],I=(0,l.Z)((function(t){return{root:{marginRight:b,marginLeft:w,marginTop:_,marginBottom:B},inputText:{maxWidth:u,minWidth:u,"& .MuiOutlinedInput-root":{fontFamily:"Libre Franklin",fontSize:g,fontWeight:"normal",fontStretch:"normal",fontStyle:"normal",letterSpacing:"normal",color:"#9a9a9a",borderRadius:h},"& .MuiFormLabel-root":{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",bottom:"0px",right:"22px"}}}}))();return(0,f.useEffect)((function(){void 0!==t.marginRight&&S(t.marginRight)}),[t.marginRight]),(0,f.useEffect)((function(){void 0!==t.marginLeft&&y(t.marginLeft)}),[t.marginLeft]),(0,f.useEffect)((function(){void 0!==t.width&&c(t.width)}),[t.width]),(0,f.useEffect)((function(){void 0!==t.fontSize&&m(t.fontSize)}),[t.fontSize]),(0,f.useEffect)((function(){void 0!==t.borderRadius&&x(t.borderRadius)}),[t.borderRadius]),(0,f.useEffect)((function(){void 0!==t.marginTop&&R(t.marginTop)}),[t.marginTop]),(0,f.useEffect)((function(){void 0!==t.marginBottom&&L(t.marginBottom)}),[t.marginBottom]),(0,f.useEffect)((function(){void 0!==t.type&&k(t.type)}),[t.type]),(0,f.useEffect)((function(){r(void 0!==t.text?t.text:"")}),[void 0!==t.text?t.text:""]),(0,i.jsx)("div",{className:I.root,children:(0,i.jsx)(s.Z,{id:t.id,label:t.label,variant:"outlined",className:I.inputText,autoComplete:"off",type:C,disabled:null!==(e=t.disabled)&&void 0!==e&&e,multiline:!(void 0===t.isMutiline||!t.isMutiline),rows:void 0!==t.isMutiline&&t.isMutiline?void 0===t.row?4:t.row:1,onChange:function(e){void 0!==t.onChangeCallback&&t.onChangeCallback(e.target.value)},onClick:function(){void 0!==t.onClickCallback&&t.onClickCallback()}})})}d.displayName="CentralizeInputText";var g=n(3634);function m(t){var e,n=(0,f.useState)("0.9375vw"),o=n[0],r=n[1],a=(0,f.useState)("0%"),u=a[0],c=a[1],s=(0,f.useState)("0%"),d=s[0],m=s[1],p=(0,f.useState)("20px"),h=p[0],x=p[1],v=(0,f.useState)("6.8px 35.5px"),b=v[0],S=v[1],E=(0,f.useState)("linear-gradient(to bottom, #2699fb, #000070)"),w=E[0],y=E[1],j=(0,f.useState)("#ffffff"),_=j[0],R=j[1],T=(0,f.useState)(!1),B=T[0],L=T[1],O=(0,f.useState)("0%"),C=O[0],k=O[1],I=(0,f.useState)("0%"),F=I[0],W=I[1],z=(0,l.Z)((function(t){return{root:{marginRight:u,marginLeft:d,marginTop:C,marginBottom:F},button:{height:"48px",padding:b,borderRadius:h,backgroundImage:w,fontSize:o,fontWeight:"normal",fontStretch:"normal",fontStyle:"normal",color:_,textTransform:"none",flex:"1"},rootFullWidth:{marginRight:u,marginLeft:d,flex:"1",marginTop:C,marginBottom:F},buttonFullWidth:{height:"48px",width:"100%",padding:b,borderRadius:h,backgroundImage:w,fontSize:o,fontWeight:"normal",fontStretch:"normal",fontStyle:"normal",color:_,textTransform:"none",flex:"1"}}}))();return(0,f.useEffect)((function(){void 0!==t.fontSize&&r(t.fontSize)}),[t.fontSize]),(0,f.useEffect)((function(){void 0!==t.marginRight&&c(t.marginRight)}),[t.marginRight]),(0,f.useEffect)((function(){void 0!==t.marginLeft&&m(t.marginLeft)}),[t.marginLeft]),(0,f.useEffect)((function(){void 0!==t.marginTop&&k(t.marginTop)}),[t.marginTop]),(0,f.useEffect)((function(){void 0!==t.marginBottom&&W(t.marginBottom)}),[t.marginBottom]),(0,f.useEffect)((function(){void 0!==t.borderRadius&&x(t.borderRadius)}),[t.borderRadius]),(0,f.useEffect)((function(){void 0!==t.padding&&S(t.padding)}),[t.padding]),(0,f.useEffect)((function(){void 0!==t.backgroundImage&&y(t.backgroundImage)}),[t.backgroundImage]),(0,f.useEffect)((function(){void 0!==t.color&&R(t.color)}),[t.color]),(0,f.useEffect)((function(){void 0!==t.fullWidthButton&&L(t.fullWidthButton)}),[t.fullWidthButton]),(0,i.jsx)("div",{className:B?z.rootFullWidth:z.root,children:(0,i.jsx)(g.Z,{variant:"contained",className:B?z.buttonFullWidth:z.button,disabled:null!==(e=t.isButtonDisable)&&void 0!==e&&e,onClick:function(){void 0!=t.onClickCallback&&t.onClickCallback()},children:t.lable})})}m.displayName="CentralizeButton";var p=n(9227);function h(t){var e=function(){var t=(0,f.useState)([0,0]),e=t[0],n=t[1];return(0,f.useLayoutEffect)((function(){function t(){n([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",t),t(),function(){return window.removeEventListener("resize",t)}}),[]),e}(),n=(0,p.Z)(e,2),i=n[0];n[1];return i<700?t.mobile:i<=800&&i>700?t.tablet:t.web}function x(t){var e,n,r=function(){var e;return null!==(e=t.imageTagHeader)&&void 0!==e?e:"/jio.jpeg"};return(0,i.jsxs)("div",{style:{width:"100%",height:"100vh",display:"flex"},children:[(0,i.jsx)(h,{mobile:(0,i.jsx)(i.Fragment,{}),tablet:(0,i.jsx)(i.Fragment,{}),web:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(u.Z,{style:{position:"relative",width:"50%",height:"100vh",backgroundColor:"#093891",elevation:"10",borderRadius:"0 16px 16px 0",objectFit:"cover"},children:(0,i.jsx)(o.default,{src:"/jio.jpeg",loader:function(){var e;return null!==(e=t.imageTag)&&void 0!==e?e:"/jio.jpeg"},layout:"fill",objectFit:null!==(e=t.objectFit)&&void 0!==e?e:"cover",objectPosition:"center"})})})}),(0,i.jsx)(h,{mobile:(0,i.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column"},children:[(0,i.jsx)(o.default,{src:"/jio.jpeg",loader:r,width:"10wh",height:"300px",objectFit:"cover",objectPosition:"center"}),(0,i.jsx)(d,{width:"100%",marginLeft:"40px",marginRight:"40px",marginTop:"60px",marginBottom:"10px",fontSize:a.FONT_SIZE_MOBILE,label:"Enter Email ID"}),(0,i.jsx)(d,{width:"100%",marginLeft:"40px",marginRight:"40px",marginTop:"10px",marginBottom:"60px",fontSize:a.FONT_SIZE_MOBILE,type:"password",label:"Enter Password"}),(0,i.jsx)(m,{lable:"Login",fullWidthButton:!0,marginTop:"20px",marginBottom:"60px",marginLeft:"80px",marginRight:"80px",fontSize:a.FONT_SIZE_MOBILE})]}),tablet:(0,i.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column"},children:[(0,i.jsx)(o.default,{src:"/jio.jpeg",loader:r,width:"10wh",height:"300px",objectFit:"cover",objectPosition:"center"}),(0,i.jsx)(d,{width:"100%",marginLeft:"40px",marginRight:"40px",marginTop:"60px",marginBottom:"10px",fontSize:a.FONT_SIZE_MOBILE,label:"Enter Email ID"}),(0,i.jsx)(d,{width:"100%",marginLeft:"40px",marginRight:"40px",marginTop:"10px",marginBottom:"60px",fontSize:a.FONT_SIZE_MOBILE,type:"password",label:"Enter Password"}),(0,i.jsx)(m,{lable:"Login",fullWidthButton:!0,marginTop:"20px",marginBottom:"60px",marginLeft:"80px",marginRight:"80px",fontSize:a.FONT_SIZE_MOBILE})]}),web:(0,i.jsxs)("div",{style:{width:"50%",margin:"0 35px 0 35px",display:"flex",flexDirection:"column"},children:[(0,i.jsx)(c,{text:null!==(n=t.text)&&void 0!==n?n:"Welcome to Jio",fontSize:a.HEADER_WEB,marginLeft:"60px",marginRight:"60px",marginTop:"120px",marginBottom:"20px",alignment:"center"}),(0,i.jsx)(d,{width:"100%",marginLeft:"60px",marginRight:"60px",marginTop:"60px",marginBottom:"20px",label:"Enter Email ID",fontSize:a.FONT_SIZE_WEB}),(0,i.jsx)(d,{width:"100%",marginLeft:"60px",marginRight:"60px",marginTop:"20px",marginBottom:"60px",label:"Enter Password",type:"password",fontSize:a.FONT_SIZE_WEB}),(0,i.jsx)(m,{lable:"Login",fullWidthButton:!0,marginTop:"60px",marginBottom:"60px",marginLeft:"120px",marginRight:"120px",fontSize:a.FONT_SIZE_WEB})]})})]})}h.displayName="ScreenSize"},8581:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4034)}])}},function(t){t.O(0,[753,774,888,179],(function(){return e=8581,t(t.s=e);var e}));var e=t.O();_N_E=e}]);