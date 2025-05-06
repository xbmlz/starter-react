import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    react: true,
    unocss: true,
  },
  {
    ignores: [
      'src/components/ui',
    ],
  },
)
