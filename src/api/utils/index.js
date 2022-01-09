const setResponse = (ctx, { status, body }) => {
  ctx.status = status;
  ctx.body = body;
  return ctx;
};

const buildErrorResponse = (status, code, message) => ({
  status,
  body: {
    status,
    code,
    message,
  },
});

const buildSuccessResponse = body => ({
  status: 200,
  body,
});

const errorMiddleware = (ctx, next) => next()
  .catch((error) => {
    console.error(error);
    setResponse(ctx, buildErrorResponse(500, 'INTERNAL_SERVER_ERROR', error.message));
  });

module.exports = {
  buildErrorResponse,
  setResponse,
  buildSuccessResponse,
  errorMiddleware,
};
