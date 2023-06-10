import PeopleListServer from '@/components/PeopleListServer';
import generatePeople from '@/utils/people';
import VimeoVideoServer from '@/components/VimeoVideoServer';

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
      <PeopleListServer people={people} />
    </>
  );
}
