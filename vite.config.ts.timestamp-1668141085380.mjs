// vite.config.ts
import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import unocss from "unocss/vite";
var __vite_injected_original_dirname = "/Users/jannchie/code/roku-ui";
var vite_config_default = defineConfig(({ command, mode }) => {
  switch (command) {
    case "serve": {
      return {
        plugins: [react(), unocss()],
        define: {
          APP_VERSION: JSON.stringify(process.env.npm_package_version)
        },
        assetsInclude: ["**/*.md", "doc/assets"],
        input: {
          main: resolve(__vite_injected_original_dirname, "doc/index.html")
        }
      };
    }
    case "build": {
      process.env.NODE_ENV = "production";
      switch (mode) {
        case "doc": {
          return {
            plugins: [react(), unocss()],
            define: {
              APP_VERSION: JSON.stringify(process.env.npm_package_version)
            },
            assetsInclude: ["**/*.md", "doc/assets"],
            input: {
              main: resolve(__vite_injected_original_dirname, "doc/index.html")
            },
            build: {
              outDir: "dist-doc"
            }
          };
        }
        default: {
          return {
            esbuild: {
              minifyIdentifiers: false
            },
            build: {
              lib: {
                entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
                fileName: "roku-ui",
                name: "RokuUI"
              },
              rollupOptions: {
                external: ["react", "react-dom"],
                output: {
                  globals: {
                    react: "React",
                    "react-dom": "ReactDOM"
                  }
                }
              },
              target: "modules"
            },
            plugins: [react(), unocss(), dts({
              outputDir: "dist/types",
              include: ["./src/**/*.ts(x)?"]
            })]
          };
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvamFubmNoaWUvY29kZS9yb2t1LXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvamFubmNoaWUvY29kZS9yb2t1LXVpL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9qYW5uY2hpZS9jb2RlL3Jva3UtdWkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcbmltcG9ydCB1bm9jc3MgZnJvbSAndW5vY3NzL3ZpdGUnXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGNvbW1hbmQsIG1vZGUgfSkgPT4ge1xuICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICBjYXNlICdzZXJ2ZSc6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBsdWdpbnM6IFtyZWFjdCgpLCB1bm9jc3MoKV0sXG4gICAgICAgIGRlZmluZToge1xuICAgICAgICAgIEFQUF9WRVJTSU9OOiBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5ucG1fcGFja2FnZV92ZXJzaW9uKSxcbiAgICAgICAgfSxcbiAgICAgICAgYXNzZXRzSW5jbHVkZTogWycqKi8qLm1kJywgJ2RvYy9hc3NldHMnXSxcbiAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICBtYWluOiByZXNvbHZlKF9fZGlybmFtZSwgJ2RvYy9pbmRleC5odG1sJyksXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfVxuICAgIGNhc2UgJ2J1aWxkJzoge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPSAncHJvZHVjdGlvbidcbiAgICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgICBjYXNlICdkb2MnOiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBsdWdpbnM6IFtyZWFjdCgpLCB1bm9jc3MoKV0sXG4gICAgICAgICAgICBkZWZpbmU6IHtcbiAgICAgICAgICAgICAgQVBQX1ZFUlNJT046IEpTT04uc3RyaW5naWZ5KHByb2Nlc3MuZW52Lm5wbV9wYWNrYWdlX3ZlcnNpb24pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFzc2V0c0luY2x1ZGU6IFsnKiovKi5tZCcsICdkb2MvYXNzZXRzJ10sXG4gICAgICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgICBtYWluOiByZXNvbHZlKF9fZGlybmFtZSwgJ2RvYy9pbmRleC5odG1sJyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnVpbGQ6IHtcbiAgICAgICAgICAgICAgb3V0RGlyOiAnZGlzdC1kb2MnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlc2J1aWxkOiB7XG4gICAgICAgICAgICAgIG1pbmlmeUlkZW50aWZpZXJzOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidWlsZDoge1xuICAgICAgICAgICAgICBsaWI6IHtcbiAgICAgICAgICAgICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXgudHMnKSxcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogJ3Jva3UtdWknLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdSb2t1VUknLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgZXh0ZXJuYWw6IFsncmVhY3QnLCAncmVhY3QtZG9tJ10sXG4gICAgICAgICAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWN0OiAnUmVhY3QnLFxuICAgICAgICAgICAgICAgICAgICAncmVhY3QtZG9tJzogJ1JlYWN0RE9NJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGFyZ2V0OiAnbW9kdWxlcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGx1Z2luczogW3JlYWN0KCksIHVub2NzcygpLCBkdHMoe1xuICAgICAgICAgICAgICBvdXRwdXREaXI6ICdkaXN0L3R5cGVzJyxcbiAgICAgICAgICAgICAgaW5jbHVkZTogWycuL3NyYy8qKi8qLnRzKHgpPyddLFxuICAgICAgICAgICAgfSldLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1EsU0FBUyxvQkFBb0I7QUFDblMsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sV0FBVztBQUNsQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBSm5CLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsU0FBUyxLQUFLLE1BQU07QUFDakQsVUFBUSxTQUFTO0FBQUEsSUFDZixLQUFLLFNBQVM7QUFDWixhQUFPO0FBQUEsUUFDTCxTQUFTLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztBQUFBLFFBQzNCLFFBQVE7QUFBQSxVQUNOLGFBQWEsS0FBSyxVQUFVLFFBQVEsSUFBSSxtQkFBbUI7QUFBQSxRQUM3RDtBQUFBLFFBQ0EsZUFBZSxDQUFDLFdBQVcsWUFBWTtBQUFBLFFBQ3ZDLE9BQU87QUFBQSxVQUNMLE1BQU0sUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxRQUMzQztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLLFNBQVM7QUFDWixjQUFRLElBQUksV0FBVztBQUN2QixjQUFRLE1BQU07QUFBQSxRQUNaLEtBQUssT0FBTztBQUNWLGlCQUFPO0FBQUEsWUFDTCxTQUFTLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztBQUFBLFlBQzNCLFFBQVE7QUFBQSxjQUNOLGFBQWEsS0FBSyxVQUFVLFFBQVEsSUFBSSxtQkFBbUI7QUFBQSxZQUM3RDtBQUFBLFlBQ0EsZUFBZSxDQUFDLFdBQVcsWUFBWTtBQUFBLFlBQ3ZDLE9BQU87QUFBQSxjQUNMLE1BQU0sUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxZQUMzQztBQUFBLFlBQ0EsT0FBTztBQUFBLGNBQ0wsUUFBUTtBQUFBLFlBQ1Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0EsU0FBUztBQUNQLGlCQUFPO0FBQUEsWUFDTCxTQUFTO0FBQUEsY0FDUCxtQkFBbUI7QUFBQSxZQUNyQjtBQUFBLFlBQ0EsT0FBTztBQUFBLGNBQ0wsS0FBSztBQUFBLGdCQUNILE9BQU8sUUFBUSxrQ0FBVyxjQUFjO0FBQUEsZ0JBQ3hDLFVBQVU7QUFBQSxnQkFDVixNQUFNO0FBQUEsY0FDUjtBQUFBLGNBQ0EsZUFBZTtBQUFBLGdCQUNiLFVBQVUsQ0FBQyxTQUFTLFdBQVc7QUFBQSxnQkFDL0IsUUFBUTtBQUFBLGtCQUNOLFNBQVM7QUFBQSxvQkFDUCxPQUFPO0FBQUEsb0JBQ1AsYUFBYTtBQUFBLGtCQUNmO0FBQUEsZ0JBQ0Y7QUFBQSxjQUNGO0FBQUEsY0FDQSxRQUFRO0FBQUEsWUFDVjtBQUFBLFlBQ0EsU0FBUyxDQUFDLE1BQU0sR0FBRyxPQUFPLEdBQUcsSUFBSTtBQUFBLGNBQy9CLFdBQVc7QUFBQSxjQUNYLFNBQVMsQ0FBQyxtQkFBbUI7QUFBQSxZQUMvQixDQUFDLENBQUM7QUFBQSxVQUNKO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
