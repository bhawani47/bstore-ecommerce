import { ArrowRight, ChevronRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <>
      {/* Main Hero Section */}
      <div className="flex max-xl:flex-col gap-8 max-w-7xl mx-auto my-5 px-4">
        {/* Left Hero Card */}
        <div className="relative flex-1 flex flex-col bg-green-200 rounded-3xl xl:min-h-[500px] group hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="p-5 sm:p-16">
            {/* News Badge */}
            <button className="inline-flex items-center gap-3 bg-green-300 text-green-700 pr-4 p-1 rounded-full text-xs sm:text-sm hover:bg-green-400/70 transition-all duration-300 group/button">
              <span className="bg-green-600 px-3 py-1 max-sm:ml-1 rounded-full text-white text-xs">
                NEWS
              </span>
              Free Shipping on Orders Above $50!
              <ChevronRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300 ease-out" />
            </button>

            {/* Title */}
            <h2 className="text-3xl sm:text-5xl leading-[1.2] my-4 font-bold bg-gradient-to-r from-slate-700 to-[#A0FF74] bg-clip-text text-transparent max-w-md">
              Gadgets you'll love. Prices you'll trust.
            </h2>

            {/* Price Info */}
            <div className="text-slate-800 text-sm font-medium mt-4 sm:mt-8">
              <p>Starts from</p>
              <p className="text-3xl font-semibold">$4.90</p>
            </div>

            {/* CTA Button */}
            <button className="bg-slate-800 text-white text-sm py-2.5 px-7 sm:py-5 sm:px-12 mt-6 rounded-lg hover:bg-slate-900 hover:scale-105 active:scale-95 transition-all duration-200 ease-out">
              LEARN MORE
            </button>
          </div>

          {/* Hero Images */}
          <img
            alt="hero model"
            loading="lazy"
            decoding="async"
            className="hidden sm:block sm:absolute bottom-0 right-0 md:right-10 w-full sm:max-w-sm transition-transform duration-500 group-hover:scale-110"
            src="hero_model.png"
          />
          <img
            alt="hero model mobile"
            loading="lazy"
            decoding="async"
            className="absolute sm:hidden bottom-0 -right-5 w-full max-w-[200px] transition-transform duration-500 group-hover:scale-110"
            src="hero_model_phone.png"
          />
        </div>

        {/* Right Hero Side Cards */}
        <div className="flex flex-col md:flex-row xl:flex-col gap-5 w-full xl:max-w-sm text-sm text-slate-600">
          {/* Best Products */}
          <HeroCard
            bg="bg-orange-200 hover:bg-orange-300"
            title="Best products"
            gradient="from-slate-800 to-[#FFAD51]"
            img="hero_mobile.png"
            imgClasses="group-hover:scale-110 group-hover:rotate-3"
          />

          {/* Discount Card */}
          <HeroCard
            bg="bg-blue-200 hover:bg-blue-300"
            title="20% discounts"
            gradient="from-slate-800 to-[#78B2FF]"
            img="hero_watch.png"
            imgClasses="group-hover:scale-110 group-hover:-rotate-3"
          />
        </div>
      </div>

      {/* Rating & Trust Box */}
      <div className="flex items-center justify-center">
        <RatingBox />
      </div>
    </>
  );
};

export default Hero;

/* 🔹 Reusable Small Components */
const HeroCard = ({
  bg,
  title,
  gradient,
  img,
  imgClasses,
}: {
  bg: string;
  title: string;
  gradient: string;
  img: string;
  imgClasses?: string;
}) => {
  return (
    <div
      className={`flex-1 flex items-center justify-between w-full ${bg} rounded-3xl p-6 px-8 group hover:shadow-lg transition-all duration-300`}
    >
      <div>
        <p
          className={`text-3xl font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent max-w-40`}
        >
          {title}
        </p>
        <button className="flex items-center gap-1 mt-4 group/btn hover:text-slate-800 transition-colors duration-200">
          View more
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300 ease-out" />
        </button>
      </div>
      <img
        alt={title}
        loading="lazy"
        decoding="async"
        className={`w-32 md:w-36 transition-transform duration-500 ${imgClasses}`}
        src={img}
      />
    </div>
  );
};

const RatingBox = () => {
  return (
    <div className="flex items-center justify-center divide-x divide-gray-300 w-full sm:w-1/3 border border-border rounded-3xl p-3 bg-white shadow-md">
      {/* Avatars */}
      <div className="flex -space-x-3 pr-3">
        {[
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
          "https://randomuser.me/api/portraits/men/75.jpg",
        ].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt="user"
            className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition-transform duration-200 z-[idx]"
          />
        ))}
      </div>

      {/* Rating */}
      <div className="pl-3">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={17} className="text-yellow-400 fill-yellow-400" />
          ))}
          <p className="text-text font-medium ml-2">5.0</p>
        </div>
        <p className="text-sm text-text-secondary">
          Trusted by <span className="font-medium text-gray-800">100,000+</span>{" "}
          users
        </p>
      </div>
    </div>
  );
};
