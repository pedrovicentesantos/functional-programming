const R = require('ramda');
const axios = require('axios');

const {
  delayed,
  then,
} = require('./utils');

const categoryRequestConfig = {
  method: 'get',
  url: 'http://localhost:3000/api/categories',
};

const listCategoryIds = R.pipe(
  R.always(categoryRequestConfig),
  axios,
  then(R.prop('data')),
  then(R.map(R.prop('id'))),
);

const listTvShowsIdsRequestConfig = ({ categoryId, cursor }) => ({
  method: 'get',
  url: `http://localhost:3000/api/categories/${categoryId}/tv-shows`,
  params: { cursor },
});

const listTvShowsIdsRequest = R.pipe(
  listTvShowsIdsRequestConfig,
  axios,
  then(R.prop('data')),
);

const listAllTvShowsIds = (tvShowsIds, { categoryId, cursor }) => (R.isNil(cursor)
  ? Promise.resolve(tvShowsIds)
  : listTvShowsIdsRequest({ categoryId, cursor })
    .then(({ result, nextCursor }) => {
      const ids = result.map(R.prop('id'));
      return listAllTvShowsIds(tvShowsIds.concat(ids), { categoryId, cursor: nextCursor });
    }));

const listTvShowIds = (categoryId) => listAllTvShowsIds([], { categoryId, cursor: 0 });

const getTvShowRequestConfig = (tvShowId) => ({
  method: 'get',
  url: `http://localhost:3000/api/tv-shows/${tvShowId}`,
});

const getTvShowRequest = R.pipe(
  getTvShowRequestConfig,
  axios,
  then(R.prop('data')),
);

const getTvShowDetails = R.pipe(
  delayed(100),
  then(getTvShowRequest),
);

module.exports = {
  listCategoryIds,
  listTvShowIds,
  getTvShowDetails,
};
