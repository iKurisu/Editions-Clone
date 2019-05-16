import * as PIXI from 'pixi.js';
import displacement from 'assets/displacement.png';

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

export default load;