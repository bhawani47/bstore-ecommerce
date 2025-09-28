import { ArrowRight, ChevronRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <>
      <div className="flex max-xl:flex-col gap-8 max-w-7xl mx-auto my-10">
        <div className="relative flex-1 flex flex-col bg-green-200 rounded-3xl xl:min-h-100 group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
          <div className="p-5 sm:p-16">
            <button className="inline-flex items-center gap-3 bg-green-300 text-green-600 pr-4 p-1 rounded-full text-xs sm:text-sm hover:bg-green-400 transition-all duration-300 group/button">
              <span className="bg-green-600 px-3 py-1 max-sm:ml-1 rounded-full text-white text-xs">
                NEWS
              </span>
              Free Shipping on Orders Above $50!
              <ChevronRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300 ease-out" />
            </button>

            <h2 className="text-3xl sm:text-5xl leading-[1.2] my-3 font-medium bg-gradient-to-r from-slate-600 to-[#A0FF74] bg-clip-text text-transparent max-w-xs sm:max-w-md">
              Gadgets you'll love. Prices you'll trust.
            </h2>

            <div className="text-slate-800 text-sm font-medium mt-4 sm:mt-8">
              <p>Starts from</p>
              <p className="text-3xl">$4.90</p>
            </div>

            <button className="bg-slate-800 text-white text-sm py-2.5 px-7 sm:py-5 sm:px-12 mt-4 sm:mt-10 rounded-md hover:bg-slate-900 hover:scale-105 active:scale-95 transition-all duration-200 ease-out">
              LEARN MORE
            </button>
          </div>

          <img
            alt=""
            loading="lazy"
            width="2000"
            height="1333"
            decoding="async"
            className="hidden sm:block sm:absolute bottom-0 right-0 md:right-10 w-full sm:max-w-sm transition-transform duration-300 group-hover:scale-105"
            style={{ color: 'transparent' }}
            src="hero_model.png"
          />
          <img
            alt=""
            loading="lazy"
            width="2000"
            height="1333"
            decoding="async"
            className="absolute sm:hidden bottom-0 -right-5 md:right-10 w-full max-w-[200px] transition-transform duration-300 group-hover:scale-105"
            style={{ color: 'transparent' }}
            src="hero_model_phone.png"
          />
        </div>

        <div className="flex flex-col md:flex-row xl:flex-col gap-5 w-full xl:max-w-sm text-sm text-slate-600">
          <div className="flex-1 flex items-center justify-between w-full bg-orange-200 rounded-3xl p-6 px-8 group hover:bg-orange-300 hover:shadow-lg transition-all duration-300">
            <div>
              <p className="text-3xl font-medium bg-gradient-to-r from-slate-800 to-[#FFAD51] bg-clip-text text-transparent max-w-40">
                Best products
              </p>
              <button className="flex items-center gap-1 mt-4 group/btn hover:text-slate-800 transition-colors duration-200">
                View more
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300 ease-out" />
              </button>
            </div>
            <img
              alt=""
              loading="lazy"
              width="210"
              height="210"
              decoding="async"
              className="w-35 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              style={{ color: 'transparent' }}
              src="hero_mobile.png"
            />
          </div>

          <div className="flex-1 flex items-center justify-between w-full bg-blue-200 rounded-3xl p-6 px-8 group hover:bg-blue-300 hover:shadow-lg transition-all duration-300">
            <div>
              <p className="text-3xl font-medium bg-gradient-to-r from-slate-800 to-[#78B2FF] bg-clip-text text-transparent max-w-40">
                20% discounts
              </p>
              <button className="flex items-center gap-1 mt-4 group/btn hover:text-slate-800 transition-colors duration-200">
                View more
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300 ease-out" />
              </button>
            </div>
            <img
              alt=""
              loading="lazy"
              width="210"
              height="252"
              decoding="async"
              className="w-35 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
              style={{ color: 'transparent' }}
              src="hero_watch.png"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center  divide-x divide-gray-300 w-1/3 border border-border rounded-4xl p-3">
          <div className="flex -space-x-3 pr-3">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
              alt="image"
              className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-1"
            />
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
              alt="image"
              className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-[2]"
            />
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
              alt="image"
              className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-[3]"
            />
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="image"
              className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-[4]"
            />
          </div>
          <div className="pl-3">
            <div className="flex items-center">
              <Star fill='yellow' className='text-yellow-200' size={17} />
              <Star fill='yellow' className='text-yellow-200' size={17} />
              <Star fill='yellow' className='text-yellow-200' size={17} />
              <Star fill='yellow' className='text-yellow-200' size={17} />
              <Star fill='yellow' className='text-yellow-200' size={17} />
           
              
              <p className="text-text font-medium ml-2">5.0</p>
            </div>
            <p className="text-sm text-text-secondary">
              Trusted by{' '}
              <span className="font-medium text-gray-800">100,000+</span> users
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
