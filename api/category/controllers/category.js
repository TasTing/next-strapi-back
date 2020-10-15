const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.services.category.findOne({ slug },['articles','articles.author','articles.author.picture']);
    return sanitizeEntity(entity, { model: strapi.models.category });
  },

  async find (ctx) {
    const { slug } =ctx.params;

    const entity = await strapi.services.category.find({ slug },['articles','articles.author','articles.author.picture','articles.image']);
    return sanitizeEntity(entity, { model: strapi.models.category });
  }
};
