import ts from '@wessberg/rollup-plugin-ts'
import eslint from '@rollup/plugin-eslint'
import { terser } from 'rollup-plugin-terser'
import { builtinModules } from 'module'
import pkg from './package.json'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'umd',
        name: 'Qratch',
        moduleName: 'Qratch',
        sourcemap: true,
      },
    ],
    plugins: [eslint(), ts(), terser()],
    external: [
      ...builtinModules,
      ...(pkg.dependencies == null ? [] : Object.keys(pkg.dependencies)),
      ...(pkg.devDependencies == null ? [] : Object.keys(pkg.devDependencies)),
      ...(pkg.peerDependencies == null
        ? []
        : Object.keys(pkg.peerDependencies)),
    ],
  },
]
