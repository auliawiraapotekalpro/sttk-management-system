import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // PENTING: Ganti '/sttk-management-system/' dengan nama repositori GitHub Anda
  // Contoh: jika nama repo Anda 'sistem-sttk', ganti menjadi '/sistem-sttk/'
  base: '/sttk-management-system/', 
})
