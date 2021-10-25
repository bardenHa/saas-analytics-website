import Image from 'next/image';
import Logo from '/public/assets/logo/main.png';
import CTAButton from '@element/CTAButton';
import MenuIcon from '@mui/icons-material/MenuRounded';
import { SwipeableDrawer } from '@mui/material';
import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDrawerClick = (): void => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="top-0 flex items-center w-full px-6 py-6 text-base md:py-12 text-chart md:px-0">
      <Image src={Logo} alt="analytics logo" width={184} height={40} />
      <div className="flex-1 pl-20 space-x-10">
        <button className="hidden hover:underline lg:inline-block">
          Products
        </button>
        <button className="hidden hover:underline lg:inline-block hover-underline-animation">
          Pricing
        </button>
        <button className="hidden hover:underline lg:inline-block">FAQ</button>
        <button className="hidden hover:underline lg:inline-block">Blog</button>
        <button className="hidden hover:underline lg:inline-block">
          About
        </button>
      </div>
      <div className="pr-6 space-x-0 md:space-x-10 lg:pr-0">
        <button className="hover:underline w-max text-secondary-text md:text-chart">
          Sign In
        </button>
        <CTAButton text={'Sign Up'} />
      </div>
      <button
        onClick={handleDrawerClick}
        className="px-1 rounded-md lg:hidden text-secondary-text hover:bg-outline active:bg-primary active:text-white"
      >
        <MenuIcon fontSize="large" />
      </button>
      <Drawer isOpen={isOpen} handleDrawerClick={handleDrawerClick} />
    </header>
  );
};

export default NavBar;

export const Drawer = ({
  isOpen,
  handleDrawerClick,
}: {
  isOpen: boolean;
  handleDrawerClick: () => void;
}) => {
  return (
    <div>
      <SwipeableDrawer
        anchor="left"
        open={isOpen}
        onClose={handleDrawerClick}
        onOpen={handleDrawerClick}
      >
        <div>Mole</div>
      </SwipeableDrawer>
    </div>
  );
};
