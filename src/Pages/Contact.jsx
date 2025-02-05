import React, { useEffect } from 'react'
import ContactUs from '../components/ContactUs/ContactUs'

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ContactUs/>
    </div>
  )
}

export default Contact