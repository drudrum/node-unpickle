import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/unpickle.cjs',
  output: {
    file: 'dist/bundle.umd.js',
    format: 'umd',
    name: 'unpickle',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      plugins: [
        "external-helpers",
        "transform-object-rest-spread",
        ["babel-plugin-transform-builtin-extend", {
          globals: ["Error"]
        }],
      ],
    }),
  ]
}
