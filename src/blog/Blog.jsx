import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Adani Realty: Redefining Urban Luxury in Ahmedabad',
    image: 'https://www.adanirealty.com/-/media/project/realty/commercial/ahmedabad/inspire-corporate-capital/outdoor/copy-of-cam_01-1920x1080_.ashx', // Modern luxury high-rise
    description: 'Adani Realty is renowned for its iconic projects like Shantigram, the largest integrated township in Gujarat. With sprawling green spaces, world-class amenities, and contemporary architecture, Adani sets the benchmark for luxury living in Ahmedabad. Their developments offer a blend of comfort, security, and a vibrant community lifestyle.',
    link: '#',
  },
  {
    id: 2,
    title: 'Shivalik: Timeless Residences for Modern Families',
    image: 'https://i.ytimg.com/vi/Hu0G9cOdLJY/maxresdefault.jpg', // Modern apartment complex
    description: 'Shivalik Group is known for its premium residential projects such as Shivalik Shilp and Shivalik Edge, which combine modern design with thoughtful amenities. Their homes are crafted for families seeking both elegance and practicality, with a focus on quality construction and prime locations across Ahmedabad.',
    link: '#',
  },
  {
    id: 3,
    title: 'Godrej Garden City: Green Living in the City',
    image: 'https://oss-brigade.s3.ap-southeast-1.amazonaws.com/property/godrej-garden-city/banner__01e6de50-d969-4e68-a7c4-68ba8f10cd71.webp', // Green township, real estate
    description: 'Godrej Garden City is a landmark township in Ahmedabad, offering over 40 acres of greenery and sustainable living. Residents enjoy eco-friendly homes, landscaped gardens, and a host of lifestyle amenities. Godrej’s commitment to sustainability and community living makes it a top choice for urban families.',
    link: '#',
  },
  {
    id: 4,
    title: 'Pacifica Companies: International Standards, Local Expertise',
    image: 'https://www.pacificarealestate.com/wp-content/uploads/2018/09/3_Agoura-2-1.jpg', // Modern residential towers
    description: 'Pacifica Companies brings global expertise to Ahmedabad with projects like Reflections and Green Acres. Their developments feature innovative architecture, luxury amenities, and a focus on sustainability. Pacifica’s blend of international standards and local insight delivers exceptional value to homebuyers.',
    link: '#',
  },
  {
    id: 5,
    title: 'Bakeri Group: Heritage Meets Modernity',
    image: 'https://www.bakeri.com/wp-content/uploads/2022/04/1q-1024x576.jpg', // Heritage-inspired, real estate
    description: 'Bakeri Group, with a legacy of over 60 years, is celebrated for projects like Bakeri City and Serenity Pastures. Their homes reflect Ahmedabad’s rich heritage while embracing modern comforts. Bakeri’s attention to detail and commitment to quality have earned them the trust of generations.',
    link: '#',
  },
  {
    id: 6,
    title: 'Goyal & Co.: Crafting Iconic Skylines',
    image: 'https://goyalco.com/wp-content/uploads/2020/10/our-legacy.jpg', // Iconic high-rise, real estate
    description: 'Goyal & Co. is behind some of Ahmedabad’s most recognizable residential and commercial landmarks, including Orchid Whitefield and Riviera Elite. Their projects are known for innovative design, prime locations, and a focus on lifestyle amenities that cater to urban professionals and families alike.',
    link: '#',
  },
  {
    id: 7,
    title: 'Sun Builders: Sustainable Luxury Living',
    image: 'https://vital-space-media.s3.ap-south-1.amazonaws.com/project_gallery/webthumb/projectGallery-194365-11-03-2024.webp', // Modern residential, eco-friendly
    description: 'Sun Builders is a pioneer in sustainable luxury, with projects like Sun South Winds and Sun Prima. Their developments feature energy-efficient designs, green spaces, and modern amenities, offering a holistic lifestyle for environmentally conscious buyers in Ahmedabad.',
    link: '#',
  },
  {
    id: 8,
    title: 'Arvind SmartSpaces: Smart Homes for a Smart City',
    image: 'https://www.arvindsmartspaces.com/wp-content/uploads/2023/09/04.jpg', // Smart, modern real estate
    description: 'Arvind SmartSpaces leads the way in intelligent living with projects like Uplands and Arvind Citadel. Their smart homes integrate cutting-edge technology, security, and sustainable practices, creating future-ready communities for Ahmedabad’s new generation.',
    link: '#',
  },
];

