# Developer Notes

- Used the [Mantine + Next.js template](https://github.com/mantinedev/next-app-template) for this project and removed the Storybook references. I chose to do this taking into consideration this is a small technical assessment. If this were a larger project meant for production, I would have added the dependencies as needed, allowing for greater control over project structure and configuration. For a larger project with more dependencies, I would document why each dependency is used in the README.
- Kept the components outside of /app to let other engineers know the app directory includes only page components. If there's too many folders in /app, then it will be hard for other engineers to know what routes actually exist inside the application. This separation keeps the codebase cleaner
- Used environment variables to secure the API key
- Used a server component for the API fetch due to better performance

# Mantine Next.js template

This is a template for [Next.js](https://nextjs.org/) app router + [Mantine](https://mantine.dev/).

## Features

This template comes with the following features:

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

## npm scripts

### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `prettier:write` – formats all files with Prettier
