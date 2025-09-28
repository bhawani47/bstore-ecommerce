'use client';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Title = ({
  title,
  description,
  visibleButton = true,
  href = '',
}: {
  title: string;
  description: string;
  visibleButton: boolean;
  href?: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-text">{title}</h2>
      <Link
        to={href}
        className="flex items-center gap-5 text-sm text-text-secondary mt-2"
      >
        <p className="max-w-lg text-center">{description}</p>
        {visibleButton && (
          <button className="text-green-500 flex items-center gap-1">
            View more <ArrowRight size={14} />
          </button>
        )}
      </Link>
    </div>
  );
};

export default Title;
