// vite.config.mts
import dotenv from "file:///C:/Users/Admin/Desktop/Temp/lowcoder/client/node_modules/dotenv/lib/main.js";
import { defineConfig } from "file:///C:/Users/Admin/Desktop/Temp/lowcoder/client/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Admin/Desktop/Temp/lowcoder/client/node_modules/@vitejs/plugin-react/dist/index.mjs";
import viteTsconfigPaths from "file:///C:/Users/Admin/Desktop/Temp/lowcoder/client/node_modules/vite-tsconfig-paths/dist/index.mjs";
import svgrPlugin from "file:///C:/Users/Admin/Desktop/Temp/lowcoder/client/node_modules/vite-plugin-svgr/dist/index.mjs";
import checker from "file:///C:/Users/Admin/Desktop/Temp/lowcoder/client/node_modules/vite-plugin-checker/dist/esm/main.js";
import { visualizer } from "file:///C:/Users/Admin/Desktop/Temp/lowcoder/client/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import path from "path";
import chalk from "file:///C:/Users/Admin/Desktop/Temp/lowcoder/client/node_modules/chalk/source/index.js";
import { createHtmlPlugin } from "file:///C:/Users/Admin/Desktop/Temp/lowcoder/client/node_modules/vite-plugin-html/dist/index.mjs";
import { ensureLastSlash } from "file:///C:/Users/Admin/Desktop/Temp/lowcoder/client/packages/lowcoder-dev-utils/util.js";
import { buildVars } from "file:///C:/Users/Admin/Desktop/Temp/lowcoder/client/packages/lowcoder-dev-utils/buildVars.js";
import { globalDepPlugin } from "file:///C:/Users/Admin/Desktop/Temp/lowcoder/client/packages/lowcoder-dev-utils/globalDepPlguin.js";
var __vite_injected_original_dirname = "C:\\Users\\Admin\\Desktop\\Temp\\lowcoder\\client\\packages\\lowcoder";
dotenv.config();
var apiProxyTarget = process.env.LOWCODER_API_SERVICE_URL;
var nodeServiceApiProxyTarget = process.env.NODE_SERVICE_API_PROXY_TARGET;
var nodeEnv = process.env.NODE_ENV ?? "development";
var edition = process.env.REACT_APP_EDITION;
var isEEGlobal = edition === "enterprise-global";
var isEE = edition === "enterprise" || isEEGlobal;
var isDev = nodeEnv === "development";
var isVisualizerEnabled = !!process.env.ENABLE_VISUALIZER;
var browserCheckFileName = `browser-check.js`;
var base = ensureLastSlash(process.env.PUBLIC_URL);
if (!apiProxyTarget && isDev) {
  console.log();
  console.log(chalk.red`LOWCODER_API_SERVICE_URL is required.\n`);
  console.log(chalk.cyan`Start with command: LOWCODER_API_SERVICE_URL=\{backend-api-addr\} yarn start`);
  console.log();
  process.exit(1);
}
var proxyConfig = {
  "/api": {
    target: apiProxyTarget,
    changeOrigin: false
  }
};
if (nodeServiceApiProxyTarget) {
  proxyConfig["/node-service"] = {
    target: nodeServiceApiProxyTarget
  };
}
var define = {};
buildVars.forEach(({ name, defaultValue }) => {
  define[name] = JSON.stringify(process.env[name] || defaultValue);
});
var viteConfig = {
  define,
  assetsInclude: ["**/*.md"],
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    alias: {
      "@lowcoder-ee": path.resolve(
        __vite_injected_original_dirname,
        isEE ? `../lowcoder/src/${isEEGlobal ? "ee-global" : "ee"}` : "../lowcoder/src"
      )
    }
  },
  base,
  build: {
    manifest: true,
    target: "es2015",
    cssTarget: "chrome63",
    outDir: "build",
    assetsDir: "static",
    emptyOutDir: false,
    rollupOptions: {
      output: {
        chunkFileNames: "[hash].js"
      }
    },
    commonjsOptions: {
      defaultIsModuleExports: (id) => {
        if (id.indexOf("antd/lib") !== -1) {
          return false;
        }
        return "auto";
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "@primary-color": "#3377FF",
          "@link-color": "#3377FF",
          "@border-color-base": "#D7D9E0",
          "@border-radius-base": "4px"
        },
        javascriptEnabled: true
      }
    }
  },
  server: {
    open: true,
    cors: true,
    port: 8e3,
    host: "0.0.0.0",
    proxy: proxyConfig
  },
  plugins: [
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint --quiet "./src/**/*.{ts,tsx}"',
        dev: {
          logLevel: ["error"]
        }
      }
    }),
    react({
      babel: {
        parserOpts: {
          plugins: ["decorators-legacy"]
        }
      }
    }),
    viteTsconfigPaths({
      projects: ["../lowcoder/tsconfig.json", "../lowcoder-design/tsconfig.json"]
    }),
    svgrPlugin({
      svgrOptions: {
        exportType: "named",
        prettier: false,
        svgo: false,
        titleProp: true,
        ref: true
      }
    }),
    globalDepPlugin(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          browserCheckScript: isDev ? "" : `<script src="${base}${browserCheckFileName}"></script>`
        }
      }
    }),
    isVisualizerEnabled && visualizer()
  ].filter(Boolean)
};
var browserCheckConfig = {
  ...viteConfig,
  define: {
    ...viteConfig.define,
    "process.env.NODE_ENV": JSON.stringify("production")
  },
  build: {
    ...viteConfig.build,
    manifest: false,
    copyPublicDir: false,
    emptyOutDir: true,
    lib: {
      formats: ["iife"],
      name: "BrowserCheck",
      entry: "./src/browser-check.ts",
      fileName: () => {
        return browserCheckFileName;
      }
    }
  }
};
var buildTargets = {
  main: viteConfig,
  browserCheck: browserCheckConfig
};
var buildTarget = buildTargets[process.env.BUILD_TARGET || "main"];
var vite_config_default = defineConfig(buildTarget || viteConfig);
export {
  vite_config_default as default,
  viteConfig
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQWRtaW5cXFxcRGVza3RvcFxcXFxUZW1wXFxcXGxvd2NvZGVyXFxcXGNsaWVudFxcXFxwYWNrYWdlc1xcXFxsb3djb2RlclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQWRtaW5cXFxcRGVza3RvcFxcXFxUZW1wXFxcXGxvd2NvZGVyXFxcXGNsaWVudFxcXFxwYWNrYWdlc1xcXFxsb3djb2RlclxcXFx2aXRlLmNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVGVtcC9sb3djb2Rlci9jbGllbnQvcGFja2FnZXMvbG93Y29kZXIvdml0ZS5jb25maWcubXRzXCI7aW1wb3J0IGRvdGVudiBmcm9tIFwiZG90ZW52XCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIFNlcnZlck9wdGlvbnMsIFVzZXJDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHZpdGVUc2NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XG5pbXBvcnQgc3ZnclBsdWdpbiBmcm9tIFwidml0ZS1wbHVnaW4tc3ZnclwiO1xuaW1wb3J0IGNoZWNrZXIgZnJvbSBcInZpdGUtcGx1Z2luLWNoZWNrZXJcIjtcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tIFwicm9sbHVwLXBsdWdpbi12aXN1YWxpemVyXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGNoYWxrIGZyb20gXCJjaGFsa1wiO1xuaW1wb3J0IHsgY3JlYXRlSHRtbFBsdWdpbiB9IGZyb20gXCJ2aXRlLXBsdWdpbi1odG1sXCI7XG5pbXBvcnQgeyBlbnN1cmVMYXN0U2xhc2ggfSBmcm9tIFwibG93Y29kZXItZGV2LXV0aWxzL3V0aWxcIjtcbmltcG9ydCB7IGJ1aWxkVmFycyB9IGZyb20gXCJsb3djb2Rlci1kZXYtdXRpbHMvYnVpbGRWYXJzXCI7XG5pbXBvcnQgeyBnbG9iYWxEZXBQbHVnaW4gfSBmcm9tIFwibG93Y29kZXItZGV2LXV0aWxzL2dsb2JhbERlcFBsZ3VpblwiO1xuXG5kb3RlbnYuY29uZmlnKCk7XG5cbmNvbnN0IGFwaVByb3h5VGFyZ2V0ID0gcHJvY2Vzcy5lbnYuTE9XQ09ERVJfQVBJX1NFUlZJQ0VfVVJMO1xuY29uc3Qgbm9kZVNlcnZpY2VBcGlQcm94eVRhcmdldCA9IHByb2Nlc3MuZW52Lk5PREVfU0VSVklDRV9BUElfUFJPWFlfVEFSR0VUO1xuY29uc3Qgbm9kZUVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID8/IFwiZGV2ZWxvcG1lbnRcIjtcbmNvbnN0IGVkaXRpb24gPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfRURJVElPTjtcbmNvbnN0IGlzRUVHbG9iYWwgPSBlZGl0aW9uID09PSBcImVudGVycHJpc2UtZ2xvYmFsXCI7XG5jb25zdCBpc0VFID0gZWRpdGlvbiA9PT0gXCJlbnRlcnByaXNlXCIgfHwgaXNFRUdsb2JhbDtcbmNvbnN0IGlzRGV2ID0gbm9kZUVudiA9PT0gXCJkZXZlbG9wbWVudFwiO1xuY29uc3QgaXNWaXN1YWxpemVyRW5hYmxlZCA9ICEhcHJvY2Vzcy5lbnYuRU5BQkxFX1ZJU1VBTElaRVI7XG4vLyB0aGUgZmlsZSB3YXMgbmV2ZXIgY3JlYXRlZFxuLy8gY29uc3QgYnJvd3NlckNoZWNrRmlsZU5hbWUgPSBgYnJvd3Nlci1jaGVjay0ke3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9DT01NSVRfSUR9LmpzYDtcbmNvbnN0IGJyb3dzZXJDaGVja0ZpbGVOYW1lID0gYGJyb3dzZXItY2hlY2suanNgO1xuY29uc3QgYmFzZSA9IGVuc3VyZUxhc3RTbGFzaChwcm9jZXNzLmVudi5QVUJMSUNfVVJMKTtcblxuaWYgKCFhcGlQcm94eVRhcmdldCAmJiBpc0Rldikge1xuICBjb25zb2xlLmxvZygpO1xuICBjb25zb2xlLmxvZyhjaGFsay5yZWRgTE9XQ09ERVJfQVBJX1NFUlZJQ0VfVVJMIGlzIHJlcXVpcmVkLlxcbmApO1xuICBjb25zb2xlLmxvZyhjaGFsay5jeWFuYFN0YXJ0IHdpdGggY29tbWFuZDogTE9XQ09ERVJfQVBJX1NFUlZJQ0VfVVJMPVxce2JhY2tlbmQtYXBpLWFkZHJcXH0geWFybiBzdGFydGApO1xuICBjb25zb2xlLmxvZygpO1xuICBwcm9jZXNzLmV4aXQoMSk7XG59XG5cbmNvbnN0IHByb3h5Q29uZmlnOiBTZXJ2ZXJPcHRpb25zW1wicHJveHlcIl0gPSB7XG4gIFwiL2FwaVwiOiB7XG4gICAgdGFyZ2V0OiBhcGlQcm94eVRhcmdldCxcbiAgICBjaGFuZ2VPcmlnaW46IGZhbHNlLFxuICB9LFxufTtcblxuaWYgKG5vZGVTZXJ2aWNlQXBpUHJveHlUYXJnZXQpIHtcbiAgcHJveHlDb25maWdbXCIvbm9kZS1zZXJ2aWNlXCJdID0ge1xuICAgIHRhcmdldDogbm9kZVNlcnZpY2VBcGlQcm94eVRhcmdldCxcbiAgfTtcbn1cblxuY29uc3QgZGVmaW5lID0ge307XG5idWlsZFZhcnMuZm9yRWFjaCgoeyBuYW1lLCBkZWZhdWx0VmFsdWUgfSkgPT4ge1xuICBkZWZpbmVbbmFtZV0gPSBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudltuYW1lXSB8fCBkZWZhdWx0VmFsdWUpO1xufSk7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgY29uc3Qgdml0ZUNvbmZpZzogVXNlckNvbmZpZyA9IHtcbiAgZGVmaW5lLFxuICBhc3NldHNJbmNsdWRlOiBbXCIqKi8qLm1kXCJdLFxuICByZXNvbHZlOiB7XG4gICAgZXh0ZW5zaW9uczogW1wiLm1qc1wiLCBcIi5qc1wiLCBcIi50c1wiLCBcIi5qc3hcIiwgXCIudHN4XCIsIFwiLmpzb25cIl0sXG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQGxvd2NvZGVyLWVlXCI6IHBhdGgucmVzb2x2ZShcbiAgICAgICAgX19kaXJuYW1lLFxuICAgICAgICBpc0VFID8gYC4uL2xvd2NvZGVyL3NyYy8ke2lzRUVHbG9iYWwgPyBcImVlLWdsb2JhbFwiIDogXCJlZVwifWAgOiBcIi4uL2xvd2NvZGVyL3NyY1wiXG4gICAgICApLFxuICAgIH0sXG4gIH0sXG4gIGJhc2UsXG4gIGJ1aWxkOiB7XG4gICAgbWFuaWZlc3Q6IHRydWUsXG4gICAgdGFyZ2V0OiBcImVzMjAxNVwiLFxuICAgIGNzc1RhcmdldDogXCJjaHJvbWU2M1wiLFxuICAgIG91dERpcjogXCJidWlsZFwiLFxuICAgIGFzc2V0c0RpcjogXCJzdGF0aWNcIixcbiAgICBlbXB0eU91dERpcjogZmFsc2UsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiBcIltoYXNoXS5qc1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNvbW1vbmpzT3B0aW9uczoge1xuICAgICAgZGVmYXVsdElzTW9kdWxlRXhwb3J0czogKGlkKSA9PiB7XG4gICAgICAgIGlmIChpZC5pbmRleE9mKFwiYW50ZC9saWJcIikgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcImF1dG9cIjtcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgY3NzOiB7XG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgbGVzczoge1xuICAgICAgICBtb2RpZnlWYXJzOiB7XG4gICAgICAgICAgXCJAcHJpbWFyeS1jb2xvclwiOiBcIiMzMzc3RkZcIixcbiAgICAgICAgICBcIkBsaW5rLWNvbG9yXCI6IFwiIzMzNzdGRlwiLFxuICAgICAgICAgIFwiQGJvcmRlci1jb2xvci1iYXNlXCI6IFwiI0Q3RDlFMFwiLFxuICAgICAgICAgIFwiQGJvcmRlci1yYWRpdXMtYmFzZVwiOiBcIjRweFwiLFxuICAgICAgICB9LFxuICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgb3BlbjogdHJ1ZSxcbiAgICBjb3JzOiB0cnVlLFxuICAgIHBvcnQ6IDgwMDAsXG4gICAgaG9zdDogXCIwLjAuMC4wXCIsXG4gICAgcHJveHk6IHByb3h5Q29uZmlnLFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgY2hlY2tlcih7XG4gICAgICB0eXBlc2NyaXB0OiB0cnVlLFxuICAgICAgZXNsaW50OiB7XG4gICAgICAgIGxpbnRDb21tYW5kOiAnZXNsaW50IC0tcXVpZXQgXCIuL3NyYy8qKi8qLnt0cyx0c3h9XCInLFxuICAgICAgICBkZXY6IHtcbiAgICAgICAgICBsb2dMZXZlbDogW1wiZXJyb3JcIl0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHJlYWN0KHtcbiAgICAgIGJhYmVsOiB7XG4gICAgICAgIHBhcnNlck9wdHM6IHtcbiAgICAgICAgICBwbHVnaW5zOiBbXCJkZWNvcmF0b3JzLWxlZ2FjeVwiXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgdml0ZVRzY29uZmlnUGF0aHMoe1xuICAgICAgcHJvamVjdHM6IFtcIi4uL2xvd2NvZGVyL3RzY29uZmlnLmpzb25cIiwgXCIuLi9sb3djb2Rlci1kZXNpZ24vdHNjb25maWcuanNvblwiXSxcbiAgICB9KSxcbiAgICBzdmdyUGx1Z2luKHtcbiAgICAgIHN2Z3JPcHRpb25zOiB7XG4gICAgICAgIGV4cG9ydFR5cGU6IFwibmFtZWRcIixcbiAgICAgICAgcHJldHRpZXI6IGZhbHNlLFxuICAgICAgICBzdmdvOiBmYWxzZSxcbiAgICAgICAgdGl0bGVQcm9wOiB0cnVlLFxuICAgICAgICByZWY6IHRydWUsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIGdsb2JhbERlcFBsdWdpbigpLFxuICAgIGNyZWF0ZUh0bWxQbHVnaW4oe1xuICAgICAgbWluaWZ5OiB0cnVlLFxuICAgICAgaW5qZWN0OiB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBicm93c2VyQ2hlY2tTY3JpcHQ6IGlzRGV2ID8gXCJcIiA6IGA8c2NyaXB0IHNyYz1cIiR7YmFzZX0ke2Jyb3dzZXJDaGVja0ZpbGVOYW1lfVwiPjwvc2NyaXB0PmAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIGlzVmlzdWFsaXplckVuYWJsZWQgJiYgdmlzdWFsaXplcigpLFxuICBdLmZpbHRlcihCb29sZWFuKSxcbn07XG5cbmNvbnN0IGJyb3dzZXJDaGVja0NvbmZpZzogVXNlckNvbmZpZyA9IHtcbiAgLi4udml0ZUNvbmZpZyxcbiAgZGVmaW5lOiB7XG4gICAgLi4udml0ZUNvbmZpZy5kZWZpbmUsXG4gICAgXCJwcm9jZXNzLmVudi5OT0RFX0VOVlwiOiBKU09OLnN0cmluZ2lmeShcInByb2R1Y3Rpb25cIiksXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgLi4udml0ZUNvbmZpZy5idWlsZCxcbiAgICBtYW5pZmVzdDogZmFsc2UsXG4gICAgY29weVB1YmxpY0RpcjogZmFsc2UsXG4gICAgZW1wdHlPdXREaXI6IHRydWUsXG4gICAgbGliOiB7XG4gICAgICBmb3JtYXRzOiBbXCJpaWZlXCJdLFxuICAgICAgbmFtZTogXCJCcm93c2VyQ2hlY2tcIixcbiAgICAgIGVudHJ5OiBcIi4vc3JjL2Jyb3dzZXItY2hlY2sudHNcIixcbiAgICAgIGZpbGVOYW1lOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBicm93c2VyQ2hlY2tGaWxlTmFtZTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IGJ1aWxkVGFyZ2V0cyA9IHtcbiAgbWFpbjogdml0ZUNvbmZpZyxcbiAgYnJvd3NlckNoZWNrOiBicm93c2VyQ2hlY2tDb25maWcsXG59O1xuXG5jb25zdCBidWlsZFRhcmdldCA9IGJ1aWxkVGFyZ2V0c1twcm9jZXNzLmVudi5CVUlMRF9UQVJHRVQgfHwgXCJtYWluXCJdO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoYnVpbGRUYXJnZXQgfHwgdml0ZUNvbmZpZyk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZYLE9BQU8sWUFBWTtBQUNoWixTQUFTLG9CQUErQztBQUN4RCxPQUFPLFdBQVc7QUFDbEIsT0FBTyx1QkFBdUI7QUFDOUIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxhQUFhO0FBQ3BCLFNBQVMsa0JBQWtCO0FBQzNCLE9BQU8sVUFBVTtBQUNqQixPQUFPLFdBQVc7QUFDbEIsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx1QkFBdUI7QUFDaEMsU0FBUyxpQkFBaUI7QUFDMUIsU0FBUyx1QkFBdUI7QUFaaEMsSUFBTSxtQ0FBbUM7QUFjekMsT0FBTyxPQUFPO0FBRWQsSUFBTSxpQkFBaUIsUUFBUSxJQUFJO0FBQ25DLElBQU0sNEJBQTRCLFFBQVEsSUFBSTtBQUM5QyxJQUFNLFVBQVUsUUFBUSxJQUFJLFlBQVk7QUFDeEMsSUFBTSxVQUFVLFFBQVEsSUFBSTtBQUM1QixJQUFNLGFBQWEsWUFBWTtBQUMvQixJQUFNLE9BQU8sWUFBWSxnQkFBZ0I7QUFDekMsSUFBTSxRQUFRLFlBQVk7QUFDMUIsSUFBTSxzQkFBc0IsQ0FBQyxDQUFDLFFBQVEsSUFBSTtBQUcxQyxJQUFNLHVCQUF1QjtBQUM3QixJQUFNLE9BQU8sZ0JBQWdCLFFBQVEsSUFBSSxVQUFVO0FBRW5ELElBQUksQ0FBQyxrQkFBa0IsT0FBTztBQUM1QixVQUFRLElBQUk7QUFDWixVQUFRLElBQUksTUFBTSw0Q0FBNEM7QUFDOUQsVUFBUSxJQUFJLE1BQU0sa0ZBQWtGO0FBQ3BHLFVBQVEsSUFBSTtBQUNaLFVBQVEsS0FBSyxDQUFDO0FBQ2hCO0FBRUEsSUFBTSxjQUFzQztBQUFBLEVBQzFDLFFBQVE7QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLGNBQWM7QUFBQSxFQUNoQjtBQUNGO0FBRUEsSUFBSSwy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
