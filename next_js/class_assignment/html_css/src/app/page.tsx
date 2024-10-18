import Conrtact from "@/components/contact/Conrtact";
import Education from "@/components/education/Education";
import Exprience from "@/components/exprience/Exprience";
import Hero from "@/components/hero/Hero";
import Portfolio from "@/components/portfolio/Portfolio";
import Skills from "@/components/skills/Skills";



export default function Home() {
  return (
    <>
      <Hero /><Conrtact /><Skills /><Education /><Exprience /><Portfolio />

      <p>hello from next js</p>
    </>


  )
}
