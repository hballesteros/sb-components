import{j as V}from"./jsx-runtime-e6a661ac.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";const l=({size:t="normal",label:_="My Label",color:L="primary",fontColor:S,allCaps:M=!1,...q})=>V("span",{className:`label ${t} text-${L} ${M?"all-caps":""}`,style:{color:S},...q,children:_});try{l.displayName="MyLabel",l.__docgenInfo={description:"",displayName:"MyLabel",props:{size:{defaultValue:{value:"normal"},description:"How large should the label be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},label:{defaultValue:{value:"My Label"},description:"Label contents",name:"label",required:!1,type:{name:"string"}},color:{defaultValue:{value:"primary"},description:"Optional color",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:null,description:"Optional font color",name:"fontColor",required:!1,type:{name:"string"}},allCaps:{defaultValue:{value:"false"},description:"Optional all caps",name:"allCaps",required:!1,type:{name:"boolean"}}}}}catch{}const T={title:"UI/MyLabel",component:l,argTypes:{size:{control:{type:"select",options:["normal","h1","h2","h3"]}},color:{control:{type:"select",options:["primary","secondary","tertiary"]}},fontColor:{control:"color"}},parameters:{layout:"centered"},tags:["autodocs"]},e={args:{size:"normal",allCaps:!1}},a={args:{size:"normal",allCaps:!0}},r={args:{size:"normal",color:"secondary"}},o={args:{size:"normal",color:"tertiary"}},s={args:{size:"h1",fontColor:"#5517ac"}};var n,c,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    allCaps: false
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    allCaps: true
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,y,f;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    color: 'secondary'
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var g,C,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    color: 'tertiary'
  }
}`,...(b=(C=o.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var v,z,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'h1',
    fontColor: '#5517ac'
  }
}`,...(h=(z=s.parameters)==null?void 0:z.docs)==null?void 0:h.source}}};const $=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor"];export{a as AllCaps,e as Basic,s as CustomFontColor,r as Secondary,o as Tertiary,$ as __namedExportsOrder,T as default};
//# sourceMappingURL=MyLabel.stories-d83193c9.js.map
