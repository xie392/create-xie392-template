import { ConfigEnv, UserConfigExport, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

import pages from 'vite-plugin-pages'
import { viteMockServe } from 'vite-plugin-mock'

// https://vite.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
    return defineConfig({
        plugins: [
            react(),
            pages({
                importMode() {
                    // if (filepath.includes('index')) {
                    //     return 'sync'
                    // }
                    return 'async'
                }
            }),
            viteMockServe({
                enable: command === 'serve',
                ignore: (fileName: string) => {
                    if (fileName.includes('_')) {
                        return true
                    }
                    return false
                }
            })
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        }
    })
}
