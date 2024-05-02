import Heading from "../atoms/heading";
import Section from "../atoms/section";

// export default function MainPage() {
//     return (
//         <Section>
//             <Heading level={1}>Title</Heading>
//             <Section>
//                 <Heading level={2}>Heading</Heading>
//                 <Heading level={2}>Heading</Heading>
//                 <Heading level={2}>Heading</Heading>
//                 <Section>
//                     <Heading level={3}>Sub-heading</Heading>
//                     <Heading level={3}>Sub-heading</Heading>
//                     <Heading level={3}>Sub-heading</Heading>
//                     <Section>
//                         <Heading level={4}>Sub-sub-heading</Heading>
//                         <Heading level={4}>Sub-sub-heading</Heading>
//                         <Heading level={4}>Sub-sub-heading</Heading>
//                     </Section>
//                 </Section>
//             </Section>
//         </Section>
//     );
// }

export default function MainPage() {
    return (
        <Section>
            <Heading>Title</Heading>
            <Section>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Section>
                    <Heading>Sub-heading</Heading>
                    <Heading>Sub-heading</Heading>
                    <Heading>Sub-heading</Heading>
                    <Section>
                        <Heading>Sub-sub-heading</Heading>
                        <Heading>Sub-sub-heading</Heading>
                        <Heading>Sub-sub-heading</Heading>
                    </Section>
                </Section>
            </Section>
        </Section>
    );
}