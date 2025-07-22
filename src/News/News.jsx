import React from 'react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Award-Winning Sustainable Design Project',
      date: 'December 15, 2024',
      excerpt: 'Our latest residential project receives international recognition for innovative sustainable design practices.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Awards'
    },
    {
      id: 2,
      title: 'New Office Expansion Announcement',
      date: 'November 28, 2024',
      excerpt: 'We are excited to announce the opening of our new design studio to better serve our growing client base.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Company News'
    },
    {
      id: 3,
      title: 'Speaking at International Architecture Summit',
      date: 'November 10, 2024',
      excerpt: 'Our lead architect will present on the future of sustainable urban design at the upcoming summit.',
      image: 'https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Events'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest News
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest projects, achievements, and insights from the world of architecture and design.
          </p>
        </div>

        <div className="space-y-8">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="lg:flex">
                <div className="lg:w-1/3">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-2/3 p-8">
                  <div className="flex items-center mb-4">
                    <span className="inline-block px-3 py-1 text-sm font-medium text-orange-600 bg-orange-100 rounded-full mr-4">
                      {item.category}
                    </span>
                    <span className="text-gray-500 text-sm">{item.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-orange-500 cursor-pointer transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {item.excerpt}
                  </p>
                  <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;