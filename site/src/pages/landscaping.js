import React from 'react';
import './styles.css';
import InstagramEmbed from '../components/InstagramEmbed';

function Landscaping() {
  return (
    <div className="landscaping">
      <main>
        <div id="gallery-wrapper">
          <img id="big-img-1" src={`${process.env.PUBLIC_URL}/images/landscaping-big.jpeg`} alt="Landscaping Before and After" />
          <div id="node-wrapper">
            <div id="flex-nodes">
              <div className="node">
              <InstagramEmbed url="https://www.instagram.com/p/CtU_RD8Rgse/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
              </div>
              <div className="node">
              <InstagramEmbed url="https://www.instagram.com/tv/CgElmQwrqox/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
              </div>
              <div className="node">
              <InstagramEmbed url="https://www.instagram.com/p/CCf5KTfnDxC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
              </div>
              <div className="node">
              <InstagramEmbed url="https://www.instagram.com/p/B_3mpeqn7w7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Landscaping;
