"use strict";(self.webpackChunkmetro_website=self.webpackChunkmetro_website||[]).push([[476],{56646:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>m});var a=o(87462),i=o(63366),n=(o(67294),o(3905)),s=["components"],r={id:"concepts",title:"Concepts"},l=void 0,d={unversionedId:"concepts",id:"concepts",isDocsHomePage:!1,title:"Concepts",description:"Metro is a JavaScript bundler. It takes in an entry file and various options, and gives you back a single JavaScript file that includes all your code and its dependencies.",source:"@site/../docs/Concepts.md",sourceDirName:".",slug:"/concepts",permalink:"/metro/docs/concepts",editUrl:"https://github.com/facebook/metro/edit/main/docs/../docs/Concepts.md",tags:[],version:"current",lastUpdatedAt:1651597427,formattedLastUpdatedAt:"5/3/2022",frontMatter:{id:"concepts",title:"Concepts"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/metro/docs/getting-started"},next:{title:"API",permalink:"/metro/docs/api"}},m=[{value:"Resolution",id:"resolution",children:[]},{value:"Transformation",id:"transformation",children:[]},{value:"Serialization",id:"serialization",children:[]},{value:"Modules",id:"modules",children:[]}],u={toc:m};function p(e){var t=e.components,o=(0,i.Z)(e,s);return(0,n.mdx)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,"Metro is a JavaScript bundler. It takes in an entry file and various options, and gives you back a single JavaScript file that includes all your code and its dependencies."),(0,n.mdx)("p",null,"Metro has three separate stages in its bundling process:"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},"Resolution"),(0,n.mdx)("li",{parentName:"ol"},"Transformation"),(0,n.mdx)("li",{parentName:"ol"},"Serialization")),(0,n.mdx)("h3",{id:"resolution"},"Resolution"),(0,n.mdx)("p",null,"Metro needs to build a graph of all the modules that are required from the entry point. To find which file is required from another file Metro uses a resolver. In reality this stage happens in parallel with the transformation stage."),(0,n.mdx)("h3",{id:"transformation"},"Transformation"),(0,n.mdx)("p",null,"All modules go through a transformer. A transformer is responsible for converting (transpiling) a module to a format that is understandable by the target platform (eg. React Native). Transformation of modules happens in parallel based on the amount of cores that you have."),(0,n.mdx)("h3",{id:"serialization"},"Serialization"),(0,n.mdx)("p",null,"As soon as all the modules have been transformed they will be serialized. A serializer combines the modules to generate one or multiple bundles. A bundle is literally a bundle of modules combined into a single JavaScript file."),(0,n.mdx)("h2",{id:"modules"},"Modules"),(0,n.mdx)("p",null,"Metro has been split out into multiple modules corresponding to every step in the flow, each with their own responsibility. This means that we have a resolver, transformer, and serializer. These modules can be swapped out depending on your needs."))}p.isMDXComponent=!0}}]);