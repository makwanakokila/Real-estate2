export default function FooterSection() {
  return (
    // Section को min-h-screen रखा है ताकि यह पूरी स्क्रीन भरे
    <section className="bg-[#1c1c1c] min-h-screen flex items-center justify-center px-16 py-24 relative overflow-hidden">
      {/* Background World Map Image */}
      {/* Change: Added a div for the background image. Replace the src with your actual image path. */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: "url('/path/to/your/world-map-image.png')" }}
      ></div>

      {/* Office Locations Container */}
      <div className="w-full max-w-7xl h-full relative">
        {/* --- All office locations have been re-positioned to match the screenshot --- */}

        {/* Los Angeles - bottom-left of the cluster */}
        <div className="absolute bottom-[28%] left-[8%]">
          <div className="flex items-start gap-3">
            {/* Change: Dot is now a filled circle */}
            <div className="w-3 h-3 rounded-full bg-gray-300 mt-1.5"></div>
            <div>
              {/* Change: Font size and weight adjusted */}
              <h3 className="text-white text-lg font-semibold mb-2">Los Angeles</h3>
              {/* Change: Text color is now lighter gray */}
              <p className="text-gray-400 text-sm">+1 917 400 0230</p>
              <p className="text-gray-400 text-sm">24151 Ventura blvd unit 370</p>
              <p className="text-gray-400 text-sm">Calabasas, CA 91302</p>
            </div>
          </div>
        </div>

        {/* Miami - right of Los Angeles */}
        <div className="absolute bottom-[20%] left-[25%]">
          <div className="flex items-start gap-3">
            <div className="w-3 h-3 rounded-full bg-gray-300 mt-1.5"></div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-2">Miami</h3>
              <p className="text-gray-400 text-sm">+1 305 213 1321</p>
              <p className="text-gray-400 text-sm">25 NW 34th st</p>
              <p className="text-gray-400 text-sm">Miami, FL 33127</p>
            </div>
          </div>
        </div>

        {/* London - Top-center of the cluster */}
        <div className="absolute bottom-[55%] left-[50%]">
          <div className="flex items-start gap-3">
            <div className="w-3 h-3 rounded-full bg-gray-300 mt-1.5"></div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-2">London</h3>
              <p className="text-gray-400 text-sm">70 Brompton Road, SW3 1ER</p>
            </div>
          </div>
        </div>

        {/* Warsaw - right of London */}
        <div className="absolute bottom-[40%] left-[60%]">
          <div className="flex items-start gap-3">
            <div className="w-3 h-3 rounded-full bg-gray-300 mt-1.5"></div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-2">Warsaw</h3>
              <p className="text-gray-400 text-sm">2 Franciszka Nullo st 3rd floor, +38 068 000 0670</p>
              <p className="text-gray-400 text-sm">00-486 Warsaw, Poland</p>
            </div>
          </div>
        </div>

        {/* Kyiv - right of Warsaw */}
        <div className="absolute bottom-[50%] left-[80%]">
          <div className="flex items-start gap-3">
            <div className="w-3 h-3 rounded-full bg-gray-300 mt-1.5"></div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-2">Kyiv</h3>
              <p className="text-gray-400 text-sm">4 Lypynskoho st</p>
              <p className="text-gray-400 text-sm">office 15-16</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Content */}
      <div className="absolute bottom-8 left-16 right-16 flex justify-between items-end">
        {/* Left Side - Legal Links and Copyright */}
        <div>
          <div className="flex gap-8 mb-4">
            {/* Change: Text color updated */}
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
              Privacy Notice
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
              Terms of use
            </a>
          </div>
          <div className="max-w-md">
            {/* Change: Removed <br /> tags for natural text wrapping and updated text color */}
            <p className="text-gray-500 text-xs leading-relaxed mb-2">
              Please, be informed, that the intellectual property rights to all the photos, designs and other materials on this Site belong to "YODEZEEN GROUP" LLC. You may request permission to use them by contacting us at: privacy@yodezeen.com
            </p>
            <p className="text-gray-500 text-xs">COPYRIGHT 2018. ALL RIGHTS RESERVED</p>
          </div>
        </div>

        {/* Right Side - Developer Credit */}
        <div className="text-right">
          <p className="text-gray-500 text-xs mb-1">DEVELOPED BY</p>
          <p className="text-white text-sm font-medium">
            the first
            <br />
            the last.
          </p>
        </div>
      </div>
       {/* --- FIXED RIGHT SIDE ELEMENT --- */}
      {/* 
        Changed 'absolute' to 'fixed' to make it stick to the viewport on scroll.
      */}
      <div
        className="fixed right-0 bottom-0 bg-black px-2 py-5 flex flex-col items-center"
      >
        <div className="text-white text-2xl font-bold mb-8">W.</div>
        <div
          className="text-[#6e6e6e] text-xs tracking-widest"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
          }}
        >
          Honors
        </div>
      </div>
    </section>
  );
}
