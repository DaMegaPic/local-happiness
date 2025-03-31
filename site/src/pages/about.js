import React from 'react';
import './Pages.css';

function About() {
    return (
        <div className='about'>
            <header>
                <div id="flex-header">
                    <img id="header-logo" src="/images/logo.jpg" alt="Logo"/>
                    <h1 id="centered">Local Happiness Construction</h1>
                </div>
                <hr/>
                <nav id="main-nav">
                    <div id="toggle-nav">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <ul id="nav-items" className="hide-small">
                        <li><a href="/">Home</a></li>
                        <li className="highlight-nav"><a href="/about">About Us</a></li>
                        <li><a href="/kitchens">Kitchens</a></li>
                        <li><a href="/bathrooms">Bathrooms</a></li>
                        <li><a href="/landscaping">Landscaping</a></li>
                        <li><a href="/reviews">Review Board</a></li>
                    </ul>
                </nav>
            </header>
            <main id="about-main">
                <div id="about-block">
                    <div id="top-chunk">
                        <p>This area is a placeholder for a brief description of the business and the morals it follows...</p>
                        <img src="/images/logo.jpg" alt="Company Logo"/>
                    </div>
                    <div id="bottom-chunk">
                        <img style={{ width: '150px', height: '200px' }} src="/images/dadheadshot.jpg" alt="Founder"/>
                        <h4>Founder/Owner: Ken Carey</h4>
                        <p>Email: ken@localhappiness.net</p>
                    </div>
                    <div id="bottom-chunk">
                        <img style={{ width: '150px', height: '200px' }} src="/images/Profile_Bilbo_Baggins.webp" alt="Subcontractor"/>
                        <h4>Subcontractor</h4>
                        <p>Email: bilbobaggins@theshire.com</p>
                    </div>
                    <div id="bottom-chunk">
                        <img style={{ width: '150px', height: '200px' }} src="/images/sauron.jfif" alt="Subcontractor"/>
                        <h4>Subcontractor</h4>
                        <p>Email: thedarklord@mtdoom.com</p>
                    </div>
                </div>
                <div id="request-block">
                    <h3>Work Request Form</h3>
                    <p id="work-request-p">Please use this form to contact us...</p>
                    <div className="inputs">
                        <h4>Name:</h4>
                        <input type="text"/>
                    </div>
                    <div className="inputs">
                        <h4>Phone Number:</h4>
                        <input type="text"/>
                    </div>
                    <div className="inputs">
                        <h4>Description:</h4>
                        <textarea rows="6" cols="30"></textarea>
                    </div>
                    <div className="inputs">
                        <h4>Picture:</h4>
                        <button>Choose File</button>
                    </div>
                    <button>Submit</button>
                </div>
            </main>
        </div>
    );
}

export default About;
