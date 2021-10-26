import Image from 'next/image';
import CTAButton from '@element/CTAButton';
import DrawerButton from '@element/DrawerButton';
import MenuIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { SwipeableDrawer } from '@mui/material';
import { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDrawerClick = (): void => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="sticky top-0 z-20 flex items-center w-full px-4 py-6 text-base md:py-12 text-chart md:px-0">
      <Link href="/">
        <a className="flex items-center px-1 lg:px-0">
          <Image
            src="/assets/logo/main.png"
            alt="analytics logo"
            width={184}
            height={40}
          />
        </a>
      </Link>
      <div className="flex-1 pl-20 space-x-10">
        <a href="#" className="hidden hover:text-secondary lg:inline-block">
          Products
        </a>
        <a href="#" className="hidden hover:text-secondary lg:inline-block">
          Pricing
        </a>
        <a href="#" className="hidden hover:text-secondary lg:inline-block">
          FAQ
        </a>
        <a href="#" className="hidden hover:text-secondary lg:inline-block">
          Blog
        </a>
        <a href="#" className="hidden hover:text-secondary lg:inline-block">
          About
        </a>
      </div>
      <div className="pr-6 space-x-0 md:space-x-10 lg:pr-0">
        <button className="hover:text-secondary w-max text-secondary-text md:text-chart">
          Sign In
        </button>
        <CTAButton text={'Sign Up'} />
      </div>
      <button
        onClick={handleDrawerClick}
        className="px-1 rounded-md lg:hidden text-secondary-text md:hover:bg-outline active:bg-primary active:text-white"
      >
        <MenuIcon fontSize="large" />
      </button>
      <Drawer isOpen={isOpen} toggleDrawer={handleDrawerClick} />
    </header>
  );
};

export default NavBar;

export const Drawer = ({
  isOpen,
  toggleDrawer,
}: {
  isOpen: boolean;
  toggleDrawer: () => void;
}) => {
  return (
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
    >
      <div className="flex flex-col w-screen h-full p-4 space-y-4 text-white bg-chart md:w-96">
        <button
          onClick={toggleDrawer}
          className="self-end w-10 py-2 text-center text-primary-text"
        >
          <CloseRoundedIcon fontSize="large" />
        </button>
        <DrawerButton text="Products" toggleDrawer={toggleDrawer} />
        <DrawerButton text="Pricing" toggleDrawer={toggleDrawer} />
        <DrawerButton text="FAQ" toggleDrawer={toggleDrawer} />
        <DrawerButton text="Blog" toggleDrawer={toggleDrawer} />
        <DrawerButton text="About" toggleDrawer={toggleDrawer} />
        <DrawerButton
          text="Sign Up"
          toggleDrawer={toggleDrawer}
          color="primary"
        />
      </div>
    </SwipeableDrawer>
  );
};
