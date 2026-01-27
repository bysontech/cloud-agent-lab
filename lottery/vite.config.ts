import { defineConfig } from 'vite';
import honox from 'honox/vite';

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      plugins: [honox({ client: true })],
      build: {
        rollupOptions: {
          input: './app/client.ts',
          output: {
            entryFileNames: 'static/client.js',
            chunkFileNames: 'static/[name].js',
            assetFileNames: 'static/[name].[ext]',
          },
        },
      },
    };
  }
  return {
    plugins: [honox()],
    ssr: {
      external: ['hono'],
    },
  };
});
