'use client';

import { motion } from 'motion/react';
import {
  type ComponentPropsWithoutRef,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';

import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';

export interface AnimatedGridPatternProps extends ComponentPropsWithoutRef<'svg'> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: string | number | undefined;
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
}

function getPos(
  dimensions: { width: number; height: number },
  width: number,
  height: number,
) {
  return [
    Math.floor((Math.random() * dimensions.width) / width),
    Math.floor((Math.random() * dimensions.height) / height),
  ];
}

// Adjust the generateSquares function to return objects with an id, x, and y
function generateSquares(count: number) {
  if (typeof window === 'undefined') {
    return [];
  }

  return Array.from({ length: count }, (_, i) => ({
    id: i,
    pos: getPos(
      { width: window.innerWidth, height: window.innerHeight },
      40,
      40,
    ),
  }));
}

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className,
  maxOpacity = 0.5,
  duration = 4,
  ...props
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState(() => generateSquares(numSquares));

  // Function to update a single square's position
  const updateSquarePosition = (id: number) => {
    setSquares((currentSquares) =>
      currentSquares.map((sq) =>
        sq.id === id
          ? {
              ...sq,
              pos: getPos(
                { width: dimensions.width, height: dimensions.height },
                width,
                height,
              ),
            }
          : sq,
      ),
    );
  };

  // Update squares to animate in
  useEffect(() => {
    setSquares(generateSquares(numSquares));
  }, [numSquares]);

  // Resize observer to update container dimensions
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    const element = containerRef.current;
    if (element) {
      resizeObserver.observe(element);
    }

    return () => {
      if (element) {
        resizeObserver.unobserve(element);
      }
    };
  }, [containerRef]);

  return (
    <svg
      ref={containerRef}
      aria-hidden='true'
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30',
        className,
      )}
      {...props}>
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits='userSpaceOnUse'
          x={x}
          y={y}>
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill='none'
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width='100%' height='100%' fill={`url(#${id})`} />
      <svg x={x} y={y} className='overflow-visible'>
        {squares.map(({ pos: [x, y], id }, index) => (
          <motion.rect
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{
              duration,
              repeat: 1,
              delay: index * 0.1,
              repeatType: 'reverse',
            }}
            onAnimationComplete={() => updateSquarePosition(id)}
            key={`${x}-${y}-${index}`}
            width={width - 1}
            height={height - 1}
            x={x * width + 1}
            y={y * height + 1}
            fill='currentColor'
            strokeWidth='0'
          />
        ))}
      </svg>
    </svg>
  );
}

export const LazyAnimatedGridPattern = dynamic(
  () =>
    import('./animated-grid-pattern').then((mod) => mod.AnimatedGridPattern),
  {
    ssr: false,
  },
);
