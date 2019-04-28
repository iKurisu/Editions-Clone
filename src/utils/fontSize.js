import getPixels from "./getPixels";

const fontSize = (fontSize, maxFontSize = fontSize) => {
  return getPixels(fontSize) > getPixels(maxFontSize) ? maxFontSize : fontSize;
};

export default fontSize;
