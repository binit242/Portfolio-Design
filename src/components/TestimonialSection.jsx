import React, { useState, useEffect } from 'react';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
       name: "Michael Chen",
      email: "m.chen@company.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      review: "Professional, reliable, and innovative. This partnership has been instrumental in our company's growth.",
      rating: 3
    },
    {
      id: 2,
     name: "Abhiraj Rajadhyaksha",
      email: "abhiraj.rajadhyaksha@example.com",
      image: "https://media.licdn.com/dms/image/v2/C4E03AQHQ9SYmHet0NA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1648738375289?e=1760572800&v=beta&t=dpkasRHyifN9lmEfgBriV2pEWgqdbUEsE18m5bwGprI",
      review: "This service has completely transformed how we handle our video creation operations.He is incredibly professional and responsive.I will definately like to give him a raise.",
      rating: 5
    },
    {
      id: 3,
      name: "JOY RISE PRODUCTIONS",
      email: "joyrise2006@gmail.com",
      image: "https://media-ccu1-1.cdn.whatsapp.net/v/t61.24694-24/534422697_762046460069117_4045410877764439672_n.jpg?ccb=11-4&oh=01_Q5Aa2gH8kXIDn_4OF5K-tnQgqNIu5cne_D5NGTRwAhldO2HfOg&oe=68D51E8A&_nc_sid=5e03e0&_nc_cat=109",
      review: "I've worked with many agencies, but none compare to the quality and dedication shown here. Highly recommended!",
      rating: 4
    },
    {
      id: 4,
      name: "Mars Media",
      email: "mars.tmedia@enterprise.com",
      image: "https://media.licdn.com/dms/image/v2/D560BAQEuXHiGqdjWsQ/company-logo_200_200/company-logo_200_200/0/1725713568300?e=1760572800&v=beta&t=0Rkd4AnMckpyfdGe8Pctuue2WPIiAVYR-YAni24yPJQ",
      review: "Outstanding experience from start to finish. The attention to detail and customer service exceeded all expectations.",
      rating: 5
    },
    {
      id: 5,
      name: "Aspire Marketing",
      email: "lisa.aspire@gmail.com",
      image: "https://media-ccu1-1.cdn.whatsapp.net/v/t61.24694-24/508656252_4111354912474246_6454239421446130186_n.jpg?ccb=11-4&oh=01_Q5Aa2gH905b9wh6Pfn0WrcJxL69zjmN2DCTqPJn0oSCYQWfwww&oe=68D51D57&_nc_sid=5e03e0&_nc_cat=102",
      review: "Exceptional service and support. The he went above and beyond to ensure our success. Couldn't be happier!",
      rating: 5
    },
    {
      id: 6,
      name: "James Wilson",
      email: "j.wilson@business.net",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      review: "The results speak for themselves. Our productivity increased by 40% within the first month of implementation.",
      rating: 4
    }
  ];

  // Custom Icons
  const ChevronLeftIcon = () => (
    <svg className="h-6 w-6 text-orange-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );

  const ChevronRightIcon = () => (
    <svg className="h-6 w-6 text-orange-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );

  const StarIcon = ({ filled }) => (
    <svg
      className={`h-5 w-5 ${filled ? 'text-orange-500' : 'text-gray-600'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Star Rating Component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon key={star} filled={star <= rating} />
        ))}
      </div>
    );
  };

  // Testimonial Card Component
  const TestimonialCard = ({ testimonial, isCenter, index }) => {
    const cardIndex = index - currentIndex;
    const isBlurred = itemsPerView === 3 && !isCenter;

    return (
      <div
        className={`
          flex-shrink-0 transition-all duration-500 ease-in-out
          ${itemsPerView === 1 ? 'w-full' : itemsPerView === 2 ? 'w-1/2' : 'w-1/3'}
          ${isBlurred ? 'blur-sm scale-95 opacity-70' : 'blur-none scale-100 opacity-100'}
          px-3
        `}
      >
        <div className="bg-black rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full border border-gray-800">
          {/* User Image */}
          <div className="flex justify-center mb-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover border-4 border-orange-500"
            />
          </div>

          {/* User Info */}
          <div className="text-center mb-4">
            <h3 className="font-semibold text-lg text-white">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-400">
              {testimonial.email}
            </p>
          </div>

          {/* Star Rating */}
          <div className="flex justify-center mb-4">
            <StarRating rating={testimonial.rating} />
          </div>

          {/* Review */}
          <div className="text-center">
            <p className="text-gray-300 leading-relaxed italic">
              "{testimonial.review}"
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What My Clients Say
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my satisfied clients have to say about their experience.
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-black hover:bg-gray-900 hover:shadow-[0_0_25px_10px_rgba(255,165,0,0.8)] rounded-full p-3 shadow-lg border border-orange-500 transition-all duration-200 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-black rounded-full p-3 border border-orange-500 transition-all duration-200 hover:scale-110 hover:shadow-[0_0_25px_10px_rgba(255,165,0,0.8)]"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon />
          </button>

          {/* Testimonials Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  isCenter={itemsPerView === 3 ? index === currentIndex + 1 : true}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-200
                ${
                  index === currentIndex
                    ? 'bg-orange-500 scale-125'
                    : 'bg-gray-700 hover:bg-gray-600'
                }
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;