import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TitleProps {
  title: string;
  description: string;
  visibleButton?: boolean;
  href?: string;
  className?: string;
}

const Title = ({
  title,
  description,
  visibleButton = true,
  href = '',
  className = '',
}: TitleProps) => {
  return (
    <div className={`flex flex-col items-center text-center gap-3 ${className}`}>
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-text">{title}</h2>

      {/* Description */}
      <p className="max-w-xl text-sm sm:text-base text-text-secondary">
        {description}
      </p>

      {/* View More Button */}
      {visibleButton && href && (
        <Link
          to={href}
          className="group mt-2 inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
        >
          View more
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      )}
    </div>
  );
};

export default Title;
