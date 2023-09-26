/**
 * @file code_base.js
 * @description definition for level of code base
 */

/**
 * @typedef {Object} codeBase
 * @property {string} Production - Represents the production environment.
 * @property {string} Testing - Represents the testing environment.
 * @property {string} Development - Represents the development environment.
 */

/**
 * @type {codeBase}
 */
const codeBase={
    Production: "production",
    Testing:"testing",
    Development:"development",
}

export default codeBase;