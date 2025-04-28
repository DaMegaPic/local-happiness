import React from 'react';
import './styles.css';
import InstagramEmbed from '../components/InstagramEmbed';

function Kitchens() {
  return (
    <div className="kitchens">
      <main>
        <div id="gallery-wrapper">
          <img id="big-img-1" src={`${process.env.PUBLIC_URL}/images/kitchen1angle1.jpg`} alt="Kitchen Before and After" />
          <div id="node-wrapper">
            <div id="flex-nodes">
              <div className="node">
                <InstagramEmbed url="https://www.instagram.com/reel/CpPwvkSO0op/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
              </div>
              <div className="node">
                <InstagramEmbed url="https://www.instagram.com/p/CYb-uJHs6fG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
              </div>
            </div>
            <div id="flex-nodes">
              <div className="node">
                <InstagramEmbed url="https://www.instagram.com/p/CM7dDsOHd0L/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
              </div>
              <div className="node">
                <InstagramEmbed url="https://www.instagram.com/p/BvXJrNRlC4H/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Kitchens;
