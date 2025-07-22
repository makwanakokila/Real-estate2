import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'ARCHITECTURAL DESIGN',
      description: 'Complete architectural solutions from concept to completion, tailored to your unique vision and requirements.',
      features: ['Conceptual Design', 'Design Development', 'Construction Documents', '3D Visualization']
    },
    {
      title: 'INTERIOR DESIGN',
      description: 'Sophisticated interior spaces that perfectly complement architectural design and enhance user experience.',
      features: ['Space Planning', 'Material Selection', 'Furniture Design', 'Lighting Design']
    },
    {
      title: 'PROJECT MANAGEMENT',
      description: 'End-to-end project coordination ensuring timely delivery, quality control, and budget management.',
      features: ['Construction Administration', 'Quality Control', 'Budget Management', 'Timeline Coordination']
    },
    {
      title: 'CONSULTATION',
      description: 'Expert architectural consultation services for planning, feasibility studies, and design optimization.',
      features: ['Feasibility Studies', 'Design Review', 'Code Compliance', 'Sustainability Planning']
    }
  ];

  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="text-center mb-16 lg:mb-24">
          <h1 className="text-4xl lg:text-6xl font-light text-white mb-6">
            SERVICES
          </h1>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
            Comprehensive architectural and design services to bring your vision to life with precision and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div key={index} className="border-t border-white/20 pt-8">
              <h3 className="text-2xl lg:text-3xl font-light tracking-[0.1em] text-white mb-6">
                {service.title}
              </h3>
              <p className="text-lg text-white font-light leading-relaxed mb-8">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-white font-light">
                    <span className="w-1 h-1 bg-white rounded-full mr-4"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center bg-black border-t border-white/20 py-16 lg:py-24">
          <h2 className="text-3xl lg:text-4xl font-light text-white mb-6">
            READY TO START YOUR PROJECT?
          </h2>
          <p className="text-lg text-white font-light mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your architectural vision to life.
          </p>
          <button className="bg-white text-black px-8 py-4 text-sm font-light tracking-[0.1em] hover:bg-gray-200 transition-colors duration-300">
            GET IN TOUCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;