import { Footer } from "../Components/Footer"
import { Navbar } from "../Components/Navbar"


export const About = () => {
  return (
    <>
        <Navbar/>
        <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
        <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We're a team passionate about making reading and learning more accessible and enjoyable for everyone.
        </p>
        </div>
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            At Easy Read, our mission is to empower individuals with access to knowledge by providing high-quality PDFs and intuitive reading tools. We believe learning should be seamless, affordable, and available to all.
          </p>
        </div>
        <div className="rounded-lg bg-blue-100 p-6 shadow-sm text-center">
          <span className="text-6xl">📚</span>
        </div>
      </div>
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md">
            <h3 className="font-semibold mb-2">Accessibility</h3>
            <p>We believe knowledge should be within everyone's reach, regardless of background or location.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md">
            <h3 className="font-semibold mb-2">Innovation</h3>
            <p>We continuously improve our platform to offer the best user experience and functionality.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md">
            <h3 className="font-semibold mb-2">Community</h3>
            <p>We listen, learn, and grow with our users—because their feedback shapes our future.</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Meet the Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-48">
            <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 mb-2" />
            <h4 className="font-medium">Alex</h4>
            <p className="text-sm text-gray-500">Founder</p>
          </div>
          <div className="w-48">
            <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 mb-2" />
            <h4 className="font-medium">Taylor</h4>
            <p className="text-sm text-gray-500">Developer</p>
          </div>
          <div className="w-48">
            <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 mb-2" />
            <h4 className="font-medium">Jordan</h4>
            <p className="text-sm text-gray-500">Designer</p>
          </div>
        </div>
      </div>
      </div>
        <Footer/>
    </>
  )
}
