// libs/shared/sh-ui/src/lib/layout/header/header.spec.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header, HeaderProps } from './Header';

describe('Header', () => {
  const defaultProps: HeaderProps = {
    siteTitle: 'Luxe Global',
  };

  it('deve renderizar o título estilizado quando não houver URL de logo', () => {
    render(<Header {...defaultProps} />);
    const firstLetter = screen.getByText('L');
    expect(firstLetter).toBeInTheDocument();
    expect(firstLetter).toHaveClass('text-brand-primary');
    expect(screen.getByText('uxe Global')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('deve renderizar a imagem do logo quando a URL for fornecida', () => {
    render(<Header {...defaultProps} logoUrl="/logo.png" />);
    const logo = screen.getByRole('img', { name: /Luxe Global Logo/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/logo.png');
    expect(
      screen.queryByText('L', { selector: 'span.text-brand-primary' })
    ).not.toBeInTheDocument();
  });

  it('deve renderizar os links de navegação em maiúsculas', () => {
    const navLinks = [{ href: '/about', label: 'Sobre' }];
    render(<Header {...defaultProps} navLinks={navLinks} />);
    const link = screen.getByRole('link', { name: 'SOBRE' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/about');
  });

  it('deve renderizar o conteúdo do slot customizável à direita', () => {
    const CustomSlot = () => <button>Login</button>;
    render(<Header {...defaultProps} customRightSlot={<CustomSlot />} />);
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });
});
// libs/shared/sh-ui/src/lib/layout/header/header.spec.tsx
