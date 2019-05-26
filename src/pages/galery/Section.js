import React, { useRef } from "react";
import PropTypes from "prop-types";
import useDisplacement from "hooks/useDisplacement";
import Details from "./section/Details";
import Image from "./section/Image";
import Title from "./section/Title";
import "./Section.scss";

const Section = ({ artwork, isClone, zIndex, renderImage }) => {
  const hovering = useRef(false);
  const [titleNode, displace] = useDisplacement(hovering, 55);

  const { src, orientation, title, colors, details } = artwork;

  const imageProps = {
    title,
    orientation,
    src: src.main,
    isClone
  };

  const toggleHover = () => (hovering.current = !hovering.current);

  return (
    <section
      className="section"
      style={{ zIndex }}
      onMouseMove={displace}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className="content-wrapper">
        {renderImage(imageProps)}
        <Title
          title={title}
          node={titleNode}
          style={{
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
  isClone: PropTypes.bool.isRequired,
  zIndex: PropTypes.number,
  renderImage: PropTypes.func
};

Section.defaultProps = {
  isClone: false,
  zIndex: 1,
  // eslint-disable-next-line react/display-name
  renderImage: props => <Image {...props} />
};

export default Section;
