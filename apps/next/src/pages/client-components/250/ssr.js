import PeopleListClient from '@/components/PeopleListClient';
import generatePeople from '@/utils/people';
import Head from 'next/head';
import VimeoVideoClient from '@/components/VimeoVideoClient';
import SliderClient from '@/components/SliderClient';

export const getServerSideProps = () => {
  const people = generatePeople(250);

  return {
    props: {
      people,
    },
  };
};

export default function SSR({ people }) {
  return (
    <>
      <SliderClient items={people} />
      <PeopleListClient people={people} />
      <VimeoVideoClient />
    </>
  );
}
