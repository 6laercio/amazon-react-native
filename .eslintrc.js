module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    // Turn off rules that are no longer necessary in React 17
    'react/react-in-jsx-scope': 'off',
    // It is not necessary to use prop types with TypeScript
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
  },
};
