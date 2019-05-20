import artworkActions from './actions';
import { appActions } from '../app';

const { toggle, setId } = artworkActions;
const { setLocation } = appActions;

const openArtwork = id => dispatch => {
  dispatch(toggle());
  dispatch(setId(id));
  dispatch(setLocation('artwork'))
}

const closeArtwork = () => dispatch => {
  dispatch(setLocation('fading-artwork'));
  setTimeout(() => dispatch(toggle()), 800);
  setTimeout(() => dispatch(setLocation('')), 1600);
}

export default {
  openArtwork,
  closeArtwork
}