export const INCREMENT = 'INCREMENT';
export const ASYNC_INCREMENT = 'ASYNC_INCREMENT';

export const increment = () => ({
  type: INCREMENT
});

export const asyncIncrement = () => dispatch => {
  setTimeout(() => {
    dispatch({
      type: ASYNC_INCREMENT
    });
  }, 1000);
};
