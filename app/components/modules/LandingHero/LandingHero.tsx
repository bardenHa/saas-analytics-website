import Image from 'next/image';

const LandingHero = () => {
  return (
    <div className="relative flex items-center justify-between px-4 text-base flex-nowrap md:px-0 text-secondary-text">
      <div className="flex-shrink-0 max-w-lg pb-12 mr-28">
        <h1 className="text-5xl font-bold text-white">
          Monitor your business on real-time dashboard
        </h1>
        <p className="mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
          nibh nunc mattis imperdiet sed nullam.{' '}
        </p>
        <button className="p-2 px-12 mt-12 text-white rounded-full bg-primary active:bg-primary-hover">
          Try for free
        </button>
      </div>
      <div className="relative inline-flex flex-shrink">
        <Image
          src="/assets/screens/main-screen.png"
          width={804}
          height={555}
          layout="fixed"
        />
        <div className="absolute z-10 -left-12 top-28">
          <Image
            src="/assets/screens/chart-3.png"
            width={361}
            height={247}
            layout="fixed"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
