import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/====
export default defineConfig({
  server: {
    proxy: {
      "/api/v1/users": {
        target: "https://ipoconnect-website.onrender.com/",
        changeOrigin: true,
        secure: false,
      }
    }
  },
  plugins: [react()],
})
