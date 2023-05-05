const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
async function load({ params }) {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../welcome.md": () => import("../../../../chunks/welcome.js") }), `../${params.slug}.md`);
  const { title, date } = post.metadata;
  const Content = post.default;
  return {
    Content,
    title,
    date
  };
}
export {
  load
};
