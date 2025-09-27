import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="flex max-xl:flex-col gap-8 max-w-7xl mx-auto my-10">
      <div className="relative flex-1 flex flex-col bg-green-200 rounded-3xl xl:min-h-100 group">
        <div className="p-5 sm:p-16">
          <button className="inline-flex items-center gap-3 bg-green-300 text-green-600 pr-4 p-1 rounded-full text-xs sm:text-sm">
            <span className="bg-green-600 px-3 py-1 max-sm:ml-1 rounded-full text-white text-xs">
              NEWS
            </span>
            Free Shipping on Orders Above $50!
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right group-hover:ml-2 transition-all"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <h2 className="text-3xl sm:text-5xl leading-[1.2] my-3 font-medium bg-gradient-to-r from-slate-600 to-[#A0FF74] bg-clip-text text-transparent max-w-xs sm:max-w-md">
            Gadgets you'll love. Prices you'll trust.
          </h2>

          <div className="text-slate-800 text-sm font-medium mt-4 sm:mt-8">
            <p>Starts from</p>
            <p className="text-3xl">$4.90</p>
          </div>

          <button className="bg-slate-800 text-white text-sm py-2.5 px-7 sm:py-5 sm:px-12 mt-4 sm:mt-10 rounded-md hover:bg-slate-900 hover:scale-103 active:scale-95 transition">
            LEARN MORE
          </button>
        </div>

        <img
          alt=""
          loading="lazy"
          width="2000"
          height="1333"
          decoding="async"
          className="sm:absolute bottom-0 right-0 md:right-10 w-full sm:max-w-sm"
          style={{ color: 'transparent' }}
          src="hero_model.png"
        />
      </div>

      <div className="flex flex-col md:flex-row xl:flex-col gap-5 w-full xl:max-w-sm text-sm text-slate-600">
        <div className="flex-1 flex items-center justify-between w-full bg-orange-200 rounded-3xl p-6 px-8 group">
          <div>
            <p className="text-3xl font-medium bg-gradient-to-r from-slate-800 to-[#FFAD51] bg-clip-text text-transparent max-w-40">
              Best products
            </p>
            <button className="flex items-center gap-1 mt-4">
              View more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right group-hover:ml-2 transition-all"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
          <img
            alt=""
            loading="lazy"
            width="210"
            height="210"
            decoding="async"
            className="w-35"
            style={{ color: 'transparent' }}
            src="hero_product_img1.4a9c2d69.png"
          />
        </div>

        <div className="flex-1 flex items-center justify-between w-full bg-blue-200 rounded-3xl p-6 px-8 group">
          <div>
            <p className="text-3xl font-medium bg-gradient-to-r from-slate-800 to-[#78B2FF] bg-clip-text text-transparent max-w-40">
              20% discounts
            </p>
            <button className="flex items-center gap-1 mt-4">
              View more
              <ArrowRight />
            </button>
          </div>
          <img
            alt=""
            loading="lazy"
            width="210"
            height="252"
            decoding="async"
            className="w-35"
            style={{ color: 'transparent' }}
            src="hero_product_img2.3a66bbed.png"
          />
        </div>
      </div>
    </div>

    // <div className="grid grid-cols-1 sm:grid-cols-6 h-[80vh] gap-8 px-5">
    //   <div className="col-span-4  rounded-3xl p-6 bg-[#B9F8CF]">
    //     <div className="relative flex-1 flex flex-col bg-green-200 rounded-3xl xl:min-h-100 group">
    //       <div className="p-5 sm:p-16">
    //         <button className="inline-flex items-center gap-3 bg-green-300 text-green-600 pr-4 p-1 rounded-full text-xs sm:text-sm">
    //           <span className="bg-green-600 px-3 py-1 max-sm:ml-1 rounded-full text-white text-xs">
    //             NEWS
    //           </span>{' '}
    //           Free Shipping on Orders Above $50!{' '}
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="16"
    //             height="16"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             stroke-width="2"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             className="lucide lucide-chevron-right group-hover:ml-2 transition-all"
    //             aria-hidden="true"
    //           >
    //             <path d="m9 18 6-6-6-6"></path>
    //           </svg>
    //         </button>
    //         <h2 className="text-3xl sm:text-5xl leading-[1.2] my-3 font-medium bg-gradient-to-r from-slate-600 to-[#A0FF74] bg-clip-text text-transparent max-w-xs sm:max-w-md">
    //           Gadgets you'll love. Prices you'll trust.
    //         </h2>
    //         <div className="text-slate-800 text-sm font-medium mt-4 sm:mt-8">
    //           <p>Starts from</p>
    //           <p className="text-3xl">$4.90</p>
    //         </div>
    //         <button className="bg-slate-800 text-white text-sm py-2.5 px-7 sm:py-5 sm:px-12 mt-4 sm:mt-10 rounded-md hover:bg-slate-900 hover:scale-103 active:scale-95 transition">
    //           LEARN MORE
    //         </button>
    //       </div>
    //       <img
    //         alt=""
    //         loading="lazy"
    //         width="513"
    //         height="542"
    //         decoding="async"
    //         data-nimg="1"
    //         className="sm:absolute bottom-0 right-0 md:right-10 w-full sm:max-w-sm"
    //         style={{ color: 'transparent' }}
    //         src="/hero_model_img.0d0d8155.png"
    //       />
    //     </div>
    //   </div>
    //   <div className="col-span-2  flex flex-col justify-between *:h-1/2 px-4 *:p-6 *:rounded-3xl gap-8 ">
    //     <div className="bg-[#FFD7A8]">Card-1</div>{' '}
    //     <div className="bg-[#BEDBFF]">Card-2</div>
    //   </div>
    // </div>
  );
};
export default Hero;
