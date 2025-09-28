import { Link } from 'react-router-dom';
import { Hero } from '../components';
import Card from '../components/common/Card';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Newsletter from '../components/home/Newsletter';
import OurSpecs from '../components/home/OurSpecs';
import { productDummyData } from '../assets/assest';

const MoreButton = () => {
  return (
    <div className="w-full h-10 py-2 flex justify-center items-center mt-6 rounded ">
      <Link
        to="#"
        className="text-text bg-surface-secondary text-center w-34 rounded py-1 px-2 border border-border hover:bg-surface-hover hover:text-secondary transition-all duration-300 "
      >
        View more <FaLongArrowAltRight size={20} className="inline-block " />
      </Link>
    </div>
  );
};

const Home = () => {
  
  return (
    <div className="h-full p-5">
      <Hero />

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-text text-center mb-5 underline underline-offset-8 py-4">
          Featured Products
        </h2>

        {/* Responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {[...productDummyData]
            .sort((a, b) => {
              const discountA = ((a.mrp - a.price) / a.mrp) * 100;
              const discountB = ((b.mrp - b.price) / b.mrp) * 100;
              return discountB - discountA;
            })
            .map((card, i) =>
              i < 4 ? <Card key={i} cardData={card} /> : null
            )}
        </div>
        <MoreButton />
      </div>
      <div className="mt-10">
        <div className="flex flex-col items-center mb-5">
          <h2 className="text-2xl font-semibold text-text text-center underline underline-offset-8 ">
            Best Selling
          </h2>
        </div>

        {/* Responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {[...productDummyData]
            .sort((a, b) => {
              const discountA = a.rating[0].rating;
              const discountB = b.rating[0].rating;
              return discountA - discountB;
            })
            .map((card, i) =>
              i < 4 ? <Card key={i} cardData={card} /> : null
            )}
        </div>
      </div>
      <MoreButton />

      <OurSpecs />

      <Newsletter />
    </div>
  );
};
export default Home;
