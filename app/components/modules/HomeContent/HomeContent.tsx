import Image from 'next/image';
import ScreenHero from '@element/ScreenHero';

const HomeContent = () => {
  return (
    <>
      <SlantedDiv />
      <div className="pt-12 pb-24 md:pb-12 bg-chart bleed-width">
        <div className="container flex flex-col items-center justify-center mx-auto text-primary-text">
          <MainFeatures />
          <div className="w-full px-4 pt-12 space-y-24 lg:space-y-32 md:px-0 md:pt-28">
            <ScreenHero
              title="Automated Reports & Widget Alerts"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
          nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
          pulvinar sit amet."
              imageUrl="/assets/screens/content-screen-01.png"
            />
            <ScreenHero
              title="Fully customizable to address your needs"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
          nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
          pulvinar sit amet."
              imageUrl="/assets/screens/content-screen-02.png"
              reversed={true}
            />
            <ScreenHero
              title="Pre-built Dashboard Templates"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
          nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
          pulvinar sit amet."
              imageUrl="/assets/screens/content-screen-03.png"
            />
          </div>
        </div>
      </div>
      <SlantedDivReverse />
    </>
  );
};

export default HomeContent;

const MainFeatures = () => {
  return (
    <div className="px-4 md:px-0 max-w-7xl">
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

const SlantedDivReverse = () => {
  return (
    <>
      <div className="h-16 bottom-2 md:h-32 skewed-full-reverse bg-primary drop-shadow-xl bleed-width">
        <div className="h-16 bottom-4 md:h-32 skewed-full-reverse bg-chart bleed-width"></div>
      </div>
    </>
  );
};
