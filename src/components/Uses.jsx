import ZigZag from "./ZigZag";

function Uses() {
  return (
    <section id="uses" className="max-w-4xl mx-auto px-8 py-24">

      <h2 className="text-4xl font-bold">
        Uses
      </h2>

      <p className="mt-4 text-gray-400">
        The tools and gadgets I use on a daily basis.
      </p>

      <ZigZag />

      <div className="mt-12 grid md:grid-cols-2 gap-6">

        {/* Hardware */}

        {/* <div className="bg-[#16202b] p-6 rounded-lg"> */}
        <div className="bg-[#16202b]/60 backdrop-blur-md p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition duration-300 hover:scale-[1.02]">
          <h3 className="text-xl font-semibold mb-4">Hardware</h3>

          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Laptop — MacBook Pro</li>
            <li>Monitor — Dell Ultrasharp</li>
            <li>Headphones — Sony WH1000XM4</li>
            <li>Mouse — Logitech MX Master</li>
          </ul>
        </div>

        {/* Workspace */}

        <div className="bg-[#16202b] p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Workspace</h3>

          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Chair — Ergonomic Office Chair</li>
            <li>Standing Desk</li>
            <li>Desk Pad</li>
            <li>Monitor Light</li>
          </ul>
        </div>

        {/* Dev Tools */}

        <div className="bg-[#16202b] p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Dev Tools</h3>

          <ul className="space-y-2 text-gray-400 text-sm">
            <li>IDE — VS Code</li>
            <li>Terminal — Warp</li>
            <li>Shell — Zsh</li>
            <li>Browser — Chrome</li>
            <li>Design — Figma</li>
          </ul>
        </div>

        {/* Productivity */}

        <div className="bg-[#16202b] p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Productivity</h3>

          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Notes — Notion</li>
            <li>Tasks — Notion</li>
            <li>Todo — Microsoft To Do</li>
            <li>Time Tracking — Flow</li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default Uses;