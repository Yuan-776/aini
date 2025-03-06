import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
  }
  
  if (command === 'build') {
    config.base = '/aini/' // 为生产环境设置正确的 base 路径
  }
  
  return config
})