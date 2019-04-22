import React from "react";
import PropTypes from "prop-types";
import withMovement from './section/withMovement';
import Details from "./section/Details";
import Image from "./section/Image";
import Title from "./section/Title";
import "./Section.scss";

const Section = ({ artwork, x, y, mouseMove }) => {
  const { src, orientation, title, colors, details } = artwork;

  return (
    <section 
      className='section' 
      onMouseMove={mouseMove}
    >
      <div className="content-wrapper">
        <Image src={src} orientation={orientation} />
        <Title
          title={title}
          style={{
            transform: `translate(${x}px, ${y}px)`,
            color: colors.font,
          }}
        />
        <Details {...details} />
      </div>
    </section>
  );
};

Section.propTypes = {
  artwork: PropTypes.object.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  mouseMove: PropTypes.func.isRequired
};

export default withMovement(Section);
