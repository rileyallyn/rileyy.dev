import { c as create_ssr_component, f as escape, v as validate_component } from "../../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { title, date, Content } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<a class="hover:text-blue-400 hover:cursor-pointer ml-10" href="/blog">&lt;- Go Back</a>
<div class="flex justify-center mt-10"><article class="flex flex-col"><div class="mb-10"><h1 class="text-6xl text-left">${escape(title)}</h1>
			<p class="text-md text-gray-400">${escape(date)}</p></div>
		${validate_component(Content, "Content").$$render($$result, {}, {}, {})}</article></div>`;
});
export {
  Page as default
};
