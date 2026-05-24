import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Adicione esta seção se os arquivos JSX .js não estiverem sendo compilados:
  esbuild: {
      include: /\.js$/,
      loader: 'jsx',
  },
});