import React from 'react'
import ContactTop from './ContactTop'
import ContactBottom from './ContactBottom'

function ContactMain() {
  return (
    <div className='flex flex-col gap-10'>
        <ContactTop/>
        <ContactBottom/>
    </div>
  )
}

export default ContactMain