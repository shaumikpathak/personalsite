(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[6],{158:function(t,e,i){t.exports=function(){"use strict";var t="millisecond",e="second",i="minute",n="hour",s="day",r="week",a="month",o="quarter",c="year",u="date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,i){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(i)+t},m={s:f,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),n=Math.floor(i/60),s=i%60;return(e<=0?"+":"-")+f(n,2,"0")+":"+f(s,2,"0")},m:function t(e,i){if(e.date()<i.date())return-t(i,e);var n=12*(i.year()-e.year())+(i.month()-e.month()),s=e.clone().add(n,a),r=i-s<0,o=e.clone().add(n+(r?-1:1),a);return+(-(n+(i-s)/(r?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(l){return{M:a,y:c,w:r,d:s,D:u,h:n,m:i,s:e,ms:t,Q:o}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",g={};g[p]=d;var $=function(t){return t instanceof v},j=function(t,e,i){var n;if(!t)return p;if("string"==typeof t)g[t]&&(n=t),e&&(g[t]=e,n=t);else{var s=t.name;g[s]=t,n=s}return!i&&n&&(p=n),n||!i&&p},b=function(t,e){if($(t))return t.clone();var i="object"==typeof e?e:{};return i.date=t,i.args=arguments,new v(i)},y=m;y.l=j,y.i=$,y.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var v=function(){function d(t){this.$L=j(t.locale,null,!0),this.parse(t)}var f=d.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(l);if(n){var s=n[2]-1||0,r=(n[7]||"0").substring(0,3);return i?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,r)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return y},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var i=b(t);return this.startOf(e)<=i&&i<=this.endOf(e)},f.isAfter=function(t,e){return b(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<b(t)},f.$g=function(t,e,i){return y.u(t)?this[e]:this.set(i,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var l=this,h=!!y.u(o)||o,d=y.p(t),f=function(t,e){var i=y.w(l.$u?Date.UTC(l.$y,e,t):new Date(l.$y,e,t),l);return h?i:i.endOf(s)},m=function(t,e){return y.w(l.toDate()[t].apply(l.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(e)),l)},p=this.$W,g=this.$M,$=this.$D,j="set"+(this.$u?"UTC":"");switch(d){case c:return h?f(1,0):f(31,11);case a:return h?f(1,g):f(0,g+1);case r:var b=this.$locale().weekStart||0,v=(p<b?p+7:p)-b;return f(h?$-v:$+(6-v),g);case s:case u:return m(j+"Hours",0);case n:return m(j+"Minutes",1);case i:return m(j+"Seconds",2);case e:return m(j+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(r,o){var l,h=y.p(r),d="set"+(this.$u?"UTC":""),f=(l={},l[s]=d+"Date",l[u]=d+"Date",l[a]=d+"Month",l[c]=d+"FullYear",l[n]=d+"Hours",l[i]=d+"Minutes",l[e]=d+"Seconds",l[t]=d+"Milliseconds",l)[h],m=h===s?this.$D+(o-this.$W):o;if(h===a||h===c){var p=this.clone().set(u,1);p.$d[f](m),p.init(),this.$d=p.set(u,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[y.p(t)]()},f.add=function(t,o){var u,l=this;t=Number(t);var h=y.p(o),d=function(e){var i=b(l);return y.w(i.date(i.date()+Math.round(e*t)),l)};if(h===a)return this.set(a,this.$M+t);if(h===c)return this.set(c,this.$y+t);if(h===s)return d(1);if(h===r)return d(7);var f=(u={},u[i]=6e4,u[n]=36e5,u[e]=1e3,u)[h]||1,m=this.$d.getTime()+t*f;return y.w(m,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var i=t||"YYYY-MM-DDTHH:mm:ssZ",n=y.z(this),s=this.$locale(),r=this.$H,a=this.$m,o=this.$M,c=s.weekdays,u=s.months,l=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].substr(0,r)},d=function(t){return y.s(r%12||12,t,"0")},f=s.meridiem||function(t,e,i){var n=t<12?"AM":"PM";return i?n.toLowerCase():n},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:y.s(o+1,2,"0"),MMM:l(s.monthsShort,o,u,3),MMMM:l(u,o),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:l(s.weekdaysMin,this.$W,c,2),ddd:l(s.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(r),HH:y.s(r,2,"0"),h:d(1),hh:d(2),a:f(r,a,!0),A:f(r,a,!1),m:String(a),mm:y.s(a,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:n};return i.replace(h,(function(t,e){return e||m[t]||n.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,u,l){var h,d=y.p(u),f=b(t),m=6e4*(f.utcOffset()-this.utcOffset()),p=this-f,g=y.m(this,f);return g=(h={},h[c]=g/12,h[a]=g,h[o]=g/3,h[r]=(p-m)/6048e5,h[s]=(p-m)/864e5,h[n]=p/36e5,h[i]=p/6e4,h[e]=p/1e3,h)[d]||p,l?g:y.a(g)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return g[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var i=this.clone(),n=j(t,e,!0);return n&&(i.$L=n),i},f.clone=function(){return y.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},d}(),O=v.prototype;return b.prototype=O,[["$ms",t],["$s",e],["$m",i],["$H",n],["$W",s],["$M",a],["$y",c],["$D",u]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,v,b),t.$i=!0),b},b.locale=j,b.isDayjs=$,b.unix=function(t){return b(1e3*t)},b.en=g[p],b.Ls=g,b.p={},b}()},169:function(t,e,i){"use strict";i.r(e);var n=i(0),s=(i(1),i(5)),r=i(21),a=i(158),o=i.n(a),c=function(t){var e=t.data;return Object(n.jsx)("div",{className:"cell-container",children:Object(n.jsxs)("article",{className:"mini-post",children:[Object(n.jsxs)("header",{children:[Object(n.jsx)("h3",{children:Object(n.jsx)("a",{href:e.link,children:e.title})}),Object(n.jsx)("time",{className:"published",children:o()(e.date).format("MMMM, YYYY")})]}),Object(n.jsxs)("div",{className:"slider",children:[Object(n.jsx)("span",{id:"slide-1"}),Object(n.jsx)("span",{id:"slide-2"}),Object(n.jsx)("span",{id:"slide-3"}),Object(n.jsx)("div",{className:"image-container",children:Object(n.jsxs)("a",{href:e.link,className:"image",children:[Object(n.jsx)("img",{src:"".concat("/personalsite").concat(e.image1),alt:e.title}),Object(n.jsx)("img",{src:"".concat("/personalsite").concat(e.image2),alt:e.title}),Object(n.jsx)("img",{src:"".concat("/personalsite").concat(e.image3),alt:e.title}),Object(n.jsx)("img",{src:"".concat("/personalsite").concat(e.image4),alt:e.title})]})}),Object(n.jsxs)("div",{className:"buttons",children:[Object(n.jsx)("a",{href:"#slide-1",children:" "}),Object(n.jsx)("a",{href:"#slide-2",children:" "}),Object(n.jsx)("a",{href:"#slide-3",children:" "})]})]}),Object(n.jsx)("div",{className:"description",children:Object(n.jsx)("p",{children:e.desc})})]})})},u=[{title:"Splits",subtitle:"iOS Application",image1:"/images/projects/splits.png ",image2:"/images/projects/catdetector.jpg",image3:"",image4:"",link:"https://github.com/shaumikpathak/iOSApplication",date:"2021-03-15",desc:"Splits is an app that conveniently splits a bill, receipt, or payment among two or more people. Scan your receipt to automatically import your receipt items, and receive a text with your split details! It uses OCR to scan your receipts and itemized each item and asign it a price.It uses firebase functions to successfully implement a payment gateway using Twilio API"},{title:"Clustering Project",subtitle:"",link:"https://github.com/shaumikpathak/ML_grocery",image1:"/images/projects/ML_gif.gif",image2:"",image3:"",image4:"",date:"2015-09-20",desc:"The goal for this project was to create a product that can help solve the problem small online retailers face when it comes to effective customer-centric marketing using the the data available. Data preparation (such as getting the RFM values), model tuning, and cluster analysis were the most time consuming and critical areas of work. A measure of success for this case study of unsupervised machine learning is the ability to make meaningful inferences of our data and to apply that knowledge to a final product. We were able to successfully implement market segmentation by processing and clustering the data into the right amount of clusters such that there were obvious segments of customer behaviors. Finally, we created a user friendly web interface that can give helpful marketing recommendations."},{title:"Lost and Found",subtitle:"A kickstarter funded potato powered weather balloon.",link:"https://github.com/shaumikpathak/lostandFound/",image1:"/images/projects/LostAndFound.gif",image2:"",image3:"",image4:"",date:"2020-06-15",desc:"This project helps UC Davis students and falculty to find the lost items in school or adding the found items in this web app Uses different Google APIs such as google oAuth for sign in functionlity for only UC Davis students and google maps API to help users enter the location where they found the lost objects."}];e.default=function(){return Object(n.jsx)(r.a,{title:"Projects",description:"Learn about Michael D'Angelo's projects.",children:Object(n.jsxs)("article",{className:"post",id:"projects",children:[Object(n.jsx)("header",{children:Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("h2",{"data-testid":"heading",children:Object(n.jsx)(s.b,{to:"/projects",children:"Projects"})}),Object(n.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),u.map((function(t){return Object(n.jsx)(c,{data:t},t.title)}))]})})}}}]);
//# sourceMappingURL=6.b009d581.chunk.js.map