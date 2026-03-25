import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Si vas a desplegar en https://<usuario>.github.io/<nombre-del-repo>/
  // descomenta la siguiente línea y reemplaza con el nombre de tu repositorio:
  // base: '/npm_del_repo/',
})
