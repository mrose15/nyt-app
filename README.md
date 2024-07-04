# Developer Notes

- Used the [Mantine + Next.js template](https://github.com/mantinedev/next-app-template) for this project and removed the Storybook references. I chose to do this taking into consideration this is a small technical assessment. If this were a larger project meant for production, I would have added the dependencies as needed, allowing for greater control over project structure and configuration. For a larger project with more dependencies, I would document why each dependency is used in the README.
- Kept the components outside of /app to let other engineers know the app directory includes only page components. If there's too many folders in /app, then it will be hard for other engineers to know what routes actually exist inside the application. This separation keeps the codebase cleaner
- Used an environment variable to secure the API key
- Used a server component for the API fetch for better performance
- Each component has its own folder to keep each components organized
- For interactivity with each article, I added a 'View Snippet" button to toggle the snippet text
- Search feature repopulates articles based on search input value
- Added default image in case no article image exists
- Implemented the very popular light/dark modes

# Things to Address

- Error handling when no results needs to be adjusted. Once the user submits a query that has no results and then submits a new query that does have results, a message returns to the user that the new query does not have results right before loading the new results
- Load time of images/articles take awhile. This could probably be resolved by adding the functionality and Search component import in page.tsx to ArticleList.
- My unit tests need to be re-worked as they're failing at the moment. This is my first attempt using Jest.

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
