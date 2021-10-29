import { render } from '@testing-library/react';
import PricingHero from './PricingHero';

describe('Module PricingHero', () => {
  it('should render component', () => {
    const pricingHero = render(<PricingHero />);
    expect(pricingHero).toMatchSnapshot();
  });
});
