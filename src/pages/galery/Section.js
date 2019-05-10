import React from "react";
import PropTypes from "prop-types";
import withMovement from "components/withMovement";
import Details from "./section/Details";
import Image from "./section/Image";
import Title from "./section/Title";
import "./Section.scss";

const Section = ({ artwork, displacement: { x, y }, displace }) => {
  const { src, orientation, title, colors, details } = artwork;

  return (
    <section className="section" onMouseMove={displace}>
      <div className="content-wrapper">
        <Image src={src.main} orientation={orientation} />
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
  displacement: PropTypes.object.isRequired,
  displace: PropTypes.func.isRequired
};

export default withMovement(Section);
