(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{299:function(n,e,a){"use strict";a.r(e);var t=a(3),s=a.n(t),o=a(4),l=a.n(o),i=a(2),r=a.n(i),d=a(5),c=a.n(d),m=function(n){function e(){var n,t,o,i;l()(this,e);for(var d=arguments.length,c=Array(d),m=0;m<d;m++)c[m]=arguments[m];return t=o=r()(this,(n=e.__proto__||s()(e)).call.apply(n,[this].concat(c))),o.document=function(){return{document:a(460),className:"tabs-page"}},i=t,r()(o,i)}return c()(e,n),e}(a(412).a);e.default=m},412:function(n,e,a){"use strict";var t=a(3),s=a.n(t),o=a(4),l=a.n(o),i=a(6),r=a.n(i),d=a(2),c=a.n(d),m=a(5),u=a.n(m),v=a(0),b=a.n(v),P=a(415),p=a.n(P),f=a(416),h=a.n(f),N=(a(417),a(413),function(n){function e(){return l()(this,e),c()(this,(e.__proto__||s()(e)).apply(this,arguments))}return u()(e,n),r()(e,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),e=n.document,a=n.className;if("string"==typeof e){var t=new p.a.Renderer;t.table=function(n,e){return'<div class="grid-container"><table class="grid"><thead>'+n+"</thead><tbody>"+e+"</tbody></table></div>"},t.code=function(n,e){return'<pre><code class="hljs '+e+'">'+(!(!e||!h.a.getLanguage(e))?h.a.highlight(e,n).value:n)+"</code></pre>"};var s=p()(e,{renderer:t});return b.a.createElement("div",{className:a,dangerouslySetInnerHTML:{__html:s}})}return b.a.createElement("span",null)}}]),e}(v.Component));e.a=N},413:function(n,e,a){},460:function(n,e){n.exports='## 标签页 Tabs\n\n\n\n### 基本用法\n```jsx\nimport { Tabs } from \'zarm\';\nconst { Panel } = Tabs;\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Tabs onChange={(i) => { console.log(i); }}>\n          <Panel title="选项卡1">\n            <div className="content">选项卡1内容</div>\n          </Panel>\n          <Panel title="选项卡2">\n            <div className="content">选项卡2内容</div>\n          </Panel>\n        </Tabs>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 可滑动\n```jsx\nimport { Tabs } from \'zarm\';\nconst { Panel } = Tabs;\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Tabs canSwipe onChange={(i) => { console.log(i); }}>\n          <Panel title="选项卡1">\n            <div className="content">试试点我左滑</div>\n          </Panel>\n          <Panel title="选项卡2">\n            <div className="content">试试点我右滑</div>\n          </Panel>\n        </Tabs>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 指定默认选项\n```jsx\nimport { Tabs } from \'zarm\';\nconst { Panel } = Tabs;\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Tabs defaultValue={1}>\n          <Panel title="选项卡1">\n            <div className="content">选项卡1内容</div>\n          </Panel>\n          <Panel title="选项卡2">\n            <div className="content">选项卡2内容</div>\n          </Panel>\n          <Panel title="选项卡3">\n            <div className="content">选项卡3内容</div>\n          </Panel>\n        </Tabs>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 指定线条宽度\n```jsx\nimport { Tabs } from \'zarm\';\nconst { Panel } = Tabs;\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Tabs lineWidth={60}>\n          <Panel title="选项卡1">\n            <div className="content">选项卡1内容</div>\n          </Panel>\n          <Panel title="选项卡2">\n            <div className="content">选项卡2内容</div>\n          </Panel>\n          <Panel title="选项卡3">\n            <div className="content">选项卡3内容</div>\n          </Panel>\n        </Tabs>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 禁用指定选项\n```jsx\nimport { Tabs } from \'zarm\';\nconst { Panel } = Tabs;\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Tabs>\n          <Panel title="选项卡1">\n            <div className="content">选项卡1内容</div>\n          </Panel>\n          <Panel title="选项卡2" disabled>\n            <div className="content">选项卡2内容</div>\n          </Panel>\n          <Panel title="选项卡3">\n            <div className="content">选项卡3内容</div>\n          </Panel>\n        </Tabs>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### API\n\n#### Tabs\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| value | string | - | 值 |\n| defaultValue | string | - | 初始值 |\n| disabled | boolean | false | 是否禁用 |\n| canSwipe | boolean | false | 是否支持滑动切换 |\n| lineWidth | number &#124; string | - | 线条宽度 |\n| onChange | (index: number) => void | - | 值变化时触发的回调函数 |\n\n\n#### Panel\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| disabled | boolean | false | 是否禁用 |\n| title | string | - | 标题 |\n| children | number | - | 内容 |\n'}}]);