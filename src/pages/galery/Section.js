import React, { useState } from "react";
import PropTypes from 'prop-types';
import Details from "./section/Details";
import Image from "./section/Image";
import Title from "./section/Title";
import "./Section.scss";

const Section = ({ artwork, title, details, orientation, colors }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const getOffset = (position, size, range) => {
    const percent = position * 100 / size;
    return range * percent / 100 - range / 2;
  }

  const mouseMove = e => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    setX(getOffset(clientX, innerWidth, 28));
    setY(getOffset(clientY, innerHeight, 18));
  }

  return (
    <section className={`section`} onMouseMove={mouseMove}>
      <div className="content-wrapper">
        <Image artwork={artwork} orientation={orientation} />
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
}

Section.propTypes = {
  artwork: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.object.isRequired,
  orientation: PropTypes.string.isRequired,
  colors: PropTypes.object.isRequired
}

export default Section;