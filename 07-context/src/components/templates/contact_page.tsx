import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function ContactPage() {
    return (
        <Section2 isFancy={true}>
            <Heading>My Contact</Heading>
            <Post title="Muhamad Farrel Rizqullah Contact" body="NIM: 2141720243 | Phone: 081234567899"/>
        </Section2>
    );
}