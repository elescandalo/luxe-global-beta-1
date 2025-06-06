// libs/shared/sh-ui/src/lib/forms/form-field.spec.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FormField } from './form-field';

describe('FormField', () => {
  it('deve renderizar o label, o filho (input) e nenhuma mensagem de erro', () => {
    render(
      <FormField label="Nome" htmlFor="name">
        <input id="name" type="text" />
      </FormField>
    );

    expect(screen.getByLabelText('Nome')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('deve renderizar a mensagem de erro quando fornecida', () => {
    render(
      <FormField label="Email" htmlFor="email" error="Email inválido">
        <input id="email" type="email" />
      </FormField>
    );

    const errorAlert = screen.getByRole('alert');
    expect(errorAlert).toBeInTheDocument();
    expect(errorAlert).toHaveTextContent('Email inválido');
  });
});
// libs/shared/sh-ui/src/lib/forms/form-field.spec.tsx
