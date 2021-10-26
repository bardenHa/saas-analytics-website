import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bottom-0 px-4 text-base md:px-0 text-secondary-text">
      <div className="border-t border-divider-color"></div>
      <div className="flex items-center justify-between w-full mt-6 md:mt-12">
        <Image
          src="/assets/logo/alt.png"
          width={138}
          height={30}
          alt="analytics alternative logo"
        />
        <div className="hidden space-x-8 md:inline-block">
          <a href="#" className="hover:text-secondary">
            Product
          </a>
          <a href="#" className="hover:text-secondary">
            Pricing Plans
          </a>
          <a href="#" className="hover:text-secondary">
            FAQ
          </a>
          <a href="#" className="hover:text-secondary">
            Blog
          </a>
        </div>
        <div>socials</div>
      </div>
    </footer>
  );
};

export default Footer;
