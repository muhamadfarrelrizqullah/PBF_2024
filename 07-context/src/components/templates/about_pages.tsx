import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function AboutPage() {
    return (
        <Section2 isFancy={true}>
            <Heading>About Me</Heading>
            <Post title="My name is Muhamad Farrel Rizqullah" body="NIM 2141720243"/>
        </Section2>
    );
}