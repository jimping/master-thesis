import PeopleListServer from '@/components/PeopleListServer';
import generatePeople from '@/utils/people';
import VimeoVideoServer from '@/components/VimeoVideoServer';
import SliderServer from '@/components/SliderServer';

export const revalidate = 5;

export async function generateMetadata({ searchParams }) {
  const c = searchParams.c || 10;

  return {
    title: `ISR - ${c} Server Components`,
  };
}

export default function ISR({ searchParams }) {
  const count = searchParams.c || 10;
  const people = generatePeople(count);

  return (
    <>
      <SliderServer items={people} />
      <PeopleListServer people={people} />
      <VimeoVideoServer />
    </>
  );
}
