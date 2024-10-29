"use strict";(self.webpackChunkmetro_website=self.webpackChunkmetro_website||[]).push([[9514,4972],{19963:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ke});var n=a(67294),r=a(86010),l=a(10833),o=a(35281),i=a(43320),c=a(53791),d=a(74477),s=a(1116),u=a(1119),m=a(95999),b=a(12466),p=a(85936);const f={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function h(){var e=function(e){var t=e.threshold,a=(0,n.useState)(!1),r=a[0],l=a[1],o=(0,n.useRef)(!1),i=(0,b.Ct)(),c=i.startScroll,d=i.cancelScroll;return(0,b.RF)((function(e,a){var n=e.scrollY,r=null==a?void 0:a.scrollY;r&&(o.current?o.current=!1:n>=r?(d(),l(!1)):n<t?l(!1):n+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((function(e){e.location.hash&&(o.current=!0,l(!1))})),{shown:r,scrollToTop:function(){return c(0)}}}({threshold:300}),t=e.shown,a=e.scrollToTop;return n.createElement("button",{"aria-label":(0,m.translate)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.default)("clean-btn",o.k.common.backToTopButton,f.backToTopButton,t&&f.backToTopButtonShow),type:"button",onClick:a})}var v=a(91442),E=a(16550),g=a(87524),k=a(86668),_=a(21327),C=a(87462);function S(e){return n.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const N={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function I(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,m.translate)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.translate)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.default)("button button--secondary button--outline",N.collapseSidebarButton),onClick:t},n.createElement(S,{className:N.collapseSidebarButtonIcon}))}var x=a(59689),T=a(63366),B=a(69688),w=Symbol("EmptyContext"),y=n.createContext(w);function L(e){var t=e.children,a=(0,n.useState)(null),r=a[0],l=a[1],o=(0,n.useMemo)((function(){return{expandedItem:r,setExpandedItem:l}}),[r]);return n.createElement(y.Provider,{value:o},t)}var A=a(86043),H=a(48596),M=a(39960),P=a(72389),F=["item","onItemClick","activePath","level","index"];function Z(e){var t=e.categoryLabel,a=e.onClick;return n.createElement("button",{"aria-label":(0,m.translate)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function W(e){var t=e.item,a=e.onItemClick,l=e.activePath,i=e.level,d=e.index,s=(0,T.Z)(e,F),u=t.items,m=t.label,b=t.collapsible,p=t.className,f=t.href,h=(0,k.L)().docs.sidebar.autoCollapseCategories,v=function(e){var t=(0,P.default)();return(0,n.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),E=(0,c._F)(t,l),g=(0,H.Mg)(f,l),_=(0,A.u)({initialState:function(){return!!b&&(!E&&t.collapsed)}}),S=_.collapsed,N=_.setCollapsed,I=function(){var e=(0,n.useContext)(y);if(e===w)throw new B.i6("DocSidebarItemsExpandedStateProvider");return e}(),x=I.expandedItem,L=I.setExpandedItem,W=function(e){void 0===e&&(e=!S),L(e?null:d),N(e)};return function(e){var t=e.isActive,a=e.collapsed,r=e.updateCollapsed,l=(0,B.D9)(t);(0,n.useEffect)((function(){t&&!l&&a&&r(!1)}),[t,l,a,r])}({isActive:E,collapsed:S,updateCollapsed:W}),(0,n.useEffect)((function(){b&&null!=x&&x!==d&&h&&N(!0)}),[b,x,d,N,h]),n.createElement("li",{className:(0,r.default)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":S},p)},n.createElement("div",{className:(0,r.default)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},n.createElement(M.default,(0,C.Z)({className:(0,r.default)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!f&&b,"menu__link--active":E}),onClick:b?function(e){null==a||a(t),f?W(!1):(e.preventDefault(),W())}:function(){null==a||a(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!S:void 0,href:b?null!=v?v:"#":v},s),m),f&&b&&n.createElement(Z,{categoryLabel:m,onClick:function(e){e.preventDefault(),W()}})),n.createElement(A.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:S},n.createElement(X,{items:u,tabIndex:S?-1:0,onItemClick:a,activePath:l,level:i+1})))}var D=a(13919),R=a(39471);const V={menuExternalLink:"menuExternalLink_NmtK"};var U=["item","onItemClick","activePath","level","index"];function z(e){var t=e.item,a=e.onItemClick,l=e.activePath,i=e.level,d=(e.index,(0,T.Z)(e,U)),s=t.href,u=t.label,m=t.className,b=t.autoAddBaseUrl,p=(0,c._F)(t,l),f=(0,D.Z)(s);return n.createElement("li",{className:(0,r.default)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",m),key:u},n.createElement(M.default,(0,C.Z)({className:(0,r.default)("menu__link",!f&&V.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:s},f&&{onClick:a?function(){return a(t)}:void 0},d),u,!f&&n.createElement(R.Z,null)))}const K={menuHtmlItem:"menuHtmlItem_M9Kj"};function j(e){var t=e.item,a=e.level,l=e.index,i=t.value,c=t.defaultStyle,d=t.className;return n.createElement("li",{className:(0,r.default)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(a),c&&[K.menuHtmlItem,"menu__list-item"],d),key:l,dangerouslySetInnerHTML:{__html:i}})}var q=["item"];function G(e){var t=e.item,a=(0,T.Z)(e,q);switch(t.type){case"category":return n.createElement(W,(0,C.Z)({item:t},a));case"html":return n.createElement(j,(0,C.Z)({item:t},a));default:return n.createElement(z,(0,C.Z)({item:t},a))}}var Y=["items"];function O(e){var t=e.items,a=(0,T.Z)(e,Y);return n.createElement(L,null,t.map((function(e,t){return n.createElement(G,(0,C.Z)({key:t,item:e,index:t},a))})))}const X=(0,n.memo)(O),J={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function Q(e){var t=e.path,a=e.sidebar,l=e.className,i=function(){var e=(0,x.nT)().isActive,t=(0,n.useState)(e),a=t[0],r=t[1];return(0,b.RF)((function(t){var a=t.scrollY;e&&r(0===a)}),[e]),e&&a}();return n.createElement("nav",{"aria-label":(0,m.translate)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,r.default)("menu thin-scrollbar",J.menu,i&&J.menuWithAnnouncementBar,l)},n.createElement("ul",{className:(0,r.default)(o.k.docs.docSidebarMenu,"menu__list")},n.createElement(X,{items:a,activePath:t,level:1})))}const $={sidebar:"sidebar_njMd",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_wUlq",sidebarHidden:"sidebarHidden_VK0M",sidebarLogo:"sidebarLogo_isFc"};function ee(e){var t=e.path,a=e.sidebar,l=e.onCollapse,o=e.isHidden,i=(0,k.L)(),c=i.navbar.hideOnScroll,d=i.docs.sidebar.hideable;return n.createElement("div",{className:(0,r.default)($.sidebar,c&&$.sidebarWithHideableNavbar,o&&$.sidebarHidden)},c&&n.createElement(_.Z,{tabIndex:-1,className:$.sidebarLogo}),n.createElement(Q,{path:t,sidebar:a}),d&&n.createElement(I,{onClick:l}))}const te=n.memo(ee);var ae=a(13102),ne=a(93163),re=function(e){var t=e.sidebar,a=e.path,l=(0,ne.e)();return n.createElement("ul",{className:(0,r.default)(o.k.docs.docSidebarMenu,"menu__list")},n.createElement(X,{items:t,activePath:a,onItemClick:function(e){"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function le(e){return n.createElement(ae.Zo,{component:re,props:e})}const oe=n.memo(le);function ie(e){var t=(0,g.i)(),a="desktop"===t||"ssr"===t,r="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(te,e),r&&n.createElement(oe,e))}const ce={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function de(e){var t=e.toggleSidebar;return n.createElement("div",{className:ce.expandButton,title:(0,m.translate)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.translate)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(S,{className:ce.expandButtonIcon}))}const se={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function ue(e){var t,a=e.children,r=(0,s.V)();return n.createElement(n.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},a)}function me(e){var t=e.sidebar,a=e.hiddenSidebarContainer,l=e.setHiddenSidebarContainer,i=(0,E.TH)().pathname,c=(0,n.useState)(!1),d=c[0],s=c[1],u=(0,n.useCallback)((function(){d&&s(!1),!d&&(0,v.n)()&&s(!0),l((function(e){return!e}))}),[l,d]);return n.createElement("aside",{className:(0,r.default)(o.k.docs.docSidebarContainer,se.docSidebarContainer,a&&se.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(se.docSidebarContainer)&&a&&s(!0)}},n.createElement(ue,null,n.createElement("div",{className:(0,r.default)(se.sidebarViewport,d&&se.sidebarViewportHidden)},n.createElement(ie,{sidebar:t,path:i,onCollapse:u,isHidden:d}),d&&n.createElement(de,{toggleSidebar:u}))))}const be={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function pe(e){var t=e.hiddenSidebarContainer,a=e.children,l=(0,s.V)();return n.createElement("main",{className:(0,r.default)(be.docMainContainer,(t||!l)&&be.docMainContainerEnhanced)},n.createElement("div",{className:(0,r.default)("container padding-top--md padding-bottom--lg",be.docItemWrapper,t&&be.docItemWrapperEnhanced)},a))}const fe={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX","themedComponent--light":"themedComponent--light_NU7w"};function he(e){var t=e.children,a=(0,s.V)(),r=(0,n.useState)(!1),l=r[0],o=r[1];return n.createElement(u.Z,{wrapperClassName:fe.docsWrapper},n.createElement(h,null),n.createElement("div",{className:fe.docPage},a&&n.createElement(me,{sidebar:a.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),n.createElement(pe,{hiddenSidebarContainer:l},t)))}var ve=a(4972),Ee=a(90197);function ge(e){var t=e.versionMetadata;return n.createElement(n.Fragment,null,n.createElement(Ee.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),n.createElement(l.d,null,t.noIndex&&n.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function ke(e){var t=e.versionMetadata,a=(0,c.hI)(e);if(!a)return n.createElement(ve.default,null);var i=a.docElement,u=a.sidebarName,m=a.sidebarItems;return n.createElement(n.Fragment,null,n.createElement(ge,e),n.createElement(l.FG,{className:(0,r.default)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(d.q,{version:t},n.createElement(s.b,{name:u,items:m},n.createElement(he,null,i)))))}},4972:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(67294),r=a(95999),l=a(10833),o=a(1119);function i(){return n.createElement(n.Fragment,null,n.createElement(l.d,{title:(0,r.translate)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(o.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(r.default,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(r.default,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(r.default,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},74477:(e,t,a)=>{a.d(t,{E:()=>i,q:()=>o});var n=a(67294),r=a(69688),l=n.createContext(null);function o(e){var t=e.children,a=e.version;return n.createElement(l.Provider,{value:a},t)}function i(){var e=(0,n.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);