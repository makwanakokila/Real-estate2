import React from 'react';

const Careers = () => {
  const positions = [
    {
      title: 'SENIOR ARCHITECT',
      department: 'DESIGN',
      location: 'KYIV, UKRAINE',
      type: 'FULL-TIME'
    },
    {
      title: 'INTERIOR DESIGNER',
      department: 'DESIGN',
      location: 'LONDON, UK',
      type: 'FULL-TIME'
    },
    {
      title: 'PROJECT MANAGER',
      department: 'OPERATIONS',
      location: 'NEW YORK, USA',
      type: 'FULL-TIME'
    },
    {
      title: 'JUNIOR ARCHITECT',
      department: 'DESIGN',
      location: 'KYIV, UKRAINE',
      type: 'FULL-TIME'
    }
  ];

  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="text-center mb-16 lg:mb-24">
          <h1 className="text-4xl lg:text-6xl font-light text-white mb-6">
            CAREERS
          </h1>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
            Join our team of passionate architects and designers creating extraordinary spaces around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          <div>
            <h2 className="text-3xl lg:text-4xl font-light text-white mb-8">
              WHY WORK WITH US
            </h2>
            <p className="text-lg text-gray-300 font-light leading-relaxed mb-8">
              We believe in fostering creativity, innovation, and professional growth. Our collaborative environment encourages bold thinking and provides opportunities to work on prestigious projects worldwide.
            </p>
            <ul className="space-y-4">
              {[
                'Collaborative and creative work environment',
                'Opportunities for international projects',
                'Professional development and growth',
                'Competitive compensation and benefits',
                'Flexible working arrangements'
              ].map((benefit, index) => (
                <li key={index} className="flex items-center text-white font-light">
                  <span className="w-1 h-1 bg-white rounded-full mr-4"></span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Our workspace"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-white mb-12 text-center">
            OPEN POSITIONS
          </h2>
          <div className="space-y-6">
            {positions.map((position, index) => (
              <div key={index} className="border-t border-white/20 pt-6 pb-6 flex flex-col lg:flex-row lg:items-center lg:justify-between hover:bg-white/5 transition-colors duration-300 px-6 -mx-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-xl lg:text-2xl font-light tracking-[0.1em] text-white mb-2">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-white font-light">
                    <span>{position.department}</span>
                    <span>•</span>
                    <span>{position.location}</span>
                    <span>•</span>
                    <span>{position.type}</span>
                  </div>
                </div>
                <button className="bg-white text-black px-6 py-3 text-sm font-light tracking-[0.1em] hover:bg-gray-200 transition-colors duration-300 self-start lg:self-center">
                  APPLY NOW
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;