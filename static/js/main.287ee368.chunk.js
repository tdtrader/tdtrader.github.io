(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n.p+"static/media/logo.ac9f53f1.svg"},11:function(e,t,n){e.exports=n(22)},16:function(e,t,n){},19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),l=n.n(o),c=(n(16),n(1)),i=n(2),s=n(4),u=n(3),m=n(5),d=(n(17),n(18),n(19),function(){return a.createElement("form",{className:"validate input-group mb-3 td-trader-footer__subscribe-form",action:"https://tdtrader.us20.list-manage.com/subscribe/post?u=5b7695e66d89a9bedf569a9a9&id=8074d54825",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank",noValidate:!0},a.createElement("input",{htmlFor:"mce-EMAIL",type:"email",className:"required form-control",placeholder:"email address","aria-label":"Email address",id:"mce-EMAIL",name:"email"}),a.createElement("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true"},a.createElement("input",{type:"text",name:"b_5b7695e66d89a9bedf569a9a9_8074d54825",tabIndex:"-1",defaultValue:""})),a.createElement("div",{className:"input-group-append"},a.createElement("button",{className:"btn btn-outline-secondary",type:"submit"},"Subscribe")))}),h=function(){return a.createElement("div",null,a.createElement("h2",null,"Disclaimer"),a.createElement("p",null,"Before using this Telegram bot, please make sure that you note the following important information:"),a.createElement("h3",null,"Do your Own Research"),a.createElement("p",null,"Content produced by the bot is intended to be used and must be used for informational purposes only. It is very important to do your own analysis before making any investment based on your own personal circumstances. You should take independent financial advice from a professional in connection with, or independently research and verify,any information produced by the bot and wish to rely upon, whether for the purpose of making an investment decision or otherwise."),a.createElement("h3",null,"No Investment Advice"),a.createElement("p",null,"TDtrader.net is not a broker/dealer, we are not an investment advisor, we have no access to non-public information about publicly traded companies, and this is not a place for the giving or receiving of financial advice, advice concerning investment decisions or tax or legal advice. We are not regulated by the Financial Services Authority. Our bot offering is solely for informational & educational purposes so that users can easily run their own valuations."),a.createElement("h3",null,"No reliance"),a.createElement("p",null,"Accordingly, we will not be liable, whether in contract, tort (including negligence) or otherwise, in respect of any damage, expense or other loss you may suffer arising out of such information or any reliance you may place upon such information."),a.createElement("h3",null,"Investment Warnings"),a.createElement("p",null,"We would like to draw your attention to the following important investment warnings:"),a.createElement("ul",null,a.createElement("li",null,"The value of shares and investments and the income derived from them can go down as well as up;"),a.createElement("li",null,"Investors may not get back the amount they invested - losing one's shirt is a real risk;"),a.createElement("li",null,"Past performance is not a guide to future performance.")))},f=function(){return a.createElement("div",{className:"td-trader-footer"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row justify-content-lg-center"},a.createElement("div",{className:"col col-12 col-sm-12 col-md-8 col-lg-4"},a.createElement("h2",null,"Get updates"),a.createElement("p",null,"We are working on more features such as additional currency pairs, timeframes and exchanges. Sign up below for updates."),a.createElement(d,null)),a.createElement("div",{className:"col col-12 col-sm-12 col-md-12 col-lg-5 td-trader-footer__disclaimer"},a.createElement(h,null)))))},p=n(6),g=n.n(p),b=n(9),E={AlphabeticallyAscending:"AlphabeticallyAscending",AlphabeticallyDescending:"AlphabeticallyDescending",CountAscending:"CountAscending",CountDescending:"CountDescending"},w=function(e){var t=e.data,n=e.setSortType,r=e.currentSortType,o=e.onFilterTicker,l=e.onFilterName,c=e.onFilterCount,i=r===E.AlphabeticallyAscending,s=r===E.AlphabeticallyDescending,u=r===E.CountAscending,m=r===E.CountDescending;return a.createElement("table",{className:"td-trader-count-table"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{className:"sortable",onClick:function(){return n(i?E.AlphabeticallyDescending:E.AlphabeticallyAscending)}},"Ticker ",i&&a.createElement("i",{className:"fas fa-chevron-down"}),s&&a.createElement("i",{className:"fas fa-chevron-up"})),a.createElement("th",{className:"sortable",onClick:function(){return n(u?E.CountDescending:E.CountAscending)}},"Count ",u&&a.createElement("i",{className:"fas fa-chevron-down"}),m&&a.createElement("i",{className:"fas fa-chevron-up"})),a.createElement("th",null,"Name")),a.createElement("tr",null,a.createElement("th",null,a.createElement("input",{placeholder:"Filter ticker",onChange:function(e){return o(e.target.value)}})),a.createElement("th",null,a.createElement("input",{placeholder:"Filter count",type:"number",onChange:function(e){return c(e.target.value)}})),a.createElement("th",null,a.createElement("input",{placeholder:"Filter name",onChange:function(e){return l(e.target.value)}})))),a.createElement("tbody",null,t.map(function(e){return a.createElement("tr",{key:e.ticker},a.createElement("td",null,e.ticker),a.createElement("td",null,e.tdCount),a.createElement("td",null,e.name))})))},v=function(){return a.createElement("div",{className:"td-trader-loading-data"},"Loading data...")},y=function(e){e.error;return a.createElement("div",{className:"td-trader-fetch-error"},"Error loading data: ",(void 0).state.error)},C=function(e){var t=e.totalRows,n=e.rowShowCount,r=e.showMore,o=e.showAllRows,l=e.lastFetch,c=e.showActions,i=100;return n<=t&&t-n<=100&&(i=t-n),a.createElement(a.Fragment,null,a.createElement("div",{className:"td-trader-count-table-metadata"},a.createElement("div",null,a.createElement("strong",null,"Total rows:")," ",t),a.createElement("div",null,a.createElement("strong",null,"Showing:")," ",n),a.createElement("div",null,a.createElement("strong",null,"Last fetch:")," ",new Date(l).toLocaleString("en-US",{timeZone:"UTC"}))),c&&a.createElement("div",{className:"td-trader-count-table-metadata"},a.createElement("div",null,0!==i&&a.createElement("button",{className:"btn btn-secondary btn-sm",onClick:function(){return r(i)}},a.createElement("i",{className:"fas fa-plus"})," Show ",i," more"),0!==i&&a.createElement("button",{className:"btn btn-secondary btn-sm",onClick:o},a.createElement("i",{className:"fas fa-plus"})," Show all"))))},k=n(10),N=n.n(k),F=function(){return a.createElement(a.Fragment,null,a.createElement("img",{src:N.a,className:"td-trader-main-content__logo",alt:"logo"}),a.createElement("h1",null,"Sequential Countdown Tracker"),a.createElement("p",null,"TDtrader is a Telegram bot that keeps you up to date on the current TD count. You simply get a notification on every candle close."),a.createElement("a",{href:"http://t.me/TDupdater_bot",className:"btn btn-primary"},"Pair with Telegram",a.createElement("span",null,a.createElement("i",{className:"fab fa-telegram-plane"}))))},S=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).getMetaDataComponent=function(e,t,r){return a.createElement(C,{totalRows:t,rowShowCount:r,showMore:n.showMore,showAllRows:n.showAllRows,showTop100:n.showTop100,lastFetch:n.state.lastFetch,showActions:e})},n.onFilterTicker=function(e){n.setState({tickerFilter:e||null})},n.onFilterName=function(e){n.setState({nameFilter:e||null})},n.onFilterCount=function(e){n.setState({countFilter:e||null})},n.setSortType=function(e){n.setState({sortType:e})},n.showMore=function(e){n.setState({rowShowCount:n.state.rowShowCount+e})},n.showAllRows=function(){n.setState({rowShowCount:n.state.data.length})},n.showTop100=function(){n.setState({rowShowCount:100})},n.sortData=function(){var e,t=n.state.data;if(!t)return[];switch(n.state.sortType){case E.AlphabeticallyAscending:e=t.sort(function(e,t){return e.ticker<t.ticker?-1:t.ticker>e.ticker?1:0});break;case E.AlphabeticallyDescending:e=t.sort(function(e,t){return t.ticker<e.ticker?-1:e.ticker>t.ticker?1:0});break;case E.CountAscending:e=t.sort(function(e,t){return t.tdCount<e.tdCount?-1:e.tdCount>t.tdCount?1:0});break;case E.CountDescending:e=t.sort(function(e,t){return e.tdCount<t.tdCount?-1:t.tdCount>e.tdCount?1:0});break;default:e=t}return e},n.filterData=function(e){var t=n.state,a=t.countFilter,r=t.tickerFilter,o=t.nameFilter;return e.filter(function(e){var t=!r||e.ticker.toLowerCase().includes(r.toLowerCase()),n=!o||e.name.toLowerCase().includes(o.toLowerCase());return(!a||e.tdCount===parseInt(a,10))&&t&&n})},n.state={data:null,error:null,rowShowCount:100,lastFetch:null,sortType:E.CountAscending,tickerFilter:null,countFilter:null,nameFilter:null},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getData().catch(function(t){console.error("Issue fetching data"),e.setState({error:JSON.stringify(t),data:null})})}},{key:"getData",value:function(){var e=Object(b.a)(g.a.mark(function e(){var t,n,a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://tdtrader-cc108.firebaseio.com/stocks/.json",{cache:"no-store"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a=[],Object.keys(n).forEach(function(e){a.push({ticker:e,name:n[e].name,tdCount:n[e].TD_count})}),this.setState({data:a,error:null,lastFetch:Date.now()});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.sortData(),t=this.filterData(e),n=t.slice(0,this.state.rowShowCount);return a.createElement("div",{className:"td-trader-main-content"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row justify-content-between"},a.createElement("div",{className:"col col-sm-12 col-md-12 col-lg-4"},a.createElement(F,null)),a.createElement("div",{className:"col col-sm-12 col-md-12 col-lg-7"},this.state.data?a.createElement(a.Fragment,null,this.getMetaDataComponent(!1,t.length,n.length),a.createElement(w,{data:n,currentSortType:this.state.sortType,setSortType:this.setSortType,onFilterTicker:this.onFilterTicker,onFilterName:this.onFilterName,onFilterCount:this.onFilterCount}),this.getMetaDataComponent(!0,t.length,n.length)):this.state.error?a.createElement(y,{error:this.state.error}):a.createElement(v,null)))))}}]),t}(a.Component),A=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"td-trader"},r.a.createElement(S,null),r.a.createElement(f,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.287ee368.chunk.js.map