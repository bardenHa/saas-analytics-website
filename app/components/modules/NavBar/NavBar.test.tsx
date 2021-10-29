import { render } from '@testing-library/react';
import NavBar from './NavBar';

describe('Module NavBar', () => {
  it('should render component', () => {
    const navbar = render(<NavBar />);
    expect(navbar).toMatchSnapshot();
  });
});
