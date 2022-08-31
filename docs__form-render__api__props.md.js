(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"0m5a":function(f,a,n){"use strict";n.r(a);var i=n("q1tI"),l=n.n(i),u=n("dEAq"),v=n.n(u),r=n("H1Ra"),C=n("dMo/"),e=n("nKUr"),p=n.n(e),B=l.a.memo(s=>{var F=s.demos;return Object(e.jsx)(e.Fragment,{children:Object(e.jsxs)("div",{className:"markdown",children:[Object(e.jsxs)("h2",{id:"props",children:[Object(e.jsx)(u.AnchorLink,{to:"#props","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"Props"]}),Object(e.jsxs)(C.a,{children:[Object(e.jsx)("thead",{children:Object(e.jsxs)("tr",{children:[Object(e.jsx)("th",{children:"\u53C2\u6570"}),Object(e.jsx)("th",{children:"\u63CF\u8FF0"}),Object(e.jsx)("th",{children:"\u7C7B\u578B"}),Object(e.jsx)("th",{children:"\u9ED8\u8BA4\u503C"})]})}),Object(e.jsxs)("tbody",{children:[Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"schema"}),Object(e.jsxs)("td",{children:[Object(e.jsx)("strong",{children:"\u5FC5\u586B"}),"\uFF0C\u63CF\u8FF0\u8868\u5355\u7684 schema\uFF0C\u8BE6\u89C1 ",Object(e.jsx)(u.Link,{to:"./schema",children:"schema \u89C4\u8303"})]}),Object(e.jsx)("td",{children:Object(e.jsx)(u.Link,{to:"https://github.com/alibaba/x-render/blob/master/packages/form-render/src/index.d.ts#L16",children:"SchemaBase"})}),Object(e.jsx)("td",{children:"-"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"form"}),Object(e.jsxs)("td",{children:[Object(e.jsx)("strong",{children:"\u5FC5\u586B"}),"\uFF0C",Object(e.jsx)("code",{children:"useForm"})," \u521B\u5EFA\u7684\u8868\u5355\u5B9E\u4F8B\uFF0C\u4E0E Form \u4E00\u5BF9\u4E00\u7ED1\u5B9A\uFF0C\u8BE6\u89C1",Object(e.jsx)(u.AnchorLink,{to:"#forminstance",children:"Forminstance"})]}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"FormInstance"})}),Object(e.jsx)("td",{children:"-"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"onFinish"}),Object(e.jsxs)("td",{children:["\u63D0\u4EA4\u540E\u7684\u56DE\u8C03\uFF0C\u6267\u884C ",Object(e.jsx)("code",{children:"form.submit()"})," \u540E\u89E6\u53D1"]}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"(data, errors: Error[]) => void"})}),Object(e.jsx)("td",{children:"-"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"beforeFinish"}),Object(e.jsx)("td",{children:"\u5728 onFinish \u524D\u89E6\u53D1\uFF0C\u4E00\u822C\u7528\u4E8E\u5916\u90E8\u6821\u9A8C\u903B\u8F91\u7684\u56DE\u586B"}),Object(e.jsx)("td",{children:Object(e.jsxs)("code",{children:["(","{"," data, errors, schema, ...rest ","}",") => Error[] | Promise<Error[]>"]})}),Object(e.jsx)("td",{children:"-"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"onMount"}),Object(e.jsxs)("td",{children:["\u8868\u5355\u9996\u6B21\u52A0\u8F7D\u65F6\u89E6\u53D1\uFF0C\u8BE6\u89C1",Object(e.jsx)(u.Link,{to:"/form-render/advanced/life-cycle",children:"\u751F\u547D\u5468\u671F"})]}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"() => void"})}),Object(e.jsx)("td",{children:"-"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"displayType"}),Object(e.jsx)("td",{children:"\u8868\u5355\u5143\u7D20\u4E0E label \u540C\u884C or \u5206\u4E24\u884C\u5C55\u793A, inline \u5219\u6574\u4E2A\u5C55\u793A\u81EA\u7136\u987A\u6392"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"'column' | 'row' | 'inline'"})}),Object(e.jsx)("td",{children:"column"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"labelAlign"}),Object(e.jsx)("td",{children:"label \u6807\u7B7E\u7684\u6587\u672C\u5BF9\u9F50\u65B9\u5F0F"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"'left' | 'right'"})}),Object(e.jsx)("td",{children:"right"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"colon"}),Object(e.jsx)("td",{children:"\u662F\u5426\u663E\u793A label \u540E\u9762\u7684\u5192\u53F7"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"boolean"})}),Object(e.jsx)("td",{children:"true"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"widgets"}),Object(e.jsxs)("td",{children:["\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u5F53\u5185\u7F6E\u7EC4\u4EF6\u65E0\u6CD5\u6EE1\u8DB3\u65F6\u4F7F\u7528\uFF0C\u8BE6\u89C1",Object(e.jsx)(u.AnchorLink,{to:"#widgets",children:"Widgets"})]}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"Record<string, ReactNode>"})}),Object(e.jsx)("td",{children:"-"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"watch"}),Object(e.jsxs)("td",{children:["\u76D1\u542C\u8868\u5355\u7684\u6570\u636E\u53D8\u5316\uFF0C\u8BE6\u89C1",Object(e.jsx)(u.AnchorLink,{to:"#watch",children:"Watch"})]}),Object(e.jsx)("td",{children:Object(e.jsxs)("code",{children:["Record<string, (val: any) => void | ","{"," handler:(val:any) => void,immediate?: boolean ","}",">"]})}),Object(e.jsx)("td",{children:"-"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"removeHiddenData"}),Object(e.jsx)("td",{children:"\u63D0\u4EA4\u6570\u636E\u7684\u65F6\u5019\u662F\u5426\u53BB\u6389\u5DF2\u7ECF\u88AB\u9690\u85CF\u7684\u5143\u7D20\u7684\u6570\u636E\uFF0C\u9ED8\u8BA4\u4E0D\u9690\u85CF"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"boolean"})}),Object(e.jsx)("td",{children:"false"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"readOnly"}),Object(e.jsx)("td",{children:"\u53EA\u8BFB\u6A21\u5F0F\uFF0C\u4E00\u822C\u7528\u4E8E\u9884\u89C8\u5C55\u793A\uFF0C\u5168\u6587 text \u5C55\u793A"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"boolean"})}),Object(e.jsx)("td",{children:"false"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"className"}),Object(e.jsx)("td",{children:"\u9876\u5C42 className"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"string"})}),Object(e.jsx)("td",{children:"-"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"style"}),Object(e.jsx)("td",{children:"\u9876\u5C42 style"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"CSSProperties"})}),Object(e.jsx)("td",{children:"-"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"column"}),Object(e.jsx)("td",{children:"\u4E00\u884C\u5C55\u793A\u591A\u5C11\u5217"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"number"})}),Object(e.jsx)("td",{children:"1"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"mapping"}),Object(e.jsx)("td",{children:"schema \u4E0E\u7EC4\u4EF6\u7684\u6620\u5C04\u5173\u7CFB\u8868\uFF0C\u5F53\u5185\u7F6E\u7684\u8868\u4E0D\u6EE1\u8DB3\u65F6\u4F7F\u7528"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"Record<string, string>"})}),Object(e.jsx)("td",{children:"-"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"disabled"}),Object(e.jsx)("td",{children:"\u7981\u7528\u5168\u90E8\u8868\u5355\u9879"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"boolean"})}),Object(e.jsx)("td",{children:"false"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"debugCss"}),Object(e.jsx)("td",{children:"\u7528\u4E8E css \u95EE\u9898\u7684\u8C03\u6574\uFF0C\u663E\u793A css \u5E03\u5C40\u63D0\u793A\u7EBF"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"boolean"})}),Object(e.jsx)("td",{children:"false"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"locale"}),Object(e.jsx)("td",{children:"\u5C55\u793A\u8BED\u8A00\uFF0C\u76EE\u524D\u53EA\u652F\u6301\u4E2D\u6587\u3001\u82F1\u6587"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"'cn' | 'en'"})}),Object(e.jsx)("td",{children:"cn"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"configProvider"}),Object(e.jsx)("td",{children:"antd \u7684 configProvider\uFF0C\u914D\u7F6E\u900F\u4F20"}),Object(e.jsx)("td",{children:Object(e.jsx)(u.Link,{to:"https://ant-design.antgroup.com/components/config-provider-cn/#API",children:"ConfigProviderProps"})}),Object(e.jsx)("td",{children:"-"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"allCollapsed"}),Object(e.jsx)("td",{children:"\u5BF9\u8C61\u7EC4\u4EF6\u662F\u5426\u9ED8\u8BA4\u6298\u53E0\uFF08\u5168\u5C40\uFF09"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"boolean"})}),Object(e.jsx)("td",{children:"false"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"debounceInput"}),Object(e.jsx)("td",{children:"\u662F\u5426\u5F00\u542F\u8F93\u5165\u65F6\u4F7F\u7528\u5FEB\u7167\u6A21\u5F0F\u3002\u4EC5\u5EFA\u8BAE\u5728\u8868\u5355\u5DE8\u5927\u4E14\u8868\u8FBE\u5F0F\u975E\u5E38\u591A\u65F6\u5F00\u542F"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"boolean"})}),Object(e.jsx)("td",{children:"false"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"validateMessages"}),Object(e.jsxs)("td",{children:["\u4FEE\u6539\u9ED8\u8BA4\u7684\u6821\u9A8C\u63D0\u793A\u4FE1\u606F\uFF0C\u8BE6\u89C1",Object(e.jsx)(u.AnchorLink,{to:"#validatemessages",children:"ValidateMessages"})]}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"Record<string, string>"})}),Object(e.jsx)("td",{children:"-"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"debug"}),Object(e.jsxs)("td",{children:["\u5F00\u542F debug \u6A21\u5F0F\uFF0C\u65F6\u65F6\u663E\u793A\u8868\u5355\u5185\u90E8\u72B6\u6001\uFF0C",Object(e.jsx)("strong",{children:"\u5F00\u53D1\u7684\u65F6\u5019\u5F3A\u70C8\u5EFA\u8BAE\u6253\u5F00"})]}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"boolean"})}),Object(e.jsx)("td",{children:"false"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"id"}),Object(e.jsx)("td",{children:"\u8868\u5355\u7684 id\uFF0C\u4E00\u822C\u7528\u4E8E\u6807\u8BC6\u4E00\u4E2A\u8868\u5355\u7684\u8BED\u4E49\u5316\u540D\u79F0"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"string | number"})}),Object(e.jsx)("td",{children:"-"})]})]})]}),Object(e.jsxs)("h3",{id:"forminstance",children:[Object(e.jsx)(u.AnchorLink,{to:"#forminstance","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"FormInstance"]}),Object(e.jsxs)(C.a,{children:[Object(e.jsx)("thead",{children:Object(e.jsxs)("tr",{children:[Object(e.jsx)("th",{children:"\u53C2\u6570"}),Object(e.jsx)("th",{children:"\u63CF\u8FF0"}),Object(e.jsx)("th",{children:"\u7C7B\u578B"})]})}),Object(e.jsxs)("tbody",{children:[Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"submit"}),Object(e.jsx)("td",{children:"\u89E6\u53D1\u63D0\u4EA4\u6D41\u7A0B\uFF0C\u4E00\u822C\u5728\u63D0\u4EA4\u6309\u94AE\u4E0A\u4F7F\u7528"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"() => void"})})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"resetFields"}),Object(e.jsx)("td",{children:"\u6E05\u7A7A\u8868\u5355\uFF08\u4E5F\u4F1A\u6E05\u7A7A\u4E00\u4E9B\u5185\u7F6E\u72B6\u6001\uFF0C\u4F8B\u5982\u6821\u9A8C\uFF09"}),Object(e.jsx)("td",{children:Object(e.jsxs)("code",{children:["(","{","formData?: any, submitData?: any, errorFields?: Error[], touchedKeys?: string[], allTouched?: boolean","}",") => void"]})})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"errorFields"}),Object(e.jsx)("td",{children:"\u8868\u5355\u6821\u9A8C\u9519\u8BEF\u7684\u6570\u7EC4"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"Error[]"})})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"setErrorFields"}),Object(e.jsx)("td",{children:"\u5916\u90E8\u624B\u52A8\u4FEE\u6539 errorFields \u6821\u9A8C\u4FE1\u606F\uFF0C\u7528\u4E8E\u5916\u90E8\u6821\u9A8C\u56DE\u586B"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"(error: Error[]) => void"})})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"setValues"}),Object(e.jsx)("td",{children:"\u5916\u90E8\u624B\u52A8\u4FEE\u6539 formData\uFF0C\u7528\u4E8E\u5DF2\u586B\u5199\u7684\u8868\u5355\u7684\u6570\u636E\u56DE\u586B"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"(formData: any) => void"})})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"setValueByPath"}),Object(e.jsx)("td",{children:"\u5916\u90E8\u4FEE\u6539\u6307\u5B9A\u5355\u4E2A field \u7684\u6570\u636E(\u539F\u540D onItemChange)"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"(path: Path, value: any) => void"})})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"setSchemaByPath"}),Object(e.jsx)("td",{children:"\u6307\u5B9A\u8DEF\u5F84\u4FEE\u6539 schema"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"(path: Path, value: any) => void"})})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"setSchema"}),Object(e.jsx)("td",{children:"\u6307\u5B9A\u591A\u4E2A\u8DEF\u5F84\u4FEE\u6539 schema"}),Object(e.jsx)("td",{children:Object(e.jsxs)("code",{children:["(","{"," path: value ","}",") => void"]})})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"getValues"}),Object(e.jsx)("td",{children:"\u83B7\u53D6\u8868\u5355\u5185\u90E8\u7EF4\u62A4\u7684\u6570\u636E, \u5982\u679C\u53C2\u6570\u4E3A\u7A7A\u5219\u8FD4\u56DE\u5F53\u524D\u6240\u6709\u6570\u636E"}),Object(e.jsx)("td",{children:Object(e.jsxs)("code",{children:["(nameList?: Path[], filterFunc?: (meta: ","{"," touched: boolean, validating: boolean ","}",") => boolean) => any"]})})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"schema"}),Object(e.jsx)("td",{children:"\u8868\u5355\u7684 schema"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"object"})})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"touchedKeys"}),Object(e.jsx)("td",{children:"\u5DF2\u7ECF\u89E6\u78B0\u8FC7\u7684 field \u7684\u6570\u636E\u8DEF\u5F84"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"Path[]"})})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"removeErrorField"}),Object(e.jsx)("td",{children:"\u5916\u90E8\u624B\u52A8\u5220\u9664\u67D0\u4E00\u4E2A path \u4E0B\u6240\u6709\u7684\u6821\u9A8C\u4FE1\u606F"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"(path: Path) => void"})})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"formData"}),Object(e.jsx)("td",{children:"\u8868\u5355\u5185\u90E8\u7EF4\u62A4\u7684\u6570\u636E, \u5EFA\u8BAE\u4F7F\u7528 getValues/setValues"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"Record<string, any>"})})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"isFieldTouched"}),Object(e.jsx)("td",{children:"\u68C0\u67E5\u67D0\u4E2A\u8868\u5355\u662F\u5426\u88AB\u7528\u6237\u64CD\u4F5C\u8FC7"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"(name: Path) => boolean"})})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"isFieldsTouched"}),Object(e.jsx)("td",{children:"\u68C0\u67E5\u4E00\u7EC4\u5B57\u6BB5 fields \u662F\u5426\u88AB\u7528\u6237\u64CD\u4F5C\u8FC7, allTouched \u4E3A true \u662F\u68C0\u67E5\u662F\u5426\u6240\u6709\u5B57\u6BB5\u90FD\u88AB\u64CD\u4F5C\u8FC7"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"(nameList?: Path[], allTouched?: boolean) => boolean"})})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"isFieldValidating"}),Object(e.jsx)("td",{children:"\u68C0\u67E5\u5BF9\u5E94\u5B57\u6BB5 field \u662F\u5426\u6B63\u5728\u6821\u9A8C"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"(name: Path) => boolean"})})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"scrollToPath"}),Object(e.jsx)("td",{children:"\u6EDA\u52A8\u5230 path \u5BF9\u5E94\u7684\u4F4D\u7F6E"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"(name: Path) => void"})})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"getFieldError"}),Object(e.jsx)("td",{children:"\u83B7\u53D6\u5BF9\u5E94\u5B57\u6BB5 field \u7684\u9519\u8BEF\u4FE1\u606F"}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"(name: Path) => string[]"})})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"getFieldsError"}),Object(e.jsxs)("td",{children:["\u83B7\u53D6\u4E00\u7EC4\u5B57\u6BB5 fields \u5BF9\u5E94\u7684\u9519\u8BEF\u4FE1\u606F, \u8FD4\u56DE\u6570\u7EC4\u5F62\u5F0F; \u5165\u53C2\u4E3A\u7A7A\u5219\u83B7\u53D6\u6240\u6709\u5B57\u6BB5\u5BF9\u5E94\u7684\u9519\u8BEF\u4FE1\u606F, \u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F",Object(e.jsx)(u.AnchorLink,{to:"#error",children:"Error"}),"[]"]}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"(nameList: Path[]) => Error[]"})})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"setFields"}),Object(e.jsxs)("td",{children:["\u8BBE\u7F6E\u4E00\u7EC4\u5B57\u6BB5\u72B6\u6001, ",Object(e.jsx)(u.AnchorLink,{to:"#field",children:"Field"})," []"]}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"(nameList: Field[]) => void"})})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"validateFields"}),Object(e.jsxs)("td",{children:["\u89E6\u53D1\u8868\u5355\u9A8C\u8BC1, ",Object(e.jsx)(u.AnchorLink,{to:"#validatefields",children:"\u793A\u4F8B"})]}),Object(e.jsx)("td",{children:Object(e.jsx)("code",{children:"(nameList?: Path[]) => Promise"})})]})]})]}),Object(e.jsx)("blockquote",{children:Object(e.jsxs)("p",{children:["react \u66F4\u65B0\u673A\u5236\u5BFC\u81F4\uFF0C\u540C\u65F6\u591A\u6B21\u8C03\u7528 ",Object(e.jsx)("code",{children:"setSchemaByPath"})," \u65E0\u6548\uFF0C\u6240\u4EE5\u8BF7\u4F7F\u7528 ",Object(e.jsx)("code",{children:"setSchema"}),"\uFF0C\u4E8B\u5B9E\u4E0A",Object(e.jsx)("code",{children:"setSchema"})," \u80FD\u5B8C\u5168\u8986\u76D6 ",Object(e.jsx)("code",{children:"setSchemaByPath"})," \u7684\u573A\u666F\u3002"]})}),Object(e.jsxs)("h5",{id:"validatefields",children:[Object(e.jsx)(u.AnchorLink,{to:"#validatefields","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"validateFields"]}),Object(e.jsx)(r.a,{code:`validateFields()
  .then(values => {
    /*
    values:{
        input1: 'input1 \u8F93\u5165\u7684\u503C',
        select1: 'select1 \u9009\u62E9\u7684\u503C',
    }
    */
  })
  .catch(errorInfo => {
    /*
    errorInfo:
      {
        data: {
          input1: 'input1 \u8F93\u5165\u7684\u503C',
          select1: 'select1 \u9009\u62E9\u7684\u503C',
        },
        errors: [
          { name: 'input1', error: ['input1 \u7684error\u4FE1\u606F'] },
          { name: 'select1', error: ['select1 \u7684error\u4FE1\u606F'] },
        ],
      }
    */
  });`,lang:"javascript"}),Object(e.jsxs)("h5",{id:"field",children:[Object(e.jsx)(u.AnchorLink,{to:"#field","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"field"]}),Object(e.jsx)(r.a,{code:`interface Field {
  /**\u9519\u8BEF\u4FE1\u606F */
  error?: string[];
  /**\u5B57\u6BB5path */
  name?: string;
  /**\u8BBE\u7F6Etouched */
  touched?: boolean;
  /**\u8BBE\u7F6Evalidating */
  validating?: boolean;
  /** value */
  value?: any;
}`,lang:"ts"}),Object(e.jsxs)("h3",{id:"widgets",children:[Object(e.jsx)(u.AnchorLink,{to:"#widgets","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"Widgets"]}),Object(e.jsx)("p",{children:"\u5F53\u5185\u7F6E\u7EC4\u4EF6\u4E0D\u80FD\u6EE1\u8DB3\u9700\u6C42\u65F6\uFF0C\u53EF\u4EE5\u4F20\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3002"}),Object(e.jsx)(r.a,{code:`import { Cascader } from 'antd';

// \u9876\u5C42\u5F15\u5165\u6CE8\u518C
<Form widgets={{ cascader: Cascader }} />

// schema \u4E2D\u4F7F\u7528
location: {
  title: '\u7701\u5E02\u533A',
  type: 'string',
  widget: 'cascader',
},`,lang:"jsx"}),Object(e.jsxs)("h3",{id:"watch",children:[Object(e.jsx)(u.AnchorLink,{to:"#watch","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"Watch"]}),Object(e.jsxs)("p",{children:["\u7528\u4E8E\u6570\u636E\u7684\u76D1\u542C\u7684\u5524\u8D77\u56DE\u8C03\u3002\u8BED\u6CD5\u7C7B\u4F3C\u4E8E vue \u7684 ",Object(e.jsx)("code",{children:"watch"}),"\u3002"]}),Object(e.jsx)(r.a,{code:`type WatchProperties = Record<
  Path,
  (val: any) => void | {
    handler: (val: any) => void;
    immediate?: boolean; // \u662F\u5426\u5728\u9996\u6B21\u52A0\u8F7D\u65F6\u5C31\u6267\u884C\u4E00\u6B21 watch \u7684 handler
  }
>;

const watch: WatchProperties = {
  '#': val => {
    // # \u4E3A\u5168\u5C40
    console.log('\u8868\u5355\u7684\u5B9E\u65F6\u6570\u636E\u4E3A\uFF1A', val);
  },
  path1: val => {
    // do something ...
  },
  path2: {
    handler: val => {},
    immediate: true,
  },
};

<Form watch={watch} />;`,lang:"tsx"}),Object(e.jsxs)("h3",{id:"validatemessages",children:[Object(e.jsx)(u.AnchorLink,{to:"#validatemessages","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"ValidateMessages"]}),Object(e.jsxs)("p",{children:["Form-Render \u4E3A\u9A8C\u8BC1\u63D0\u4F9B\u4E86\u9ED8\u8BA4\u7684\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E ",Object(e.jsx)("code",{children:"validateMessages"})," \u5C5E\u6027\uFF0C\u4FEE\u6539\u5BF9\u5E94\u7684\u63D0\u793A\u6A21\u677F\u3002\u4E00\u79CD\u5E38\u89C1\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u662F\u914D\u7F6E\u56FD\u9645\u5316\u63D0\u793A\u4FE1\u606F\u3002"]}),Object(e.jsx)(r.a,{code:`const validateMessages = {
  required: '\${title}\u662F\u5FC5\u9009\u5B57\u6BB5',
  // ...
};

<Form validateMessages={validateMessages} />;`,lang:"jsx"}),Object(e.jsxs)("p",{children:["\u76EE\u524D\u53EF\u4EE5\u7528\u7684\u8F6C\u4E49\u5B57\u6BB5\u4E3A ",Object(e.jsxs)("code",{children:["$","{","title","}"]}),"\uFF0C",Object(e.jsxs)("code",{children:["$","{","min","}"]}),"\uFF0C",Object(e.jsxs)("code",{children:["$","{","max","}"]}),"\uFF0C",Object(e.jsxs)("code",{children:["$","{","len","}"]}),"\uFF0C",Object(e.jsxs)("code",{children:["$","{","pattern","}"]}),", \u5982\u679C\u6709\u66F4\u591A\u9700\u6C42\u8BF7\u63D0 ",Object(e.jsx)(u.Link,{to:"https://github.com/alibaba/x-render/issues/new/choose",children:"issue"}),"\u3002"]}),Object(e.jsxs)("h3",{id:"path",children:[Object(e.jsx)(u.AnchorLink,{to:"#path","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"Path"]}),Object(e.jsxs)("p",{children:[Object(e.jsx)("code",{children:"path"})," \u4EE3\u8868\u4E00\u4E2A\u8868\u5355\u9879\u5728 schema \u4E2D\u7684\u8DEF\u5F84\uFF0C\u5728\u8C03\u7528 ",Object(e.jsx)("code",{children:"form.setSchemaByPath"}),"\uFF0C",Object(e.jsx)("code",{children:"watch"})," \u7B49 api \u65F6\uFF0C\u9700\u8981\u7528\u5230\u3002"]}),Object(e.jsx)(r.a,{code:`const schema = {
  type: 'object',
  properties: {
    // \u6CA1\u6709\u5D4C\u5957\u5143\u7D20\u7684\u666E\u901A\u8868\u5355\u4E2D
    // \u6B64\u5143\u7D20\u7684 path \u4E3A 'address'
    address: {
      title: '\u5730\u5740',
      type: 'string',
    },

    // \u8868\u5355\u4E2D\u5D4C\u5957\u4E86\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B\u7684\u5143\u7D20\u65F6
    obj: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        // \u6B64\u5143\u7D20\u7684 path \u4E3A 'obj.select'
        select: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
      },
    },

    // \u5728 list \u7C7B\u578B\u7684\u8868\u5355\u5143\u7D20\u4E2D\uFF0C\u4F7F\u7528 [] \u8868\u793A list
    list: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          // \u6B64\u5143\u7D20\u7684 path \u4E3A 'list[].input'
          input: {
            title: '\u8F93\u5165\u6846',
            type: 'string',
          },
          object: {
            title: '\u5BF9\u8C61',
            type: 'object',
            properties: {
              // \u6B64\u5143\u7D20\u7684 path \u4E3A 'list[].object.select'
              select: {
                title: '\u9009\u62E9\u6846',
                type: 'string',
                enum: ['a', 'b', 'c'],
                enumNames: ['\u65E9', '\u4E2D', '\u665A'],
              },
            },
          },
        },
      },
    },
  },
};`,lang:"js"}),Object(e.jsxs)("h3",{id:"error",children:[Object(e.jsx)(u.AnchorLink,{to:"#error","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"Error"]}),Object(e.jsx)(r.a,{code:`type Error = {
  /** \u9519\u8BEF\u7684\u6570\u636E\u8DEF\u5F84 */
  name: string;
  /** \u9519\u8BEF\u7684\u5185\u5BB9 */
  error: string[];
};`,lang:"ts"}),Object(e.jsxs)("h2",{id:"hooks",children:[Object(e.jsx)(u.AnchorLink,{to:"#hooks","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"Hooks"]}),Object(e.jsxs)("h3",{id:"useform",children:[Object(e.jsx)(u.AnchorLink,{to:"#useform","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"UseForm"]}),Object(e.jsxs)("p",{children:[Object(e.jsx)("code",{children:"useForm"})," \u7528\u4E8E\u521B\u5EFA\u8868\u5355\u5B9E\u4F8B\uFF0C\u4F7F\u7528\u65F6\u9700\u8981\u521B\u5EFA\u5B9E\u4F8B\uFF0C\u5E76\u4F20\u5165\u4E0E\u5176\u5BF9\u5E94\u7684\u8868\u5355\u4E0A\u3002"]}),Object(e.jsx)(r.a,{code:`import Form, { useForm } from 'form-render';

const Demo = () => {
  const form = useForm();
  return <Form form={form} />;
};`,lang:"jsx"}),Object(e.jsxs)("p",{children:["\u5982\u679C\u662F class \u7EC4\u4EF6\u53EF\u4EE5\u4F7F\u7528 ",Object(e.jsx)("code",{children:"connectForm"})," \uFF0C\u4F5C\u7528\u4E0E ",Object(e.jsx)("code",{children:"useForm"})," \u76F8\u540C\u3002"]}),Object(e.jsx)(r.a,{code:`import Form, { connectForm } from 'form-render';

const Demo = ({ form }) => {
  return <Form form={form} />;
};

export default connectForm(Demo);`,lang:"jsx"}),Object(e.jsxs)("p",{children:[Object(e.jsx)("code",{children:"useForm"})," \u53EF\u4EE5\u4F20\u5165\u4EE5\u4E0B\u53C2\u6570\uFF0C\u8BE6\u89C1",Object(e.jsx)(u.Link,{to:"./../advanced/measure",children:"\u8868\u5355\u5065\u5EB7\u5EA6 & \u63D0\u6548"}),"\u3002"]}),Object(e.jsx)(r.a,{code:`const form = useForm({
  logOnMount: info => {}, // \u4F1A\u5728\u8868\u5355\u9996\u6B21\u52A0\u8F7D\u65F6\u89E6\u53D1, \u83B7\u53D6\u8868\u5355\u4FE1\u606F
  logOnSubmit: info => {}, // \u4F1A\u5728 form.submit \u65F6\u89E6\u53D1\uFF0C\u83B7\u53D6\u8868\u5355\u4FE1\u606F\uFF08\u5982\u586B\u5199\u65F6\u957F\u3001\u62A5\u9519\u4FE1\u606F\u7B49\uFF09
});`,lang:"jsx"})]})})});a.default=s=>{var F=l.a.useContext(u.context),A=F.demos;return l.a.useEffect(()=>{var o;s!=null&&(o=s.location)!==null&&o!==void 0&&o.hash&&u.AnchorLink.scrollToAnchor(decodeURIComponent(s.location.hash.slice(1)))},[]),Object(e.jsx)(B,{demos:A})}},WpQk:function(f,a,n){},"dMo/":function(f,a,n){"use strict";var i=n("q1tI"),l=n.n(i),u=n("hKI/"),v=n.n(u),r=n("WpQk"),C=n.n(r);function e(t,d){return A(t)||F(t,d)||B(t,d)||p()}function p(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(t,d){if(!!t){if(typeof t=="string")return s(t,d);var c=Object.prototype.toString.call(t).slice(8,-1);if(c==="Object"&&t.constructor&&(c=t.constructor.name),c==="Map"||c==="Set")return Array.from(t);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return s(t,d)}}function s(t,d){(d==null||d>t.length)&&(d=t.length);for(var c=0,j=new Array(d);c<d;c++)j[c]=t[c];return j}function F(t,d){var c=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(c!=null){var j=[],b=!0,O=!1,E,m;try{for(c=c.call(t);!(b=(E=c.next()).done)&&(j.push(E.value),!(d&&j.length===d));b=!0);}catch(D){O=!0,m=D}finally{try{!b&&c.return!=null&&c.return()}finally{if(O)throw m}}return j}}function A(t){if(Array.isArray(t))return t}var o=function(d){var c=d.children,j=Object(i.useRef)(),b=Object(i.useState)(!1),O=e(b,2),E=O[0],m=O[1],D=Object(i.useState)(!1),g=e(D,2),_=g[0],y=g[1];return Object(i.useEffect)(function(){var h=j.current,x=v()(function(){m(h.scrollLeft>0),y(h.scrollLeft<h.scrollWidth-h.offsetWidth)},100);return x(),h.addEventListener("scroll",x),window.addEventListener("resize",x),function(){h.removeEventListener("scroll",x),window.removeEventListener("resize",x)}},[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:j,"data-left-folded":E||void 0,"data-right-folded":_||void 0},l.a.createElement("table",null,c)))};a.a=o}}]);
