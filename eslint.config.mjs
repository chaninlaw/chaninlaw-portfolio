import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import perfectionist from 'eslint-plugin-perfectionist'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

const config = [
  ...compat.extends('next/core-web-vitals'),
  {
    plugins: {
      perfectionist
    },

    rules: {
      'perfectionist/sort-imports': 'warn'
    }
  }
]

export default config
