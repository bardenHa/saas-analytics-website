import { render } from '@testing-library/react';
import Construction from './Construction';

describe('Module Construction', () => {
  it('should render component', () => {
    const construction = render(<Construction />);
    expect(construction).toMatchSnapshot();
  });
});
