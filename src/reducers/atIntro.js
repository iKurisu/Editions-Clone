export default (state = true, { type }) => {
  switch (type) {
    case 'HIDE_INTRO':
      return false;
    default:
      return state;
  }
}