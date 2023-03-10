module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 72],
    'body-max-length': [2, 'always', 80],
    'footer-max-length': [2, 'always', 82],
  },
};
