import React from 'react';
import './App.css';

import Navigation from '../Navigation/Navigation';

function App() {
  return (
    <div className="app">
      <Navigation/>
      <div className="dividing-line"/>
      <div className="collection-stack">
        <div className="stack-mask"/>
        <div className="block-collection">
          <div className="content-block">
            <div className="content-title">Bring Life Back To Music.</div>
            <div className="content-text">Electronic music performances are under appreciated because there is a disconnect between the performer and the audience.</div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="content-text">Acoustic instruments (guitar, keyboard) are understood. Action ‘x’ results in output ‘y’.</div>
            <br/>
            <div className="content-text">The audience is not confused by what the performer is doing. Therefore, the audience has enough context to appreciate the performance.</div>
            <br/>
            <div className="content-text">Electronic music performance controllers are cryptic. Action ‘x’ results in output ‘?’. It begs the question, is the performer actually doing anything on stage?</div>
          </div>
          <div className="image-block"><img src="/gadgetlab-website/overview-screenshot.png"/></div>

        </div>
      </div>
  </div>
  );
}

export default App;
