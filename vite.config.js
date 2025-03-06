import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
  }
  
  if (command === 'build') {
    config.base = '/aini/' // 仅在构建时使用此路径
  }
  
  return config
})