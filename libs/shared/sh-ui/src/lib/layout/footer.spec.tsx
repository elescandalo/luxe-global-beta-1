// libs/shared/sh-ui/src/lib/layout/footer/footer.spec.tsx
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Footer, FooterProps } from './Footer';

describe('Footer', () => {
  const defaultProps: FooterProps = {
    companyName: 'El Escándalo Test',
    startYear: 2023,
  };

  it('deve renderizar o nome da empresa e o intervalo de anos do copyright corretamente', () => {
    render(<Footer {...defaultProps} />);
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByTestId('footer-copyright');
    expect(copyrightText).toHaveTextContent(
      `© 2023 - ${currentYear} El Escándalo Test. Todos los derechos reservados.`
    );
  });

  it('deve exibir "Una marca Luxe Global" quando o nome da empresa não for "Luxe Global"', () => {
    render(<Footer {...defaultProps} />);
    const copyrightText = screen.getByTestId('footer-copyright');
    expect(copyrightText).toHaveTextContent('• Una marca Luxe Global.');
  });

  it('NÃO deve exibir "Una marca Luxe Global" quando o nome da empresa for "Luxe Global"', () => {
    render(<Footer {...defaultProps} companyName="Luxe Global" />);
    const copyrightText = screen.getByTestId('footer-copyright');
    expect(copyrightText).not.toHaveTextContent('• Una marca Luxe Global.');
  });

  it('deve renderizar os links legais padrão se nenhum for fornecido', () => {
    render(<Footer {...defaultProps} />);
    expect(
      screen.getByRole('link', { name: 'Términos y Condiciones' })
    ).toHaveAttribute('href', '/terminos-y-condiciones');
    expect(
      screen.getByRole('link', { name: 'Política de Privacidad' })
    ).toHaveAttribute('href', '/politica-de-privacidad');
  });

  it('deve renderizar os links legais customizados quando fornecidos', () => {
    const customLinks = [{ href: '/custom', label: 'Custom Link' }];
    render(<Footer {...defaultProps} legalLinks={customLinks} />);
    expect(screen.getByRole('link', { name: 'Custom Link' })).toHaveAttribute(
      'href',
      '/custom'
    );
    expect(
      screen.queryByRole('link', { name: 'Términos y Condiciones' })
    ).not.toBeInTheDocument();
  });

  it('deve renderizar a mensagem padrão para adultos', () => {
    render(<Footer {...defaultProps} />);
    expect(screen.getByTestId('footer-adults-only')).toBeInTheDocument();
    expect(screen.getByTestId('footer-adults-only')).toHaveTextContent(
      /adultos \(18\+\)/
    );
  });

  it('deve renderizar a seção legal customizada quando fornecida', () => {
    const CustomSection = () => (
      <div data-testid="custom-legal">Conteúdo Customizado</div>
    );
    render(<Footer {...defaultProps} customLegalSection={<CustomSection />} />);
    expect(screen.getByTestId('custom-legal')).toBeInTheDocument();
    expect(screen.getByText('Conteúdo Customizado')).toBeInTheDocument();
  });
});
// libs/shared/sh-ui/src/lib/layout/footer/footer.spec.tsx
