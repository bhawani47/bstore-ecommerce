import { useEffect, useState, type ReactNode } from 'react';
import type { Product } from '../../types';
import { Star } from 'lucide-react';

const Rating = ({
  totalStars = 5,
  product,
}: {
  totalStars?: number;
  product: Product;
}): ReactNode => {
  const [avgRating, setAvgRating] = useState<number>(0);

  useEffect(() => {
    if (!product.rating || !product.rating.length) return;

    const totalRating = product.rating.reduce((sum, r) => sum + r.rating, 0);
    const averageRating = totalRating / product.rating.length;

    setAvgRating(Number(averageRating.toFixed(1)));
  }, [product.rating]);

  return (
    <div className="flex items-center gap-1 mb-3">
      {[...Array(totalStars)].map((_, i) => {
        const starNumber = i + 1;
        let fillPercentage = 0;

        if (avgRating >= starNumber) fillPercentage = 100;
        else if (avgRating > i && avgRating < starNumber)
          fillPercentage = (avgRating - i) * 100;

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
      <span className="text-sm text-gray-500 ml-2">({avgRating})</span>
    </div>
  );
};

export default Rating;
