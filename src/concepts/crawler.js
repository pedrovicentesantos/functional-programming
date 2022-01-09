const R = require('ramda');
// Utils
const {
  concatAll,
  concurrently,
  serially,
  then,
} = require('../utils/utils');
const {
  listCategoryIds,
  listTvShowIds,
  getTvShowDetails,
} = require('../utils/api');

const logSize = R.pipe(
  R.prop('length'),
  console.log.bind(console, 'Size:'),
);

const saveTvShows = R.tap(console.log);

const process = R.pipe(
  listCategoryIds, // Array de CategoryId
  then(concurrently(2, listTvShowIds)), // Array de arrays de TvShowId
  then(concatAll), // Array de TvShowId
  then(serially(getTvShowDetails)), // Array de TvShowDetail
  then(saveTvShows), // Array de TvShowDetail
  then(R.tap(logSize)), // Array de TvShowDetail
);

// Needs the api to be running
process();
