const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const { errorMiddleware } = require('./utils/utils');
const { categoriesHandler, tvShowsHandler, tvShowsDetailHandler } = require('./handlers/handlers');

const router = new Router();
const app = new Koa();

router.use(errorMiddleware);
router.get('/api/categories', categoriesHandler);
router.get('/api/categories/:id/tv-shows', tvShowsHandler);
router.get('/api/tv-shows/:id', tvShowsDetailHandler);

app.use(bodyParser());
app.use(router.routes());

module.exports = { app };
