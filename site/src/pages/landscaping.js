import React from 'react';
import './styles.css';

function Landscaping() {
  return (
    <div className="landscaping">
      <main>
        <div id="gallery-wrapper">
          <img id="big-img-1" src="/images/landscaping-big.jpg" alt="Landscaping Before and After" />
          <div id="node-wrapper">
            <h2>Before and After</h2>
            <div id="flex-nodes">
              <div className="node">
                <img src="https://placehold.co/440x220" alt="Example" />
                <h2>This is an Example Header</h2>
              </div>
              <div className="node">
                <img src="https://placehold.co/440x220" alt="Example" />
                <h2>This is an Example Header</h2>
              </div>
            </div>
            <div id="flex-nodes">
              <div className="node">
                <img src="https://placehold.co/440x220" alt="Example" />
                <h2>This is an Example Header</h2>
              </div>
              <div className="node">
                <img src="https://placehold.co/440x220" alt="Example" />
                <h2>This is an Example Header</h2>
              </div>
            </div>
            <div id="flex-nodes">
              <div className="node">
                <img src="https://placehold.co/440x220" alt="Example" />
                <h2>This is an Example Header</h2>
              </div>
              <div className="node">
                <img src="https://placehold.co/440x220" alt="Example" />
                <h2>This is an Example Header</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Landscaping;
