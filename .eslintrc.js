module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    // It is not necessary to use prop types with TypeScript
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
  },
};
