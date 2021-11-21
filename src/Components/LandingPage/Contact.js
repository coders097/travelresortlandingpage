import React from 'react';
import '../../css/Contact.css';

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="contact-form">
                <h1>GET IN <span>TOUCH</span></h1>
                <input placeholder="NAME" type="text"></input>
                <input placeholder="EMAIL" type="email"></input>
                <input placeholder="PHONE NO" type="number"></input>
                <textarea rows="5" placeholder="MESSAGE">
                </textarea>
                <button>SUBMIT</button>
            </div>
            <div className="contact-info">
                <h3>CONTACT INFO</h3>
                <p>Have any Queries? Let us know. We will clear for you at the best.</p>
                <div>
                    <p><i className="fa fa-map-marker" aria-hidden="true"></i></p>
                    <div>
                        <h4>OFFICE</h4>
                        <p>Zilla Resort, 215 , Mallin Street </p>
                        <p>Las Digo, LD 100 254</p>
                    </div>
                </div>
                <div>
                    <p><i className="fa fa-envelope-o" aria-hidden="true"></i></p>
                    <div>
                        <h4>EMAIL</h4>
                        <p>info@zilla.com</p>
                        <p>support@zillaResorts.com</p>
                    </div>
                </div>
                <div>
                    <p><i className="fa fa-phone" aria-hidden="true"></i></p>
                    <div>
                        <h4>PHONE</h4>
                        <p>1800 658 4778</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;