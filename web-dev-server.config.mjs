import { esbuildPlugin } from "@web/dev-server-esbuild";

/* eslint-disable-next-line import/no-default-export */
export default {
  appIndex: "./index.html",
  open: true,
  nodeResolve: true,
  http2: false,
  watch: true,
  plugins: [esbuildPlugin({ ts: true })],
  rootDir: ".",
};
