import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { presetUno, presetWebFonts } from 'unocss'
import AutoImport from 'unplugin-auto-import/vite'
import Pages from 'vite-plugin-pages'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		Unocss({
			presets: [
				presetUno({ dark: 'class' }),
				presetWebFonts({ fonts: { comme: 'Comme' }, provider: 'google' }),
			],
		}),
		AutoImport({ imports: ['vue', 'vue-router', '@vueuse/core'] }),
		Pages(),
	],
	resolve: {
		alias: {
			'~': resolve('src'),
		},
	},
})
