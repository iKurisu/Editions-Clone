import types from './types';

const toggle = () => ({
  type: types.TOGGLE
});

const displace = type => displacement => ({
  type,
  payload: displacement
})

const displaceAll = displace(types.DISPLACE);
const displaceImage = displace(types.DISPLACE_IMAGE);

export default {
  toggle,
  displaceAll,
  displaceImage
}