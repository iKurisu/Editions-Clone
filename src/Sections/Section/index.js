import React from 'react';
import Image from './Image';
import Title from './Title';
import Details from './Details';
import "./styles.scss";

class Section extends React.Component {  
  state = {
    offX: 0,
    offY: 0
  }
  
  mouseMove = e => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const rangeX = 28;
    const rangeY = 18;
    
    const percentageX = clientX * 100 / innerWidth;
    const percentageY = clientY * 100 / innerHeight;
 
    const offX = (rangeX * percentageX / 100) - rangeX / 2;
    const offY = (rangeY * percentageY / 100) - rangeY / 2;
    
    this.setState({ offX, offY });
  }
  
  render() {
    const { offX, offY } = this.state;
    const { artwork, title, details, orientation, color } = this.props;
    
    return (
      <section className={`Section`} onMouseMove={this.mouseMove}>
        <div className="ContentWrapper">
          <Image artwork={artwork} orientation={orientation} />
          <Title title={title} style={{ transform: `translate(${offX}px, ${offY}px)`, color }} />
          <Details {...details} />
        </div>
      </section>
    );
  }
}

export default Section;