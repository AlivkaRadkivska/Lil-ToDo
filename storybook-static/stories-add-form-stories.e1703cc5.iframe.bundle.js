"use strict";(self.webpackChunklil_todo=self.webpackChunklil_todo||[]).push([[263],{"./src/stories/add-form.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>add_form_stories});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react_stars=__webpack_require__("./node_modules/react-stars/dist/react-stars.js"),components_button=__webpack_require__("./src/components/button.tsx"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_dom=__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js"),task_actions=__webpack_require__("./src/db/task-actions.ts"),error_string=__webpack_require__("./src/components/error-string.tsx");function NewTaskForm(){const[formState,submit]=(0,react_dom.useFormState)(task_actions.XZ,{message:{}}),[priorityStars,setStars]=(0,react.useState)(3),[taskName,setTaskName]=(0,react.useState)("");return(0,jsx_runtime.jsxs)("form",{className:"flex flex-col mt-3",action:submit,onSubmit:function handleSubmit(){setStars(3),setTaskName("")},children:[(0,jsx_runtime.jsx)("p",{className:"p-1 text-slate-900 font-bold",children:"New task:"}),(0,jsx_runtime.jsxs)("label",{className:"p-2",children:["Task name:",(0,jsx_runtime.jsx)("input",{className:"text-black w-full p-1 pl-2 m-0 outline-none border-none rounded",type:"text",name:"name",placeholder:"To do something",value:taskName,onChange:e=>setTaskName(e.target.value),required:!0})]}),formState.message.name&&(0,jsx_runtime.jsx)(error_string.L,{children:formState.message.name}),(0,jsx_runtime.jsxs)("div",{className:"flex p-2 gap-5 w-full min-w-max",children:[(0,jsx_runtime.jsx)("p",{children:"Priority:"}),(0,jsx_runtime.jsx)("input",{type:"number",name:"priority",value:priorityStars,hidden:!0,readOnly:!0}),(0,jsx_runtime.jsx)(react_stars.A,{count:5,color1:"#1E293B",color2:"#fff",half:!1,size:16,value:priorityStars,onChange:new_rating=>setStars(new_rating)})]}),formState.message.priority&&(0,jsx_runtime.jsx)(error_string.L,{children:formState.message.priority}),(0,jsx_runtime.jsx)(components_button.$,{children:(0,jsx_runtime.jsx)("input",{type:"submit",name:"add-submit",value:"Add",className:"cursor-pointer"})}),formState.message.other&&(0,jsx_runtime.jsx)(error_string.L,{children:formState.message.other})]})}NewTaskForm.__docgenInfo={description:"",methods:[],displayName:"NewTaskForm"};const add_form_stories={title:"Layout/Task adding",component:NewTaskForm,parameters:{backgrounds:{default:"default",values:[{name:"default",value:"#64748B"}]}},tags:["autodocs"]},Default={};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"{}",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./src/components/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function Button(param){let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:" text-white border-2 border-white py-1 px-3 ease-in-out hover:bg-white hover:text-slate-800 rounded cursor-pointer font-bold",children})}Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}},"./src/components/error-string.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>ErrString});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function ErrString(param){let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"w-full text-sm border-t-2 my-1 border-red-600",children})}ErrString.__docgenInfo={description:"",methods:[],displayName:"ErrString",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}},"./src/db/task-actions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XZ:()=>addTask,vq:()=>deleteTask,xZ:()=>updateTaskStatus});const db_db=new(__webpack_require__("./node_modules/@prisma/client/index-browser.js").PrismaClient);var navigation=__webpack_require__("./node_modules/next/navigation.js"),lib=__webpack_require__("./node_modules/zod/lib/index.mjs");const addTaskSchema=lib.z.object({name:lib.z.string().min(3),priority:lib.z.number().min(1).max(5)});async function addTask(_state,payload){const data={name:payload.get("name"),priority:parseInt(payload.get("priority"))},parseRes=addTaskSchema.safeParse(data);var _parseRes_error_flatten_fieldErrors_name,_parseRes_error_flatten_fieldErrors_priority;if(!parseRes.success)return{message:{name:null===(_parseRes_error_flatten_fieldErrors_name=parseRes.error.flatten().fieldErrors.name)||void 0===_parseRes_error_flatten_fieldErrors_name?void 0:_parseRes_error_flatten_fieldErrors_name.join(","),priority:null===(_parseRes_error_flatten_fieldErrors_priority=parseRes.error.flatten().fieldErrors.priority)||void 0===_parseRes_error_flatten_fieldErrors_priority?void 0:_parseRes_error_flatten_fieldErrors_priority.join(",")}};if("message"in await db_db.task.create({data}))return{message:{other:"Something went wrong, please try later"}};(0,navigation.redirect)("/")}async function updateTaskStatus(_state,payload){const id=payload.get("id"),status="true"===payload.get("status");if("message"in await db_db.task.update({where:{id},data:{status}}))return{message:"Something went wrong, please try later"};(0,navigation.redirect)("/")}async function deleteTask(_state,payload){const id=payload.get("id");if("message"in await db_db.task.delete({where:{id}}))return{message:"Something went wrong, please try later"};(0,navigation.redirect)("/")}}}]);