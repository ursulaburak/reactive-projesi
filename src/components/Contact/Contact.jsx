const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="classes-info">
          <h1>CONTACT US</h1>
          <hr />
          <p>
            Lorem ipsum is not simply random text. It has roots in a piece of
            classic literature at Hampden-Sydney College.
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-left">
            <div className="contact-info">
              <div className="contact-details">
                <h3>Mobile Number</h3>
                <p>+135 773 321 4442</p>
              </div>
              <div className="contact-details">
                <h3>Email Address</h3>
                <p>sportcenter@patika.com</p>
              </div>
            </div>
            <form className="contact-form">
              <h2>Make An Appointment</h2>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
            </form>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5378.578747271076!2d-122.34927700000001!3d47.620506!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490151f4ed5b7f9%3A0xdb2ba8689ed0920d!2sSpace%20Needle!5e0!3m2!1sen!2sus!4v1727999294275!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
