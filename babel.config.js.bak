module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current',
      },
    }],
    ['@babel/preset-react', {
      runtime: 'automatic',
    }],
    ['@babel/preset-typescript', {
      isTSX: true,
      allExtensions: true,
    }],
  ],
  plugins: [],
  // Don't transform ES modules to CommonJS
  // This is important for proper functioning of tree shaking and module mocking
  env: {
    test: {
      // In test environment, we want CommonJS modules for Jest compatibility
      presets: [
        ['@babel/preset-env', {
          targets: {
            node: 'current',
          },
          modules: 'commonjs',
        }],
      ],
    },
  },
};

