# Project Name

A React TypeScript application demonstrating the use of MobX for MVVM (Model-View-ViewModel) architecture, along with Dependency Injection using Tsyringe and data fetching with React Query.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
- [Testing](#testing)
    - [Running Tests](#running-tests)
- [Dependency Injection](#dependency-injection)
- [Project Organization](#project-organization)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction

This project is a React application built with TypeScript, showcasing the use of dependency injection (DI) using Tsyringe. It incorporates MobX for state management and React Query for efficient data fetching and caching. The application demonstrates a clean architecture with well-structured code, promoting maintainability and testability.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (version 14 or above recommended).
- **npm, Yarn or pnpm**: Use npm (comes with Node.js) or install Yarn or pnpm.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/tidemann/react-mvvm.git
   cd react-mvvm
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Running the Application

To start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open your browser and navigate to `http://localhost:3000` (or the port specified in the console).

---

## Testing

### Running Tests

The project uses Vitest for testing. To run the tests:

```bash
npm run test
# or
yarn test
# or
pnpm test
```

---

## Dependency Injection

The application utilizes Tsyringe for dependency injection. This promotes loose coupling, easier testing, and better maintainability.

### DI Setup

- **Tokens:** All DI tokens are defined in `src/di/tokens.ts`.

  ```typescript
  // src/di/tokens.ts

  import { InjectionToken } from 'tsyringe';
  import { IApiClient } from '@interfaces/IApiClient';
  import { IToyModel } from '@models/IToyModel';
  import { ToyCreateViewModel } from '@components/Toys/ToyCreate/ToyCreateViewModel';
  import { QueryClient } from '@tanstack/react-query';
  import { AppRouter } from '@routes/router';

  export const IApiClientToken: InjectionToken<IApiClient> = Symbol('IApiClient');
  export const ToyModelToken: InjectionToken<IToyModel> = Symbol('ToyModel');
  export const ToyCreateViewModelToken: InjectionToken<ToyCreateViewModel> = Symbol('ToyCreateViewModel');
  export const QueryClientToken: InjectionToken<QueryClient> = Symbol('QueryClient');
  export const RouterToken: InjectionToken<AppRouter> = Symbol('Router');
  ```

- **Container Registration:** Dependencies are registered in `src/di/container.ts`.

  ```typescript
  // src/di/container.ts

  import { container } from 'tsyringe';
  import { ApiClient } from '@api/clients/ApiClient';
  import { ToyModel } from '@models/ToyModel';
  import { ToyCreateViewModel } from '@components/Toys/ToyCreate/ToyCreateViewModel';
  import { queryClient } from '@api/query/queryClient';
  import { router } from '@routes/router';
  import {
    IApiClientToken,
    ToyModelToken,
    ToyCreateViewModelToken,
    QueryClientToken,
    RouterToken,
  } from './tokens';

  container.registerSingleton(IApiClientToken, ApiClient);
  container.register(ToyModelToken, { useClass: ToyModel });
  container.register(ToyCreateViewModelToken, { useClass: ToyCreateViewModel });
  container.registerInstance(QueryClientToken, queryClient);
  container.registerInstance(RouterToken, router);
  ```

- **Usage:** Dependencies are injected into classes using `@injectable()` and `@inject()` decorators.

  ```typescript
  // Example: src/components/Toys/ToyCreate/ToyCreateViewModel.ts

  import { makeAutoObservable } from 'mobx';
  import { injectable, inject } from 'tsyringe';
  import { Router } from '@tanstack/router';
  import { IToyModel } from '@models/IToyModel';
  import { ToyModelToken, RouterToken } from '@di/tokens';

  @injectable()
  export class ToyCreateViewModel {
    // ...

    constructor(
      @inject(ToyModelToken) private toyModel: IToyModel,
      @inject(RouterToken) private router: Router
    ) {
      makeAutoObservable(this);
    }

    // ...
  }
  ```

---

## Project Organization

The project is organized to promote clarity and maintainability.

- **`src/`:** Contains all source code.
- **`api/`:** API clients and query client setup.
    - **`clients/`:** Real and mock API clients.
    - **`query/`:** React Query client setup.
- **`components/`:** React components, each in its own folder.
- **`config/`:** Configuration files.
- **`di/`:** Dependency Injection setup.
    - **`tokens.ts`:** DI tokens.
    - **`container.ts`:** DI container setup.
- **`interfaces/`:** TypeScript interfaces.
- **`localization/`:** Localization files.
- **`models/`:** Data models and interfaces.
- **`routes/`:** Routing configuration and components.
- **`types/`:** TypeScript type declarations.
- **`utils/`:** Utility functions.

---

## Technologies Used

- **React**: UI library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript for better code quality.
- **MobX**: State management library.
- **React Query (@tanstack/react-query)**: Data fetching and caching.
- **Tsyringe**: Dependency injection container for TypeScript.
- **Vitest**: A blazing-fast unit test framework powered by Vite.
- **React Router or @tanstack/router**: For routing (depending on the router used).
- **Vite**: Build tool for fast development.
- **ESLint and Prettier**: Code linting and formatting.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository.**
2. **Create a new branch** for your feature or bug fix.
3. **Commit your changes** with clear messages.
4. **Push to your fork** and submit a pull request.

Please ensure your code adheres to the project's coding standards and passes all tests.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements

- Inspired by best practices in React and TypeScript development.
- Thanks to the maintainers of the open-source libraries used in this project.

---

**Note:** This README provides an overview and instructions to help you get started with the project. For detailed documentation on specific modules or components, please refer to the inline code comments and additional documentation within the respective directories.

If you encounter any issues or have questions, feel free to open an issue on the repository or reach out to the maintainers.

Happy coding!
