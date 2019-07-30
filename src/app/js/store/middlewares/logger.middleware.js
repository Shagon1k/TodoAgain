const loggerMiddleware = () => next => (action) => {
  // TODO: define PROD/DEV to log only on dev mode
  console.log('Action triggered:', action.type);
  next(action);
};

export default loggerMiddleware;