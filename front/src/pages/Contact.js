import React from 'react';
import '../styles/pages/Contact.css';

const Contact = (props) => {
    return (
        <section>

        <div className="contact">
            <form className="form">

                <label for="name">Name</label>
                <input type="text" id="name" placeholder="Your name" required />
                <label for="">Telephone Number</label>
                <input type="number" id="telephone" placeholder="Your telephone number" required />
                <label for="mail">Email</label>
                <input type="email" id="email" placeholder="Your email" required />
                <label for="msg">Message</label>
                <textarea name="user_message" id="msg" cols="30" rows="10" placeholder="Your message"></textarea>
                <input id="submit" type="submit" value="SEND ENQUIRY" />

            </form>


            <div className="maps">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14891.504421347434!2d-86.7829377697609!3d21.077610017795585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2831a6459669%3A0x74a1be3cced8a726!2sGrand%20Oasis%20Canc%C3%BAn!5e0!3m2!1ses-419!2sar!4v1698096138213!5m2!1ses-419!2sar"
                    width="100%" height="525" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

    </section>
    )
}

export default Contact;