import artworkActions from './actions';
import { appActions } from '../app';
import { headersActions } from '../headers';

const { toggle, setId } = artworkActions;
const { setLocation } = appActions;
const { toggleNavOpacity } = headersActions;

const openArtwork = id => dispatch => {
  dispatch(toggle());
  dispatch(setId(id));
  dispatch(setLocation('artwork'))
}

const closeArtwork = () => dispatch => {
  dispatch(setLocation('fading-artwork'));
  dispatch(toggleNavOpacity())
  setTimeout(() => dispatch(toggle()), 800);
  setTimeout(() => {
    dispatch(setLocation(''))
    dispatch(toggleNavOpacity());
  }, 1600);
}

export default {
  openArtwork,
  closeArtwork
}