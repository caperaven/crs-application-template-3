function f(l,o,c,s){const n=[`element.setAttribute("data-id", model.${o})`];i(c,n,"element");for(let e=0;e<l.columns.length;e++){const t=l.columns[e];if(s[t.field]!=null&&i(s[t.field],n,`element.children[${e}]`),n.push(`element.children[${e}].dataset.field = "${t.field}";`),t.convert!=null){const a=t.html==!0?"innerHTML":"textContent";n.push(`element.children[${e}].${a} = crs.binding.valueConvertersManager.convert(model.${t.field}, "${t.convert.converter}", "get")`)}else n.push(`element.children[${e}].textContent = model.${t.field}`)}const r=new Function("element","model",n.join(`
`));l.rowInflateFn=r}async function u(l,o,c,s,n,r){const e=await crs.call("dom","create_element",{parent:l.rowContainer,attributes:{role:"row"},styles:{height:r,translate:`0 ${n}`},dataset:{index:s}});for(const t of l.columns){const a=await crs.call("dom","create_element",{parent:e,attributes:{role:"gridcell"},styles:t.styles,classes:t.classes});t.align!=null&&a.classList.add(t.align)}o(e,c)}function i(l,o,c){const s=Object.keys(l||{});for(const n of s){o.push(`if (${n}) {`);const r=Object.keys(l[n]);for(const e of r)o.push(`    ${c}.style.${e} = "${l[n][e]}"`);o.push("}")}}export{u as createRowElement,f as createRowInflation};
