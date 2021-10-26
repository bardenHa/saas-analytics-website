import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Module Footer', () => {
  it('should render component', () => {
    const footer = render(<Footer />);
    expect(footer).toMatchSnapshot();
  });
});
