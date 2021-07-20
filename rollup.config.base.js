import typescript from '@rollup/plugin-typescript'
import path from 'path'

const input = 'src/index.ts'

export default (option) => {
  const { pkg, external: additionalExternal = [] } = option || {}
  const external = [
    ...additionalExternal,
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ]

  return {
    input,
    external,
    output: [
      // CommonJS (for Node)
      { format: 'cjs', sourcemap: true, dir: path.dirname(pkg.main) },
      // ES module (for bundlers) build.
      { format: 'es', sourcemap: true, dir: path.dirname(pkg.module) },
    ],
    plugins: [typescript({ declaration: false })],
  }
}
