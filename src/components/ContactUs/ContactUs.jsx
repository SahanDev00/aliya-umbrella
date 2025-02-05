import React from 'react'

const ContactUs = () => {
  return (
    <div className='w-full min-h-screen bg-white pt-24'>
        <h1 className='pt-10 text-4xl text-center uppercase font-medium font-roboto'>Meet Us At</h1>
        <div className='flex justify-center mt-5'>
          <iframe title='map'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4908.775110656326!2d80.3503746!3d7.480163099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae33a5a1e331adf%3A0x8b5abdc9f7edc5c4!2sExesmart%20Dynamics%20(Pvt)%20Ltd!5e1!3m2!1sen!2slk!4v1738735868604!5m2!1sen!2slk" 
            width="1850" 
            height="600" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Form */}
        <h1 className='pt-10 text-4xl text-center uppercase font-medium font-roboto'>Get in Touch With Us</h1>
        <div className="flex justify-center mt-2 pb-10">
            <form className="w-full max-w-2xl p-6 rounded-lg">
                <div className="mb-4">
                    <label className="block text-black text-lg font-medium">Full Name</label>
                    <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-3 mt-2 border border-fourth rounded-md focus:outline-none focus:border-primary"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-black text-lg font-medium">Email</label>
                    <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 mt-2 border border-fourth rounded-md focus:outline-none focus:border-primary"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-black text-lg font-medium">Phone Number</label>
                    <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full p-3 mt-2 border border-fourth rounded-md focus:outline-none focus:border-primary"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-black text-lg font-medium">Message</label>
                    <textarea
                    rows="4"
                    placeholder="Write your message here..."
                    className="w-full p-3 mt-2 border border-fourth rounded-md focus:outline-none focus:border-primary"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-fourth text-white p-3 text-lg font-medium rounded-md hover:bg-amber transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    </div>
  )
}

export default ContactUs
