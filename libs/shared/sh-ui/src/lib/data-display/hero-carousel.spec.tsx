// libs/shared/sh-ui/src/lib/data-display/hero-carousel.spec.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroCarousel } from './hero-carousel';

describe('HeroCarousel', () => {
  const mockImages = [
    { id: 1, src: '/test-image-1.jpg', alt: 'Test Image 1' },
    { id: 2, src: '/test-image-2.jpg', alt: 'Test Image 2' },
  ];

  it('deve renderizar com sucesso quando as imagens são fornecidas', () => {
    render(<HeroCarousel images={mockImages} />);
    const firstImage = screen.getByAltText('Test Image 1');
    expect(firstImage).toBeInTheDocument();
  });

  it('deve exibir uma mensagem de fallback se o array de imagens estiver vazio', () => {
    render(<HeroCarousel images={[]} />);
    expect(screen.getByText(/Nenhuma imagem para exibir/i)).toBeInTheDocument();
  });
});
// libs/shared/sh-ui/src/lib/data-display/hero-carousel.spec.tsx
