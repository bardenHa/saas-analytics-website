type Props = {
  text: string;
};

const CTAButton = ({ text }: Props) => {
  return (
    <button className="p-2 px-12 border border-solid rounded-full border-outline">
      {text}
    </button>
  );
};

export default CTAButton;
