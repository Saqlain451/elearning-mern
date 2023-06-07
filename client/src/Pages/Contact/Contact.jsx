import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./contact.css"
import { useGloblaHook } from '../../Hooks/Context';

function ContactForm() {
  const {titleChange} = useGloblaHook()
  titleChange("Contact")
  const [state, handleSubmit] = useForm("mqkovegg");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div className='bg-light contact'>
      
      <form onSubmit={handleSubmit}>
      <h5 className='fs-3 text-center'>Contact Us</h5> 
      <label htmlFor="fname">First Name</label>
      <input
        id="text"
        type="text" 
        name="First name"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="fname">Last Name</label>
      <input
        id="text"
        type="text" 
        name="Last name"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="msg">Message</label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  );
}
export default ContactForm;
