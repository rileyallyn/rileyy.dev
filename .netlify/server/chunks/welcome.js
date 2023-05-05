import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Welcome!",
  "date": "2023-05-14"
};
const Welcome = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Hello! Welcome to my blog. It is a bit empty right now… but I’ll have posts soon!</p>`;
});
export {
  Welcome as default,
  metadata
};
