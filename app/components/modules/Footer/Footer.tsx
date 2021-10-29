import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer className="bottom-0 px-4 text-base md:px-0 text-secondary-text">
      <div className="border-t border-divider-color"></div>
      <div className="flex items-center justify-between w-full mt-6 md:mt-12">
        <a href="#">
          <Image
            src="/assets/logo/alt.png"
            width={138}
            height={30}
            alt="analytics alternative logo"
          />
        </a>
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
        <div className="space-x-8 md:space-x-6">
          <a
            href="https://github.com/bardenHa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://github.com/bardenHa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://github.com/bardenHa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
