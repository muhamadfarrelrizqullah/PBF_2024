"use client";
import Tombol_1 from "@/components/button";
import { Tombol_2, Tombol_3 } from "@/components/button";
import Gallery from "@/components/gallery";
import Form from "@/components/form";
import { Form_2 } from "@/components/form";
import Accordion from "@/components/accordion";
import Messenger, { ContactList } from "@/components/chat";

export default function Home() {
return (
<>
    <div className="container mx-auto">
        <h2>Kuis Kota Mati</h2>
        <Tombol_1 />
        <Tombol_2 isiPesan="Ini pesan dari Presiden :)" namaTombol="Coba Pesan" />
        <hr>
        </hr>
    </div>
    <br />

    <div className="bg-red-300 container mx-auto" onClick={()=> alert('Parent Element : Div')}>
        <Tombol_3 isiPesan="Child Element : Tombol-1" namaTombol="Tombol-1" />
        <Tombol_3 isiPesan="Child Element : Tombol-2" namaTombol="Tombol-2" />
        <hr />
    </div>

    <br />

    <div className="container mx-auto">
        <Gallery />
        <hr />
    </div>

    <br />

    <div className="container mx-auto">
        <Form />
        <br />
        <hr />
        <Form_2 />
        <hr />
    </div>

    <br />

    <div className="container mx-auto">
        <Accordion />
    </div>

    <br />
    <div className="container mx-auto">
        <Messenger />
    </div>
    <br />
</>
);
}
