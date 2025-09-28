import { Star } from 'lucide-react';
import type { ReactNode } from 'react';

interface CardObj {
  image: string;
  name: string;
  price: number;
  rating: number;
}

interface CardProps {
  cardData: CardObj;
}

interface RatingProps {
  rating: number;
  totalStars?: number; // default 5
}

const Rating = ({ rating, totalStars = 5 }: RatingProps): ReactNode => {
  return (
    <div className="flex items-center gap-1 mb-3">
      {[...Array(totalStars)].map((_, i) => {
        const starNumber = i + 1;
        let fillPercentage = 0;

        if (rating >= starNumber) fillPercentage = 100;
        else if (rating > i && rating < starNumber) fillPercentage = (rating - i) * 100;
        else fillPercentage = 0;

        return (
          <div key={i} className="relative w-4 h-4">
            <Star className="absolute w-4 h-4 text-gray-300" />
            <Star
              className="absolute w-4 h-4 text-yellow-400 fill-current overflow-hidden transition-all duration-300 ease-in-out"
              style={{ clipPath: `inset(0 ${100 - fillPercentage}% 0 0)` }}
            />
          </div>
        );
      })}
      <span className="text-sm text-gray-500 ml-2">({rating})</span>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ cardData }) => {
  const { name, image, price, rating } = cardData;

  return (
    <div className="flex flex-col bg-surface text-text shadow-md w-44 sm:w-64 rounded overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img className="h-36 sm:h-48 w-64 p-2 object-contain transition-transform duration-500 ease-in-out hover:scale-105" src={image} alt={name} />
      <div className="p-4 text-sm border-t border-gray-100 dark:border-slate-700">
        <p className="text-text">$ {price}</p>
        <p className="text-secondary text-base font-medium my-1.5">{name}</p>

        {/* Rating */}
        <Rating rating={rating} />

        <div className="grid grid-cols-1 gap-2 mt-3 *:cursor-pointer">
          <button className="bg-slate-100 text-slate-600 py-2 rounded transition-all duration-300 hover:bg-slate-200 hover:scale-105 active:scale-95 border border-gray-300">
            Add to cart
          </button>
          <button className="bg-slate-800 text-white py-2 rounded transition-all duration-300 hover:bg-slate-900 hover:scale-105 active:scale-95 ">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
