import"./context-loader.js";class b{static async perform(a,n,t,e){await this[a.action](a,n,t,e)}static async show(a,n,t,e){const o=await crs.dom.get_element(a.args.element,n,t,e),i=await crs.process.getValue(a.args.options,n,t,e),r=await crs.process.getValue(a.args.at,n,t,e),g=await crs.process.getValue(a.args.anchor,n,t,e),u=await crs.process.getValue(a.args.point,n,t,e),h=await crs.process.getValue(a.args.margin,n,t,e),c=await crs.process.getValue(a.args.callback,n,t,e),w=await crs.process.getValue(a.args.templates,n,t,e);globalThis.contextMenu!=null&&await this.close();const d=await crs.process.getValue(a.args.icon_font_family,n,t,e),f=await crs.process.getValue(a.args.height,n,t,e),s=document.createElement("context-menu");if(s.setOptions({options:i,templates:w,point:u,target:o,at:r,anchor:g,context:n,margin:h,height:f,style:{"--icon-font":d}}),document.body.appendChild(s),c!=null){const l=m=>{s.removeEventListener("change",l),c(m)};s.addEventListener("change",l)}globalThis.contextMenu=s}static async close(){globalThis.contextMenu!=null&&(globalThis.contextMenu.parentElement.removeChild(globalThis.contextMenu),delete globalThis.contextMenu)}}crs.intent.context_menu=b;export{b as ContextMenuActions};