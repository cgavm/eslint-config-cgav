module.exports = {
  'import/first': 'error',
  'import/newline-after-import': 'error',
  'import/no-absolute-path': 'error',
  'import/no-amd': 'error',
  'import/no-cycle': 'warn',
  'import/no-duplicates': 'error',
  'import/no-extraneous-dependencies': ['warn'],
  'import/no-mutable-exports': 'error',
  'import/no-named-as-default': 'error',
  'import/no-self-import': 'error',
  'import/no-useless-path-segments': 'error',
  'import/order': ['error', {
    groups: ['builtin', 'external', 'internal'],
    'newlines-between': 'always',
  }],
};
