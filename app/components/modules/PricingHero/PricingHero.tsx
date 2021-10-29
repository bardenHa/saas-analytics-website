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
      <div className="flex max-w-2xl justify-evenly">
        <PlanCard />
      </div>
    </div>
  );
};

export default PricingHero;

const PlanCard = () => {
  return (
    <div className="flex flex-col p-12 text-center w-80 bg-dark-card rounded-3xl">
      <h3 className="text-3xl font-bold">Starter</h3>
      <p className="pt-2 pb-10 text-lg text-secondary-text">up to 3 users</p>
      <hr className="border-divider-color" />
      <h4 className="pt-10 text-6xl font-bold">
        <span className="text-3xl">£</span>29
      </h4>
      <p className="pt-2 text-secondary-text">per month</p>
      <button className="py-2 mt-10 mb-2 border border-solid rounded-full hover:border-opacity-0 active:bg-primary-hover hover:bg-primary border-divider-color">
        Order
      </button>
    </div>
  );
};
