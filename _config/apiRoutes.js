const moduleName = 'iwebhooks';
const moduleVersion = 'v1';
const urlBase = `/${moduleName}/${moduleVersion}`;


export default {
  urlBase: urlBase,
  version: moduleVersion,
  categories: `${urlBase}/categories`,
  hooks: `${urlBase}/hooks`,
  logs: `${urlBase}/logs`,
  types: `${urlBase}/types`,
  eventTypes: `${urlBase}/event-types`
};
