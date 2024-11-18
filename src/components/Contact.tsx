const Contact = () => {
    return (
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Contact Me</h2>
          <form
            action="https://formspree.io/f/{your-id}" /* Replace with Formspree endpoint */ 
            method="POST"
            className="max-w-xl mx-auto"
          >
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full mb-4 px-4 py-2 bg-gray-800 text-white rounded-md"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              required
              className="w-full mb-4 px-4 py-2 bg-gray-800 text-white rounded-md"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;  