import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  // Load env file based on mode
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    // base path for production builds; local dev stays at "/"
    base: mode === 'development' ? '/dev/' : mode === 'test' ? '/tests/' : '/',
    server: {
      host: '::',
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      __APP_MODE__: JSON.stringify(mode),
      __APP_TITLE__: JSON.stringify(env.VITE_APP_TITLE || 'Our Testing App'),
    },
  };
});
