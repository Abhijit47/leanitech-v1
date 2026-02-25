import { useMemo } from 'react';

export interface UseWhatsappLinkProps {
  number: string;
  message?: string;
}

export const useWhatsappLink = ({ number, message }: UseWhatsappLinkProps) => {
  const link = useMemo(() => {
    const cleanNumber = number.replace(/[^\d]/g, '');
    const encodedMessage = message ? encodeURIComponent(message) : '';

    // Check if user is on mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    const baseUrl = isMobile ? 'https://api.whatsapp.com/send' : 'https://web.whatsapp.com/send';

    return `${baseUrl}?phone=${cleanNumber}${encodedMessage ? `&text=${encodedMessage}` : ''}`;
  }, [number, message]);

  return link;
};
