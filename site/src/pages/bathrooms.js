import React from 'react';
import './styles.css';

function Bathroom() {
  return (
    <div className="bathrooms">
      <main>
        <div id="gallery-wrapper">
          <div id="node-wrapper">
            <h2>Before and After</h2>
            {[...Array(3)].map((_, i) => (
              <div key={i} id="flex-nodes">
                <div className="node">
                  <img src="https://placehold.co/440x220" alt="Example" />
                  <h2>This is an Example Header</h2>
                </div>
                <div className="node">
                  <img src="https://placehold.co/440x220" alt="Example" />
                  <h2>This is an Example Header</h2>
                </div>
              </div>
            ))}
          </div>
          <img id="big-img" src={`${process.env.PUBLIC_URL}/images/bigbathroom.jpg`} alt="Big Bathroom" />
        </div>
      </main>
    </div>
  );
}

export default Bathroom;
