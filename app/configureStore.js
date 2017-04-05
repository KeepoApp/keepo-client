import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

const configureStore = () => {
  const logger = createLogger();
  const store = createStore(
    () => {},
    compose(
      applyMiddleware(
        logger,
      ),
    ),
  );

  return store;
};

export default configureStore;
