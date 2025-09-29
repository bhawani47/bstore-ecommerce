import { Link } from 'react-router-dom';
import { Hero } from '../components';
import Card from '../components/common/Card';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Newsletter from '../components/home/Newsletter';
import OurSpecs from '../components/home/OurSpecs';
import { productDummyData } from '../assets/assest';
import type { Product } from '../types';
import SearchBar from '../components/common/SearchBar';

const MoreButton = ({ href = '#' }: { href?: string }) => (
  <div className="w-full h-10 py-2 flex justify-center items-center mt-6">
    <Link
      to={href}
      className="text-text bg-surface-secondary w-34 text-center rounded py-1 px-2 border border-border hover:bg-surface-hover hover:text-secondary transition-all duration-300 flex items-center justify-center gap-1"
    >
      View more <FaLongArrowAltRight size={16} />
    </Link>
  </div>
);

const ProductGrid = ({
  title,
  products,
}: {
  title: string;
  products: Product[];
}) => (
  <div className="mt-10">
    <div className="flex flex-col items-center mb-5">
      <h2 className="text-2xl font-semibold text-text text-center underline underline-offset-8 py-2">
        {title}
      </h2>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
      {products.slice(0, 4).map((card) => (
        <Card key={card.id} cardData={card} />
      ))}
    </div>
    <MoreButton />
  </div>
);

const Home = () => {
  const featuredProducts = [...productDummyData].sort((a, b) => {
    const discountA = ((a.mrp - a.price) / a.mrp) * 100;
    const discountB = ((b.mrp - b.price) / b.mrp) * 100;
    return discountB - discountA;
  });

  const bestSellingProducts = [...productDummyData].sort(
    (a, b) => (b.rating[0]?.rating || 0) - (a.rating[0]?.rating || 0)
  );

  return (
    <div className="h-full p-5">
      <SearchBar className='sm:hidden' />
      <Hero />

      <ProductGrid title="Featured Products" products={featuredProducts} />
      <ProductGrid title="Best Selling" products={bestSellingProducts} />

      <OurSpecs />
      <Newsletter />
    </div>
  );
};

export default Home;
