import PeopleListClient from '@/components/PeopleListClient';
import generatePeople from '@/utils/people';
import Head from 'next/head';
import VimeoVideoClient from '@/components/VimeoVideoClient';
import SliderClient from '@/components/SliderClient';

export const getStaticProps = () => {
  const slider = generatePeople(125);
  const list = generatePeople(124);

  return {
    props: {
      slider,
      list,
    },
    revalidate: 5, // In seconds
  };
};

export default function ISR({ slider, list }) {
  return (
    <>
      <SliderClient items={slider} />
      <PeopleListClient people={list} />
      <VimeoVideoClient />
    </>
  );
}
