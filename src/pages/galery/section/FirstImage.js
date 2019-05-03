import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as PIXI from 'pixi.js';
import mediaQuery from 'utils/mediaQuery';
import displacement from 'assets/displacement.png';
import "./Image.scss";

const preIntroScale = mediaQuery({
  "(max-width: 768px)": 0.94,
  "(min-width: 768px)": 1.06
});

const introScale = mediaQuery({
  "(max-width: 768px)": 0.89,
  "(min-width: 768px)": 1.03
});

const load = (canvas, image) => {
  const renderer = PIXI.autoDetectRenderer(1400, 1750, { transparent: true });
  canvas.current.appendChild(renderer.view);

  const stage = new PIXI.Container();

  const texture = PIXI.Texture.fromImage(image);
  const preview = new PIXI.Sprite(texture);

  const displacementSprite = PIXI.Sprite.fromImage(displacement);

  displacementSprite.scale.x = 1.7;
  displacementSprite.scale.y = 1.7;

  displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

  const displacementFilter = new PIXI.filters.DisplacementFilter(
    displacementSprite
  );

  stage.filters = [displacementFilter];

  stage.addChild(displacementSprite);
  stage.addChild(preview);

  animate();

  function animate() {
    const speed = 1.7;

    displacementSprite.x += speed;
    displacementSprite.y += speed;

    renderer.render(stage);
    requestAnimationFrame(animate);
  }
}

const FirstImage = ({ src, orientation, atIntro, displacement: {x, y} }) => {
  const [scale, setScale] = useState(atIntro ? preIntroScale : introScale);
  const [opacity, setOpacity] = useState(atIntro ? 0 : 1);
  const canvas = useRef(null);

  useEffect(() => {
    setScale(atIntro ? introScale : 1);
  });

  useEffect(() => {
    setOpacity(1);
    if (atIntro) load(canvas, src);    
  }, []);

  return (
    <div
      className={`image-wrapper ${orientation}`}
      style={{ transform: `scale(${scale})`, opacity }}
    >
      <div 
        className="hero" 
        style={{ transform: `translate(${x / 1.5}px, ${y / 1.5}px)` }}
      >
        { atIntro && <div className="canvas" ref={canvas}></div> }
        <img src={src} />
      </div>
    </div>
  );
};

FirstImage.propTypes = {
  src: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired,
  atIntro: PropTypes.bool.isRequired,
  displacement: PropTypes.object.isRequired
};

const mapState = ({ intro }) => ({
  atIntro: intro.toggled,
  displacement: intro.displacement.image
})

export default connect(mapState)(FirstImage);
