// docs/vite.config.ts
import { defineConfig } from "file:///Users/wangwei/Downloads/documents/node_modules/.pnpm/vite@4.1.4_wo3ja2wlu6ln7oswoqdxkdudlq/node_modules/vite/dist/node/index.js";
import UnoCSS from "file:///Users/wangwei/Downloads/documents/node_modules/.pnpm/unocss@0.50.6_vite@4.1.4/node_modules/unocss/dist/vite.mjs";
import { presetUno, transformerDirectives } from "file:///Users/wangwei/Downloads/documents/node_modules/.pnpm/unocss@0.50.6_vite@4.1.4/node_modules/unocss/dist/index.mjs";
import { presetScrollbar } from "file:///Users/wangwei/Downloads/documents/node_modules/.pnpm/unocss-preset-scrollbar@0.2.1_unocss@0.50.6/node_modules/unocss-preset-scrollbar/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    UnoCSS({
      presets: [presetUno(), presetScrollbar()],
      transformers: [transformerDirectives()]
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {}
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy92aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy93YW5nd2VpL0Rvd25sb2Fkcy9kb2N1bWVudHMvZG9jc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3dhbmd3ZWkvRG93bmxvYWRzL2RvY3VtZW50cy9kb2NzL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy93YW5nd2VpL0Rvd25sb2Fkcy9kb2N1bWVudHMvZG9jcy92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IFVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSc7XG5pbXBvcnQgeyBwcmVzZXRVbm8sIHRyYW5zZm9ybWVyRGlyZWN0aXZlcyB9IGZyb20gJ3Vub2Nzcyc7XG5pbXBvcnQgeyBwcmVzZXRTY3JvbGxiYXIgfSBmcm9tICd1bm9jc3MtcHJlc2V0LXNjcm9sbGJhcic7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICBVbm9DU1Moe1xuICAgICAgcHJlc2V0czogW3ByZXNldFVubygpLCBwcmVzZXRTY3JvbGxiYXIoKV0sXG4gICAgICB0cmFuc2Zvcm1lcnM6IFt0cmFuc2Zvcm1lckRpcmVjdGl2ZXMoKV0sXG4gICAgfSksXG4gIF0sXG4gIGNzczoge1xuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgIGxlc3M6IHtcbiAgICAgICAgamF2YXNjcmlwdEVuYWJsZWQ6IHRydWUsXG4gICAgICAgIG1vZGlmeVZhcnM6IHt9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVTLFNBQVMsb0JBQW9CO0FBQ3BVLE9BQU8sWUFBWTtBQUNuQixTQUFTLFdBQVcsNkJBQTZCO0FBQ2pELFNBQVMsdUJBQXVCO0FBRWhDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFNBQVMsQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUM7QUFBQSxNQUN4QyxjQUFjLENBQUMsc0JBQXNCLENBQUM7QUFBQSxJQUN4QyxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osbUJBQW1CO0FBQUEsUUFDbkIsWUFBWSxDQUFDO0FBQUEsTUFDZjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
