import Image from 'next/image';

const LandingHero = () => {
  return (
    <div className="relative px-4 text-base md:px-0 text-secondary-text">
      <div className="max-w-lg pt-20 pb-44">
        <h1 className="text-5xl font-bold text-white">
          Monitor your business on real-time dashboard
        </h1>
        <p className="mt-2 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
          nibh nunc mattis imperdiet sed nullam.{' '}
        </p>
        <button className="p-2 px-12 mt-10 text-white rounded-full bg-primary active:bg-primary-hover">
          Try for free
        </button>
      </div>
      <div className="absolute top-0 -right-64">
        <Image
          src="/assets/screens/main-screen.png"
          width={804}
          height={555}
          layout="intrinsic"
        />
      </div>
    </div>
  );
};

export default LandingHero;
