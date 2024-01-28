import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
// dotenv.config();
// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    optimizeDeps: {
      esbuildOptions: {
        keepNames: true,
      },
    },
    plugins: [
      react(),
      checker({
        typescript: true,
      }),
    ],
    clearScreen: false,
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, 'src') },

        { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
        { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
        { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
        { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
        { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
        { find: '@config', replacement: path.resolve(__dirname, 'src/config') },
        { find: '@redux', replacement: path.resolve(__dirname, 'src/redux') },
        { find: '@theme', replacement: path.resolve(__dirname, 'src/theme') },
        { find: '@constants', replacement: path.resolve(__dirname, 'src/constants') },
        { find: '@routes', replacement: path.resolve(__dirname, 'src/routes') },
        { find: '@types', replacement: path.resolve(__dirname, 'src/types') },
      ],
    },

    define: {
      'process.env.NODE_ENV': `"${mode}"`,
    },

    server: {
      fs: {
        strict: false,
      },
      port: 4000,
    },

    preview: {
      port: 4000,
    },
  });
};
