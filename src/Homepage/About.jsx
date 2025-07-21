const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-black pb-2  relative overflow-hidden">
      {/* 3D Background Text */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none container pt-28 ">
        <div className="text-[16vw] ml-16 font-bold text-gray-200 select-none whitespace-nowrap tracking-[0.5em]">
          ABOUT
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto  pl-24 pr-24">
          {/* --- YAHAN LINE ADD KI GAYI HAI --- */}
          <div className="w-px h-24 bg-gray-300 mx-auto mb-16 mb-24"></div>
          {/* ---------------------------------- */}

          {/* Main Heading */}
          <div className="text-start mb-16">
            <h1 className="text-xl md:text-3xl lg:text-3xl font-bold leading-tight">
              We design
              <br />
              every project
              <br />
              as a one-off
            </h1>
          </div>

          {/* Two Column Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            {/* Left Column */}
            <div>
              <p className="text-md text-gray-600 leading-relaxed">
                YODEZEEN is a multi-award-winning architectural and design
                studio operating in the field of interior design and
                architecture. Artur Sharf and Artem Zverev established the
                studio in 2010 in their desire to create a knowledge-based
                approach in design and architecture. With almost 100 employees,
                offices in Kyiv, Miami, and Los Angeles, YODEZEEN has become the
                rising contemporary star in design and architecture.
              </p>
            </div>

            {/* Right Column */}
            <div>
              <p className="text-md text-gray-600 leading-relaxed">
                The studio is distinguished by its high-end design,
                international expertise, and local capability and works across
                various typologies, including residential, commercial, and
                hospitality projects. The studio offers tailor-made solutions
                for every project that has a unique identity according to its
                context. Understanding the scope and the projects' ambitions and
                listening to clients, users, and contractors help us create
                well-conceived design solutions.
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="text-start">
            <button className="px-8 py-3 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-colors duration-300">
              DISCOVER MORE
            </button>
          </div>
        </div>
        {/* --- YAHAN LINE ADD KI GAYI HAI --- */}
        <div className="w-px h-24 bg-gray-300 mx-auto mt-16 "></div>
      </div>
    </div>
  );
};

export default About;
