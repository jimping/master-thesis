import PeopleListServer from '@/components/PeopleListServer';
import generatePeople from '@/utils/people';
import VimeoVideoServer from '@/components/VimeoVideoServer';
import SliderServer from '@/components/SliderServer';

export default function SSR() {
  const slider = generatePeople(500);
  const list = generatePeople(499);

  return (
    <>
      <SliderServer items={slider} />
      <PeopleListServer people={list} />
      <VimeoVideoServer />
    </>
  );
}
