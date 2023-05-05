import { c as create_ssr_component, v as validate_component, i as each, k as add_attribute, f as escape } from "../../../chunks/index3.js";
import { C as Container } from "../../../chunks/container.js";
import "../../../chunks/singletons.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<ul>${each(data.posts, (post) => {
        return `<li><div class="flex flex-col p-14 border-2 border-blue-500 rounded-lg bg-black justify-left"><h1 class="text-xl text-left"><a class="hover:text-blue-400"${add_attribute("href", post.path, 0)}>${escape(post.meta.title)}
							</a></h1>

						<p class="text-xs text-gray-500 text-center">${escape(post.meta.date)}</p></div>
			</li>`;
      })}</ul>`;
    }
  })}`;
});
export {
  Page as default
};
