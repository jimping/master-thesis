import PeopleListClient from '@/components/PeopleListClient';
import generatePeople from '@/utils/people';
import Head from 'next/head';
import VimeoVideoClient from '@/components/VimeoVideoClient';
import SliderClient from '@/components/SliderClient';

export const getServerSideProps = () => {
  const slider = generatePeople(125);
  const list = generatePeople(124);

  return {
    props: {
      slider,
      list,
    },
  };
};

export default function SSR({ slider, list }) {
  return (
    <>
      <SliderClient items={slider} />
      <PeopleListClient people={list} />
      <VimeoVideoClient />
    </>
  );
}
