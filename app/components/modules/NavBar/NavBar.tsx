import Image from 'next/image';
import Logo from '/public/assets/logo/main.png';
import CTAButton from '@element/CTAButton';

const NavBar = () => (
  <header className="top-0 flex items-center w-full py-12 text-base text-chart">
    <Image src={Logo} alt="analytics logo" width={184} height={40} />
    <div className="flex-1 pl-20 space-x-10">
      <button className="hover:underline">Products</button>
      <button className="hover:underline">Pricing</button>
      <button className="hover:underline">FAQ</button>
      <button className="hover:underline">Blog</button>
      <button className="hover:underline">About</button>
    </div>
    <div>
      <CTAButton text={'Sign Up'} />
    </div>
  </header>
);

export default NavBar;
