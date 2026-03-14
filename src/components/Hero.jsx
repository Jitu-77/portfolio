// export default Hero;

import ZigZag from "./ZigZag";
import { FaGithub, FaLinkedin, FaReddit } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";
function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-8 py-8">
      <h1 className="text-5xl font-bold leading-tight">
        Hey, I'm <span className="text-yellow-400">Jyotirmoy Pal</span>
      </h1>

      <p className="mt-6 text-gray-400 text-lg leading-relaxed">
        Full-Stack Developer with 7+ years of experience building scalable web
        applications using <span className="text-white font-medium"> Angular, React, Node.js, and Java Spring Boot, along
        with cross-platform solutions for web, desktop (.exe), Android, and iOS
        using Ionic.</span>
      </p>

      <p className="mt-4 text-gray-400">
        Currently serving as a{" "}
        <span className="text-white font-medium">
          Senior Associate Consultant at Infosys
        </span>
        , focusing on <span className="text-white font-medium">Telecom product development</span>  and designing modular frontend
        architectures for large-scale applications.
      </p>

      <p className="mt-4 text-gray-400">
        I hold a{" "}
        <span className="text-white font-medium">
          B.Tech in Electrical and Electronics Engineering
        </span>{" "}
        from Sikkim Manipal Institute of Technology, which shaped my strong
        analytical and engineering mindset.
      </p>

      <ZigZag />

      {/* Social Links */}

      {/* Contact */}

      <div className="mt-10 space-y-6">
        {/* Social Links */}
        <div>
          <h3 className="text-gray-400 mb-3">Contact</h3>

          <div className="flex flex-col gap-3">
            <a
              href="mailto:jyotirmoypal077@gmail.com"
              className="flex items-center gap-3 text-yellow-400 hover:text-yellow-300 transition"
            >
              <FiMail size={18} />
              jyotirmoypal077@gmail.com
            </a>

            <a
              href="tel:+918527426845"
              className="flex items-center gap-3 text-yellow-400 hover:text-yellow-300 transition"
            >
              <FiPhone size={18} />
              +91 85274 26845
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
        </div>
      </div>
    </section>
  );
}

export default Hero;
