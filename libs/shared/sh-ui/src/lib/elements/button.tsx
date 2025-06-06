// libs/shared/sh-ui/src/lib/elements/button/Button.tsx
import React from 'react';
// CORREÇÃO FINAL: O caminho relativo correto baseado na estrutura do snapshot.
import { Spinner } from './spinner';

/**
 * Propriedades para o componente Button.
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * O conteúdo a ser exibido dentro do botão.
   */
  children: React.ReactNode;
  /**
   * A variante visual do botão, para diferentes contextos semânticos.
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  /**
   * O tamanho do botão.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Se `true`, exibe um spinner e desabilita o botão.
   * @default false
   */
  isLoading?: boolean;
  /**
   * Ícone a ser exibido à esquerda do texto.
   */
  leftIcon?: React.ReactNode;
  /**
   * Ícone a ser exibido à direita do texto.
   */
  rightIcon?: React.ReactNode;
}

/**
 * Um componente de botão versátil e reutilizável com múltiplas variantes e estados.
 * Construído sobre o elemento <button> nativo, aceita todas as suas props padrão.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  className = '',
  leftIcon,
  rightIcon,
  ...rest
}) => {
  const isDisabled = isLoading || disabled;

  const baseClasses =
    'inline-flex items-center justify-center font-semibold rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent';

  const variantClasses = {
    primary:
      'bg-brand-primary text-white hover:bg-brand-primary/90 disabled:bg-brand-primary/50',
    secondary:
      'bg-brand-neutral-extralight text-brand-neutral border border-gray-300 hover:bg-gray-200 disabled:bg-gray-100 disabled:text-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 disabled:bg-red-400',
    ghost:
      'bg-transparent text-brand-neutral hover:bg-brand-neutral-extralight/50 disabled:text-gray-400',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const combinedClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    isDisabled ? 'opacity-60 cursor-not-allowed' : '',
    className,
  ]
    .join(' ')
    .trim();

  return (
    <button className={combinedClasses} disabled={isDisabled} {...rest}>
      {isLoading ? (
        <Spinner size="sm" />
      ) : (
        <>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
// libs/shared/sh-ui/src/lib/elements/button/Button.tsx
