import ts from '@wessberg/rollup-plugin-ts'
import eslint from '@rollup/plugin-eslint'
import { terser } from 'rollup-plugin-terser'
import { builtinModules } from 'module'

/**
 * returns rollup config for umd building.
 *
 * @param {{main: string, dependencies?: string[], devDependencies?: string[], peerDependencies?: string[]}} pkg package json.
 * @param {string} name module name.
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createModuleConfig = (pkg, name) => {
  return {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'umd',
        name: name,
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
  }
}
