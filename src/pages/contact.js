import React from 'react'

import Layout from '../layouts/index'
import './contact.sass'


const Contact = ({data}) => {
  const emailSubmissionUrl = "https://getform.io/f/f20ea056-5c5f-4e28-876f-90701e783703"
  
  return (
    <Layout>
      <form method='post' action={emailSubmissionUrl}>
        <label>
          <p>Name</p>
          <input type="text" name="name" id="name" />
        </label>
        <label>
          <p>Email</p>
          <input type="text" name="email" id="email" />
        </label>
        <label>
          <p>Subject</p>
          <input type="text" name="subject" id="subject" />
        </label>
        <label>
          <p>Message</p>
          <textarea name="message" id="message" rows="5" />
        </label>
        <div className='bottom-buttons'>
          <input type='reset' value='Clear' />
          <button type='submit'>Send</button>
        </div>
      </form>
    </Layout>
  )
}

export default Contact