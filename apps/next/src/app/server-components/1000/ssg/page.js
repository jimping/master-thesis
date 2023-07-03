import PeopleListServer from '@/components/PeopleListServer';
import generatePeople from '@/utils/people';
import VimeoVideoServer from '@/components/VimeoVideoServer';
import SliderServer from '@/components/SliderServer';

export default function SSG() {
  const people = generatePeople(1000);

  return (
    <>
      <SliderServer items={people} />
      <PeopleListServer people={people} />
      <VimeoVideoServer />
    </>
  );
}
