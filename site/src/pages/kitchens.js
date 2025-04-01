import React from 'react';
import './styles.css';

function Kitchens() {
  return (
    <div className="kitchens">
      <main>
        <div id="gallery-wrapper">
          <img id="big-img-1" src="/images/kitchen1angle1.jpg" alt="Kitchen Before and After" />
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

export default Kitchens;
