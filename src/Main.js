import React from "react";
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Redirect
} from 'react-router-dom';
import Headers from "./Headers";
import Sections from "./Sections";
import artworks from "./artworks";
import Artwork from "./Artwork";

class Main extends React.Component {
  render() {
    let id = 0;

    return (
      <main>
        <Headers />
        <Router>
          <Switch>
            { artworks.map(artwork => {
              return (
                <Route 
                  exact
                  key={id++}
                  path={`/${artwork.title.toLowerCase()}`} 
                  render={props => <Artwork {...props} artwork={artwork} />} 
                />
              )
            })}
            <Route exact path="/" render={props => <Sections {...props} artworks={artworks} />} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </Router>
      </main>
    );
  }
}

export default Main;
