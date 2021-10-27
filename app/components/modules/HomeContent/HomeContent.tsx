import Image from 'next/image';

const HomeContent = () => {
  return (
    <div className="py-6 bg-chart bleed-width">
      <div className="container flex flex-col items-center justify-center mx-auto text-primary-text">
        <MainFeatures />
      </div>
    </div>
  );
};

export default HomeContent;

const MainFeatures = () => {
  return (
    <>
      <div className="px-4 md:px-0 md:text-center">
        <h2 className="text-3xl font-bold md:text-5xl">Main Features</h2>
        <p className="pt-6 text-sm text-secondary-text md:text-lg md:pt-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
          nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
          pulvinar sit amet. Id vel in nam malesuada.
        </p>
      </div>
      <div className="flex flex-col pt-6 text-center md:flex-row md:pt-16">
        <div className="relative object-contain">
          <Image src="/assets/icons/planning.png" width={60} height={60} />
          <h4 className="font-bold md:pt-2">Monitoring 24/7</h4>
          <p className="pt-3 text-sm text-secondary-text">
            Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum
            nisi aliquet volutpat.
          </p>
        </div>
        <div>
          <Image src="/assets/icons/computer.png" width={60} height={60} />
          <h4 className="font-bold md:pt-2">Widget System</h4>
          <p className="pt-3 text-sm text-secondary-text">
            Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae
            et, tortor pulvinar risus pulvinar.
          </p>
        </div>
        <div>
          <Image src="/assets/icons/speed.png" width={60} height={60} />
          <h4 className="font-bold md:pt-2">Best Performance</h4>
          <p className="pt-3 text-sm text-secondary-text">
            Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum
            nisi aliquet volutpat.
          </p>
        </div>
      </div>
    </>
  );
};
