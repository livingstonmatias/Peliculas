(this.webpackJsonppelis=this.webpackJsonppelis||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(8),l=t.n(r),s=t(3),o=(t(14),t(1)),m=t.n(o),i=t(2),u=Object(n.createContext)(null),d=function(){var e=Object(n.useContext)(u),a=e.setPeliculas,t=e.query,r=e.setQuery,l=e.setPagina,s=function(){var e=Object(i.a)(m.a.mark((function e(n){var c,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n&&n.preventDefault(),l(2),e.next=4,fetch("https://www.omdbapi.com/?apikey=a24689ae&s="+t);case 4:return c=e.sent,e.next=7,c.json();case 7:"True"===(r=e.sent).Response&&a(r.Search);case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),c.a.createElement("div",{className:"form-group py-4 row"},c.a.createElement("div",{className:"col-lg-4 col-md-12 offset-lg-4"},c.a.createElement("form",{onSubmit:s},c.a.createElement("input",{type:"text",className:"form-control form-control-lg rounded-pill",placeholder:"Buscar por el nombre de tu pelicula",value:t,onChange:function(e){return r(e.target.value)}}))))},p=function(){return c.a.createElement("div",{className:"w-100 h-100 d-flex justify-content-center"},c.a.createElement("div",{className:"lds-dual-ring"}))},b=function(e){var a=e.imdbID,t=Object(n.useState)(),r=Object(s.a)(t,2),l=r[0],o=r[1],u=function(){window.$("#modal-detalle-".concat(a)).modal("hide")},d=function(){var e=Object(i.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.omdbapi.com/?apikey=a24689ae&i="+a);case 2:return t=e.sent,e.next=5,t.json();case 5:(n=e.sent).imdbID&&o(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"btn btn-primary btn-sm",onClick:function(){window.$("#modal-detalle-".concat(a)).modal("show"),d()}},"Ver detalle"),c.a.createElement("div",{id:"modal-detalle-".concat(a),className:"modal text-dark",tabIndex:"-1",role:"dialog"},l&&c.a.createElement("div",{className:"modal-dialog modal-lg"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("h5",{className:"modal-title"},l.Title),c.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:u},c.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),c.a.createElement("div",{className:"modal-body row"},c.a.createElement("div",{className:"col-lg-5 col-md-12 d-flex justify-content-center"},c.a.createElement("img",{src:l.Poster})),c.a.createElement("div",{className:"col-lg-7 col-md-12"},c.a.createElement("div",{className:"d-flex flex-wrap"},c.a.createElement("span",{class:"badge badge-pill badge-info mx-1 my-1"},"A\xf1o: ",l.Year),c.a.createElement("span",{class:"badge badge-pill badge-info mx-1 my-1"},"Clasificacion: ",l.Rated),c.a.createElement("span",{class:"badge badge-pill badge-info mx-1 my-1"},"Duracion: ",l.Runtime),c.a.createElement("span",{class:"badge badge-pill badge-info mx-1 my-1"},"Genero: ",l.Genre)),c.a.createElement("div",{className:"mt-3"},l.Writer),c.a.createElement("div",{className:"mt-3"},c.a.createElement("strong",null,"Actores:")," ",l.Actors),c.a.createElement("div",{className:"mt-3"},c.a.createElement("ul",{class:"list-group"},l.Ratings.map((function(e){return c.a.createElement("li",{class:"list-group-item d-flex justify-content-between",key:e.Source},c.a.createElement("strong",null,e.Source),c.a.createElement("span",null,e.Value))})))))),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",onClick:u},"Cerrar")))),!l&&c.a.createElement(p,null)))},f=function(e){var a=e.Title,t=e.Year,n=e.imdbID,r=e.Type,l=e.Poster;return c.a.createElement("div",{className:"card w-100 h-100"},c.a.createElement("img",{src:l,className:"card-img-top",alt:"..."}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},a),c.a.createElement("div",{className:"card-text d-flex justify-content-between"},c.a.createElement("span",null,r),c.a.createElement("span",null,t)),c.a.createElement(b,{imdbID:n})))},E=t(6),g=function(){var e=Object(n.useContext)(u),a=e.peliculas,t=e.setPeliculas,r=e.query,l=e.pagina,s=e.setPagina,o=function(){var e=Object(i.a)(m.a.mark((function e(){var n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.omdbapi.com/?apikey=a24689ae&s=".concat(r,"&page=").concat(l));case 2:return n=e.sent,e.next=5,n.json();case 5:"True"===(c=e.sent).Response&&(s(l+1),t([].concat(Object(E.a)(a),Object(E.a)(c.Search))));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",null,a.length>0&&c.a.createElement("div",{className:"d-flex justify-content-center mt-4 mb-2 w-100"},c.a.createElement("button",{className:"btn btn-primary btn-sm",onClick:o},"Ver mas")))},v=function(){var e=Object(n.useContext)(u).peliculas;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"listado-peliculas"},e.map((function(e,a){return c.a.createElement("div",{key:a,className:"text-dark w-100"},c.a.createElement(f,e))}))),c.a.createElement(g,null))},h=["batman","avenger","dragon","guerra","hacker"];var w=function(){var e=1*Math.floor(4*Math.random()),a=h[e-1],t=Object(n.useState)([]),r=Object(s.a)(t,2),l=r[0],o=r[1],m=Object(n.useState)(a),i=Object(s.a)(m,2),p=i[0],b=i[1],f=Object(n.useState)(2),E=Object(s.a)(f,2),g=E[0],w=E[1];return c.a.createElement("div",{className:"App bg-dark text-light px-2"},c.a.createElement(u.Provider,{value:{peliculas:l,setPeliculas:o,query:p,setQuery:b,pagina:g,setPagina:w}},c.a.createElement(d,null),c.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.90bb23ea.chunk.js.map