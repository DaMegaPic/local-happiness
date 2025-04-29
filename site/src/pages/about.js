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
                        <p>The Local Happiness experience is truly exceptional. Most of our clients become repeat customers because we consistently show up, deliver great work, and exceed expectations. They often express their appreciation with messages like Kirby and Llewellyn Shealy, who said: "Thanks so much for everything Ken. We're thrilled with our new deck."</p>
                        <p>Hi Ken. Thanks for the references, you have some very happy clients. Don’t want to bother you on a weekend, just letting you know we’ve decided to go ahead with the project. I’ve made selections at both The  Tile Center & Gateway & will go back to pay for those after speaking with you next week just to make sure I’ve gotten what I’m supposed to. Also want to discuss the curb of the shower with you at that time. </p>
                        <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} alt="Company Logo"/>
                    </div>
                    <div id="bottom-chunk">
                        <img style={{ width: '150px', height: '200px' }} src={`${process.env.PUBLIC_URL}/images/dadheadshot.jpg`} alt="Founder"/>
                        <h4>Founder/Owner: Ken Carey</h4>
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
                            <button type="button">Choose File</button> {/* File handling Code */}
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