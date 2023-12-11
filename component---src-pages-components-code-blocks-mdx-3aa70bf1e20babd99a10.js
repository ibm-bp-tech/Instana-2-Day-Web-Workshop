"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[8416],{2678:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return h}});var n=a(5987),r=(a(7294),a(4983)),l=a(4295);const o=["components"],s={},i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=i("PageDescription"),d=i("Title"),c={_frontmatter:s},p=l.Z;function h(e){let{components:t}=e,a=(0,n.Z)(e,o);return(0,r.kt)(p,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(m,{mdxType:"PageDescription"},(0,r.kt)("p",null,"When authoring markdown using the Carbon Gatsby theme, code blocks have some\nextra super powers you can take advantage of. We provide carbon-themed syntax\nhighlighting as well as optional ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," features.")),(0,r.kt)("h2",null,"Example"),(0,r.kt)(d,{mdxType:"Title"},"Horizontal overflow"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"path=/directory/file.mdx src=https://gatsby-theme-carbon.now.sh",path:"/directory/file.mdx",src:"https://gatsby-theme-carbon.now.sh"},"## Path and src w/ overflow\n\nThis example overflows to demonstrate the text fading out under the side bar.\nThis example overflows to demonstrate the text fading out under the side bar.\nThis example overflows to demonstrate the text fading out under the side bar.\nThis example overflows to demonstrate the text fading out under the side bar.\n")),(0,r.kt)(d,{mdxType:"Title"},"Vertical overflow"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"path=/directory/file.mdx src=https://gatsby-theme-carbon.now.sh",path:"/directory/file.mdx",src:"https://gatsby-theme-carbon.now.sh"},"## Path and src w/ overflow\n\nThis example demonstrates the show more button. This example demonstrates the\nshow more button. This example demonstrates the show more button. This example\ndemonstrates the show more button. This example demonstrates the show more\nbutton. This example demonstrates the show more button. This example\ndemonstrates the show more button. This example demonstrates the show more\nbutton. This example demonstrates the show more button. This example\ndemonstrates the show more button. This example demonstrates the show more\nbutton. This example demonstrates the show more button.\n")),(0,r.kt)("h2",null,"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```markdown path=/directory/file.mdx src=https://gatsby-theme-carbon.now.sh\n### Path and src\n\nThis code snippet provides both a `path` and a `src`.\n```\n")),(0,r.kt)("h3",null,"Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"propType"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"language"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js"},"Available languages."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"src"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The full url of a relevant link (source)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"A string indicating the filename or path. Due to markdown limitations this can only be a single word")))))}h.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(7294),r=a(8650),l=a.n(r),o=a(5444),s=a(9403),i=a(3321),m=a(5900),d=a.n(m);var c=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,o.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:s,branch:i}=a||r,m=`${l}/edit/${i}${s}/src/pages${t}`;return l?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},h=a(4275),u=a(1721);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),s=t===r,i=new RegExp(`${r}/?(#.*)?$`),m=a.replace(i,t);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:`${m}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component);var b=g,k=a(2881),w=a(6958),x=a(36);var f=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(x.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(x.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var N=e=>{let{pageContext:t,children:a,location:r,Title:m}=e;const{frontmatter:d={},relativePagePath:u,titleType:g}=t,{tabs:x,title:N,theme:v,description:y,keywords:T,date:E}=d,{interiorTheme:P}=(0,w.Z)(),{site:{pathPrefix:C}}=(0,o.useStaticQuery)("2456312558"),D=C?r.pathname.replace(C,""):r.pathname,Z=x?D.split("/").filter(Boolean).slice(-1)[0]||l()(x[0],{lower:!0}):"",L=v||P;return n.createElement(i.Z,{tabs:x,homepage:!1,theme:L,pageTitle:N,pageDescription:y,pageKeywords:T,titleType:g},n.createElement(c,{title:m?n.createElement(m,null):N,label:"label",tabs:x,theme:L}),x&&n.createElement(b,{title:N,slug:D,tabs:x,currentTab:Z}),n.createElement(k.Z,{padded:!0},a,n.createElement(p,{relativePagePath:u}),n.createElement(f,{date:E})),n.createElement(h.Z,{pageContext:t,location:r,slug:D,tabs:x,currentTab:Z}),n.createElement(s.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-components-code-blocks-mdx-3aa70bf1e20babd99a10.js.map