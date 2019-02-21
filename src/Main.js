import React from 'react';
import Headers from './Headers';
import Sections from './Sections';
import artworks from './artworks';

class Main extends React.Component {
  state = {
    currentSection: window.scrollY / window.innerHeight + 1
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.scroll);
  }

  updateCurrentSection() {
    const { scrollY, innerHeight } = window;

    const position = Math.ceil((scrollY - innerHeight * 2 / 3) / innerHeight);
    
    this.setState({ currentSection: position % 12 + 1 });
  }

  scroll = e => {
    if (window.scrollY > 12000) window.scrollTo(0, 0);
 
    this.updateCurrentSection()
  }
  
  render() {
    const { currentSection } = this.state;
    
    return (
      <main onScroll={this.scroll}>
        <Headers currentSection={currentSection} />
        <Sections artworks={artworks} />
      </main>
    )
  }
}

export default Main;
