module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    "react-native/no-color-literals": "error",
    // "react-native/no-unused-styles": "error",
    "camelcase": ["error", { "properties": "never", "ignoreDestructuring": false, "ignoreImports": false, "ignoreGlobals": false }]
  },
  overrides: [
    {
      "files": ["*.js", "*.jsx", "*.ts", "*.tsx"],
      "rules": {
        "prettier/prettier": "off"
      }
    }
  ]
};
