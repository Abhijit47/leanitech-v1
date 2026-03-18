import BackgroundMeteors from '@/components/backgrounds/background-meteors';
// import BackgroundPaths from '@/components/backgrounds/background-path';

export default function BlogsPage({
  params,
  searchParams,
}: PageProps<'/blogs'>) {
  const count = 50; // Adjust the number of meteors as needed
  return (
    <main className={'relative'}>
      <BackgroundMeteors count={count} key={count} />
      <section className={'h-dvh w-full'}>Blog hrero</section>
      <section className={'h-dvh w-full'}>Blogs</section>
    </main>
  );
}
