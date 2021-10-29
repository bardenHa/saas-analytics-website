type Props = {
  text: string;
  toggleDrawer: () => void;
  color?: 'primary' | 'secondary' | 'base-color';
};

const DrawerButton = ({ text, toggleDrawer, color = 'base-color' }: Props) => {
  const handleClick = (): void => {
    //Would have link to page then toggle drawer off
    toggleDrawer();
  };
  return (
    <button
      onClick={handleClick}
      className={`px-8 py-4 text-2xl transition duration-150 ease-in-out transform hover:scale-105 rounded-lg bg-${color} hover:bg-${
        color === 'base-color' ? 'base-hover' : 'primary-hover'
      }
      }`}
    >
      {text}
    </button>
  );
};

export default DrawerButton;
