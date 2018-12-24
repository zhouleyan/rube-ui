const { resolve } = require('./utils/projectHelper');

module.exports = function getBabelCommonConfig(modules) {
  const plugins = [
    resolve('babel-plugin-styled-components'),
    resolve('@babel/plugin-syntax-dynamic-import'),
    resolve('@babel/plugin-transform-member-expression-literals'),
    resolve('@babel/plugin-transform-property-literals'),
    resolve('@babel/plugin-transform-object-assign'),
    [
      // Externalise references to helpers and builtins, automatically polyfilling your code without polluting globals
      resolve('@babel/plugin-transform-runtime'),
      {
        helpers: true,
      },
    ],
    resolve('@babel/plugin-transform-spread'),
    resolve('@babel/plugin-transform-template-literals'),
    resolve('@babel/plugin-proposal-export-default-from'),
    resolve('@babel/plugin-proposal-export-namespace-from'),
    resolve('@babel/plugin-proposal-class-properties'),
    resolve('@babel/plugin-proposal-object-rest-spread'),
    [
      resolve('@babel/plugin-proposal-decorators'),
      {
        decoratorsBeforeExport: true,
      },
    ],
  ];
  return {
    presets: [
      [
        resolve('@babel/preset-env'),
        {
          modules,
          targets: {
            browsers: [
              'last 2 versions',
              'Firefox ESR',
              '> 1%',
              'ie >= 9',
              'iOS >= 8',
              'Android >= 4',
            ],
          },
        },
      ],
      resolve('@babel/preset-react'),
    ],
    plugins,
    ignore: [/@babel[\\|/]runtime/],
    env: {
      production: {
        plugins: [
          resolve('babel-plugin-lodash'),
          resolve('@babel/plugin-transform-react-inline-elements'),
          resolve('@babel/plugin-transform-react-constant-elements'),
          resolve('babel-plugin-transform-dev-warning'),
          [
            resolve('babel-plugin-react-remove-properties'),
            { properties: ['data-rube-test'] },
          ],
          [
            resolve('babel-plugin-transform-react-remove-prop-types'),
            {
              mode: 'unsafe-wrap',
            },
          ],
        ],
        // It's most likely a babel bug.
        // We are using this ignore option in the CLI command but that has no effect.
        ignore: ['**/*.test.js'],
      },
    },
  };
};
