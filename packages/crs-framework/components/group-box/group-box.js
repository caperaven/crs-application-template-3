import{loadHTML as i}from"./../../src/load-resources.js";class r extends HTMLElement{#t=this.#i.bind(this);#e=this.#r.bind(this);static get observedAttributes(){return["data-title"]}get html(){return import.meta.url.replace(".js",".html")}constructor(){super(),this.attachShadow({mode:"open"})}async connectedCallback(){this.shadowRoot.innerHTML=await i(import.meta.url),await this.load(),await this.#a()}load(){return new Promise(t=>{requestAnimationFrame(async()=>{this.setAttribute("aria-expanded","true"),this.shadowRoot.addEventListener("click",this.#t),this.shadowRoot.querySelector("header").addEventListener("keyup",this.#e),this.shadowRoot.querySelector("#title").textContent=this.dataset.title,await crs.call("component","notify_ready",{element:this}),t()})})}async disconnectedCallback(){this.shadowRoot.removeEventListener("click",this.#t),this.shadowRoot.querySelector("header").removeEventListener("keyup",this.#e),this.#t=null,this.#e=null}async#i(t){t.composedPath()[0].id==="btnToggleExpand"&&await this.#s()}async#r(t){t.key!=="ArrowUp"&&t.key!=="ArrowDown"||this.setAttribute("aria-expanded",t.key==="ArrowUp"?"false":"true")}async#s(){const t=this.getAttribute("aria-expanded")==="true";this.setAttribute("aria-expanded",!t),this.shadowRoot.querySelector("#btnToggleExpand")!=null&&this.shadowRoot.querySelector("#btnToggleExpand").setAttribute("aria-expanded",!t),await this.#a()}attributeChangedCallback(t,e,o){if(t==="data-title"){const a=this.shadowRoot.querySelector("#title");a!=null&&(a.textContent=this.dataset.title)}}async#a(){if(this.dataset.ready!=="true")return;const t=this.getAttribute("aria-expanded");this.shadowRoot.querySelector("#main").setAttribute("tabindex",t==="true"?"0":"-1")}}customElements.define("group-box",r);export{r as GroupBox};