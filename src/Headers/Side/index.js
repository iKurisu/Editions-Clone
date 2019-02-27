import React from 'react';

class Side extends React.Component {
  state = {
    currentSection: window.scrollY / window.innerHeight + 1,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scroll);
  }

  scroll = e => {
    if (window.scrollY > 12000) window.scrollTo(0, 0);

    this.updateCurrentSection();
  };

  updateCurrentSection() {
    const { scrollY, innerHeight } = window;

    const position = Math.ceil((scrollY - (innerHeight * 2) / 3) / innerHeight);

    this.setState({ currentSection: (position % 12) + 1 });
  }

  format(x) {
    return x < 10 ? `0${x}` : x;
  }
    
  render() {
    const { currentSection } = this.state;
    
    return (
      <React.Fragment>
        <div className="Side fixed fixed-left">Selected Artwork</div>
        <div className="Side fixed fixed-right">
          <span>2016 – P</span>
          <span className="margin-left">{`${this.format(currentSection)} / 12`}</span>
        </div>
      </React.Fragment>
    )
  }
}

export default Side;