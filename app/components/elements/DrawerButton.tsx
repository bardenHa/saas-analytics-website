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
      className={`px-8 py-4 text-2xl rounded-lg bg-${color} hover:bg-${
        color === 'base' ? 'secondary-text' : color
      }
      }`}
    >
      {text}
    </button>
  );
};

export default DrawerButton;
