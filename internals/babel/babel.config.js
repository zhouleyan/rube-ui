module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-member-expression-literals',
    '@babel/plugin-transform-property-literals',
    '@babel/plugin-transform-object-assign',
    [
      // Externalise references to helpers and builtins, automatically polyfilling your code without polluting globals
      '@babel/plugin-transform-runtime',
      {
        helpers: true,
      },
    ],
    '@babel/plugin-transform-spread',
    '@babel/plugin-transform-template-literals',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    [
      '@babel/plugin-proposal-decorators',
      {
        decoratorsBeforeExport: true,
      },
    ],
  ],
  ignore: [/@babel[\\|/]runtime/],
  env: {
    production: {
      plugins: [
        '@babel/plugin-transform-react-constant-elements',
        'transform-dev-warning',
        ['react-remove-properties', { properties: ['data-rube-test'] }],
        [
          'transform-react-remove-prop-types',
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
