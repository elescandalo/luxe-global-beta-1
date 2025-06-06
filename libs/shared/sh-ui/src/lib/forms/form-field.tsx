// libs/shared/sh-ui/src/lib/forms/form-field/FormField.tsx
import React from 'react';

/**
 * Propriedades para o componente FormField.
 */
export interface FormFieldProps {
  /**
   * O texto a ser exibido no label.
   */
  label: string;
  /**
   * O `htmlFor` do label, deve corresponder ao `id` do input.
   */
  htmlFor: string;
  /**
   * O componente de input (ou select, textarea, etc.) a ser renderizado.
   * É passado como filho.
   */
  children: React.ReactNode;
  /**
   * A mensagem de erro a ser exibida abaixo do campo, se houver.
   */
  error?: string;
  /**
   * Classes CSS adicionais para o container do FormField.
   */
  className?: string;
}

/**
 * Um componente wrapper para campos de formulário que agrupa de forma consistente
 * um label, o campo de input (passado como `children`) e uma mensagem de erro opcional.
 */
export const FormField: React.FC<FormFieldProps> = ({
  label,
  htmlFor,
  children,
  error,
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-brand-neutral mb-1"
      >
        {label}
      </label>
      {children}
      {error && (
        <p
          className="mt-1 text-xs text-red-600"
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;
// libs/shared/sh-ui/src/lib/forms/form-field/FormField.tsx
