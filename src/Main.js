import React from "react";
import Headers from "./Headers";
import Sections from "./Sections";
import artworks from "./artworks";

class Main extends React.Component {
  state = {
    showNavIcons: true
  };

  render() {
    const { showNavIcons } = this.state;

    return (
      <main>
        <Headers showNavIcons={showNavIcons} />
        <Sections artworks={artworks} />
      </main>
    );
  }
}

export default Main;
