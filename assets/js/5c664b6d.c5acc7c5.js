(self.webpackChunkphpreel_org=self.webpackChunkphpreel_org||[]).push([[541],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var l=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,l,s=function(e,t){if(null==e)return{};var r,l,s={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var a=l.createContext({}),i=function(e){var t=l.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=i(e.components);return l.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),h=i(r),m=s,c=h["".concat(a,".").concat(m)]||h[m]||d[m]||n;return r?l.createElement(c,o(o({ref:t},p),{},{components:r})):l.createElement(c,o({ref:t},p))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,o=new Array(n);o[0]=h;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:s,o[1]=u;for(var i=2;i<n;i++)o[i]=r[i];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2249:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return i},toc:function(){return p},default:function(){return h}});var l=r(2122),s=r(9756),n=(r(7294),r(3905)),o=["components"],u={},a="UrlRoutes",i={unversionedId:"components/url-routes",id:"components/url-routes",isDocsHomePage:!1,title:"UrlRoutes",description:"UrlRoutes::subscribe()",source:"@site/docs/components/url-routes.md",sourceDirName:"components",slug:"/components/url-routes",permalink:"/components/url-routes",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Theme",permalink:"/components/theme"},next:{title:"UserHandler",permalink:"/components/user-handler"}},p=[{value:"UrlRoutes::subscribe()",id:"urlroutessubscribe",children:[]},{value:"UrlRoutes::search($query)",id:"urlroutessearchquery",children:[]},{value:"UrlRoutes::searchPost()",id:"urlroutessearchpost",children:[]},{value:"UrlRoutes::resetPasswordPost()",id:"urlroutesresetpasswordpost",children:[]},{value:"UrlRoutes::allMovies()",id:"urlroutesallmovies",children:[]},{value:"UrlRoutes::allSeries()",id:"urlroutesallseries",children:[]},{value:"UrlRoutes::movie($id)",id:"urlroutesmovieid",children:[]},{value:"UrlRoutes::movieTrailer($id)",id:"urlroutesmovietrailerid",children:[]},{value:"UrlRoutes::series($id)",id:"urlroutesseriesid",children:[]},{value:"UrlRoutes::seasonTrailer($id)",id:"urlroutesseasontrailerid",children:[]},{value:"UrlRoutes::episode($id)",id:"urlroutesepisodeid",children:[]},{value:"UrlRoutes::home()",id:"urlrouteshome",children:[]},{value:"UrlRoutes::login()",id:"urlrouteslogin",children:[]},{value:"UrlRoutes::loginPost()",id:"urlroutesloginpost",children:[]},{value:"UrlRoutes::register()",id:"urlroutesregister",children:[]},{value:"UrlRoutes::registerPost()",id:"urlroutesregisterpost",children:[]},{value:"UrlRoutes::user()",id:"urlroutesuser",children:[]},{value:"UrlRoutes::logoutPost()",id:"urlrouteslogoutpost",children:[]},{value:"UrlRoutes::userUpdateLanguagePost()",id:"urlroutesuserupdatelanguagepost",children:[]},{value:"UrlRoutes::userManageSubscriptionPost()",id:"urlroutesusermanagesubscriptionpost",children:[]},{value:"UrlRoutes::subscribeStorePost()",id:"urlroutessubscribestorepost",children:[]}],d={toc:p};function h(e){var t=e.components,r=(0,s.Z)(e,o);return(0,n.kt)("wrapper",(0,l.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"urlroutes"},"UrlRoutes"),(0,n.kt)("h2",{id:"urlroutessubscribe"},"UrlRoutes::subscribe()"),(0,n.kt)("p",null,"Returns URL to the subscription list page."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/UrlRoutes.php"',title:'"/app/Helpers/Theme/UrlRoutes.php"'},"use UrlRoutes;\n\n...\n\nUrlRoutes::subscribe();\n\n")),(0,n.kt)("h2",{id:"urlroutessearchquery"},"UrlRoutes::search($query)"),(0,n.kt)("p",null,"Returns URL to a search result based on a given query."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$query")," Required string, query to search for")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/UrlRoutes.php"',title:'"/app/Helpers/Theme/UrlRoutes.php"'},"use UrlRoutes;\n\n...\n\nUrlRoutes::search('new movies');\n\n")),(0,n.kt)("h2",{id:"urlroutessearchpost"},"UrlRoutes::searchPost()"),(0,n.kt)("p",null,"POST: Query the database to search for a movie or series."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The parameters listed bellow must be sent to this POST route in order to make it work.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_token")," Required string, with every post request with Laravel you must add a hidden input with the value of csrf_token() or just use @csrf Blade directive"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"query")," Required string maximum 255 characters, word or group of words to search for in the database")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/UrlRoutes.php"',title:'"/app/Helpers/Theme/UrlRoutes.php"'},"use UrlRoutes;\n\n...\n\nUrlRoutes::searchPost();\n\n")),(0,n.kt)("h2",{id:"urlroutesresetpasswordpost"},"UrlRoutes::resetPasswordPost()"),(0,n.kt)("p",null,"POST: Reset the password of a user."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The parameters listed bellow must be sent to this POST route in order to make it work.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_token")," Required string, with every post request with Laravel you must add a hidden input with the value of csrf_token() or just use @csrf Blade directive"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"email")," Required string, email address to which the account is registered")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/UrlRoutes.php"',title:'"/app/Helpers/Theme/UrlRoutes.php"'},"use UrlRoutes;\n\n...\n\nUrlRoutes::resetPasswordPost();\n\n")),(0,n.kt)("h2",{id:"urlroutesallmovies"},"UrlRoutes::allMovies()"),(0,n.kt)("p",null,"Returns URL to the all movies page."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/UrlRoutes.php"',title:'"/app/Helpers/Theme/UrlRoutes.php"'},"use UrlRoutes;\n\n...\n\nUrlRoutes::allMovies();\n\n")),(0,n.kt)("h2",{id:"urlroutesallseries"},"UrlRoutes::allSeries()"),(0,n.kt)("p",null,"Returns URL to the all series page."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/UrlRoutes.php"',title:'"/app/Helpers/Theme/UrlRoutes.php"'},"use UrlRoutes;\n\n...\n\nUrlRoutes::allSeries();\n\n")),(0,n.kt)("h2",{id:"urlroutesmovieid"},"UrlRoutes::movie($id)"),(0,n.kt)("p",null,"Returns URL to the a particular movie based on an id."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"id")," Required int, id of the movie to search for")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/UrlRoutes.php"',title:'"/app/Helpers/Theme/UrlRoutes.php"'},"use UrlRoutes;\n\n...\n\n//Get movie with id = 2\nUrlRoutes::movie(2);\n\n")),(0,n.kt)("h2",{id:"urlroutesmovietrailerid"},"UrlRoutes::movieTrailer($id)"),(0,n.kt)("p",null,"Returns URL to the a particular movie trailer based on an id."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"id")," Required int, id of the movie trailer to search for")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/UrlRoutes.php"',title:'"/app/Helpers/Theme/UrlRoutes.php"'},"use UrlRoutes;\n\n...\n\n//Get movie trailer with id = 2\nUrlRoutes::movieTrailer(2);\n\n")),(0,n.kt)("h2",{id:"urlroutesseriesid"},"UrlRoutes::series($id)"),(0,n.kt)("p",null,"Returns URL to the a particular series based on an id."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"id")," Required int, id of the series to search for")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/UrlRoutes.php"',title:'"/app/Helpers/Theme/UrlRoutes.php"'},"use UrlRoutes;\n\n...\n\n//Get series with id = 2\nUrlRoutes::series(2);\n\n")),(0,n.kt)("h2",{id:"urlroutesseasontrailerid"},"UrlRoutes::seasonTrailer($id)"),(0,n.kt)("p",null,"Returns URL to the a particular season trailer based on an id."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"id")," Required int, id of the season trailer to search for")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/UrlRoutes.php"',title:'"/app/Helpers/Theme/UrlRoutes.php"'},"use UrlRoutes;\n\n...\n\n//Get season trailer with id = 2\nUrlRoutes::seasonTrailer(2);\n\n")),(0,n.kt)("h2",{id:"urlroutesepisodeid"},"UrlRoutes::episode($id)"),(0,n.kt)("p",null,"Returns URL to the a particular episode based on an id."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"id")," Required int, id of the episode to search for")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/UrlRoutes.php"',title:'"/app/Helpers/Theme/UrlRoutes.php"'},"use UrlRoutes;\n\n...\n\n//Get episode with id = 2\nUrlRoutes::episode(2);\n\n")),(0,n.kt)("h2",{id:"urlrouteshome"},"UrlRoutes::home()"),(0,n.kt)("p",null,"Returns URL to the home."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/UrlRoutes.php"',title:'"/app/Helpers/Theme/UrlRoutes.php"'},"use UrlRoutes;\n\n...\n\nUrlRoutes::home();\n\n")),(0,n.kt)("h2",{id:"urlrouteslogin"},"UrlRoutes::login()"),(0,n.kt)("p",null,"Returns URL to the login page."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/UrlRoutes.php"',title:'"/app/Helpers/Theme/UrlRoutes.php"'},"use UrlRoutes;\n\n...\n\nUrlRoutes::login();\n\n")),(0,n.kt)("h2",{id:"urlroutesloginpost"},"UrlRoutes::loginPost()"),(0,n.kt)("p",null,"POST: Login a user."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The parameters listed bellow must be sent to this POST route in order to make it work.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_token")," Required string, with every post request with Laravel you must add a hidden input with the value of csrf_token() or just use @csrf Blade directive"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"email")," Required string, email address to which the account is registered"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"password")," Required string, password that corresponds to the email"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"remember")," Required string, checkbox if the user should be remembered when he comes back")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/UrlRoutes.php"',title:'"/app/Helpers/Theme/UrlRoutes.php"'},"use UrlRoutes;\n\n...\n\nUrlRoutes::loginPost();\n\n")),(0,n.kt)("h2",{id:"urlroutesregister"},"UrlRoutes::register()"),(0,n.kt)("p",null,"Returns URL to the register page."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/UrlRoutes.php"',title:'"/app/Helpers/Theme/UrlRoutes.php"'},"use UrlRoutes;\n\n...\n\nUrlRoutes::register();\n\n")),(0,n.kt)("h2",{id:"urlroutesregisterpost"},"UrlRoutes::registerPost()"),(0,n.kt)("p",null,"POST: Register new account."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The parameters listed bellow must be sent to this POST route in order to make it work.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_token")," Required string, with every post request with Laravel you must add a hidden input with the value of csrf_token() or just use @csrf Blade directive"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name")," Required string, name of the user"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"email")," Required string"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"password")," Required string"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"password_confirmation")," Required string")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/UrlRoutes.php"',title:'"/app/Helpers/Theme/UrlRoutes.php"'},"use UrlRoutes;\n\n...\n\nUrlRoutes::registerPost();\n\n")),(0,n.kt)("h2",{id:"urlroutesuser"},"UrlRoutes::user()"),(0,n.kt)("p",null,"Returns URL to the user config page."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/UrlRoutes.php"',title:'"/app/Helpers/Theme/UrlRoutes.php"'},"use UrlRoutes;\n\n...\n\nUrlRoutes::user();\n\n")),(0,n.kt)("h2",{id:"urlrouteslogoutpost"},"UrlRoutes::logoutPost()"),(0,n.kt)("p",null,"POST: Logout from the account."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The parameters listed bellow must be sent to this POST route in order to make it work.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_token")," Required string, with every post request with Laravel you must add a hidden input with the value of csrf_token() or just use @csrf Blade directive")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/UrlRoutes.php"',title:'"/app/Helpers/Theme/UrlRoutes.php"'},"use UrlRoutes;\n\n...\n\nUrlRoutes::logoutPost();\n\n")),(0,n.kt)("h2",{id:"urlroutesuserupdatelanguagepost"},"UrlRoutes::userUpdateLanguagePost()"),(0,n.kt)("p",null,"POST: Update the language of a particular user."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The parameters listed bellow must be sent to this POST route in order to make it work.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_token")," Required string, with every post request with Laravel you must add a hidden input with the value of csrf_token() or just use @csrf Blade directive"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"language")," Required int, id to be set as default for the user")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/UrlRoutes.php"',title:'"/app/Helpers/Theme/UrlRoutes.php"'},"use UrlRoutes;\n\n...\n\nUrlRoutes::userUpdateLanguagePost();\n\n")),(0,n.kt)("h2",{id:"urlroutesusermanagesubscriptionpost"},"UrlRoutes::userManageSubscriptionPost()"),(0,n.kt)("p",null,"POST: Redirect user to Stripe subscription manager."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The parameters listed bellow must be sent to this POST route in order to make it work.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_token")," Required string, with every post request with Laravel you must add a hidden input with the value of csrf_token() or just use @csrf Blade directive")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/UrlRoutes.php"',title:'"/app/Helpers/Theme/UrlRoutes.php"'},"use UrlRoutes;\n\n...\n\nUrlRoutes::userManageSubscriptionPost();\n\n")),(0,n.kt)("h2",{id:"urlroutessubscribestorepost"},"UrlRoutes::subscribeStorePost()"),(0,n.kt)("p",null,"POST: Redirect user to Stripe checkout to create a new subscription."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The parameters listed bellow must be sent to this POST route in order to make it work.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_token")," Required string, with every post request with Laravel you must add a hidden input with the value of csrf_token() or just use @csrf Blade directive"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"plan")," Required string, plan name stripe that the user wants to subscribe to")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/UrlRoutes.php"',title:'"/app/Helpers/Theme/UrlRoutes.php"'},"use UrlRoutes;\n\n...\n\nUrlRoutes::userManageSubscriptionPost();\n\n")))}h.isMDXComponent=!0}}]);