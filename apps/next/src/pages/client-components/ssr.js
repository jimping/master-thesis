import PeopleListClient from '@/components/PeopleListClient';
import generatePeople from '@/utils/people';
import Head from 'next/head';
import VimeoVideoClient from '@/components/VimeoVideoClient';

export const getServerSideProps = (req) => {
  const count = req.query.c || 10;
  const people = generatePeople(count);

  return {
    props: {
      people,
    },
  };
};

export default function SSR({ people }) {
  return (
    <>
      <Head>
        <title>
          SSR (hybrid) -
          {' '}
          {people.length}
          {' '}
          Client Components
        </title>
      </Head>

      <VimeoVideoClient />
      <PeopleListClient people={people} />
    </>
  );
}
