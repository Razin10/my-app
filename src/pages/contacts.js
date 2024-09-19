import React from 'react'
import './contact.css'

export default function contacts() {
  return (
    <>
    <section className="contact">
    <div className="contact-header">
      <h3 id="co-title">Contact Me</h3>
    </div>
    
    <div className="contact-content">
      <div className="contact-form">
        <h3 id="form-title">Send me a message</h3>
      <form action="mailto:razinkhan3245@gmail.com" method="post" enctype="text/plain">
        <fieldset>
          <div className="form-field">
            <input name="name" type="text" id="name" placeholder="Your Name"></input>
          </div>
        <div className="form-field">
            <input name="email" type="email" id="email" placeholder="Your Email"></input>
          </div>
        <div className="form-field">
            <input name="Subject" type="text" id="subject" placeholder="Subject"></input>
          </div>
      <div className="form-field">
            <textarea name="message" type="text" id="message" placeholder="Your Message"></textarea>
          </div>
        </fieldset>
    <input id="form-btn" type="submit" value="send"/>
      </form>
  </div>
    
      <div className="contact-info">
        <h3>Email Me At </h3>
        <a className='email' href="mailto:razinkhan3245@gmail.com"><p>razinkhan3245@gmail.com</p></a>
        <h3>Find Me On </h3>
        <div className="contact-links">
          <a><i className="fab fa-linkedin"></i></a>
          <a><i className="fab fa-github"></i></a>
          <a><i className="fab fa-codepen"></i></a>
        </div>
      </div>
      </div>
  </section>
  </>
  )
}
