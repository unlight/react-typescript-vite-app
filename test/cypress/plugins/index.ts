// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * Rather then have a bunch of configs for each environment we simply
 * create a object here, dynamically change it based on various environment variables
 * and pass it to cypress just before it starts.
 */
const CYPRESS_BASE_CONFIG = {
    nodeVersion: 'system',
};

const CYPRESS_CONFIG_PROD = {
    ...CYPRESS_BASE_CONFIG,
    baseUrl: 'http://localhost:5000/',
};

const CYPRESS_CONFIG_LOCAL = {
    ...CYPRESS_BASE_CONFIG,
    baseUrl: `${!process.env.USE_HTTP ? 'https' : 'http'}://localhost:5000/`,
};

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {};
