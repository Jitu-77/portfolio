import ZigZag from "./ZigZag";
import { FaFutbol, FaYoutube, FaBookOpen } from "react-icons/fa";
import { GiBoxingGlove } from "react-icons/gi";

function Hobbies() {

  const hobbies = [
    {
      icon: <FaFutbol />,
      title: "Football",
      desc: "Playing football and watching EPL & Champions League."
    },
    {
      icon: <GiBoxingGlove />,
      title: "Combat Sports",
      desc: "Following UFC and WWE matches."
    },
    {
      icon: <FaBookOpen />,
      title: "Tech Reading",
      desc: "Reading Medium and DigitalOcean engineering blogs."
    },
    {
      icon: <FaYoutube />,
      title: "YouTube",
      desc: "Watching coding and travel creators."
    }
  ];

  return (
    <section id="hobbies" className="max-w-4xl mx-auto px-10 py-24">

      <h2 className="text-4xl font-bold">Hobbies</h2>

      <ZigZag />

      <p className="mt-4 text-gray-400">
        Outside of coding, I enjoy sports, technology content and exploring new ideas.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-12">

        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="bg-[#16202b]/60 backdrop-blur-md p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition duration-300 hover:scale-[1.02]"
          >
            <div className="text-yellow-400 text-xl mb-3">
              {hobby.icon}
            </div>

            <h3 className="font-semibold text-lg">
              {hobby.title}
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              {hobby.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Hobbies;