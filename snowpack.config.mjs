/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    src: { url: '/' }
  },
  plugins: [
    /* ... */
  ],
  routes: [
    /* This is the workaround */
    // {"match": "routes", "src": "/subfolder", "dest": "/subfolder/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
