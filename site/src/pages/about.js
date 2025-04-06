import React, { useState} from 'react';
import './styles.css';

function About() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: '',
    });
    const [resultMessage, setResultMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const sendEmail = async (json) => {
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            return response;
        } catch (error) {
            console.error(error);
            setResultMessage("Sorry, your email couldn't be sent.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(`${formData.name} at ${formData.email} wants this done: ${formData.description}`);

        setResultMessage('Sending...');

        const json = JSON.stringify({
            ...formData,
            access_key: "85ecd7c3-897d-4395-adc3-10d4936e84d9"
        });
        const response = await sendEmail(json);

        if (response?.status === 200) {
            setResultMessage("Email successfully sent.");
        } else {
            setResultMessage("Sorry, your email wasn't sent.");
        }
    };
    
    return (
        <div className='about'>
            <main id="about-main">
                <div id="about-block">
                    <div id="top-chunk">
                        <p>This area is a placeholder for a brief description of the business and the morals it follows...</p>
                        <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} alt="Company Logo"/>
                    </div>
                    <div id="bottom-chunk">
                        <img style={{ width: '150px', height: '200px' }} src={`${process.env.PUBLIC_URL}/images/dadheadshot.jpg`} alt="Founder"/>
                        <h4>Founder/Owner: Ken Carey</h4>
                        <p>Email: ken@localhappiness.net</p>
                    </div>
                    <div id="bottom-chunk">
                        <img style={{ width: '150px', height: '200px' }} src={`${process.env.PUBLIC_URL}/images/Profile_Bilbo_Baggins.webp`} alt="Subcontractor"/>
                        <h4>Subcontractor</h4>
                        <p>Email: bilbobaggins@theshire.com</p>
                    </div>
                    <div id="bottom-chunk">
                        <img style={{ width: '150px', height: '200px' }} src={`${process.env.PUBLIC_URL}/images/sauron.jfif`} alt="Subcontractor"/>
                        <h4>Subcontractor</h4>
                        <p>Email: thedarklord@mtdoom.com</p>
                    </div>
                </div>
                <div id="request-block">
                    <h3>Work Request Form</h3>
                    <p id="work-request-p">Please use this form to contact us...</p>
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="inputs">
                            <h4>Name:</h4>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="inputs">
                            <h4>Email:</h4>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="inputs">
                            <h4>Description:</h4>
                            <textarea
                                name="description"
                                rows="6"
                                cols="30"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="inputs">
                            <h4>Picture:</h4>
                            <button type="button">Choose File</button> {/* File handling would require more setup */}
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                    <p id="result">{resultMessage}</p>
                </div>
            </main>
        </div>
    );
}

export default About;