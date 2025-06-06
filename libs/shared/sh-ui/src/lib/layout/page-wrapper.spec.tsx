import { render } from '@testing-library/react';

import PageWrapper from './page-wrapper';

describe('PageWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageWrapper />);
    expect(baseElement).toBeTruthy();
  });
});
