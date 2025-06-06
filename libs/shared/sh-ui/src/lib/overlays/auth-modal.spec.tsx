import { render } from '@testing-library/react';

import AuthModal from './auth-modal';

describe('AuthModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AuthModal />);
    expect(baseElement).toBeTruthy();
  });
});
