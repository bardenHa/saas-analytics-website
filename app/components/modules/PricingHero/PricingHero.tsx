const PricingHero = () => {
  return (
    <div className="flex flex-col items-center justify-between px-4 py-12 space-y-16 text-white md:py-16 md:px-0 ">
      <div className="max-w-xl md:text-center">
        <h2 className="text-3xl font-bold md:text-5xl">Pricing Plans</h2>
        <p className="pt-6 text-sm text-secondary-text md:text-lg md:pt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est.
        </p>
      </div>
      <div className="flex flex-col space-y-20 lg:space-y-0 lg:space-x-20 lg:flex-row justify-evenly flex-nowrap">
        <PlanCard
          title="Starter"
          excerpt="up to 3 users"
          price={29}
          theme="dark"
        />
        <PlanCard
          title="Standard"
          excerpt="up to 20 users"
          price={99}
          theme="light"
        />
        <PlanCard
          title="Premium"
          excerpt="up to 200 users"
          price={299}
          theme="dark"
        />
      </div>
    </div>
  );
};

export default PricingHero;

const PlanCard = ({
  title,
  excerpt,
  price,
  theme,
}: {
  title: string;
  excerpt: string;
  price: number;
  theme: 'dark' | 'light';
}) => {
  if (theme === 'dark') {
    return (
      <div className="flex flex-col p-12 text-center shadow-lg w-80 bg-dark-card rounded-3xl">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="pt-2 pb-10 text-lg text-secondary-text">{excerpt}</p>
        <hr className="border-divider-color" />
        <h4 className="pt-10 text-6xl font-bold">
          <span className="text-3xl tracking-wide">£</span>
          {price}
        </h4>
        <p className="pt-2 text-secondary-text">per month</p>
        <button className="py-3 mt-10 mb-2 transition duration-150 ease-in-out transform border border-solid rounded-full hover:scale-105 hover:border-opacity-0 active:bg-primary-hover hover:bg-primary border-divider-color">
          Order
        </button>
      </div>
    );
  }
  return (
    <div className="flex flex-col p-12 text-center bg-white shadow-lg w-80 rounded-3xl">
      <h3 className="text-3xl font-bold text-primary-text">{title}</h3>
      <p className="pt-2 pb-10 text-lg text-secondary-text">{excerpt}</p>
      <hr className="border-divider-color-light" />
      <h4 className="pt-10 text-6xl font-bold text-primary-text">
        <span className="text-3xl tracking-wide">£</span>
        {price}
      </h4>
      <p className="pt-2 text-secondary-text">per month</p>
      <button className="py-3 mt-10 mb-2 transition duration-150 ease-in-out transform border border-opacity-0 border-solid rounded-full active:bg-primary-hover bg-primary border-divider-color hover:scale-105">
        Order
      </button>
    </div>
  );
};
