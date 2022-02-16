'use strict';

/**
 * vegetable service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vegetable.vegetable');
