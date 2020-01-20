/* eslint-env node */
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import less from 'rollup-plugin-less'

const PROD = process.env.NODE_ENV === 'production'

export default {
  input: 'src/index.tsx',
  external: ['react', 'react-dom'],
  output: [
    {
      file: 'lib/index.js',
      format: 'cjs',
      exports: 'named'
    },
    {
      file: 'es/index.js',
      format: 'esm'
    }],
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    resolve(),
    commonjs(),
    less(),
    typescript({
      tsconfig: 'tsconfig.json'
    })
  ]
}
