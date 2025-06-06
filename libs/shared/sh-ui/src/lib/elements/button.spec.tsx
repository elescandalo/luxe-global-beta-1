// libs/shared/sh-ui/src/lib/elements/button/button.spec.tsx
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './button'; // CORREÇÃO: Importação relativa do componente

// Mock do Spinner para isolar o teste do botão
jest.mock('./spinner', () => ({
  Spinner: () => <div data-testid="spinner">Carregando...</div>,
}));

describe('Button', () => {
  it('deve renderizar com texto filho', () => {
    render(<Button>Click Me</Button>);
    expect(
      screen.getByRole('button', { name: /Click Me/i })
    ).toBeInTheDocument();
  });

  it('deve aplicar a classe da variante "primary" por padrão', () => {
    render(<Button>Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-brand-primary');
  });

  it('deve estar desabilitado quando a prop "disabled" for verdadeira', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('deve exibir o Spinner e estar desabilitado quando "isLoading" for verdadeiro', () => {
    render(<Button isLoading>Loading</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.queryByText('Loading')).not.toBeInTheDocument();
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('deve chamar a função onClick quando clicado', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
// libs/shared/sh-ui/src/lib/elements/button/button.spec.tsx
