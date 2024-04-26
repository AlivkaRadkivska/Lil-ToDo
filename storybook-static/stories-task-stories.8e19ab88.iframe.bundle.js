"use strict";(self.webpackChunklil_todo=self.webpackChunklil_todo||[]).push([[132],{"./src/stories/task.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Done:()=>Done,Undone:()=>Undone,__namedExportsOrder:()=>__namedExportsOrder,default:()=>task_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react_stars=__webpack_require__("./node_modules/react-stars/dist/react-stars.js"),task_actions=__webpack_require__("./src/db/task-actions.ts"),react_dom=__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js"),components_button=__webpack_require__("./src/components/button.tsx"),error_string=__webpack_require__("./src/components/error-string.tsx");function DeleteTaskForm(param){let{task}=param;const[formState,submit]=(0,react_dom.useFormState)(task_actions.vq,{message:""});return(0,jsx_runtime.jsxs)("form",{action:submit,className:"flex flex-col items-center",children:[(0,jsx_runtime.jsx)("input",{name:"id",type:"text",value:task.id,readOnly:!0,hidden:!0}),(0,jsx_runtime.jsx)(components_button.$,{children:(0,jsx_runtime.jsx)("input",{type:"submit",name:"delete-submit",value:"Del",className:"cursor-pointer"})}),formState.message&&(0,jsx_runtime.jsx)(error_string.L,{children:formState.message})]})}DeleteTaskForm.__docgenInfo={description:"",methods:[],displayName:"DeleteTaskForm",props:{task:{required:!0,tsType:{name:"TaskT"},description:""}}};var _Undone_parameters,_Undone_parameters_docs,_Undone_parameters1,_Done_parameters,_Done_parameters_docs,_Done_parameters1,react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function UpdateTaskStatusForm(param){let{task}=param;const[checked,setChecked]=(0,react.useState)(task.status),[formState,submit]=(0,react_dom.useFormState)(task_actions.xZ,{message:""});return(0,jsx_runtime.jsxs)("form",{className:"flex items-center",children:[formState.message&&(0,jsx_runtime.jsx)(error_string.L,{children:formState.message}),(0,jsx_runtime.jsx)("input",{className:"rounded w-4 h-4",type:"checkbox",name:"status",checked,onChange:function handleChange(){setChecked((checked=>!checked));const data=new FormData;data.append("id",task.id),data.append("status",(!checked).toString()),submit(data)}})]})}function Task(param){let{task}=param;return(0,jsx_runtime.jsxs)("div",{className:"w-full flex flex-col bg-slate-500 p-3 rounded text-white",children:[(0,jsx_runtime.jsx)("input",{className:"hidden",type:"text",value:task.id,readOnly:!0}),(0,jsx_runtime.jsxs)("div",{className:"w-full flex justify-between",children:[(0,jsx_runtime.jsx)(react_stars.A,{edit:!1,count:5,value:task.priority,color1:"#1E293B",color2:"#fff",half:!1,size:16}),(0,jsx_runtime.jsx)(DeleteTaskForm,{task})]}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-2",children:[(0,jsx_runtime.jsx)(UpdateTaskStatusForm,{task}),(0,jsx_runtime.jsx)("p",{className:"".concat(task.status?"line-through opacity-80":""),children:task.name})]})]})}UpdateTaskStatusForm.__docgenInfo={description:"",methods:[],displayName:"UpdateTaskStatusForm",props:{task:{required:!0,tsType:{name:"TaskT"},description:""}}},Task.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{required:!0,tsType:{name:"TaskT"},description:""}}};const task_stories={title:"Layout/Task",component:Task,parameters:{backgrounds:{default:"default",values:[{name:"default",value:"#1E293B"}]}},tags:["autodocs"]},Undone={args:{task:{id:"6382g4bdw78-437rh38",name:"To do task",priority:4,status:!1}}},Done={args:{task:{id:"6382g4bdw78-437rh38",name:"To do task",priority:4,status:!0}}};Undone.parameters={...Undone.parameters,docs:{...null===(_Undone_parameters=Undone.parameters)||void 0===_Undone_parameters?void 0:_Undone_parameters.docs,source:{originalSource:"{\n  args: {\n    task: {\n      id: '6382g4bdw78-437rh38',\n      name: 'To do task',\n      priority: 4,\n      status: false\n    }\n  }\n}",...null===(_Undone_parameters1=Undone.parameters)||void 0===_Undone_parameters1||null===(_Undone_parameters_docs=_Undone_parameters1.docs)||void 0===_Undone_parameters_docs?void 0:_Undone_parameters_docs.source}}},Done.parameters={...Done.parameters,docs:{...null===(_Done_parameters=Done.parameters)||void 0===_Done_parameters?void 0:_Done_parameters.docs,source:{originalSource:"{\n  args: {\n    task: {\n      id: '6382g4bdw78-437rh38',\n      name: 'To do task',\n      priority: 4,\n      status: true\n    }\n  }\n}",...null===(_Done_parameters1=Done.parameters)||void 0===_Done_parameters1||null===(_Done_parameters_docs=_Done_parameters1.docs)||void 0===_Done_parameters_docs?void 0:_Done_parameters_docs.source}}};const __namedExportsOrder=["Undone","Done"]},"./src/components/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function Button(param){let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:" text-white border-2 border-white py-1 px-3 ease-in-out hover:bg-white hover:text-slate-800 rounded cursor-pointer font-bold",children})}Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}},"./src/components/error-string.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>ErrString});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function ErrString(param){let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"w-full text-sm border-t-2 my-1 border-red-600",children})}ErrString.__docgenInfo={description:"",methods:[],displayName:"ErrString",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}},"./src/db/task-actions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XZ:()=>addTask,vq:()=>deleteTask,xZ:()=>updateTaskStatus});const db_db=new(__webpack_require__("./node_modules/@prisma/client/index-browser.js").PrismaClient);var navigation=__webpack_require__("./node_modules/next/navigation.js"),lib=__webpack_require__("./node_modules/zod/lib/index.mjs");const addTaskSchema=lib.z.object({name:lib.z.string().min(3),priority:lib.z.number().min(1).max(5)});async function addTask(_state,payload){const data={name:payload.get("name"),priority:parseInt(payload.get("priority"))},parseRes=addTaskSchema.safeParse(data);var _parseRes_error_flatten_fieldErrors_name,_parseRes_error_flatten_fieldErrors_priority;if(!parseRes.success)return{message:{name:null===(_parseRes_error_flatten_fieldErrors_name=parseRes.error.flatten().fieldErrors.name)||void 0===_parseRes_error_flatten_fieldErrors_name?void 0:_parseRes_error_flatten_fieldErrors_name.join(","),priority:null===(_parseRes_error_flatten_fieldErrors_priority=parseRes.error.flatten().fieldErrors.priority)||void 0===_parseRes_error_flatten_fieldErrors_priority?void 0:_parseRes_error_flatten_fieldErrors_priority.join(",")}};if("message"in await db_db.task.create({data}))return{message:{other:"Something went wrong, please try later"}};(0,navigation.redirect)("/")}async function updateTaskStatus(_state,payload){const id=payload.get("id"),status="true"===payload.get("status");if("message"in await db_db.task.update({where:{id},data:{status}}))return{message:"Something went wrong, please try later"};(0,navigation.redirect)("/")}async function deleteTask(_state,payload){const id=payload.get("id");if("message"in await db_db.task.delete({where:{id}}))return{message:"Something went wrong, please try later"};(0,navigation.redirect)("/")}}}]);