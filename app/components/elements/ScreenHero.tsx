import Image from 'next/image';

const ScreenHero = ({
  title,
  paragraph,
  imageUrl,
  reversed = false,
}: {
  title: string;
  paragraph: string;
  imageUrl: string;
  reversed?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col items-center w-full space-y-4 lg:space-y-0 md:space-x-10 ${
        reversed ? 'md:space-x-reverse md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      <div
        className={`md:flex ${
          reversed ? 'md:justify-end' : 'md:justify-start'
        } md:w-1/2`}
      >
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold lg:text-5xl">{title}</h2>
          <p className="max-w-lg pt-6 text-sm text-secondary-text lg:text-lg md:pt-12">
            {paragraph}
          </p>
        </div>
      </div>
      <div className="flex-grow w-full max-w-lg shadow-xl lg:max-w-full lg:w-1/2 rounded-image">
        <Image src={imageUrl} layout="responsive" width={600} height={410} />
      </div>
    </div>
  );
};

export default ScreenHero;
