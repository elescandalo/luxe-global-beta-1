// libs/shared/sh-ui/src/lib/data-display/hero-carousel/HeroCarousel.tsx
'use client';

import { AnimatePresence, motion, PanInfo } from 'framer-motion';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';

/**
 * Define a estrutura de uma imagem para o carrossel.
 */
interface CarouselImage {
  id: string | number;
  src: string;
  alt: string;
}

/**
 * Propriedades para o componente HeroCarousel.
 */
export interface HeroCarouselProps {
  /**
   * Um array de objetos de imagem a serem exibidos no carrossel.
   */
  images: CarouselImage[];
  /**
   * O intervalo em milissegundos para a troca automática de slides.
   * Se não for fornecido ou for 0, a troca automática é desativada.
   * @default 5000
   */
  interval?: number;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

/**
 * Um componente de carrossel de tela cheia, responsivo e animado, ideal para seções "hero".
 * Suporta navegação por arrastar (swipe) e troca automática de slides.
 */
export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  images,
  interval = 5000,
}) => {
  const [[page, direction], setPage] = useState([0, 0]);

  // Garante que o índice sempre esteja dentro dos limites do array de imagens
  const imageIndex =
    images && images.length > 0
      ? ((page % images.length) + images.length) % images.length
      : 0;

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page]
  );

  useEffect(() => {
    // A troca automática só é ativada se houver um intervalo e mais de uma imagem
    if (!interval || !images || images.length <= 1) {
      return;
    }
    const timer = setTimeout(() => paginate(1), interval);
    return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
  }, [page, interval, images, paginate]);

  // Se não houver imagens, exibe uma mensagem ou um placeholder
  if (!images || images.length === 0) {
    return (
      <div className="w-full h-full bg-brand-neutral flex items-center justify-center">
        <p className="text-brand-neutral-light">
          Nenhuma imagem para exibir no carrossel.
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={`${page}-${images[imageIndex]?.id}`}
          className="absolute w-full h-full"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(
            _event: MouseEvent | TouchEvent | PointerEvent,
            { offset, velocity }: PanInfo
          ) => {
            const swipeThreshold = 10000;
            const swipePower = Math.abs(offset.x) * velocity.x;

            if (swipePower < -swipeThreshold) {
              paginate(1);
            } else if (swipePower > swipeThreshold) {
              paginate(-1);
            }
          }}
        >
          <Image
            src={images[imageIndex].src}
            alt={images[imageIndex].alt}
            fill
            style={{ objectFit: 'cover' }}
            priority={imageIndex === 0} // Prioriza o carregamento da primeira imagem
            draggable="false"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroCarousel;
// libs/shared/sh-ui/src/lib/data-display/hero-carousel/HeroCarousel.tsx
