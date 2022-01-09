const { getTvShow, listCategories, listTvShows } = require('../data');
const {
  setResponse,
  buildSuccessResponse,
} = require('../utils/utils');

const categoriesHandler = ctx => {
  const categories = listCategories();
  const response = buildSuccessResponse(categories);
  return setResponse(ctx, response);
};

const tvShowsHandler = ctx => {
  const categoryId = ctx.params.id;
  const cursor = parseInt(ctx.request.query.cursor, 10);
  const products = listTvShows(categoryId, cursor);
  const response = buildSuccessResponse(products);
  return setResponse(ctx, response);
};

const tvShowsDetailHandler = ctx => {
  const productId = ctx.params.id;
  const product = getTvShow(productId);
  const response = buildSuccessResponse(product);
  return setResponse(ctx, response);
};

module.exports = { categoriesHandler, tvShowsHandler, tvShowsDetailHandler };
