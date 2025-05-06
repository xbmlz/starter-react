import path from 'node:path'
import Tailwindcss from '@tailwindcss/vite'
import React from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'

import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    React(),

    AutoImport({
      imports: ['react'],
      dts: 'types/auto-imports.d.ts',
    }),

    Tailwindcss(),
  ],
})
