// libs/shared/sh-ui/src/lib/elements/spinner/Spinner.tsx
import React from 'react';

/**
 * Propriedades para o componente Spinner.
 */
export interface SpinnerProps {
  /**
   * O tamanho do spinner.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Classe de cor do Tailwind CSS para o spinner.
   * @default 'text-brand-primary'
   */
  colorClass?: string;
  /**
   * Classes CSS adicionais para customização.
   */
  className?: string;
}

/**
 * Renderiza um indicador visual de carregamento (spinner) animado.
 * É um SVG estilizado com Tailwind CSS, leve e performático.
 */
export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  colorClass = 'text-brand-primary',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  const combinedClasses = [
    'animate-spin',
    sizeClasses[size],
    colorClass,
    className,
  ]
    .join(' ')
    .trim();

  return (
    <svg
      className={combinedClasses}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-label="Carregando..."
      role="status"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

export default Spinner;
// libs/shared/sh-ui/src/lib/elements/spinner/Spinner.tsx
