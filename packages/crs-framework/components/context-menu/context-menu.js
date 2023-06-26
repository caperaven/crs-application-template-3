import"./../filter-header/filter-header.js";import{buildElements as l}from"./utils/build-elements.js";import{handleSelection as n}from"./utils/select-item-handler.js";class h extends crs.classes.BindableElement{#e;#s;#l;#n;#i;#h=this.#y.bind(this);#o;#u;#d;#a;#c;#r=this.#p.bind(this);#t;#m=!1;get shadowDom(){return!0}get html(){return import.meta.url.replace(".js",".html")}async connectedCallback(){await super.connectedCallback(),await this.load()}async load(){return new Promise(async t=>{requestAnimationFrame(async()=>{this.shadowRoot.addEventListener("click",this.#h);const e=this.shadowRoot.querySelector(".popup");this.#m=await l.call(this,this.#e,this.#c,this.#o,this.container);let i="right",s="top";this.#i&&(i="bottom",s="left"),await crs.call("fixed_layout","set",{element:e,target:this.#i,point:this.#s,at:this.#l||i,anchor:this.#n||s,margin:this.#a||0}),this.#m===!1&&await crs.call("dom_interactive","enable_resize",{element:this.popup,resize_query:"#resize",options:{}}),this.#t=this.shadowRoot.querySelector("filter-header"),this.#t.addEventListener("close",this.#r),await crs.call("component","notify_ready",{element:this}),t()})})}async disconnectedCallback(){await crs.call("dom_interactive","disable_resize",{element:this.popup}),this.#t.removeEventListener("close",this.#r),this.shadowRoot.removeEventListener("click",this.#h),this.#t=null,this.#r=null,this.#h=null,this.#e=null,this.#s=null,this.#l=null,this.#n=null,this.#i=null,this.#o=null,this.#u=null,this.#d=null,this.#a=null,this.#c=null,this.#m=null,await super.disconnectedCallback()}async#y(t){if(t.composedPath()[0].matches(".back"))return await this.#p();await n(t,this.#e,this,this.#t)}async#p(t){await crs.call("context_menu","close")}setOptions(t){if(this.#e=t.options,this.#s=t.point,this.#l=t.at,this.#n=t.anchor,this.#i=t.target,this.#o=t.context,this.#u=t.process,this.#d=t.item,this.#a=t.margin,this.#c=t.templates,typeof t.height=="number"&&(t.height=`${t.height}px`),this.style.setProperty("--height",t.height),t.style!=null)for(const e of Object.keys(t.style))this.style.setProperty(e,t.style[e])}}customElements.define("context-menu",h);