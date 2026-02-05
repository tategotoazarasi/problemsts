# problemsts

A collection of competitive programming solutions written in TypeScript. This repository serves as a personal log of solved problems and a template for setting up a TypeScript project with testing and documentation.

## Project Structure

The project is a standard Node.js package configured for TypeScript development.

- `package.json`: Defines project metadata, dependencies, and npm scripts.
- `tsconfig.json`: Configuration for the TypeScript compiler (`tsc`).
- `jest.config.js`: Configuration for the Jest testing framework.
- `typedoc.json`: Configuration for the TypeDoc documentation generator.
- `src/`: Contains the TypeScript source code.
    - `index.ts`: The main entry point of the library.
    - `leetcode/`: Solutions organized by platform.
- `tests/`: Contains test files written in TypeScript using Jest.
- `dist/`: The output directory for the compiled JavaScript code.
- `docs/`: The output directory for the generated HTML documentation.

## Getting Started

### Prerequisites

- Node.js and npm (or yarn).

### Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/tategotoazarasi/problemsts.git
    cd problemsts
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## Build

The TypeScript code is compiled into JavaScript using `tsc`. The output is placed in the `dist/` directory.

To build the project, run the `build` script defined in `package.json`:

```bash
npm run build
```

## Testing

The project uses Jest for unit testing. Test files are located in the `tests/` directory and end with `.test.ts`.

To run all tests, use the `test` script:

```bash
npm test
```

This will automatically find and execute all test files.

## Documentation

The project uses TypeDoc to generate HTML documentation from the JSDoc comments in the source code.

To generate the documentation, run the `docs` script:

```bash
npm run docs
```

The generated documentation will be available in the `docs/` directory. Open `docs/index.html` in your browser to view it.
