type Props = {
  text: string;
  toggleDrawer: () => void;
  color?: 'primary' | 'secondary' | 'base';
};

const DrawerButton = ({ text, toggleDrawer, color = 'base' }: Props) => {
  const handleClick = (): void => {
    //Would have link to page then toggle drawer off
    toggleDrawer();
  };
  return (
    <button
      onClick={handleClick}
      className={`px-8 py-4 text-2xl transition duration-150 ease-in-out transform hover:scale-105 rounded-lg bg-${color} hover:bg-${
        color === 'base' ? 'base-hover' : 'primary-hover'
      }
      }`}
    >
      {text}
    </button>
  );
};

export default DrawerButton;
