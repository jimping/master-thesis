import PeopleListServer from '@/components/PeopleListServer';
import generatePeople from '@/utils/people';
import VimeoVideoServer from '@/components/VimeoVideoServer';

export const revalidate = 3;

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
      <VimeoVideoServer />
      <PeopleListServer people={people} />
    </>
  );
}
