import { defineConfig, loadEnv } from "vite";
export default ({ mode }) => {
  //process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    /* server: {
      ...(process.env.VITE_HOST && { host: process.env.VITE_HOST }),
      port: 8080,
    },
    preview: {
      ...(process.env.VITE_HOST && { host: process.env.VITE_HOST }),
      port: 8080,
    }, */
    publicDir: "public",
    optimizeDeps: {
      entries: ["./entry.ts"],
      esbuildOptions: {
        tsconfigRaw: {
          compilerOptions: {
            experimentalDecorators: true,
          },
        },
      },
    },
    esbuild: {
      legalComments: "none",
      keepNames: true,
    },
  });
};
