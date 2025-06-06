import { render } from '@testing-library/react';

import PanicButton from './panic-button';

describe('PanicButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PanicButton />);
    expect(baseElement).toBeTruthy();
  });
});
