import Heading from "../atoms/heading";

import Section2 from "../atoms/section2";

import Post from "../atoms/post";

export default function RecentPosts() {
  return (
    <Section2 isFancy={true}>
      <Heading>Posting Terbaru</Heading>

      <Post title="Cita Rasa Lisbon" body="...those pasteis de nata!" />

      <Post title="Buenos Aires dalam irama tango" body="Saya menyukainya!" />

      <Post title="Muhamad Farrel Rizqullah" body="Halo guys stay fit" />
    </Section2>
  );
}
