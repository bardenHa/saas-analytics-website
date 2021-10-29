import { render } from '@testing-library/react';
import LandingHero from './LandingHero';

describe('Module LandingHero', () => {
  it('should render component', () => {
    const landingHero = render(<LandingHero />);
    expect(landingHero).toMatchSnapshot();
  });
});
