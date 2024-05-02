"use client"

import MyApp from "@/components/atoms/myapp"
import ContactPage from "@/components/templates/contact_page"

export default function Contacts() {
    return <MyApp Component={ContactPage} pageProps={undefined}/>
}