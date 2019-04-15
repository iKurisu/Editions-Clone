import React, { useState } from "react";
import PropTypes from "prop-types";
import Details from "./section/Details";
import Image from "./section/Image";
import Title from "./section/Title";
import "./Section.scss";

const Section = ({ artwork, atIntro }) => {
  const { src, orientation, title, colors, details } = artwork;
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const getOffset = (position, size, range) => {
    const percent = (position * 100) / size;
    return (range * percent) / 100 - range / 2;
  };

  const mouseMove = e => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    setX(getOffset(clientX, innerWidth, 28));
    setY(getOffset(clientY, innerHeight, 18));
  };

  return (
    <section className={`section`} onMouseMove={mouseMove}>
      <div className="content-wrapper">
        <Image src={src} orientation={orientation} atIntro={atIntro} />
        <Title
          title={title}
          style={{
            transform: `translate(${x}px, ${y}px)`,
            color: colors.font
          }}
        />
        <Details {...details} />
      </div>
    </section>
  );
};

Section.propTypes = {
  artwork: PropTypes.object.isRequired,
  atIntro: PropTypes.bool
};

export default Section;
