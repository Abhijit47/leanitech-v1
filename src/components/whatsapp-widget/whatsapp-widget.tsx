'use client';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { WhatsAppButton } from './whatsapp-button';
import { WhatsAppWindow } from './whatsapp-window';

export interface WhatsAppWidgetProps {
  number: string;
  message?: string;
  title?: string;
  subtitle?: string;
  avatar?: string;
  companyName?: string;
  placeholder?: string;
  className?: string;
}

export function WhatsAppWidget({
  number,
  message,
  title,
  subtitle,
  avatar,
  companyName,
  placeholder,
  className,
}: WhatsAppWidgetProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn('fixed bottom-6 right-6 z-50', className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button className='outline-none focus:outline-none ring-0 focus:ring-0'>
            <WhatsAppButton isOpen={open} />
          </button>
        </PopoverTrigger>
        <PopoverContent
          side='top'
          align='end'
          className='p-0 border-none bg-transparent shadow-none'
          sideOffset={16}>
          <WhatsAppWindow
            number={number}
            message={message}
            title={title}
            subtitle={subtitle}
            avatar={avatar}
            companyName={companyName}
            placeholder={placeholder}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
