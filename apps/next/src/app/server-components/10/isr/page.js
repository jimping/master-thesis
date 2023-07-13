import PeopleListServer from '@/components/PeopleListServer';
import generatePeople from '@/utils/people';
import VimeoVideoServer from '@/components/VimeoVideoServer';
import SliderServer from '@/components/SliderServer';

export const revalidate = 5;

export default function ISR() {
  const slider = generatePeople(5);
  const list = generatePeople(4);

  return (
    <>
      <SliderServer items={slider} />
      <PeopleListServer people={list} />
      <VimeoVideoServer />
    </>
  );
}
