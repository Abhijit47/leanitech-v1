import { cn } from '@/lib/utils';
import Icon from './icon';

interface WhatsAppButtonProps {
  isOpen: boolean;
  className?: string;
}

export function WhatsAppButton({ isOpen, className }: WhatsAppButtonProps) {
  return (
    <div
      className={cn(
        'flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer',
        isOpen && 'rotate-90',
        className,
      )}>
      <Icon className={'text-white size-12'} fill='currentColor' />
    </div>
  );
}
