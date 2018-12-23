module.exports = function getBabelCommonConfig(modules) {
  const plugins = [
    require.resolve('babel-plugin-styled-components'),
    require.resolve('@babel/plugin-proposal-class-properties'),
    require.resolve('@babel/plugin-syntax-dynamic-import'),
    require.resolve('@babel/plugin-transform-react-inline-elements'),
    require.resolve('@babel/plugin-transform-react-constant-elements'),
    require.resolve('babel-plugin-lodash'),
    require.resolve('babel-plugin-transform-react-remove-prop-types'),
  ];
  return {
    presets: [
      [
        require.resolve('@babel/preset-env'),
        {
          modules,
        },
      ],
      require.resolve('@babel/preset-react'),
    ],
    plugins,
  };
};
