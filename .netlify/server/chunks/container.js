import { c as create_ssr_component } from "./index3.js";
const container_svelte_svelte_type_style_lang = "";
const css = {
  code: ".translucent.svelte-15ftnp2{background-color:rgba(16, 24, 35, 0.98);border-width:1px;border-radius:10px;border-color:white}",
  map: null
};
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="h-[40rem] mt-5 translucent container p-4 flex flex-row svelte-15ftnp2">${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  Container as C
};
