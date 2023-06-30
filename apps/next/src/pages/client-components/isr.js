import PeopleListClient from '@/components/PeopleListClient';
import generatePeople from '@/utils/people';
import Head from 'next/head';
import VimeoVideoClient from '@/components/VimeoVideoClient';
import SliderClient from '@/components/SliderClient';

export const getStaticProps = () => {
  const count = 10;
  const people = generatePeople(count);

  return {
    props: {
      people,
    },
    revalidate: 5, // In seconds
  };
};

export default function ISR({ people }) {
  return (
    <>
      <Head>
        <title>
          ISR -
          {' '}
          {people.length}
          {' '}
          Client Components
        </title>
      </Head>

      <SliderClient items={people} />
      <PeopleListClient people={people} />
      <VimeoVideoClient />
    </>
  );
}
