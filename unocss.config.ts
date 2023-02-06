import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetTagify,
  presetIcons
} from 'unocss'

export default defineConfig({
  shortcuts: [
    [
      'icon-btn',
      'inline-block cursor-pointer select-none text-black transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'
    ]
  ],
  presets: [presetUno(), presetAttributify(), presetTagify(), presetIcons()]
})
