import Footer from '@/components/shared/footer';
// import Header from '@/components/shared/navbar/header';
import HeaderNew from '@/components/shared/navbar/header-new';
import {
  LeftSidePattern,
  RightSidePattern,
} from '@/components/shared/side-patterns';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <Header /> */}
      <HeaderNew />
      <div
        className={
          'grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center [--gutter-width:2.5rem] md:-mx-4 md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)] lg:mx-0'
        }>
        <LeftSidePattern />
        {children}
        {/* <div className={'grid items-center justify-center'}>{children}</div> */}
        <RightSidePattern />
      </div>
      <Footer />
    </>
  );
}
