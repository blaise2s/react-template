# TODO

- Forever reoccurring todo... upgrade packages with `yarn upgrade-interactive` and upgrade yarn sdks with `yarn dlx @yarnpkg/sdks vscode` or the command necessary for your [editor](https://yarnpkg.com/getting-started/editor-sdks)
- Remove react-router-dom v7 enabled features once upgraded to v7
- Add `"*.{ts,js,tsx,jsx}": "eslint --cache --fix --max-warnings 0",` back to the `"lint-staged"` object as the second item in the object in the `package.json` file once this [bug](https://github.com/eslint/eslint/issues/19134) is fixed and you can upgrade `eslint` and it's related dependencies
