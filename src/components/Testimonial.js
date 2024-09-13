import React from 'react';
import image1 from "../images/testnomial1.jpg";
import image2 from "../images/testimonial2.jpg";
import image3 from "../images/testimonial3.jpg";
import image4 from "../images/testimonial4.jpg";
import image5 from "../images/testimonial5.jpg";

const testimonials = [
  {
    img: image1,
    name: 'Saul Goodman',
    role: 'Ceo & Founder',
    quote: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus...',
  },
  {
    img: image2,
    name: 'Sara Wilsson',
    role: 'Designer',
    quote: 'Export tempor illum tamen malis malis eram quae irure esse labore...',
  },
  {
    img: image3,
    name: 'Jena Karlis',
    role: 'Store Owner',
    quote: 'Enim nisi quem export duis labore cillum quae magna enim sint...',
  },
  {
    img: image4,
    name: 'Matt Brandon',
    role: 'Freelancer',
    quote: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export...',
  },
  {
    img: image5,
    name: 'John Larson',
    role: 'Freelancer',
    quote: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export...',
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, testimonials.length - 1));
  };

  return (
    <section id="testimonials" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Testimonials</h3>
        </header>

        <div className="relative flex flex-col items-center">
          <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4 transition-transform duration-500 ease-in-out">
            <div
              className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105"
              style={{ transition: 'transform 0.3s ease-in-out' }}
            >
              <img
                src={testimonials[currentIndex].img}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                alt={testimonials[currentIndex].name}
              />
              <h3 className="text-xl font-semibold mb-2">{testimonials[currentIndex].name}</h3>
              <h4 className="text-sm text-gray-600 mb-4">{testimonials[currentIndex].role}</h4>
              <p className="text-gray-700">
                <span className="inline-block w-6 h-6 mb-2 text-gray-500">“</span>
                {testimonials[currentIndex].quote}
                <span className="inline-block w-6 h-6 mb-2 text-gray-500">”</span>
              </p>
            </div>
          </div>

          <div className="flex space-x-4 mt-6">
            <button
              onClick={scrollLeft}
              className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 disabled:opacity-50"
              disabled={currentIndex === 0}
            >
              &lt;
            </button>
            <button
              onClick={scrollRight}
              className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 disabled:opacity-50"
              disabled={currentIndex === testimonials.length - 1}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