export default function Blog() {
  // State for the currently selected main post (default: first post)
  const [selectedPostIndex, setSelectedPostIndex] = useState(0);
  const mainPost = blogPosts[selectedPostIndex];
  // Only show posts that are NOT the currently selected one in Recent Posts
  const recentPosts = blogPosts.filter((_, idx) => idx !== selectedPostIndex);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-20">
      {/* Page Heading */}
      <div className="w-full max-w-5xl mx-auto pt-12 pb-6 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-2 text-left">Calm Real Estate Blog</h1>
        <p className="text-base md:text-lg text-gray-600 text-left max-w-2xl">Gentle insights, peaceful homes, and soft advice for buyers, sellers, and families seeking comfort in every corner.</p>
      </div>
      {/* Main Blog Section as Slider */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 px-4 py-10">
        {/* Left Column: Main Post */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col transition-all duration-300">
            <img src={mainPost.image} alt={mainPost.title} className="w-full h-64 object-cover filter grayscale hover:grayscale-0 transition duration-300" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-black mb-2">{mainPost.title}</h2>
              <p className="text-gray-700 text-base mb-4">{mainPost.description}</p>
              {/* <a href={mainPost.link} className="inline-block text-sm font-semibold text-black border border-black rounded px-5 py-2 hover:bg-black hover:text-white transition-colors">Read More</a> */}
            </div>
          </div>
        </div>
        {/* Right Column: Recent Posts as Thumbnails */}
        <div className="w-full md:w-80 flex flex-col gap-6 mt-8 md:mt-0">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
            <h4 className="text-black font-bold mb-4 text-base tracking-wide">Recent Posts</h4>
            {recentPosts.map((post) => {
              const idx = blogPosts.findIndex((b) => b.id === post.id);
              return (
                <button
                  key={post.id}
                  onClick={() => setSelectedPostIndex(idx)}
                  className={`flex gap-3 items-center mb-4 last:mb-0 w-full text-left rounded transition-all duration-200 hover:bg-gray-50`}
                  style={{ outline: 'none' }}
                >
                  <img src={post.image} alt={post.title} className={`w-12 h-12 rounded object-cover filter grayscale transition duration-200`} />
                <div>
                    <div className={`font-medium text-black text-sm mb-1`}>{post.title}</div>
                     
                </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>


      {/* Blog Tips & Resources Section */}
      <div className="w-full border-t border-slate-200 py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Resources & Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-slate-200 shadow-xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-slate-100 mb-6">
                <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6.379a9.003 9.003 0 01-9 0M12 3v1.5m0 0a9 9 0 00-9 9v.75c0 1.243.504 2.436 1.4 3.3A4.5 4.5 0 0012 21a4.5 4.5 0 007.6-3.45c.896-.864 1.4-2.057 1.4-3.3V13.5a9 9 0 00-9-9z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Investment Guide</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Expert insights on real estate investment strategies and market analysis for informed decision-making.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white border border-slate-200 shadow-xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-slate-100 mb-6">
                <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-1.5A9 9 0 1112 3v1.5m0 0a9 9 0 00-9 9v.75c0 1.243.504 2.436 1.4 3.3A4.5 4.5 0 0012 21a4.5 4.5 0 007.6-3.45c.896-.864 1.4-2.057 1.4-3.3V13.5a9 9 0 00-9-9z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Luxury Living</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Discover the latest trends in luxury real estate and premium lifestyle amenities.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white border border-slate-200  shadow-xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-slate-100 mb-6">
                <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Market Trends</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Stay updated with the latest market trends and property insights in Ahmedabad.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Section */}
      <div className="w-full bg-black py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Discover Premium Real Estate</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Experience luxury living with Ahmedabad's most prestigious properties and exclusive developments.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
  to="/projects"
  className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
>
  Explore Properties
</Link>

<Link
  to="/contact"
  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300"
>
  Contact Us
</Link>
          </div>
        </div>
      </div>

      
    </div>
  );
}
