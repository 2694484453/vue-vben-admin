import{_ as c}from"./BasicForm.vue_vue_type_script_setup_true_lang-DTF6DCCr.js";import"./BasicForm.vue_vue_type_style_index_0_lang-Bcs0Hsk0.js";import"./componentMap-CUkAJR6B.js";import{C as d,a as f}from"./entry/index-BKmO06ht.js";import{P as _}from"./index-BankyEHO.js";import{M as a,C as i}from"./index-CB4xu-dI.js";import{d as g,Z as C,a8 as b,a9 as n,k as s,u as o,l as p}from"./vue-BjERyvPm.js";import"./FormItem.vue_vue_type_script_lang-DfKkNBGz.js";import"./helper-DYgMZ4Zv.js";import"./antd-BmrhB3rb.js";import"./index-yWpBxN9b.js";import"./useWindowSizeFn-CeOi9qbv.js";import"./useFormItem-B4KjxddK.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DxwFXdrQ.js";import"./index-DoBeXEGi.js";import"./uuid-D0SLUWHI.js";import"./useSortable-D01wmu8b.js";import"./download-B2h6kF5R.js";import"./base64Conver-bBv-IO2K.js";import"./index-BFR-5j1P.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-C90wo2pK.js";import"./copyTextToClipboard-DUmgQPO1.js";import"./index-DNo1sUBa.js";import"./index-DUHqKxh8.js";import"./useContentViewHeight-DkYOkRAN.js";import"./onMountedOrActivated-DcvTUt7V.js";const A=g({__name:"Editor",setup(h){const m=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"JSON",component:"Input",label:"JSON",defaultValue:`{
        "name":"BeJson",
        "url":"http://www.xxx.com",
        "page":88,
        "isNonProfit":true,"
        address:{ 
            "street":"科技园路.",
            "city":"江苏苏州",
            "country":"中国"
        },
}`,rules:[{required:!0,trigger:"blur"}],render:({model:e,field:t})=>p(i,{value:e[t],mode:a.JSON,onChange:r=>{e[t]=r},config:{tabSize:10}})},{field:"PYTHON",component:"Input",label:"PYTHON",defaultValue:`def functionname( parameters ):
   "函数_文档字符串"
   function_suite
   return [expression]`,rules:[{required:!0,trigger:"blur"}],render:({model:e,field:t})=>p(i,{value:e[t],mode:a.PYTHON,onChange:r=>{e[t]=r}})}],{createMessage:u}=f();function l(e){u.success("click search,values:"+JSON.stringify(e))}return(e,t)=>(C(),b(o(_),{title:"代码编辑器组件嵌入Form示例"},{default:n(()=>[s(o(d),{title:"代码编辑器组件"},{default:n(()=>[s(o(c),{labelWidth:100,schemas:m,actionColOptions:{span:24},baseColProps:{span:24},onSubmit:l})]),_:1})]),_:1}))}});export{A as default};
