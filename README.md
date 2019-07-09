# Asianwiki-web
This web application serves as a convenient window for movie lovers to learn more about their favorite dramas and movies.
Checkout [Asianwiki-web](https://asianwiki.herokuapp.com) here.

# Table of Contents

- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Testing](#testing)
- [API documentation](#api-documentation)

## Technology Stack

- Typescript
- React
- SCSS
- Redux
- NodeJS
- Webpack
- Jest
- Enzyme
- Cypress

## Installation

You can setup this project on your machine locally by :

- Using the normal approach in the `Setting Up For Local Development` section below

## Setting Up For Local Development

1. Install [`Node JS`](https://nodejs.org/en/).
2. To clone, run `https://github.com/rethes/asianWiki-frontend.git`.
3. `cd` into the root of the **project directory**.
4. Install [`yarn`](https://yarnpkg.com/en/docs/install#mac-stable).
5. Run `yarn install` on the terminal to install dependecies.
6. Create a `.env` file in the root directory of the application. Example of the content of a `.env` file is shown in the `.env.example`
7. To start the application run `yarn start:dev`

## Testing

**End To End tests** - Run `cy:run` on the terminal while within the **project root directory**. End to End testing is achieved through use of `http-server` and `Cypress` packages. `http-server` is used to create a simple web server and `Cypress` is used for the browser automation. They will both be installed when you run `yarn install`

**Unit tests** - Run `test:unit` on the terminal while within the **project root directory**. Unit testing is achieved through the use of `jest` package. `jest` is used to test javascript code in React applications.

### API Documentation

N/A.

### Support or Contribution

For any suggestions or contributions please do not hesitate to contact the owners of this repository.

Contributions to this project are welcomed by all, If you need to contribute, follow the steps below

- **Fork** the repository
- Follow [Installation and Setup](#installation) as explained earlier
- Create a branch off `develop` for the feature you wish to add
- Make necessary changes, commit and raise a pull request against develop.
  **Note** when making contributions, please endeavour to follow the [Airbnb](https://github.com/airbnb/javascript) javascript style guide.

