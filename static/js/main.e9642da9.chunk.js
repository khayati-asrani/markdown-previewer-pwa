(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t,n){e.exports=n(364)},156:function(e,t,n){},364:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(149),o=n.n(r),s=n(37),c=n(38),l=n(40),h=n(39),d=n(41),m=(n(156),n(11)),u=n(30),p=n(31),w=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"toolbar "+this.props.className},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(u.a,{className:"icon info",icon:p.e,onClick:this.props.toggleInfo})),i.a.createElement("li",null,i.a.createElement(u.a,{className:"icon bold",icon:p.a,onClick:this.props.onClick})),i.a.createElement("li",null,i.a.createElement(u.a,{className:"icon italic",icon:p.f,onClick:this.props.onClick})),i.a.createElement("li",null,i.a.createElement(u.a,{className:"icon img",icon:p.d,onClick:this.props.onClick})),i.a.createElement("li",null,i.a.createElement(u.a,{className:"icon link",icon:p.g,onClick:this.props.onClick})),i.a.createElement("li",null,i.a.createElement(u.a,{className:"icon code",icon:p.b,onClick:this.props.onClick})),i.a.createElement("li",null,i.a.createElement(u.a,{className:"icon toggle",icon:p.h,onClick:this.props.switchTheme}))))}}]),t}(i.a.Component),f=i.a.forwardRef(function(e,t){return i.a.createElement("div",{className:"editor"},i.a.createElement(w,{className:e.headerClass,onClick:e.onClick,switchTheme:e.switchTheme,toggleInfo:e.toggleInfo}),i.a.createElement("textarea",{ref:t,onChange:e.onChange,value:e.markdown,className:e.textareaClass,type:"text"}))}),k=n(80),b=n.n(k),v=new b.a.Renderer;v.link=function(e,t,n){return'<a target="_blank" href="'.concat(e,'">').concat(n)+"</a>"},v.code=function(e,t){return"<pre><code class=language-"+t+">"+e+"</code></pre>"},b.a.setOptions({breaks:!0});var g=function(e){var t=e.markdown;return i.a.createElement("div",{className:"textarea preview"},i.a.createElement("div",{id:"view",dangerouslySetInnerHTML:{__html:b()(t,{renderer:v})}}))},C=function(e){var t=e.id,n=e.head,a=e.headerClass,r=e.onClick;return i.a.createElement("div",{id:t,className:"header "+a},i.a.createElement("h3",null,n),i.a.createElement(u.a,{className:"arrows",icon:p.c,onClick:r}))},E=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(m.a)(Object(m.a)(n))),n.insertAtCaret=n.insertAtCaret.bind(Object(m.a)(Object(m.a)(n))),n.insertStyle=n.insertStyle.bind(Object(m.a)(Object(m.a)(n))),n.setTextSelect=n.setTextSelect.bind(Object(m.a)(Object(m.a)(n))),n.handleClick=n.handleClick.bind(Object(m.a)(Object(m.a)(n))),n.toggleInfo=n.toggleInfo.bind(Object(m.a)(Object(m.a)(n))),n.switchTheme=n.switchTheme.bind(Object(m.a)(Object(m.a)(n))),n.expandEditor=n.expandEditor.bind(Object(m.a)(Object(m.a)(n))),n.expandPreviewer=n.expandPreviewer.bind(Object(m.a)(Object(m.a)(n))),n.info="",n.markdown="",n.showInfo=!1,n.textarea=i.a.createRef(),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;n.e(1).then(n.bind(null,365)).then(function(t){e.info=t.info,e.markdown=t.placeholder}).catch(function(t){e.info="# For info visit https://marked.js.org/#/README.md"})}},{key:"toggleInfo",value:function(){this.showInfo=!this.showInfo,this.showInfo?this.props.addText(this.info):this.props.addText(this.markdown)}},{key:"switchTheme",value:function(){this.props.toggleAnimClass("blinks"),setTimeout(function(){this.props.toggleAnimClass("")}.bind(this),1500),"dark"===this.props.theme?this.props.switchTheme("light"):this.props.switchTheme("dark")}},{key:"expandEditor",value:function(){""===this.props.editorView?this.props.setView("fullScreen","minimize"):this.props.setView("","")}},{key:"expandPreviewer",value:function(){""===this.props.previewerView?this.props.setView("minimize","fullScreen"):this.props.setView("","")}},{key:"handleChange",value:function(e){this.props.addText(e.target.value)}},{key:"insertAtCaret",value:function(e){var t=this.textarea.current;if(document.selection)t.focus({preventScroll:!0}),document.selection.createRange().text=e;else if(t.selectionStart||"0"==t.selectionStart){var n=t.selectionStart,a=t.selectionEnd;t.value=t.value.substring(0,n)+e+t.value.substring(a,t.value.length),t.focus({preventScroll:!0}),this.setTextSelect(n+this.charLength,n+e.length-this.charLength)}else t.focus({preventScroll:!1}),t.value+=e}},{key:"setTextSelect",value:function(e,t){var n=this.textarea.current;n.selectionStart&&n.setSelectionRange(e,t)}},{key:"insertStyle",value:function(e){var t=this.textarea.current;t.selectionStart,t.selectionEnd;void 0!==e&&this.insertAtCaret(e)}},{key:"handleClick",value:function(e){var t;switch(""+e.currentTarget.className.baseVal.match(/\sfa-[a-z]+\s/)[0].trim()){case"fa-bold":t="**Strong Text**",this.charLength=2;break;case"fa-italic":t="_Emphasized Text_",this.charLength=1;break;case"fa-code":t="`Inline Code`",this.charLength=1;break;case"fa-image":t="![Alt Text](http://)",this.charLength=0;break;case"fa-link":t="[link](http://)",this.charLength=0;break;default:return}this.insertStyle(t)}},{key:"render",value:function(){return i.a.createElement("div",{className:"wrapper-container "+this.props.animClass},i.a.createElement("div",{id:"editor-wrap",className:"flexbox-wrap "+this.props.theme+" "+this.props.editorView},i.a.createElement(C,{id:"editor-header",head:"Editor",headerClass:this.props.theme+"-headers",onClick:this.expandEditor}),i.a.createElement(f,{markdown:this.props.markdown,ref:this.textarea,onClick:this.handleClick,textareaClass:this.props.theme,headerClass:this.props.theme+"-headers",onChange:this.handleChange,switchTheme:this.switchTheme,toggleInfo:this.toggleInfo})),i.a.createElement("div",{id:"previewer-wrap",className:"flexbox-wrap "+this.props.theme+" "+this.props.previewerView},i.a.createElement(C,{id:"previewer-header",head:"Previewer",headerClass:this.props.theme+"-headers",onClick:this.expandPreviewer}),i.a.createElement(g,{markdown:this.props.markdown})))}}]),t}(i.a.Component),O=n(79),j=n(78),y={markdown:"# Welcome to my React Markdown Previewer!\n\n// To find what this can do, view our sample text below or start editing in the editor and see the results rendered in the previewer.\n\n## For more information, click on the info icon at the top right corner of the screen\n### Here's the sample to show you some cool stuff:\n\nHeres some code, `<div></div>`, between 2 back ticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](./images/react.svg'), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n",animClass:"",theme:"dark",editorView:"",previewerView:""},T=Object(j.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADDTEXT":return{markdown:t.markdown,wrapperClass:e.wrapperClass,theme:e.theme,editorView:e.editorView,previewerView:e.previewerView};case"TOGGLE_CLASS":return{markdown:e.markdown,animClass:t.animClass,theme:e.theme,editorView:e.editorView,previewerView:e.previewerView};case"SWITCH_THEME":return{markdown:e.markdown,animClass:e.animClass,theme:t.theme,editorView:e.editorView,previewerView:e.previewerView};case"SET_VIEW":return{markdown:e.markdown,animClass:e.animClass,theme:e.theme,editorView:t.editorView,previewerView:t.previewerView};default:return e}}),x=Object(O.b)(function(e){return{markdown:e.markdown,animClass:e.animClass,theme:e.theme,editorView:e.editorView,previewerView:e.previewerView}},function(e){return{addText:function(t){e(function(e){return{type:"ADDTEXT",markdown:e}}(t))},toggleAnimClass:function(t){e({type:"TOGGLE_CLASS",animClass:t})},switchTheme:function(t){e(function(e){return{type:"SWITCH_THEME",theme:e}}(t))},setView:function(t,n){e({type:"SET_VIEW",editorView:t,previewerView:n})}}})(E),V=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(O.a,{store:T},i.a.createElement(x,null))}}]),t}(i.a.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(V,null)}}]),t}(a.Component);n(163);o.a.render(i.a.createElement(S,null),document.getElementById("root"))}},[[151,3,2]]]);
//# sourceMappingURL=main.e9642da9.chunk.js.map