module.exports = {
  env: {
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'standard',
  ],
  plugins: ['import'],
  rules: {
    ...require('./rules/errors'),
    ...require('./rules/best-practices'),
    ...require('./rules/variables'),
    ...require('./rules/es6'),
    ...require('./rules/style'),
    ...require('./rules/imports'),
    ...require('./rules/complexity'),
    ...require('./rules/security'),
  },
};
