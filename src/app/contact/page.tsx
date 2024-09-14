export default function Contact() {
    return (
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-100">Contact Me</h1>
        <form action="https://formsubmit.co/contact@natesworks.com" method="POST" className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-600"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gray-700 text-gray-100 px-4 py-2 rounded-md hover:bg-gray-600 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    )
  }