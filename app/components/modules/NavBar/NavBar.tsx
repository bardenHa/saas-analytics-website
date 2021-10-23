import Image from 'next/image';
import Logo from '/public/assets/logo/main.png';
import CTAButton from '@element/CTAButton';
import MenuIcon from '@mui/icons-material/MenuRounded';

const NavBar = () => (
  <header className="top-0 flex items-center w-full px-6 py-6 text-base md:py-12 text-chart md:px-0">
    <Image src={Logo} alt="analytics logo" width={184} height={40} />
    <div className="flex-1 pl-20 space-x-10">
      <button className="hidden hover:underline lg:inline-block">
        Products
      </button>
      <button className="hidden hover:underline lg:inline-block">
        Pricing
      </button>
      <button className="hidden hover:underline lg:inline-block">FAQ</button>
      <button className="hidden hover:underline lg:inline-block">Blog</button>
      <button className="hidden hover:underline lg:inline-block">About</button>
    </div>
    <div className="pr-6 space-x-10 lg:pr-0">
      <button className="hover:underline text-secondary-text md:text-chart">
        Sign In
      </button>
      <CTAButton text={'Sign Up'} />
    </div>
    <div className="px-1 rounded-md lg:hidden text-secondary-text hover:bg-outline">
      <MenuIcon fontSize="large" />
    </div>
  </header>
);

export default NavBar;
