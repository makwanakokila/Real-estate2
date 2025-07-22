import React, { useState } from "react";
import { FaStar as StarIcon, FaGlobe as EarthIcon } from "react-icons/fa";

// 👉 TEAM members data
const teamMembers = [
  {
    name: "John Smith",
    role: "Co-founders",
    img: "https://yodezeen.com/wp-content/uploads/2017/11/3-1-773x1024.jpg",
  },
  {
    name: "David Johnson",
    role: "Co-founders",
    img: "https://yodezeen.com/wp-content/uploads/2017/11/UN4B3849-copy-683x1024.jpg",
  },
  {
    name: "Emily Davis",
    role: "Managing Partners",
    img: "https://yodezeen.com/wp-content/uploads/2017/11/DSC01174-copy-684x1024.jpg",
  },
  {
    name: "Sophia Lee",
    role: "Managing Partners",
    img: "https://yodezeen.com/wp-content/uploads/2019/06/3-1.jpg",
  },
];

const awards = [
  {
    year: "2023",
    left: {
      title: "Omniyat Sales Pavilion",
      subtitle: "Winner CGI & Visualization Middle East",
      logo: "/logo1.png",
    },
    right: {
      title: "SBID International Design Awards",
      subtitle: "",
      logo: "/logo2.png",
    },
  },
  {
    left: {
      title: "The International Hotel & Property Design Awards",
      subtitle: "Design Et Al Europe",
      logo: "/logo3.png",
    },
    right: {
      title: "Alfresco Restaurant",
      subtitle: "Winner",
      logo: "/logo4.png",
    },
  },
  {
    left: {
      title: "Native House",
      subtitle: "Finalist",
      logo: "",
    },
    right: {
      title: "SBID International Design Awards",
      subtitle: "",
      logo: "/logo2.png",
    },
  },
  {
    left: {
      title: "SBID International Design Awards",
      subtitle: "",
      logo: "/logo2.png",
    },
    right: {
      title: "Demilune",
      subtitle: "Finalist",
      logo: "",
    },
  },
];
const About = () => {
  const sliderImages = [
    "https://yodezeen.com/wp-content/uploads/2017/11/1-1-2880x1924.jpg",
    "https://yodezeen.com/wp-content/uploads/2017/11/2-2880x1924.jpg",
    "https://yodezeen.com/wp-content/uploads/2017/11/3-2880x1924.jpg",
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const totalSlides = sliderImages.length;

  const goToPrev = () => {
    setCurrentSlideIndex((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentSlideIndex((prev) =>
      prev === totalSlides - 1 ? 0 : prev + 1
    );
  };

  const getDisplaySlideNumber = (index) => {
    return (index + 1).toString().padStart(2, "0");
  };
  const getDisplayTotalSlides = (total) => {
    return total.toString().padStart(2, "0");
  };

  // ✅ Inline SVG icon components
  const HomeIcon = () => (
    <svg
      className="w-8 h-8 text-black"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  );

  const UsersIcon = () => (
    <svg
      className="w-8 h-8 text-black"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M17 20h5v-2a4 4 0 0 0-3-3.87" />
      <path d="M9 20H4v-2a4 4 0 0 1 3-3.87" />
      <path d="M9 4a4 4 0 1 1-4 4 4 4 0 0 1 4-4zm6 0a4 4 0 1 1-4 4 4 4 0 0 1 4-4z" />
    </svg>
  );

  const PencilIcon = () => (
    <svg
      className="w-8 h-8 text-black"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4z" />
    </svg>
  );
  

  return (
    <>
      {/* ======= Section 1 – About ======= */}
      <section className="relative w-full bg-white py-20 px-6 md:px-20 overflow-hidden">
        <h1 className="absolute inset-0 flex justify-center items-center pointer-events-none select-none font-extrabold text-[25vw] md:text-[20vw] text-gray-100 tracking-widest leading-none opacity-40">
          ABOUT
        </h1>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Company <br /> Philosophy
            </h2>
            <p className="text-gray-600 leading-7">
              YODEZEEN's philosophy is a testament to our belief in the
              transformative power of design. We view each project as an
              opportunity to create not just spaces, but experiences that enrich
              lives and inspire emotions. Grounded in a deep understanding of
              human behavior and environmental context, our approach seeks
              harmony between form, function, and emotion. YODEZEEN values the
              art of storytelling through design, crafting narratives that
              resonate with the essence of each space and its inhabitants.
            </p>
          </div>

          <div>
            <p className="text-gray-600 leading-7 mt-12 md:mt-16">
              YODEZEEN's design philosophy revolves around the concept of
              pushing boundaries and redefining norms. We believe in fearlessly
              exploring new ideas and pushing the limits of creativity to create
              spaces that inspire awe and admiration. With a relentless pursuit
              of perfection and a commitment to excellence, YODEZEEN strives to
              exceed expectations with our every project.
            </p>
          </div>
        </div>
      </section>

      {/* ======= Section 2 – Slider Section ======= */}
      <section className="w-full bg-neutral-50 py-16 mt-20">
        <div className="max-w-[1400px] mx-auto px-0 sm:px-0 lg:px-0">
          <div className="relative w-full overflow-hidden mb-8 shadow-xl">
            <img
              src={sliderImages[currentSlideIndex]}
              alt={`Slide ${currentSlideIndex + 1}`}
              className="w-full h-[800px] object-cover"
            />
          </div>

          <div className="flex justify-between items-center py-4 text-gray-700 text-sm font-light uppercase tracking-wide">
            <button
              onClick={goToPrev}
              className="group flex items-center space-x-2 focus:outline-none transition-colors p-2 -ml-2 rounded"
            >
              <span className="block w-8 h-px bg-gray-800 transition-colors"></span>
              <span className="text-black text-lg font-semibold">Previous</span>
            </button>

            <div className="flex items-center space-x-3">
              <span className="text-gray-800 font-bold text-xl">
                {getDisplaySlideNumber(currentSlideIndex)}
              </span>
              <span className="block w-8 h-px bg-gray-400"></span>
              <span className="text-gray-800 font-bold text-xl">
                {getDisplayTotalSlides(totalSlides)}
              </span>
            </div>

            <button
              onClick={goToNext}
              className="group flex items-center space-x-2 focus:outline-none transition-colors p-2 -mr-2 rounded"
            >
              <span className="text-black text-lg font-semibold">Next</span>
              <span className="block w-8 h-px bg-gray-800 transition-colors"></span>
            </button>
          </div>
        </div>
      </section>

      {/* ======= Section 3 – Our Strengths ======= */}
 <section className="relative w-full bg-[#fafafa] py-16 px-4 md:px-12 overflow-hidden">
  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gray-300"></div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    <div className="hidden md:block"></div>

    <div className="relative z-10 text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-black">
        Our Strengths
      </h2>
      <p className="mt-4 text-gray-500 max-w-xl leading-relaxed">
        Combining elements that have never been combined - that is our
        forte and passion.
      </p>
    </div>
  </div>

  <div className="absolute inset-0 flex items-end justify-center pointer-events-none select-none">
    <div className="max-w-6xl mx-auto w-full flex justify-between items-end">
      <span className="text-[15vw] lg:text-[10rem] font-normal text-gray-200 opacity-40">
        7
      </span>
      <span className="text-[15vw] lg:text-[10rem] font-normal text-gray-200 opacity-40">
        2401000
      </span>
    </div>
  </div>

  <div className="relative z-10 mt-16 max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-left">
    <div className="flex flex-col items-start">
      <div className="flex items-center space-x-3 mb-4">
        <HomeIcon />
        <h3 className="text-lg font-bold text-black">
          7 <br />
          <span className="font-semibold">
            Offices globally offering seamless connectivity
          </span>
        </h3>
      </div>
      <p className="mt-3 text-gray-600 leading-relaxed">
        Our offices are practical and functional, even as we integrate
        clever design solutions. Just come to us, and you can replace the
        starkness and boredom of your old interiors with style.
      </p>
    </div>

    <div className="flex flex-col items-start">
      <div className="flex items-center space-x-3 mb-4">
        <UsersIcon />
        <h3 className="text-lg font-bold text-black">
          240 <br />
          <span className="font-semibold">
            Integral Parts of our Company
          </span>
        </h3>
      </div>
      <p className="mt-3 text-gray-600 leading-relaxed">
        The secret is a smoothly working team of disparate people who are
        each endowed with some special talent. Who come together like a
        symphony to create beautiful music.
      </p>
    </div>

    <div className="flex flex-col items-start">
      <div className="flex items-center space-x-3 mb-4">
        <PencilIcon />
        <h3 className="text-lg font-bold text-black">
          1000 <br />
          <span className="font-semibold">Unique Projects Finished</span>
        </h3>
      </div>
      <p className="mt-3 text-gray-600 leading-relaxed">
        We are constantly growing, learning, and improving and our
        partners are steadily increasing. 200 projects is a sizable
        number, but we always strive to be better, more relevant, more
        determined, and more successful than yesterday. We are not going
        to stop.
      </p>
    </div>
  </div>
</section>


      {/* ======= Section 4 – Honors ======= */}

<section className="relative w-full bg-[#fafafa] py-16 px-4 md:px-12 overflow-hidden">
  {/* Optional top center line */}
  {/* <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gray-300"></div> */}

  {/* Heading */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">


  </div>

  {/* Big faint background numbers */}
  <div className="absolute inset-0 flex items-end justify-center pointer-events-none select-none">
    <div className="max-w-6xl mx-auto w-full flex justify-between items-end">
      <span className="text-[15vw] lg:text-[10rem] font-normal text-gray-200 opacity-40">
        60
      </span>
      <span className="text-[15vw] lg:text-[10rem] font-normal text-gray-200 opacity-40">
        33210
      </span>
    </div>
  </div>

  {/* Honors items */}
  <div className="relative z-10 mt-16 max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-left">
    {/* 60 Achievements */}
    <div className="flex flex-col items-start">
      <div className="flex items-center space-x-3 mb-4">
        <StarIcon className="w-8 h-8 text-black" />
        <h3 className="text-lg font-bold text-black">
          60 <br />
          <span className="font-semibold">Achievements</span>
        </h3>
      </div>
      <p className="mt-3 text-gray-600 leading-relaxed">
        We are proud recipients of over sixty industry awards and recognitions,
        reflecting our dedication and hard work.
      </p>
    </div>

    {/* 33 Countries */}
    <div className="flex flex-col items-start">
      <div className="flex items-center space-x-3 mb-4">
        <EarthIcon className="w-8 h-8 text-black" />
        <h3 className="text-lg font-bold text-black">
          33 <br />
          <span className="font-semibold">Countries Worldwide</span>
        </h3>
      </div>
      <p className="mt-3 text-gray-600 leading-relaxed">
        Our presence spans across thirty-three countries, delivering
        innovation and excellence beyond borders.
      </p>
    </div>

    {/* 210 Projects in Progress */}
    <div className="flex flex-col items-start">
      <div className="flex items-center space-x-3 mb-4">
        <PencilIcon />
        <h3 className="text-lg font-bold text-black">
          210 <br />
          <span className="font-semibold">Projects in Progress</span>
        </h3>
      </div>
      <p className="mt-3 text-gray-600 leading-relaxed">
        With over two hundred active projects, our portfolio continues to grow
        and inspire with every endeavor.
      </p>
    </div>
  </div>
</section>



 {/* ======= ✅ Section 5 – TEAM ======= */}
<section className="relative w-full bg-[#1a1a1a] pt-16 pb-24 px-4 md:px-12 overflow-hidden">
  {/* Center line */}
  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gray-700"></div>

  {/* Background TEAM text */}
  <div className="relative z-0 max-w-4xl mx-auto flex justify-center items-center h-32 md:h-48 mt-12 md:mt-16">
    <h1 className="absolute text-[15vw] md:text-[10vw] text-gray-800 leading-none opacity-20 whitespace-nowrap font-bold tracking-[1.5vw]">
      TEAM
    </h1>
  </div>

  {/* Images + labels - all aligned left with no gaps */}
  <div className="relative z-10 max-w-7xl mx-auto mt-20 flex items-center justify-start overflow-hidden">

    {/* Co-founders Label Box */}
    <div className="w-[180px] h-[220px] bg-[#2c2c2c] flex items-center justify-center text-white text-sm md:text-base font-semibold text-center">
      Co-founders
    </div>

    {/* Co-founder Images */}
    {teamMembers.slice(0, 2).map((member, index) => (
      <div key={index} className="relative w-[180px] h-[220px] overflow-hidden group">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {member.name}
        </div>
      </div>
    ))}

    {/* Managing Partners Label Box */}
    <div className="w-[180px] h-[220px] bg-[#2c2c2c] flex items-center justify-center text-white text-sm md:text-base font-semibold text-center">
      Managing Partners
    </div>

    {/* Managing Partner Images */}
    {teamMembers.slice(2, 4).map((member, index) => (
      <div key={index + 2} className="relative w-[180px] h-[220px] overflow-hidden group">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {member.name}
        </div>
      </div>
    ))}
  </div>
</section>


 {/* ======= ✅ Section  6– TEAM ======= */}
  <section className="relative w-full bg-white pt-24 pb-32 px-4 md:px-12 overflow-hidden">
    {/* Vertical Line - Starts slightly below top */}
  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gray-700"></div>

  {/* Big background AWARDS text (centered) */}
  <div className="absolute inset-0 flex justify-center items-start pointer-events-none z-0 pt-16">
    <h1 className="text-[16vw] md:text-[10vw] font-extrabold text-black opacity-5 tracking-[2vw] select-none whitespace-nowrap">
      AWARDS
    </h1>
  </div>

  {/* Foreground Text - aligned to left of vertical center line */}
  <div className="relative z-10 mt-16 mb-24 pr-4 md:pr-12 flex justify-center">
    <div className="w-1/2 text-right md:mr-8">
      <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">
        Our awards
      </h2>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
        How can there be no awards, when such a creative team<br />
        oversees the market?
      </p>
    </div>
  </div>

  {/* Timeline content */}
   <div className="relative">
  {/* Full-height vertical center line */}
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gray-300 z-0" />

  {/* Timeline entries */}
  <div className="relative z-10 space-y-20">
    {awards.map((item, i) => (
      <div key={i} className="flex items-start justify-between relative">
        {/* Left Side */}
        <div className="w-[45%] text-right pr-8">
          {item.left && (
            <div className="inline-block max-w-xs ml-auto">
              {item.left.logo && (
                <img
                  src={item.left.logo}
                  alt="logo"
                  className="w-12 h-auto mb-2 mx-auto md:ml-auto md:mr-0"
                />
              )}
              <h3 className="font-semibold text-sm md:text-base">{item.left.title}</h3>
              <p className="text-gray-500 text-xs md:text-sm">{item.left.subtitle}</p>
            </div>
          )}
        </div>

        {/* Dot (on center line) */}
        <div className="relative z-10">
          <div className="w-4 h-4 rounded-full bg-white border-2 border-gray-400 hover:border-black transition duration-200" />
        </div>

        {/* Right Side */}
        <div className="w-[45%] text-left pl-8">
          {item.right && (
            <div className="inline-block max-w-xs">
              {item.right.logo && (
                <img
                  src={item.right.logo}
                  alt="logo"
                  className="w-12 h-auto mb-2 mx-auto md:mr-auto"
                />
              )}
              <h3 className="font-semibold text-sm md:text-base">{item.right.title}</h3>
              <p className="text-gray-500 text-xs md:text-sm">{item.right.subtitle}</p>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</div>

    
    </section>







    </>
  );
};

export default About;
