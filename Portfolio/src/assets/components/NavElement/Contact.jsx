export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-zinc-900 text-white flex items-center justify-center px-6"
    >
      <div className="w-full max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-3">
          Contact Me
        </h2>

        <p className="text-center text-gray-400 mb-10">
          Have a project or just want to say hi? Let's connect.
        </p>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-zinc-800 outline-none border border-zinc-700 focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-zinc-800 outline-none border border-zinc-700 focus:border-blue-500"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 rounded-xl bg-zinc-800 outline-none border border-zinc-700 focus:border-blue-500 resize-none"
          ></textarea>

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 duration-300 py-4 rounded-xl font-semibold"
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://github.com/Anoopraja"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/anoop-kumar-21b462368/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>

          <a
            href="mailto:anooprajapati807@gmail.com"
            className="hover:text-blue-400"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}