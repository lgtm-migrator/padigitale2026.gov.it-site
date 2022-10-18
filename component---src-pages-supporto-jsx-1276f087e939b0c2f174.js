"use strict";(self.webpackChunkpadigitale2026=self.webpackChunkpadigitale2026||[]).push([[189],{9150:function(e,a,t){var r=t(4038),i=t(1531),n=t(7294),l=t(2565),o=t.n(l),c=t(3033),s=function(e){var a=e.className,t=e.listClassName,l=e.cssModule,s=e.children,m=e.tag,d=e.listTag,p=e["aria-label"],u=(0,i.Z)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),f=(0,c.mx)(o()(a),l),g=(0,c.mx)(o()("breadcrumb",t),l);return n.createElement(m,(0,r.Z)({},u,{className:f,"aria-label":p}),n.createElement(d,{className:g},s))};s.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.Z=s},2590:function(e,a,t){var r=t(4038),i=t(1531),n=t(7294),l=t(2565),o=t.n(l),c=t(3033),s=function(e){var a=e.className,t=e.cssModule,l=e.active,s=e.tag,m=(0,i.Z)(e,["className","cssModule","active","tag"]),d=(0,c.mx)(o()(a,!!l&&"active","breadcrumb-item"),t);return n.createElement(s,(0,r.Z)({},m,{className:d,"aria-current":l?"page":void 0}))};s.defaultProps={tag:"li"},a.Z=s},9092:function(e,a,t){var r=t(4038),i=t(1531),n=t(7294),l=t(2565),o=t.n(l),c=t(3033),s=function(e){var a=e.className,t=e.cssModule,l=e.innerRef,s=e.tag,m=(0,i.Z)(e,["className","cssModule","innerRef","tag"]),d=(0,c.mx)(o()(a,"card-body"),t);return n.createElement(s,(0,r.Z)({},m,{className:d,ref:l}))};s.defaultProps={tag:"div"},a.Z=s},8578:function(e,a,t){var r=t(4038),i=t(1531),n=t(7294),l=t(2565),o=t.n(l),c=t(3033),s=function(e){var a=e.className,t=e.cssModule,l=e.tag,s=(0,i.Z)(e,["className","cssModule","tag"]),m=(0,c.mx)(o()(a,"card-text"),t);return n.createElement(l,(0,r.Z)({},s,{className:m}))};s.defaultProps={tag:"p"},a.Z=s},6791:function(e,a,t){var r=t(4038),i=t(1531),n=t(7294),l=t(2565),o=t.n(l),c=t(3033),s=function(e){var a=e.className,t=e.cssModule,l=e.tag,s=(0,i.Z)(e,["className","cssModule","tag"]),m=(0,c.mx)(o()(a,"card-title"),t);return n.createElement(l,(0,r.Z)({},s,{className:m}))};s.defaultProps={tag:"div"},a.Z=s},7274:function(e,a,t){t.d(a,{V:function(){return l}});var r=t(7294),i=t(5900),n=t.n(i),l=function(e){var a=e.bgColor,t=void 0===a?"":a,i=e.xPadding,l=void 0===i||i,o=e.className,c=e.yPaddingXLScreen,s=void 0===c||c,m=e.Tag,d=void 0===m?"div":m,p=e.ariaLabelledBy,u=e.children,f=n()("py-5",{"bg-primary":"primary"===t,"lightgrey-bg-a2":"light"===t},o),g=n()("container",{"py-3":s,"px-3":l});return r.createElement("div",{className:f},r.createElement(d,{className:g,"aria-labelledby":p},u))}},4270:function(e,a,t){t.d(a,{$:function(){return n}});var r=t(7294),i=(0,t(9063).QM)({body:{color:"#33485C",fontSize:"1.5rem",lineHeight:"1.5","@media (min-width: 992px)":{fontSize:"1.333rem"},"@media (max-width: 767px)":{textAlign:"center",display:"block"},"@media (max-width: 991px)":{fontSize:"1.25rem"}}}),n=function(e){var a=e.html,t=i();return r.createElement("div",{className:"hero-body "+t.body,dangerouslySetInnerHTML:{__html:a}})}},1038:function(e,a,t){t.d(a,{a:function(){return i}});var r=t(7294),i=function(e){var a=e.children;return r.createElement("div",{className:"mt-lg-4 text-lg-center d-flex flex-wrap justify-content-center justify-content-lg-start"},a)}},2476:function(e,a,t){t.d(a,{E:function(){return n}});var r=t(7294),i=(0,t(9063).QM)({heroGraphic:{}}),n=function(e){var a=e.className,t=void 0===a?"":a,n=e.children,l=i();return r.createElement("div",{className:l.heroGraphic+" "+t},n)}},6879:function(e,a,t){t.d(a,{L:function(){return n}});var r=t(7294),i=t(5444),n=function(e){var a=e.linkTo,t=void 0===a?null:a,n=e.title,l=e.className,o=void 0===l?"":l,c=e.Tag,s=e.id;return c||(c="h3"),r.createElement(c,{id:s,className:"h2 mb-4"},t?r.createElement(i.rU,{to:t,className:"text-decoration-none "+o},n):r.createElement("span",{className:""+o},n))}},4368:function(e,a,t){t.d(a,{B:function(){return c}});var r=t(7294),i=t(9063),n=t(9150),l=t(2590),o=(0,i.QM)({breadcrumb:{padding:"1.563rem 0 0","& .breadcrumb":{padding:"0.75rem 0"}},breadcrumbItem:{"& a":{color:"#5B6F82",fontWeight:"600",textDecoration:"underline",fontSize:"18px"},"&::before":{fontWeight:"600",color:"#33485C"}},breadcrumbItemActive:{"& a":{color:"#656566",textDecoration:"none",fontSize:"18px"},"&::before":{fontSize:"18px",fontWeight:"600",color:"#33485C"}},supportHero:{composes:"it-hero-wrapper",minHeight:"auto",backgroundColor:"#F0F6FC","&.it-hero-wrapper .it-hero-text-wrapper":{paddingTop:"48px"},"& .it-hero-text-wrapper":{paddingRight:"0",paddingLeft:"0","& p":{fontFamily:"Titillium Web, sans-serif"},"& .no_toc":{fontSize:"2.5rem",fontWeight:"700",color:"#33485C",lineHeight:"48px",marginBottom:"30px","@media (max-width: 991px)":{fontSize:"2.25rem",textAlign:"center"}},"& .support-hero-description":{fontSize:"24px",color:"#33485C",lineHeight:"1.5","@media (max-width: 991px)":{fontSize:"1.25rem",textAlign:"center"}}}}}),c=function(e){var a=e.title,t=e.subtitle,i=e.isFaq,c=o();return r.createElement(r.Fragment,null,r.createElement("div",{className:c.supportHero},r.createElement("div",{className:"container px-3"},i?r.createElement(n.Z,{className:c.breadcrumb},r.createElement(l.Z,{className:c.breadcrumbItem},r.createElement("a",{href:"/"},"Home"),r.createElement("span",{className:"separator"})),r.createElement(l.Z,{className:c.breadcrumbItem},r.createElement("a",{href:"/supporto"},"Supporto")),r.createElement(l.Z,{active:!0,className:c.breadcrumbItemActive},r.createElement("a",null,"Domande frequenti"))):r.createElement(n.Z,{className:c.breadcrumb},r.createElement(l.Z,{className:c.breadcrumbItem},r.createElement("a",{href:"/"},"Home"),r.createElement("span",{className:"separator"})),r.createElement(l.Z,{active:!0,className:c.breadcrumbItemActive},r.createElement("a",null,"Supporto"))),r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12 col-lg-8 col-xl-6 offset-lg-1"},r.createElement("div",{className:"it-hero-text-wrapper"},r.createElement("h1",{className:"no_toc"},a),r.createElement("p",{className:"support-hero-description",dangerouslySetInnerHTML:{__html:t}})))))))}},761:function(e,a,t){t.r(a),t.d(a,{default:function(){return B}});var r=t(7294),i=t(3849),n=JSON.parse('{"u2":"Supporto - PA digitale 2026","PL":{"title":"Hai bisogno di chiarimenti o supporto?","description":"Consulta le <strong>le domande frequenti</strong> o <strong>scrivici</strong> per ricevere una risposta via email"},"Bx":{"buttonLink":"/supporto/domande-frequenti","buttonLabel":"Vai alle domande frequenti","faqPreviewCards":[{"id":1,"title":"Chi può accedere a PA digitale 2026?","text":"Il rappresentante legale dell\'amministrazione, o una persona incaricata ad agire per suo conto, può accedere con SPID/CIE alla piattaforma. Durante la procedura di primo accesso alla piattaforma, è necessario selezionare e attivare il profilo della PA di riferimento.","faqId":"faq-1","ariaLabel":"Vai alla faq Chi può accedere a PA digitale 2026?"},{"id":2,"title":"Quali sono i requisiti per il primo accesso a PA digitale 2026?","text":"Per accedere alla piattaforma è necessario disporre della propria identità digitale (SPID o CIE) e della propria email istituzionale. Il rappresentante legale dell\'amministrazione (o chi opera per suo conto) deve inoltre avere la possibilità di consultare la PEC dell\'amministrazione per la quale intende operare.","faqId":"faq-2","ariaLabel":"Vai alla faq Quali sono i requisiti per il primo accesso a PA digitale 2026?"},{"id":3,"title":"È possibile accedere alla piattaforma anche quando non si ricopre il ruolo di rappresentante legale dell\'amministrazione?","text":"Si. Nel caso in cui a effettuare l\'accesso non sia direttamente il rappresentante legale ma una persona da lui incaricata, è presente una casella da spuntare per dichiarare di stare agendo per conto del rappresentante legale dell\'amministrazione. Alla fine della procedura di primo accesso, il rappresentante legale della PA riceve una PEC con cui viene a informato del fatto che la persona incaricata ha agito per suo conto su PA digitale 2026.","faqId":"faq-3","ariaLabel":"Vai alla faq È possibile accedere alla piattaforma anche quando non si ricopre il ruolo di rappresentante legale dell\'amministrazione?"}]},"ZY":{"title":"Richiedi assistenza","body":"Se non hai trovato le informazioni che cercavi fra le domande frequenti, <strong>scrivici</strong>: ti risponderemo al più presto","altImg":"immagine placeholder","btnText":"contattaci"}}'),l=t(974),o=t(7046),c=t(4368),s=t(9063),m=t(2980),d=t(7798),p=t(9092),u=t(6791),f=t(8578),g=t(6667),h=t(5444),x=t(6380),b=n.Bx,v=(0,s.QM)({faqPreview:{backgroundColor:"#F0F6FC",paddingBottom:"5.556rem"},faqCard:{composes:"card rounded","&.card":{boxShadow:"0px 0px 80px rgba(0, 43, 85, 0.1)",height:"100%","& .card-body":{display:"flex",flexDirection:"column",justifyContent:"space-between"},"& h3.card-title":{fontSize:"1.333rem",lineHeight:"1.32",fontWeight:"normal",minHeight:"5.333rem",marginBottom:"2.222rem","@media (max-width: 991px)":{minHeight:"unset"}},"& .card-text":{color:"#33485C",fontFamily:"Titillium Web",fontSize:"1rem",lineHeight:"1.28",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:3,overflow:"hidden",textOverflow:"ellipsis"},"&:after":{content:"none"},"&:hover":{"& h4.card-title":{textDecoration:"underline"}}}},btnWrapper:{display:"flex",justifyContent:"center",marginTop:"1.667rem","@media (min-width: 992px)":{marginTop:"2.778rem"},"& .btn":{textTransform:"uppercase","@media (max-width: 767px)":{width:"100%"}}},linkCard:{textDecoration:"none",height:"100%",display:"inline-flex","&:hover":{textDecoration:"none","& .card-title":{textDecoration:"underline"}},"& .card-wrapper":{height:"100%"}}}),E=function(){var e=v(),a=(0,r.useContext)(x.P)[1],t=b.faqPreviewCards.map((function(t){return r.createElement(r.Fragment,null,r.createElement(d.Z,{key:t.id,xs:"12",lg:"4"},r.createElement(h.rU,{to:"/supporto/domande-frequenti#"+t.faqId,onClick:function(){return a({type:"SET:FAQ_ID",payload:{faqId:t.faqId}})},className:e.linkCard,ariaLabel:t.ariaLabel},r.createElement(m.Zb,{className:e.faqCard},r.createElement(p.Z,null,r.createElement(u.Z,{tag:"h3"},t.title),r.createElement(f.Z,{dangerouslySetInnerHTML:{__html:t.text}}))))))}));return r.createElement(r.Fragment,null,r.createElement("div",{className:e.faqPreview},r.createElement("div",{className:"container px-3"},r.createElement(g.Z,null,t),r.createElement("div",{className:e.btnWrapper},r.createElement(h.rU,{to:"/supporto/domande-frequenti",className:"btn btn-primary text-uppercase"},b.buttonLabel)))))},N=t(6879),w=t(4270),y=t(1038),C=t(2476),q=t(7274),S=n.ZY,Z=S.title,P=S.body,I=S.btnText,T=(0,s.QM)({heroAssistanceBg:{backgroundColor:"#ffffff"},heroTitle:{color:"#33485C",fontSize:"1.556rem",fontWeight:"600","@media (min-width: 992px)":{fontSize:"1.778rem"},"@media (max-width: 767px)":{textAlign:"center",display:"block"}},heroBtn:{textTransform:"uppercase",marginTop:"1.5rem","@media (max-width: 991px)":{marginRight:"auto"},"@media (min-width: 991px)":{marginRight:"auto"},"@media (max-width: 767px)":{width:"100%"}},heroGraphic:{"& img":{width:"100%",maxWidth:"370px","@media (max-width: 991px)":{maxWidth:"310px"},"@media (max-width: 767px)":{width:"80%"}}}}),z=function(){var e=T();return r.createElement(r.Fragment,null,r.createElement(q.V,{className:e.heroAssistanceBg+" pt-0"},r.createElement("div",{className:"row align-items-center flex-column-reverse flex-lg-row"},r.createElement("div",{className:"offset-lg-1 col-lg-5 mt-3 mt-lg-0 pr-lg-5"},r.createElement(N.L,{title:Z,className:e.heroTitle,Tag:"h2"}),r.createElement(w.$,{html:P}),r.createElement(y.a,null,r.createElement(h.rU,{to:"/supporto/assistenza",className:e.heroBtn+" btn btn-primary","aria-label":"Vai alla pagina contattaci"},I))),r.createElement(C.E,{className:e.heroGraphic+" col-lg-6 text-center text-md-left text-lg-center mt-0 mt-md-4 mt-lg-0"},r.createElement("img",{src:"/assets/supporto.svg",alt:""})))))},A=o.Ms,H=A.title,L=A.description,M=n.PL,k=M.title,F=M.description,D=function(){return(0,r.useEffect)((function(){(0,i.xQ)("Pagina caricata "+n.u2)}),[]),r.createElement(r.Fragment,null,r.createElement(l.H,{title:H,description:L}),r.createElement(c.B,{title:k,subtitle:F,isFaq:!1}),r.createElement("h2",{className:"sr-only"},"Domande frequenti"),r.createElement(E,null),r.createElement(z,null))},B=function(){var e=(0,r.useContext)(x.P)[1];return(0,r.useEffect)((function(){return e({type:"SET:ACTIVE_HEADER",payload:{activeItem:"supporto"}}),function(){e({type:"SET:ACTIVE_HEADER"})}}),[e]),r.createElement(D,null)}}}]);
//# sourceMappingURL=component---src-pages-supporto-jsx-1276f087e939b0c2f174.js.map