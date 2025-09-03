import Image from "next/image";
import { Send } from "lucide-react"; 
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div>
      <Navbar />
    <main className="w-full min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] w-full flex items-center justify-center">
        <Image
          src="/images/contact.png" // <-- replace with your bg image
          alt="Contact Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold text-white text-center">
          CONTACT US
        </h1>
      </section>

      {/* Intro text + image */}
     {/* Intro text + image */}
<section className="px-6 md:px-16 py-16 flex flex-col md:flex-row items-center gap-10">
  {/* Text */}
  <div className="flex-1 text-center md:text-left">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
      Let’s Connect
    </h2>
    <p className="text-gray-700 leading-relaxed">
      We’re here to answer your questions, discuss opportunities, or just
      have a chat. Whether it’s a general enquiry or a collaboration
      request, feel free to reach out — our team will get back to you as
      soon as possible.
    </p>
  </div>

  {/* Image */}
  <div className="flex-1 w-full">
    <Image
      src="/images/contacts.png" // <-- replace with your image
      alt="Team discussion"
      width={600}
      height={400}
      className="rounded-2xl shadow-lg w-full h-auto object-cover"
    />
  </div>
</section>

      {/* Map */}
      <section className="px-6 md:px-16 pb-16">
        <div className="rounded-2xl overflow-hidden shadow-lg h-[300px] md:h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.8845151469!2d3.379205415318525!3d6.524379525191343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8a67b1d3f3f%3A0x7a83f9e51d4b0e3a!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1682010234567"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Contact Form with gradient background */}
      <section className="px-6 md:px-16 pb-24">
        <div className="relative max-w-3xl mx-auto rounded-2xl shadow-xl overflow-hidden">
          {/* Beam / Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_50%)]" />

          {/* Form Content */}
          <div className="relative p-8 md:p-12 z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-gray-300 focus:border-white focus:ring-white px-4 py-3 text-gray-900 shadow-sm"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-300 focus:border-white focus:ring-white px-4 py-3 text-gray-900 shadow-sm"
                  required
                />
              </div>

              {/* Select */}
              <div>
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Enquiry Type
                </label>
                <select
                  id="type"
                  className="w-full rounded-xl border border-gray-300 focus:border-white focus:ring-white px-4 py-3 text-gray-900 shadow-sm"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="general">General Enquiry</option>
                  <option value="collaboration">Collaboration Request</option>
                </select>
              </div>

              {/* Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full rounded-xl border border-gray-300 focus:border-white focus:ring-white px-4 py-3 text-gray-900 shadow-sm"
                  required
                ></textarea>
              </div>

              {/* Button with icon */}
              <button
                type="submit"
                className="w-full md:w-auto flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-emerald-700 shadow-md hover:bg-gray-100 active:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-white"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>

    <Footer />
    </div>
  );
}
