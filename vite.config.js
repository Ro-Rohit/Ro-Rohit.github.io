import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
    const config = {
        plugins: [react()],
        base: '/',
        build: {
            outDir: 'dist',
        },
    }

    return config
})
