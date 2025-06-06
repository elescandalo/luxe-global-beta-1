// libs/shared/sh-ui/src/lib/layout/header/Header.tsx
import React from 'react';

/**
 * Define a estrutura de um link para a navegação do header.
 */
export interface HeaderLink {
  href: string;
  label: string;
}

/**
 * Propriedades para o componente Header.
 */
export interface HeaderProps {
  /**
   * Título do site, exibido se não houver logo.
   * @default 'Luxe Global'
   */
  siteTitle?: string;
  /**
   * Classe de cor do Tailwind para a primeira letra do título.
   * @default 'text-brand-primary'
   */
  siteTitleFirstLetterColor?: string;
  /**
   * URL para a imagem do logo. Se fornecido, substitui o `siteTitle` estilizado.
   */
  logoUrl?: string;
  /**
   * Um array de links para a navegação principal.
   */
  navLinks?: HeaderLink[];
  /**
   * Classe de cor de fundo do Tailwind CSS.
   * @default 'bg-brand-neutral'
   */
  bgColor?: string;
  /**
   * Classe de cor de texto principal do Tailwind CSS.
   * @default 'text-brand-neutral-extralight'
   */
  textColor?: string;
  /**
   * Classe de cor para os links de navegação.
   * @default 'text-brand-neutral-extralight'
   */
  linkColor?: string;
  /**
   * Classe de cor para o estado hover dos links.
   * @default 'hover:text-brand-accent'
   */
  linkHoverColor?: string;
  /**
   * Um nó React para ser inserido no lado direito do header.
   * Ideal para botões de login, perfil, etc.
   */
  customRightSlot?: React.ReactNode;
}

/**
 * Renderiza o cabeçalho principal e responsivo da aplicação.
 * É flexível para exibir um logo ou um título, e pode acomodar
 * uma seção de ações customizável.
 */
export const Header: React.FC<HeaderProps> = ({
  siteTitle = 'Luxe Global',
  siteTitleFirstLetterColor = 'text-brand-primary',
  logoUrl,
  navLinks = [],
  bgColor = 'bg-brand-neutral/95', // Fundo com leve transparência para efeito de profundidade
  textColor = 'text-brand-neutral-extralight',
  linkColor = 'text-gray-300',
  linkHoverColor = 'hover:text-white',
  customRightSlot,
}) => {
  const firstLetter = siteTitle.substring(0, 1);
  const restOfTitle = siteTitle.substring(1);

  return (
    <header
      className={`${bgColor} ${textColor} p-4 shadow-lg sticky top-0 z-50 backdrop-blur-sm`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Título - Link para a Home */}
        <a href="/" className="flex items-center group shrink-0">
          {logoUrl ? (
            <img
              src={logoUrl}
              alt={`${siteTitle} Logo`}
              className="h-8 md:h-10 w-auto mr-3"
            />
          ) : (
            <span
              className={`text-3xl md:text-4xl font-bold ${siteTitleFirstLetterColor}`}
            >
              {firstLetter}
            </span>
          )}
          <span
            className={`text-xl md:text-2xl font-semibold ml-1 ${textColor}`}
          >
            {restOfTitle}
          </span>
        </a>

        {/* Navegação Principal - Oculta em telas pequenas */}
        {navLinks.length > 0 && (
          <nav
            aria-label="Navegação Principal"
            className="hidden lg:flex flex-grow justify-center"
          >
            <ul className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-sm font-medium ${linkColor} ${linkHoverColor} transition-colors duration-200 tracking-wider`}
                  >
                    {link.label.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Slot Customizável e Menu Mobile */}
        <div className="flex items-center justify-end shrink-0">
          <div className="hidden lg:flex">{customRightSlot}</div>
          {/* TODO: Implementar botão de menu hamburguer para telas menores que controle um drawer/modal de navegação */}
          <div className="lg:hidden">
            {/* Placeholder para o botão de menu hamburguer */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
// libs/shared/sh-ui/src/lib/layout/header/Header.tsx
