const CareersSection = () => {
  const positions = [
    {
      title: "Project Manager",
      location: "Kyiv, Ukraine/Warsaw, Poland",
    },
    {
      title: "3D Visualizer / Visualization Artist",
      location: "Worldwide/Remote",
    },
    {
      title: "Interior Designer",
      location: "Kyiv, Ukraine/Warsaw, Poland",
    },
    {
      title: "Interior Finishing Manager",
      location: "Worldwide/Remote",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-black pt-24 pb-16 relative overflow-hidden">
      {/* Top Line - positioned at the very top of the section */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gray-300 hidden md:block mt-16"></div>

      {/* Background Text: Made fainter and removed 3D transform for a flatter look */}
      <div className="absolute inset-0 flex top-12 justify-center pointer-events-none">
        <div
          className="text-[28vw] md:text-[20vw] font-bold text-gray-100/100 select-none whitespace-nowrap"
          style={{
            letterSpacing: "0.1em",
          }}
        >
          CAREER
        </div>
      </div>

      {/* Main content container: Divided into 2 equal columns */}
      <div className="container mx-auto px-6 py-16 relative z-10 h-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Half (empty for visual spacing) */}
        <div className="hidden md:block"></div>

        {/* Right Half: Wrapper to contain all content */}
        <div className="flex flex-col justify-center">
          {/* Section for Heading and Paragraph */}
          <div className="text-left mb-12">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              A big day to
              <br />
              join our team
            </h1>
            <p className="text-base text-gray-500 leading-relaxed max-w-xl">
              YODEZEEN is a great deal. It is a great deal for those who are mad in love with interior projects that are
              always a challenge. A challenge you would never want to skip. The cooperation with our studio is based on
              creative thinking, openness within our team, and never-ending growth.
            </p>
          </div>

          {/* Job Positions Grid: Adjusted gaps for better visual hierarchy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mb-12">
            {positions.map((position, index) => (
              <div key={index} className="text-left">
                <h3 className="text-lg font-semibold mb-1 text-black">{position.title}</h3>
                <p className="text-gray-500 text-sm">{position.location}</p>
              </div>
            ))}
          </div>

          {/* CTA Button Wrapper: Used flexbox for robust left-alignment */}
          <div className="flex justify-start">
            <button className="px-10 py-2 border border-black text-black font-medium hover:bg-black hover:text-white transition-colors duration-300 tracking-widest text-sm">
              LET'S TALK
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line - positioned at the very bottom of the section */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gray-300 hidden md:block mb-16"></div>
    </div>
  )
}

export default CareersSection
