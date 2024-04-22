import Hero from "@/Components/Hero";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from 'react-icons/fi'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <section className="ml-6">
        <h2> We meet at 6 am on sundays for a quick 6K at an easy pace</h2>
        <br/>
        <h3> <Link href = "https://chat.whatsapp.com/JUPYYEdNC8EF4NcfeMON0f"> <a className="inline-flex items-center text-blue-500 hover:text-blue-700">
        Click here <FiArrowUpRight className="ml-1" />
      </a></Link> to get updates for our sunday morning run</h3>
      </section>
    </main>
  );
}
