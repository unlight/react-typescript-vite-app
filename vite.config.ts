import { defineConfig, ConfigEnv, UserConfigExport } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default function ({}: ConfigEnv): UserConfigExport {
    return defineConfig({
        css: {
            postcss: 'postcss.config.js',
        },
        plugins: [tsconfigPaths(), reactRefresh()],
        build: {
            assetsDir: '.',
            brotliSize: false,
        },
    });
}
