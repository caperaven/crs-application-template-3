import{loadHTML as s}from"./../../src/load-resources.js";class i extends HTMLElement{#t=this.#i.bind(this);#a;#s;get selected(){return this.dataset.value}set selected(t){if(t==null)return;const e=this.querySelector(`[data-value='${t}']`);e!=null&&this.dataset.ready==="true"?this.#e(e).catch(a=>console.error(a)):this.dataset.value=t}constructor(){super(),this.attachShadow({mode:"open"})}async connectedCallback(){this.shadowRoot.innerHTML=await s(import.meta.url),await this.load()}load(){return new Promise(t=>{requestAnimationFrame(async()=>{this.setAttribute("role","toggle-switch"),this.setAttribute("aria-label","toggle-switch"),this.#s=this.shadowRoot.querySelector(".parent");const e=this.querySelector(`[data-value='${this.dataset.value}']`)??this.querySelector("[aria-selected='true']")??this.firstElementChild;this.shadowRoot.addEventListener("click",this.#t);let a=setTimeout(async()=>{await this.#e(e,!1),clearTimeout(a)},.5);await crs.call("component","notify_ready",{element:this}),t()})})}async disconnectedCallback(){this.shadowRoot.removeEventListener("click",this.#t),this.#t=null,this.#a=null}async#e(t,e=!0){await crs.call("dom_collection","toggle_selection",{target:t}),this.dataset.value=t.dataset.value,this.#a=t,e===!0&&this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:t.dataset.value}))}async#i(t){const e=await crs.call("dom_utils","find_parent_of_type",{element:t?.target,nodeName:"BUTTON"});e!=null&&await this.#e(e)}}customElements.define("options-toolbar",i);