import AfterBeforeWrapper from '@/components/shared/after-before-wrapper';
import CollaborateButton from '@/components/shared/collaborate-button';
import { Badge } from '@/components/ui/badge';
import { portfolios } from '@/constants/portfolios';
import { cn } from '@/lib/utils';
import PortfolioCard from './portfolio-card';
import PortfolioMotionWrapper from './portfolio-motion-wrapper';

const Portfolios = () => {
  return (
    <section
      id='portfolios'
      className='bg-transparent max-w-(--breakpoint-xl)x mx-auto px-4x sm:px-6x py-10'>
      <div className='flex flex-col items-center justify-center w-full gap-8 sm:gap-12'>
        {/* Heading */}
        <div className='flex flex-col items-center justify-center gap-4 duration-700 ease-in-out animate-in fade-in slide-in-from-top-8'>
          {/* Badge */}
          <AfterBeforeWrapper className='py-1'>
            <Badge
              variant={'outline'}
              className='px-3 py-1 text-sm font-normal h-7'>
              Portfolio
            </Badge>
          </AfterBeforeWrapper>
          {/* Heading */}
          <div className='max-w-xs mx-auto text-center sm:max-w-2xl'>
            <AfterBeforeWrapper>
              <h2 className='text-3xl font-semibold text-foreground sm:text-5xl'>
                How we transformed a small business’s online presence
              </h2>
            </AfterBeforeWrapper>
          </div>
        </div>
        {/* portfolio */}

        {/* <AfterBeforeWrapper> */}
        <div className='grid w-full grid-cols-1 gap-6 p-3 md:grid-cols-2 md:gap-x-7 md:gap-y-8 bg-muted-foreground/10 dark:bg-muted-foreground/25'>
          {portfolios.slice(0, 4).map((item, index) => (
            <PortfolioMotionWrapper key={item.id} index={index}>
              <LinearGradientBackground className='p-4'>
                <PortfolioCard {...item} />
              </LinearGradientBackground>
            </PortfolioMotionWrapper>
          ))}
        </div>
        {/* </AfterBeforeWrapper> */}

        <AfterBeforeWrapper className='py-1'>
          <CollaborateButton asLink href='/portfolios' prefetch={true}>
            View More
          </CollaborateButton>
        </AfterBeforeWrapper>
      </div>
    </section>
  );
};

export default Portfolios;

function DottedBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'h-full w-full relative overflow-hidden rounded-lg bg-gray-950/2.5 after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:inset-ring after:inset-ring-gray-950/5 dark:after:inset-ring-white/10 bg-[radial-gradient(var(--pattern-fg)_1px,transparent_0)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10',
        className,
      )}>
      {children}
    </div>
  );
}

function LinearGradientBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        `relative h-full w-full border-(--pattern-fg) bg-[repeating-linear-gradient(81deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-foreground)]/15 max-lg:border-t lg:border-l dark:[--pattern-fg:var(--color-foreground)]/15`,
        className,
      )}>
      {children}
    </div>
  );
}
