import React from 'react';
import './App.css';

import Navigation from '../Navigation/Navigation';

function App() {
  return (
    <div className="app">
      <Navigation/>
      <div className="collection-stack">
          <div className="stack-mask"/>
          <div id="overview" className="block-collection">
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
            <div className="image-block"><img src="/gadgetlab-website/app-screenshots/screenshot-1.svg"/></div>
          </div>
          <div className="block-collection">
            <div className="image-block"><img src="/gadgetlab-website/app-screenshots/screenshot-2.svg"/></div>
            <div className="content-block">
              <div  className="content-title">Perform With Style.</div>
              <div className="content-text">Configure layouts to showcase your skills and complement your sound.</div>
              <br/>
              <div className="content-text">Drag-and-Drop gadgets from the browser to the board.</div>
              <br/>
              <div className="content-text">Edit the look and behavior of each gadget. </div>
            </div>
            <div className="content-block">
              <div className="content-text">A.X.1 is designed to be:</div>
              <br/>
              <div className="content-text">- Exciting to watch.</div>
              <br/>
              <div className="content-text">- Fun to play.</div>
              <br/>
              <div className="content-text">- Difficult to master</div>
            </div>
          </div>
        </div>
  </div>
  );
}

export default App;
