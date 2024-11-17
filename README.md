# react-template

### TODO

- Find and replace all instances of 'react-template' with the name of the new repository
- If you don't require Tailwind:
  - Uninstall the necessary dependencies: `yarn remove autoprefixer postcss prettier-plugin-tailwindcss tailwindcss`
  - Remove `require.resolve('prettier-plugin-tailwindcss')` from the `plugins` array in the `.prettierrc.cjs` file
  - Remove the `"at-rule-no-unknown"` rule from the `"rules"` object in the `.stylelintrc.json` file
  - Delete the `postcss.config.js` file
  - Delete the `tailwind.config.js` file
  - Remove the tailwind imports (`@tailwind base;`, `@tailwind components;`, and `@tailwind utilities`) from the `index.css` file
- If you don't require Material UI
  - Uninstall the necessary dependencies: `yarn remove @mui/material @emotion/react @emotion/styled @mui/icons-material`
  - Remove the following `<link>` tags from the `<head>` block of the `index.html` file:
    ```html
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />
    ```
  - Delete the `ThemeProvider.tsx` file
  - Remove the `<ThemeProvider>` from the `main.tsx` file
- If you don't require axios remove it with `yarn remove axios`
- If you don't require react-query:
  - Uninstall the necessary dependencies: `yarn remove @tanstack/react-query @tanstack/eslint-plugin-query`
  - Remove the following lines from the `eslint.config.js` file:
    ```js
    import reactQuery from '@tanstack/eslint-plugin-query';
    '@tanstack/query': reactQuery,
    ...reactQuery.configs.recommended.rules,
    ```
  - Delete the `queryClient.ts` file
  - Delete the `QueryClientProvider.tsx` file
  - Remove the `<QueryClientProvider>` from the `main.tsx` file
- If for some reason you don't require react-router-dom:
  - Uninstall the necessary dependencies: `yarn remove react-router-dom`
  - Delete the `RouterProvider.tsx` file
  - In the `main.tsx` file replace `<RouterProvider />` with `<App />`
