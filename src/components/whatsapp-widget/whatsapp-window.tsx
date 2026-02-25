'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useWhatsappLink } from '@/hooks/use-whatsapp-link';
import { SendHorizontal } from 'lucide-react';
import { useState } from 'react';

interface WhatsAppWindowProps {
  number: string;
  message?: string;
  title?: string;
  subtitle?: string;
  avatar?: string;
  companyName?: string;
  placeholder?: string;
}

export function WhatsAppWindow({
  number,
  message: initialMessage = '',
  title = 'Chat with us',
  subtitle = 'Typically replies in minutes',
  avatar,
  companyName = 'Support',
  placeholder = 'Type a message...',
}: WhatsAppWindowProps) {
  const [currentMessage, setCurrentMessage] = useState(initialMessage);
  const link = useWhatsappLink({ number, message: currentMessage });

  const handleSend = () => {
    window.open(link, '_blank');
  };

  return (
    <div className='flex flex-col w-full rounded-lg shadow-xl border bg-card'>
      {/* Header */}
      <div className='bg-green-700 dark:bg-green-950 p-4 text-primary-foreground flex items-center gap-3'>
        <Avatar className='h-10 w-10 ring-2 ring-primary-foreground/20'>
          <AvatarImage src={avatar} alt={companyName} />
          <AvatarFallback className='bg-primary-foreground/10 text-xs text-primary-foreground'>
            {companyName.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className='flex flex-col'>
          <span className='font-semibold text-sm leading-tight'>{title}</span>
          <span className='text-[10px] opacity-80 leading-tight'>
            {subtitle}
          </span>
        </div>
      </div>

      {/* Body / Chat Area (Placeholder) */}
      <div className='flex-1 p-4 min-h-fit bg-[url("/whatsapp-bg.png")] relative'>
        <div className='bg-card p-3 rounded-lg rounded-tl-none shadow-sm inline-block text-xs max-w-[80%]'>
          <p className='font-medium mb-1 text-primary/70'>{companyName}</p>
          <p>
            Hi! How can we help you today? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Doloremque, id nisi a quia distinctio
            adipisci in illo blanditiis expedita perspiciatis sint nobis
            officiis qui cupiditate. Sunt illum quidem incidunt nam!
          </p>
        </div>
      </div>

      {/* Footer / Input */}
      <div className='p-3 border-t bg-card flex items-center gap-2'>
        <Input
          placeholder={placeholder}
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className='flex-1 text-sm h-9 bg-muted/50 focus-visible:ring-primary/30'
        />
        <Button
          size='icon'
          variant='ghost'
          className='h-9 w-9 text-primary'
          onClick={handleSend}>
          <SendHorizontal className='h-5 w-5' />
        </Button>
      </div>
    </div>
  );
}
