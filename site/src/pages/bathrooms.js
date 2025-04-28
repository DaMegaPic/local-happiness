import React from 'react';
import './styles.css';
import InstagramEmbed from '../components/InstagramEmbed';

function Bathroom() {
  return (
    <div className="bathrooms">
      <main>
        <div id="gallery-wrapper">
          <div id="node-wrapper">
            <h2>Before and After</h2>
              <div id="flex-nodes">
                <div className="node">
                  <InstagramEmbed url="https://www.instagram.com/p/CvSC7tnOgUG/?utm_source=ig_embed&amp;igsh=MzRlODBiNWFlZA==" />
                </div>
                <div className="node">
                  <InstagramEmbed url="https://www.instagram.com/reel/Cgebj_OA-vZ/?utm_source=ig_embed&amp;utm_campaign=loading" />
                </div>
                <div className="node">
                  <InstagramEmbed url="https://www.instagram.com/reel/DCIFFbERANx/?utm_source=ig_embed&amp;utm_campaign=loading" /> 
                  <h2>Video</h2>
                </div>
                <div className="node">
                  <InstagramEmbed url="https://www.instagram.com/p/CtmaIxwRn58/?utm_source=ig_embed&amp;utm_campaign=loading" />
                </div>
              </div>
          </div>
          <img id="big-img" src={`${process.env.PUBLIC_URL}/images/bigbathroom.jpg`} alt="Big Bathroom" />
        </div>
      </main>
    </div>
  );
}

export default Bathroom;
