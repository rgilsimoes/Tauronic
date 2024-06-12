/// <reference types="vitest" />
/// <reference types="vitest/coverage" />
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import path from 'path';
import deadFile from 'vite-plugin-deadfile';

const mobile = !!/android|ios/.exec(process.env.TAURI_ENV_PLATFORM || '');

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig((env) => ({
  plugins: [
    react(),
    legacy(),
    env.mode !== 'test' && eslint(),
    deadFile({
      root: 'src',
      exclude: [
        '**/*.test.*',
        '**/*.http',
        'assets/**',
        '**/*.d.ts',
        'theme/**',
      ],
    }),
  ],

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: mobile ? '0.0.0.0' : false,
    hmr: mobile
      ? {
          protocol: 'ws',
          host: '192.168.1.85',
          port: 1421,
        }
      : undefined,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ['**/src-tauri/**'],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    reporters: ['default', 'html'],
    outputFile: './tests/vitest-report.html',
    css: true,
    coverage: {
      enabled: true,
      provider: 'istanbul', // or 'v8'
      reportsDirectory: './tests/coverage',
    },
    browser: {
      enabled: false,
      name: 'chrome', // browser name is required
    },
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@services': path.resolve(__dirname, './src/services'),
      '@store': path.resolve(__dirname, './src/store'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@models': path.resolve(__dirname, './src/types'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
}));
