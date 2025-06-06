import { render } from '@testing-library/react';

import PaginationControls from './pagination-controls';

describe('PaginationControls', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PaginationControls />);
    expect(baseElement).toBeTruthy();
  });
});
