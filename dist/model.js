!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t),n.d(t,"default",function(){return l});var a=document.getElementById("news-container"),o=document.getElementById("button-search"),i=document.getElementById("search-text"),u=document.getElementById("selector-sourses"),s=document.getElementById("load-more"),c="any source",l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.model=t,this.newsContainer=a,this.searchButton=o,this.searchInput=i,this.searchSource=u,this.loadMoreButton=s,this.anySource=c}var t,n,l;return t=e,(n=[{key:"NewNewsCard",value:function(e){var t=document.createElement("article");t.className="news__news-card";var n=document.createElement("h3");n.className="card-item card-header",n.textContent=e.title,t.appendChild(n);var r=document.createElement("img");r.className="card-item card-image",null!==e.urlToImage?r.setAttribute("src",e.urlToImage):r.setAttribute("src","../src/images/noPhoto.png"),t.appendChild(r);var a=document.createElement("p");a.className="card-item card-desrription",a.textContent=e.description,t.appendChild(a);var o=document.createElement("a");return o.setAttribute("href",e.url),o.setAttribute("target","_blank"),o.className=" card-item card-read-more",o.textContent="Read more",t.appendChild(o),t}},{key:"ShowNews",value:function(e,t){var n=this,r=document.createDocumentFragment();if(0!==e.length)e.forEach(function(e){r.appendChild(n.NewNewsCard(e)),n.model.countNews++});else if(1===this.model.currPage){var a=this.NoNewsFounded();r.appendChild(a)}this.model.countNews>(this.model.maxCountPages-1)*this.model.countNewsOnPage&&this.DisallowLoadingNews(s),e.length<5&&this.DisallowLoadingNews(s),this.newsContainer.appendChild(r)}},{key:"LoadSources",value:function(e){var t=document.createDocumentFragment(),n=document.getElementById("selector-sourses"),r=document.createElement("option");r.value=this.anySource,r.textContent=this.anySource;var a=e.sources;t.appendChild(r),a.forEach(function(e){var n=document.createElement("option");n.value=e.id,n.textContent=e.name,t.appendChild(n)}),n.appendChild(t)}},{key:"NoNewsFounded",value:function(){var e=document.createElement("p");return e.className="no-news-found",e.textContent="There are no articles matching your request",e}},{key:"DisallowLoadingNews",value:function(e){e.style.display="none"}},{key:"AllowLoadingNews",value:function(e){e.style.display="block"}},{key:"ClearScreen",value:function(){this.newsContainer.innerHTML="",this.AllowLoadingNews(s)}}])&&r(t.prototype,n),l&&r(t,l),e}()},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var r=n(0);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o="fde3140779fa420594d49f7c877160bc",i="https://newsapi.org/v2/sources?country=us&language=en",u="https://newsapi.org/v2/top-headlines?language=en",s=8,c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.view=new r.default(this),this.KeyApi=o,this.sourcesUrlHeading=i,this.newsUrlHeading=u,this.countNewsOnPage=5,this.maxCountPages=s,this.countNews=0,this.currPage=1}var t,n,c;return t=e,(n=[{key:"createUrl",value:function(e,t,n,r,a){var o=e;return null!=t&&(o+="&page="+t),null!=n&&(o+="&pageSize="+n),void 0!==r&&(o+="&q="+r),void 0!==a&&a!==this.view.anySource&&(o+="&sources="+a),o+="&apiKey="+this.KeyApi}},{key:"LoadSources",value:function(){var e=this,t=this.createUrl(this.sourcesUrlHeading,null,null,null,null),n=new Request(t);fetch(n).then(function(e){return e.json()}).then(function(t){t.status&&e.view.LoadSources(t)})}},{key:"ClearScreen",value:function(){this.view.ClearScreen()}},{key:"ShowNews",value:function(e,t){this.ClearScreen(),this.currPage=1,this.countNews=0,this.LoadNews(this.currPage,e,t)}},{key:"LoadMoreNews",value:function(e,t){this.currPage++,this.LoadNews(this.currPage,e,t)}},{key:"LoadNews",value:function(e,t,n){var r=this,a=this.createUrl(this.newsUrlHeading,e,5,t,n),o=new Request(a);fetch(o).then(function(e){return e.json()}).then(function(e){e.status&&r.view.ShowNews(e.articles)})}}])&&a(t.prototype,n),c&&a(t,c),e}()}]);