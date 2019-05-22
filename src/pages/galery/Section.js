import React, { useRef } from "react";
import PropTypes from "prop-types";
import useDisplacement from 'hooks/useDisplacement';
import Details from "./section/Details";
import Image from "./section/Image";
import Title from "./section/Title";
import "./Section.scss";

const Section = ({ artwork }) => {
  const { src, orientation, title, colors, details } = artwork;

  const hovering = useRef(false);
  const [titleNode, displace] = useDisplacement(hovering, 55);

  const toggleHover = () => (hovering.current = !hovering.current);

  return (
    <section 
      className="section" 
      onMouseMove={displace} 
      onMouseEnter={toggleHover} 
      onMouseLeave={toggleHover}
    >
      <div className="content-wrapper">
        <Image 
          src={src.main} 
          title={title} 
          orientation={orientation} />
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
  artwork: PropTypes.object.isRequired
};

export default Section;
