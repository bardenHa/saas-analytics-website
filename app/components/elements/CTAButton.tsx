type Props = {
  text: string;
};

const CTAButton = ({ text }: Props) => {
  return (
    <button className="hidden p-2 px-12 border border-solid rounded-full border-outline md:inline-block">
      {text}
    </button>
  );
};

export default CTAButton;
