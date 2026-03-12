import ZigZag from "./ZigZag";
import { FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";

function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-8 py-24">
      <h2 className="text-4xl font-bold">Get in touch</h2>

      <p className="mt-4 text-gray-400">
        Do you have an exciting project? Let's talk!
      </p>

      <ZigZag />

      <div className="mt-10 space-y-6">
        <p className="text-gray-400">You can reach me anytime through:</p>

        <div className="flex flex-col gap-4">
          <a
            href="mailto:jyotirmoypal077@gmail.com"
            className="flex items-center gap-3 text-yellow-400 hover:text-yellow-300 transition"
          >
            <FiMail size={18} />
            jyotirmoypal077@gmail.com
          </a>

          <a
            href="tel:+919876543210"
            className="flex items-center gap-3 text-yellow-400 hover:text-yellow-300 transition"
          >
            <FiPhone size={18} />
            +91 8527426845
          </a>

          <a
            href="https://github.com/Jitu-77"
            target="_blank"
            className="flex items-center gap-3 text-yellow-400 hover:text-yellow-300 transition"
          >
            <FiGithub size={18} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jyotirmoy-pal-27bbb21b0/"
            target="_blank"
            className="flex items-center gap-3 text-yellow-400 hover:text-yellow-300 transition"
          >
            <FiLinkedin size={18} />
            LinkedIn
          </a>
        </div>

        <p className="text-gray-400">
          I usually respond within one business day.
        </p>
      </div>
    </section>
  );
}

export default Contact;
