// libs/shared/sh-ui/src/lib/layout/footer/Footer.tsx
import React from 'react';

/**
 * Define a estrutura de um link para o rodapé.
 */
export interface FooterLink {
  href: string;
  label: string;
}

/**
 * Propriedades para o componente Footer.
 */
export interface FooterProps {
  /**
   * O nome da empresa/marca a ser exibido no copyright.
   * @default 'Luxe Global'
   */
  companyName?: string;
  /**
   * O ano de início para o cálculo do copyright.
   * @default Ano atual
   */
  startYear?: number;
  /**
   * Classe de cor do Tailwind CSS para o estado hover dos links.
   * @default 'hover:text-brand-accent'
   */
  brandAccentColorClass?: string;
  /**
   * Um array de links legais a serem exibidos. Se não for fornecido, usa um conjunto padrão.
   */
  legalLinks?: FooterLink[];
  /**
   * Mensagem customizada sobre conteúdo para adultos. Se não fornecida, usa uma padrão.
   */
  adultsOnlyMessage?: string;
  /**
   * Classe de cor de fundo do Tailwind CSS para o rodapé.
   * @default 'bg-brand-neutral'
   */
  bgColor?: string;
  /**
   * Classe de cor de texto do Tailwind CSS para o rodapé.
   * @default 'text-brand-neutral-light'
   */
  textColor?: string;
  /**
   * Permite injetar um nó React customizado na seção legal,
   * útil para banners de consentimento de cookies ou selos.
   */
  customLegalSection?: React.ReactNode;
}

/**
 * Renderiza o rodapé padronizado para todas as aplicações do ecossistema Luxe Global.
 * É altamente configurável para se adaptar ao contexto de cada marca/agência.
 */
export const Footer: React.FC<FooterProps> = ({
  companyName = 'Luxe Global',
  startYear = new Date().getFullYear(),
  brandAccentColorClass = 'hover:text-brand-accent',
  legalLinks = [
    { href: '/terminos-y-condiciones', label: 'Términos y Condiciones' },
    { href: '/politica-de-privacidad', label: 'Política de Privacidad' },
    { href: '/politica-de-cookies', label: 'Política de Cookies' },
  ],
  adultsOnlyMessage = 'Este sitio está destinado únicamente a adultos (18+). Al continuar, usted confirma ser mayor de edad.',
  bgColor = 'bg-brand-neutral',
  textColor = 'text-brand-neutral-light',
  customLegalSection,
}) => {
  const currentYear = new Date().getFullYear();
  const copyrightYear =
    startYear === currentYear ? currentYear : `${startYear} - ${currentYear}`;

  // Adiciona a menção "Una marca Luxe Global" apenas se o nome da empresa não for "Luxe Global".
  const umaMarcaGlobalText =
    companyName !== 'Luxe Global' ? ` • Una marca Luxe Global.` : '';

  return (
    <footer className={`${bgColor} ${textColor} py-10 px-4 sm:px-6 lg:px-8`}>
      <div className="container mx-auto text-center space-y-4">
        {legalLinks && legalLinks.length > 0 && (
          <nav
            aria-label="Navegación legal"
            className="flex justify-center items-center flex-wrap gap-x-4 gap-y-2"
          >
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs sm:text-sm ${brandAccentColorClass} transition-colors duration-200`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {customLegalSection && (
          <div className="custom-legal-section">{customLegalSection}</div>
        )}

        <div className="text-xs space-y-2">
          <p data-testid="footer-copyright">
            © {copyrightYear} {companyName}. Todos los derechos reservados.
            {umaMarcaGlobalText}
          </p>
          {adultsOnlyMessage && (
            <p data-testid="footer-adults-only">{adultsOnlyMessage}</p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// libs/shared/sh-ui/src/lib/layout/footer/Footer.tsx
