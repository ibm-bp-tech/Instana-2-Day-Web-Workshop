"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[6840],{1784:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return d}});var n=a(5987),r=(a(7294),a(4983)),l=a(4295);const i=["components"],o={},s=(c="PageDescription",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const m={_frontmatter:o},p=l.Z;function d(e){let{components:t}=e,a=(0,n.Z)(e,i);return(0,r.kt)(p,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s,{mdxType:"PageDescription"},(0,r.kt)("p",null,"This is a ",(0,r.kt)("inlineCode",{parentName:"p"},"<PageDescription>")," component. It is generally used for intro text at\nthe top of the page using the\n",(0,r.kt)("a",{parentName:"p",href:"https://www.carbondesignsystem.com/guidelines/typography/expressive"},"type token"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"expressive-heading-03"),".")),(0,r.kt)("h2",null,"Notes"),(0,r.kt)("p",null,"For most pages, we recommend starting with a ",(0,r.kt)("inlineCode",{parentName:"p"},"PageDescription")," followed by\n",(0,r.kt)("inlineCode",{parentName:"p"},"AnchorLinks")," if the content is long enough. Please note that this component,\nlike all MDX components, is picky about white space, the line break above and\nbelow your content is required, and if you even have an extra space on the empty\nlines above/below it won’t render correctly."),(0,r.kt)("h2",null,"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup",metastring:"path=components/PageDescription/PageDescription.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/PageDescription",path:"components/PageDescription/PageDescription.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/PageDescription"},"<PageDescription>\n\nLorem ipsum dolor sit amet, **consectetur adipiscing elit**, sed do eiusmod tempor _incididunt_ ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\n</PageDescription>\n")),(0,r.kt)("h3",null,"Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"propType"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"children"),(0,r.kt)("td",{parentName:"tr",align:null},"node"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(7294),r=a(8650),l=a.n(r),i=a(5444),o=a(9403),s=a(3321),c=a(5900),m=a.n(c);var p=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var d=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:o,branch:s}=a||r,c=`${l}/edit/${s}${o}/src/pages${t}`;return l?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=a(4275),g=a(1721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),o=t===r,s=new RegExp(`${r}/?(#.*)?$`),c=a.replace(s,t);return n.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":o},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},t}(n.Component);var b=h,k=a(2881),N=a(6958),y=a(36);var E=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var v=e=>{let{pageContext:t,children:a,location:r,Title:c}=e;const{frontmatter:m={},relativePagePath:g,titleType:h}=t,{tabs:y,title:v,theme:P,description:f,keywords:x,date:w}=m,{interiorTheme:D}=(0,N.Z)(),{site:{pathPrefix:T}}=(0,i.useStaticQuery)("2456312558"),C=T?r.pathname.replace(T,""):r.pathname,Z=y?C.split("/").filter(Boolean).slice(-1)[0]||l()(y[0],{lower:!0}):"",q=P||D;return n.createElement(s.Z,{tabs:y,homepage:!1,theme:q,pageTitle:v,pageDescription:f,pageKeywords:x,titleType:h},n.createElement(p,{title:c?n.createElement(c,null):v,label:"label",tabs:y,theme:q}),y&&n.createElement(b,{title:v,slug:C,tabs:y,currentTab:Z}),n.createElement(k.Z,{padded:!0},a,n.createElement(d,{relativePagePath:g}),n.createElement(E,{date:w})),n.createElement(u.Z,{pageContext:t,location:r,slug:C,tabs:y,currentTab:Z}),n.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-components-page-description-mdx-e466dd9068c8179ad2c0.js.map