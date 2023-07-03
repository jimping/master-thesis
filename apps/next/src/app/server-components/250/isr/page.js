import PeopleListServer from '@/components/PeopleListServer';
import generatePeople from '@/utils/people';
import VimeoVideoServer from '@/components/VimeoVideoServer';
import SliderServer from '@/components/SliderServer';

export const revalidate = 5;

export default function ISR() {
  const people = generatePeople(250);

  return (
    <>
      <SliderServer items={people} />
      <PeopleListServer people={people} />
      <VimeoVideoServer />
    </>
  );
}
