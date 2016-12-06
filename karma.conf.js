module.exports = function karma(config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      { pattern: 'src/**/*.js', included: false },
      'tests/**/*.js',
    ],
    preprocessors: {
      'tests/**/*.js': ['webpack', 'sourcemap'],
    },
    webpack: {
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
              presets: [
                ['env', {
                  targets: {
                    edge: 12,
                    firefox: 42,
                    chrome: 49,
                    safari: 10,
                    node: 6,
                  },
                  modules: false,
                }],
              ],
              plugins: ['transform-object-rest-spread'],
            },
          },
        ],
      },
      devtool: 'inline-source-map',
    },
    webpackMiddleware: {
      noInfo: 'true',
    },
    reporters: ['mocha'],
    logLevel: config.LOG_WARN,
    browsers: ['Chrome', 'Firefox'],
  });
};