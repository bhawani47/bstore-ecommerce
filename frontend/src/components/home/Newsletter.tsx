import { MdEmail } from 'react-icons/md';
import Title from '../common/Title';

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center sm:mx-4 rounded p-3 my-15 text-text">
      <Title
        title="Join Newsletter"
        description="Subscribe to get exclusive deals, new arrivals, and insider updates delivered straight to your inbox every week."
        visibleButton={false}
      />
      <div className="flex bg-bg text-sm p-1 rounded-full w-full max-w-xl my-10 border-2 border-border ring ring-border">
        <input
          className="flex-1 pl-5 outline-none placeholder:text-secondary"
          type="text"
          placeholder="Enter your email address"
        />
        <button className="font-medium bg-green-500 text-white px-7 py-3 rounded-full hover:scale-103 active:scale-95 transition">
          <MdEmail size={22} className="sm:hidden" />
          <span className="hidden sm:block">Get Updates</span>
        </button>
      </div>
    </div>
  );
};
export default Newsletter;
