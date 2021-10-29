import Image from 'next/image';

const LandingHero = () => {
  return (
    <div className="relative flex flex-col-reverse items-center justify-between px-4 text-base md:flex-row flex-nowrap md:px-0 text-secondary-text">
      <div className="flex-shrink-0 pb-12 md:max-w-lg md:mr-28">
        <h1 className="text-3xl font-bold text-white md:text-5xl">
          Monitor your business on real-time dashboard
        </h1>
        <p className="mt-4 text-sm md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
          nibh nunc mattis imperdiet sed nullam.{' '}
        </p>
        <button className="w-full p-2 px-12 mt-12 text-white rounded-full md:w-auto bg-primary active:bg-primary-hover">
          Try for free
        </button>
      </div>
      <div className="relative flex-shrink hidden md:inline-flex ">
        <Image
          src="/assets/screens/main-screen.png"
          width={804}
          height={555}
          layout="fixed"
        />
        <div className="absolute z-10 hidden md:block -left-12 top-28">
          <Image
            src="/assets/screens/chart-3.png"
            width={361}
            height={247}
            layout="fixed"
          />
        </div>
      </div>
      <div className="width-full md:hidden">
        <Image
          src="/assets/screens/main-screen.png"
          layout="fixed"
          height={231}
          width={335}
        />
      </div>
    </div>
  );
};

export default LandingHero;
