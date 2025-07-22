export default function ContactSection() {
  return (
    <section className="bg-[#1A1A1A] min-h-screen flex items-center pl-56 py-24 relative overflow-hidden">
      
        {/* Top Line - positioned at the very top of the section */}
      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-px h-24 bg-white hidden md:block mt-16"></div>

      
      
      {/* Left side content (No changes here) */}


      <div className="max-w-6xl w-full">
        <h1 className="text-6xl font-bold text-white leading-tight mb-28">
          Get in touch
          <br />
          with us
        </h1>

        <div className="flex items-start gap-24 mb-24">
          <div className="text-left">
            <p className="text-[#6e6e6e] text-sm mb-2">General Inquiries:</p>
            <a
              href="mailto:info@yodezeen.com"
              className="text-white text-lg font-medium"
            >
              info@yodezeen.com
            </a>
          </div>

          <div className="text-left">
            <p className="text-[#6e6e6e] text-sm mb-2">PR&Collaborations:</p>
            <a
              href="mailto:pr@yodezeen.com"
              className="text-white text-lg font-medium"
            >
              pr@yodezeen.com
            </a>
          </div>

          <div className="text-left">
            <p className="text-[#6e6e6e] text-sm mb-2">Careers:</p>
            <a
              href="mailto:hr@yodezeen.com"
              className="text-white text-lg font-medium"
            >
              hr@yodezeen.com
            </a>
          </div>
        </div>

        <p className="text-[#6e6e6e] text-lg leading-loose mb-16 max-w-2xl">
          We are ready to lead you into the exciting world of
          <br />
          architecture and interior design.
        </p>

        <button className="uppercase border border-[#555555] text-white px-12 py-3 text-sm tracking-[0.15em] hover:bg-white hover:text-[#1c1c1c] transition-all duration-300">
          SEND REQUEST
        </button>
      </div>

     
    </section>
  );
}
