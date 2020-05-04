import { END_LOADER, START_LOADER } from '../constants/actionTypes';

export const startLoader = () => ({
  type: START_LOADER,
});

export const endLoader = () => ({
  type: END_LOADER,
});
