import PeopleListServer from '@/components/PeopleListServer';
import generatePeople from '@/utils/people';
import VimeoVideoServer from '@/components/VimeoVideoServer';
import SliderServer from '@/components/SliderServer';

export async function generateMetadata({ searchParams }) {
  const c = searchParams.c || 10;

  return {
    title: `SSG - ${c} Server Components`,
  };
}

export default function SSG({ searchParams }) {
  const count = searchParams.c || 10;
  const people = generatePeople(count);

  return (
    <>
      <VimeoVideoServer />
      <SliderServer items={people} />
      <PeopleListServer people={people} />
    </>
  );
}
