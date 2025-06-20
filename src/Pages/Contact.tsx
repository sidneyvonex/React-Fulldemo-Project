
import Container from '../Components/Container'
import { Footer } from '../Components/Footer'
import { Navbar } from '../Components/Navbar'

export const Contact = () => {
  return (
    <>
    <Container className="bg-gradient-to-br from-blue-100 via-white to-pink-100 flex flex-col gap-6">
        <Navbar/>
        <div className="min-h-screen bg-white p-6 text-gray-800">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Get in Touch</h1>
        <p className="text-gray-600">We'd love to hear from you. Fill out the form or reach us directly.</p>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
            <p className="text-gray-600">Feel free to reach out via email or phone during our business hours.</p>
          </div>
          <div className="text-sm space-y-3">
            <p><span className="font-medium">Email:</span> support@easyread.com</p>
            <p><span className="font-medium">Phone:</span> +254 712 345 678</p>
            <p><span className="font-medium">Address:</span> Nairobi, Kenya</p>
            <p><span className="font-medium">Hours:</span> Mon – Fri, 9am – 5pm</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6 bg-gray-50 p-6 rounded-lg shadow">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input type="text" placeholder="Your name" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" placeholder="you@example.com" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea rows={5} placeholder="Your message..." className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">Send Message</button>
        </form>
      </div>
    </div>
        <Footer/>
        </Container>
    </>
  )
}
