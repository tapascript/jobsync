<a href="https://github.com/tapascript/jobsync/blob/master/LICENSE" target="blank"><img src="https://img.shields.io/github/license/tapascript/jobsync?style=flat-square" alt="License" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<a href="https://github.com/tapascript/jobsync/fork" target="blank">
<img src="https://img.shields.io/github/forks/tapascript/jobsync?style=flat-square" alt="next-js-launchpad forks"/>
</a>
<a href="https://github.com/tapascript/jobsync/stargazers" target="blank">
<img src="https://img.shields.io/github/stars/tapascript/jobsync?style=flat-square" alt="next-js-launchpad stars"/>
</a>
<a href="https://github.com/tapascript/jobsync/issues" target="blank">
<img src="https://img.shields.io/github/issues/tapascript/jobsync?style=flat-square" alt="next-js-launchpad issues"/>
</a>
<a href="https://github.com/tapascript/jobsync/pulls" target="blank">
<img src="https://img.shields.io/github/issues-pr/tapascript/jobsync?style=flat-square" alt="next-js-launchpad pull-requests"/>
</a>

# 🚀 JobSync

An initiative of the [tapaScript community](https://youtube.com/@tapasadhikary) to learn Full Stack Engineering and Open Source Culture.

## ✨ Features
TBA

## Getting Started

- Install depenedencies using
  ```bash
  npm install

  # Or its yarn pnpm bun equivalents
  ```

- Start the application using
  ```bash
  npm run dev

  # Or its yarn pnpm bun equivalents
  ```
<!-- Project should be public for the above command to work -->

## Folder Structure

```bash
.
├── __tests__
├── lib
├── public
└── src
    ├── app
    └── components
        ├── footer
        └── ui
    ├── config
    ├── constants
    ├── context
    ├── data
    ├── db
    ├── hooks
    ├── modules
    ├── queries
    ├── services
    ├── store
    └── utils
├── styles
├── types
```

**\_\_tests\_\_**: This folder contains all 'tests'.

**lib**: This folder may contain utility functions that can be converted later into packages that are used across multiple applications.

**public**: Self explanatory.

**src/components**: This directory contains your UI components. It's further subdivided into ui for generic UI components and shared for components that might be reused across different parts of your application.

> [Conventions for src/components](#convention)

**src/constants**: As the name suggests this folder contains constants.

**src/context**: The context folder in React JS is a folder that stores all of the context files for the application. Context is a way to pass data through the component tree without having to pass props down manually at every level. This can be useful for data that needs to be accessed by many components, such as the current user or the current state of the application.

**src/data**: The data folder in React JS is used to store data assets such as JSON files that contain information used in the application. It is similar to the assets folder, but it is specifically for storing data.

**src/db**: The db folder in React JS is typically used to store database-related files, such as database configuration files, migration scripts, and seed files.

**src/hooks**: This directory may house custom hooks that are used throughout your application.

> [Conventions for src/hooks](#convention2)

**src/modules**: Modules which is also synonymous with 'sections/features' are logical groupings of code that make up the larger pages.

**src/queries**: This directory may contain GraphQL queries.

**src/services**: This folder helps separate the concerns of your application by isolating data fetching and manipulation logic from the components that render the UI.

**src/store**: The store folder in React JS is used to store global state data that is used throughout the application. This data can be anything from the current user's login status to the contents of a shopping cart. The store folder is typically created in the root directory of the project and contains a number of files, including the store itself, actions, and reducers.

**src/utils**: This directory may contain utility functions that do not make sense to convert into packages later.

**styles**: As the name suggests, this directory contains the css pages that is responsible for styling.

**types**: This folder contains TypeScript type definitions.

## Conventions

Throughout the project, unless otherwise mentioned, we will be using the following convention:

- folders and files are named in lowercase with words separated by hyphen (kebab-case). For example, `my-folder` or `my-file`.
- Functions -> `camelCase` E.g. _filterProductsByType_ , _formatCurrency_
- Variables -> `camelCase` E.g. _products_, _productsFiltered_
- Global constants -> all caps `UPPERCASE`. For example: `MAX_VALUE`, `MIN_VALUE`
- Object constants -> Singular, capitalized with const assertion and optionally satisfies type (if there is one).

```js
const ORDER_STATUS = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    error: 'error',
  } as const satisfies OrderStatus;
```

- component names -> `PascalCase` E.g. _export function Footer() {}_
- types should have `.d.ts` extension. E.g. _root.d.ts_
- use arrow functions wherever possible.
- ui folder can contain granular level components like _button_, _dialog_, _input_ etc which can be used to build other components.
- use given folders for various kinds of files. E.g. _types should reside in types folder_

NOTE: Check granular level conventions below for overiding rules (if any). If there are cases where industry standards over-ride the rules mentioned above, please feel free to use them. For example convention for naming hooks.

> <a id="convention">Conventions for src/components</a>

- ui components will go inside the ui folder
- each component will be a folder of its own. Sub-components, if any will reside in the same folder. Each such folder will have index.ts file which will export all components. E.g. `export { Footer as default } from './footer';`
- separate folder for routes. E.g. about-us route will have a folder by the same name inside component folder which will have other components inside it.

Example: take a look at the `footer` component.

> <a id="convention2">Conventions for src/hooks</a>

- `camelCase` beginning with the word _use_ e.g. useFetchData: A generic fetching hook for making HTTP requests to a specified endpoint.

## 🤝 Contributing

Contributions are always welcome!

See [CONTRIBUTING.md](https://github.com/tapascript/jobsync/blob/main/CONTRIBUTING.md) for ways to get started.

Please adhere to this project's [code of conduct](https://github.com/tapascript/jobsync/blob/main/CODE_OF_CONDUCT.md).

## 🙏 Support Us

This is an OSS project by the [tapaScript Community](https://youtube.com/@tapasadhikary). We need all the support we can get. Please give this project a ⭐️ to encourage and show that you liked it.

If you found the project helpful, consider supporting us on GitHub.



