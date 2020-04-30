const path = require('path');
const Obfuscator = require('webpack-obfuscator');

module.exports = {
    entry: './example.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'out.js'
    },
    plugins: [
        new Obfuscator()
    ]
};
