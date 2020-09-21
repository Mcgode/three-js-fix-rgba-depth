// import of our plugins
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { uglify } from "rollup-plugin-uglify";

export default {
    input: './src/three-js-extra-built-in-uniforms.js',
    output: {
        file: './dist/browser/three-js-extra-built-in-uniforms.js',
        format: 'cjs'
    },
    external: ['three-full'],
    plugins: [
        commonjs(), // require
        resolve(), // modules from node_modules
    ]
};
