import { Fragment } from 'react';

export default function LogoCloud1() {
  return (
    <section className='py-16'>
      <div className='mx-auto max-w-5xl w-full'>
        <h2 className='text-center text-lg font-medium'>
          Your favorite companies are our partners.
        </h2>
        <div className='**:fill-foreground mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12'>
          {Array.from({ length: 10 }).map(() => (
            <Fragment key={crypto.randomUUID()}>
              <svg
                width='91'
                height='80'
                viewBox='0 0 91 80'
                fill='none'
                className={'size-8 md:size-12 lg:size-16'}>
                <g clipPath='url(#clip0_906_1839)'>
                  <path d='M56.9686 0H90.4318V80L56.9686 0Z' fill='#EB1000' />
                  <path d='M33.4632 0H0V80L33.4632 0Z' fill='#EB1000' />
                  <path
                    d='M45.1821 29.4668L66.5199 80.0002H52.5657L46.1982 63.9461H30.6182L45.1821 29.4668Z'
                    fill='#EB1000'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_906_1839'>
                    <rect width='90.4318' height='80' fill='white' />
                  </clipPath>
                </defs>
              </svg>

              <svg
                fill='#00A82D'
                role='img'
                viewBox='0 0 24 24'
                className={'size-8 md:size-12 lg:size-16'}>
                <title>Evernote</title>
                <path d='M8.222 5.393c0 .239-.02.637-.256.895-.257.24-.652.259-.888.259H4.552c-.73 0-1.165 0-1.46.04-.159.02-.356.1-.455.14-.04.019-.04 0-.02-.02L8.38.796c.02-.02.04-.02.02.02-.04.099-.118.298-.138.457-.04.298-.04.736-.04 1.472v2.647zm5.348 17.869c-.67-.438-1.026-1.015-1.164-1.373a2.924 2.924 0 01-.217-1.095 3.007 3.007 0 013-3.004c.493 0 .888.398.888.895a.88.88 0 01-.454.776c-.099.06-.237.1-.336.12-.098.02-.473.06-.65.218-.198.16-.356.418-.356.697 0 .298.118.577.316.776.355.358.829.557 1.342.557a2.436 2.436 0 002.427-2.447c0-1.214-.809-2.29-1.875-2.766-.158-.08-.414-.14-.651-.2a8.04 8.04 0 00-.592-.1c-.829-.1-2.901-.755-3.04-2.605 0 0-.611 2.785-1.835 3.54-.118.06-.276.12-.454.16-.177.04-.374.06-.434.06-1.993.12-4.105-.517-5.565-2.03 0 0-.987-.815-1.5-3.103-.118-.558-.355-1.553-.493-2.488-.06-.338-.08-.597-.099-.836 0-.975.592-1.631 1.342-1.73h4.026c.69 0 1.086-.18 1.342-.42.336-.317.415-.775.415-1.312V1.354C9.05.617 9.703 0 10.669 0h.474c.197 0 .434.02.651.04.158.02.296.06.533.12 1.204.298 1.46 1.532 1.46 1.532s2.27.398 3.415.597c1.085.199 3.77.378 4.282 3.104 1.204 6.487.474 12.775.415 12.775-.849 6.129-5.901 5.83-5.901 5.83a4.1 4.1 0 01-2.428-.736zm4.54-13.034c-.652-.06-1.204.2-1.402.697-.04.1-.079.219-.059.278.02.06.06.08.099.1.237.12.631.179 1.204.239.572.06.967.1 1.223.06.04 0 .08-.02.119-.08.04-.06.02-.18.02-.28-.06-.536-.553-.934-1.204-1.014z' />
              </svg>
            </Fragment>
          ))}

          {/* <Bolt height={22} width={56} />
          <VercelFull height={22} width={84} />
          <SupabaseFull className='h-6' />
          <Hulu height={18} width={56} />
          <Spotify height={24} width={80} />
          <FirebaseFull height={24} width={80} />
          <Beacon height={24} width={80} />
          <Claude height={26} width={90} />
          <Figma height={24} width={24} />
          <Cisco height={30} width={60} /> */}
        </div>
      </div>
    </section>
  );
}
