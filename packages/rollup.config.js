import ts from '@wessberg/rollup-plugin-ts'
import eslint from '@rollup/plugin-eslint'
import { terser } from 'rollup-plugin-terser'
import visualizer from 'rollup-plugin-visualizer'
import pkg from './package.json'
import { builtinModules } from 'module'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
      },
      {
        file: pkg.umd,
        format: 'umd',
        name: 'Qratch',
        moduleName: 'Qratch',
        sourcemap: true,
        plugins: [
          visualizer({
            filename: 'dist/umd/stats.html',
          }),
        ],
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
  {
    input: 'src/sandbox.ts',
    output: [
      {
        file: 'dist/umd/sandbox.js',
        format: 'umd',
        name: 'Qratch',
        moduleName: 'Qratch',
        sourcemap: true,
      },
    ],
    plugins: [eslint(), ts()],
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
