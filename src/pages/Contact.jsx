import React, { useState } from 'react';

function ContactUs() {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submission logic here
    alert('Your message has been sent!');
  };

  return (
    <section className='contact-section py-5'>
      <div className='container'>
        <h2 className='text-center mb-4'>Contact Us</h2>
        <form onSubmit={handleSubmit} className='row g-3'>
          <div className='col-md-6'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input
              type='text'
              className='form-control'
              name='name'
              value={contactInfo.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='col-md-6'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              className='form-control'
              name='email'
              value={contactInfo.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='col-12'>
            <label htmlFor='message' className='form-label'>
              Message
            </label>
            <textarea
              className='form-control'
              name='message'
              rows='4'
              value={contactInfo.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className='col-12'>
            <button type='submit' className='btn btn-primary'>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
