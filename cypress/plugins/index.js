/**
 * Grab the value of an environment variable
 * once before any of the test runs
 */
module.exports = (on, config) => {

  config.env.NODE_ENV = process.env.NODE_ENV === 'development'
    ? 'development'
    : 'testing';

  return config;
};
