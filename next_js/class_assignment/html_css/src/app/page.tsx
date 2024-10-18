import Conrtact from "@/components/contact/Conrtact";
import Education from "@/components/education/Education";
import Exprience from "@/components/exprience/Exprience";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Portfolio from "@/components/portfolio/Portfolio";
import Skills from "@/components/skills/Skills";



export default function Home() {
  return (
    <>
      {/* header */}

      {/* hero */}
      <Hero />
      {/* contact */}
      <Conrtact />
      {/* skils */}
      <Skills />
      {/* education */}
      <Education />
      {/* experience */}
      <Exprience />
      {/* portfolio */}
      <Portfolio />
      {/* footer */}
      <p>hello from next js</p>
    </>


  )
}
