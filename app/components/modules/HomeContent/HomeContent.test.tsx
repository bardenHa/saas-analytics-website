import { render } from '@testing-library/react';
import HomeContent from './HomeContent';

describe('Module HomeContent', () => {
  it('should render component', () => {
    const homecontent = render(<HomeContent />);
    expect(homecontent).toMatchSnapshot();
  });
});
