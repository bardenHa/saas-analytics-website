import Image from 'next/image';

const HomeContent = () => {
  return (
    <>
      <SlantedDiv />
      <div className="py-3 md:py-6 bg-chart bleed-width">
        <div className="container flex flex-col items-center justify-center mx-auto text-primary-text">
          <MainFeatures />
          <div className="w-full px-4 py-3 space-y-10 md:px-0 md:py-28">
            <ScreenHero />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;

const MainFeatures = () => {
  return (
    <div className="px-4 md:px-0">
      <div className="md:text-center">
        <h2 className="text-3xl font-bold md:text-5xl">Main Features</h2>
        <p className="pt-6 text-sm text-secondary-text md:text-lg md:pt-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
          nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
          pulvinar sit amet. Id vel in nam malesuada.
        </p>
      </div>
      <div className="flex flex-col pt-6 text-center md:flex-row md:pt-16">
        <div className="flex pt-6 md:pt-0 md:block">
          <div className="flex-shrink-0">
            <Image src="/assets/icons/planning.png" width={60} height={60} />
          </div>
          <div className="flex-shrink pl-6 text-left md:pl-0 md:text-center">
            <h4 className="font-bold md:pt-2">Monitoring 24/7</h4>
            <p className="pt-3 text-sm text-secondary-text">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit.
              Elementum nisi aliquet volutpat.
            </p>
          </div>
        </div>
        <div className="flex pt-6 md:pt-0 md:block">
          <div className="flex-shrink-0">
            <Image src="/assets/icons/computer.png" width={60} height={60} />
          </div>
          <div className="flex-shrink pl-6 text-left md:pl-0 md:text-center">
            <h4 className="font-bold md:pt-2">Widget System</h4>
            <p className="pt-3 text-sm text-secondary-text">
              Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae
              et, tortor pulvinar risus pulvinar.
            </p>
          </div>
        </div>
        <div className="flex pt-6 md:pt-0 md:block">
          <div className="flex-shrink-0">
            <Image src="/assets/icons/speed.png" width={60} height={60} />
          </div>
          <div className="flex-shrink pl-6 text-left md:pl-0 md:text-center">
            <h4 className="font-bold md:pt-2">Best Performance</h4>
            <p className="pt-3 text-sm text-secondary-text">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit.
              Elementum nisi aliquet volutpat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SlantedDiv = () => {
  return (
    <div className="h-16 pt-4 md:h-32 skewed-full md:skewed-full bg-primary drop-shadow-xl bleed-width">
      <div className="h-16 shadow-inner md:h-32 skewed-full md:skewed-full bg-chart bleed-width"></div>
    </div>
  );
};

const ScreenHero = () => {
  return (
    <div className="flex items-center w-full space-x-10">
      <div className="w-1/2">
        <h2 className="max-w-lg text-3xl font-bold md:text-5xl">
          Automated Reports & Widget Alerts
        </h2>
        <p className="max-w-lg pt-6 text-sm text-secondary-text md:text-lg md:pt-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
          nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
          pulvinar sit amet.
        </p>
      </div>
      <div className="flex-grow w-1/2 shadow-xl rounded-3xl">
        <Image
          src="/assets/screens/content-screen-01.png"
          layout="responsive"
          width={600}
          height={410}
        />
      </div>
    </div>
  );
};
