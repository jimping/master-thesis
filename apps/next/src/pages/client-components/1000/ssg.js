import PeopleListClient from '@/components/PeopleListClient';
import generatePeople from '@/utils/people';
import Head from 'next/head';
import VimeoVideoClient from '@/components/VimeoVideoClient';
import SliderClient from '@/components/SliderClient';

export const getStaticProps = () => {
  const slider = generatePeople(500);
  const list = generatePeople(499);

  return {
    props: {
      slider,
      list,
    },
  };
};

export default function SSG({ slider, list }) {
  return (
    <>
      <SliderClient items={slider} />
      <PeopleListClient people={list} />
      <VimeoVideoClient />
    </>
  );
}
