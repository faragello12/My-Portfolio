import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 4322 },
  /* public/assets/** is copied to dist/assets — keep the bundler's own output
     out of that folder so generated and hand-placed files never mix */
  build: { assetsDir: 'bundle' },
});
