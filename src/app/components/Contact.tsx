import { FaEnvelope, FaGlobe } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-16 px-6 bg-gradient-to-b from-[#0a0f1a] to-[#111827] text-white"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-neonCyan to-neonPink text-transparent bg-clip-text">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-400 mt-2">
          Ready to transform your business with AI?
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-5xl mx-auto gap-10">
        <div className="w-full lg:w-1/3 text-center lg:text-left space-y-4">
          <h3 className="text-2xl font-bold">Contact Information</h3>
          <p className="flex items-center gap-2 text-neonPink">
            {" "}
            <FaEnvelope /> contact@agentiaworld.com
          </p>
          <p className="flex items-center gap-2 text-neonCyan">
            <FaGlobe />
            www.agentiaworld.com
          </p>
        </div>

        <div className="w-full lg:w-2/3 bg-[#1a2235] p-6 rounded-lg shadow-lg border border-neonCyan">
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full md:w-1/2 bg-[#111827] p-3 rounded-lg text-white outline-none border border-gray-700 focus:border-neonCyan transition-all"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full md:w-1/2 bg-[#111827] p-3 rounded-lg text-white outline-none border border-gray-700 focus:border-neonCyan transition-all"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#111827] p-3 rounded-lg text-white outline-none border border-gray-700 focus:border-neonCyan transition-all"
            />

            <textarea
              placeholder="Your Message"
              className="w-full bg-[#111827] p-3 rounded-lg text-white outline-none border border-gray-700 focus:border-neonCyan transition-all h-32"
            ></textarea>

            <button className="w-full bg-gradient-to-r from-neonPurple to-neonCyan py-3 rounded-lg text-white font-bold hover:opacity-80 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
