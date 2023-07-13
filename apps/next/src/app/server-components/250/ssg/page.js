import PeopleListServer from '@/components/PeopleListServer';
import generatePeople from '@/utils/people';
import VimeoVideoServer from '@/components/VimeoVideoServer';
import SliderServer from '@/components/SliderServer';

export default function SSG() {
  const slider = generatePeople(125);
  const list = generatePeople(124);

  return (
    <>
      <SliderServer items={slider} />
      <PeopleListServer people={list} />
      <VimeoVideoServer />
    </>
  );
}
