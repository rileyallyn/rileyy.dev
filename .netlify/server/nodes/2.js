import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.fe68b12c.js","_app/immutable/chunks/index.afc1fc3a.js"];
export const stylesheets = ["_app/immutable/assets/header.c8de9a2a.css"];
export const fonts = [];
